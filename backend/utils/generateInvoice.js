

import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

export const generateRoomBookingInvoice = async (booking, paymentResponse, options = {}) => {
  const folder = "invoices";
  if (!fs.existsSync(folder)) fs.mkdirSync(folder);

  const filePath = options.filePath || path.join(folder, `invoice_${booking._id || Date.now()}.pdf`);
  const doc = new PDFDocument({ margin: 50 });
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  // === Hotel Info ===
  const hotel = options.hotelInfo || {
    name: "🏨 Resort Hotel Booking Receipt",
    address: "H-15 BSI Business Park, Noida, Uttar Pradesh - 201307",
    phone: "+91 98765 43210",
    email: "resort@info.com",
  };

  // === Header ===
  doc.fontSize(20).fillColor("#000000").font("Helvetica-Bold").text(hotel.name, { align: "center" });
  doc.moveDown(0.5);
  doc.fontSize(10).fillColor("#444444").font("Helvetica")
     .text(`Phone: ${hotel.phone}`, { align: "center" })
     .text(`Email: ${hotel.email}`, { align: "center" });
  doc.moveDown(1);

  // === Booking Details Title ===
  doc.font("Helvetica-Bold").fontSize(14).fillColor("#000000").text("Booking Details", 50, doc.y);
  doc.moveDown(0.5);

  // === Booking Info Table Style ===
  const addRow = (label, value) => {
    doc.font("Helvetica-Bold").fillColor("#000000").text(`${label}:`, { continued: true });
    doc.font("Helvetica").fillColor("#333333").text(` ${value}`);
  };

  // === Price & GST ===
  const roomPrice = parseFloat(booking.totalPrice || 0);
  const gstRate = 0.18;
  const gstAmount = roomPrice * gstRate;
  const totalWithGST = roomPrice + gstAmount;

  // === Booking Info Rows ===
  addRow("Booking ID", booking._id || `INV-${Date.now()}`);
  addRow("Name", booking.name || "Guest");
  addRow("Phone", booking.phone || booking.mobile || "N/A");
  addRow("Email", booking.email || "N/A");
  addRow("Room Type", booking.roomType || "N/A");
  addRow("Rooms", booking.roomCount || 1);
  addRow("Guests", booking.guestCount || 1);
  addRow("Check-In", new Date(booking.checkIn).toLocaleString("en-IN"));
  addRow("Check-Out", new Date(booking.checkOut).toLocaleString("en-IN"));
  addRow("Room Price", `₹${roomPrice.toLocaleString("en-IN")}`);
  addRow("GST (18%)", `₹${gstAmount.toLocaleString("en-IN")}`);
  addRow("Total Amount", `₹${totalWithGST.toLocaleString("en-IN")}`);
  addRow("Payment ID", paymentResponse?.razorpay_payment_id || booking.paymentId || "N/A");
  addRow("Payment Status", booking.paymentStatus || "Success");

  doc.moveDown(2);
  doc.font("Helvetica-Oblique").fontSize(11).fillColor("#000000")
    .text("Thank you for booking with Resort Hotel!", { align: "center" });
  doc.text("We hope you enjoy your stay.", { align: "center" });

  // === Footer ===
  const footerY = doc.page.height - 80;
  doc.moveTo(50, footerY - 10).lineTo(doc.page.width - 50, footerY - 10).strokeColor("#CCCCCC").stroke();
  const generatedDate = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  doc.fontSize(9).fillColor("#555555").font("Helvetica")
     .text(`Address: ${hotel.address}`, 50, footerY)
     .text(`Generated on: ${generatedDate}`, doc.page.width - 50, footerY, { align: "right" });

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on("finish", () => resolve(filePath));
    stream.on("error", reject);
  });
};


//working but error check again code
// import PDFDocument from "pdfkit";
// import fs from "fs";
// import path from "path";

// /**
//  * Generate room booking invoice (backend version using PDFKit)
//  * Works fully in Node.js — used for sending via email
//  */
// export const generateRoomBookingInvoice = (booking, paymentResponse, options = {}) => {
//   const doc = new PDFDocument({ size: "A4", margin: 50 });

//   const hotel = options.hotelInfo || {
//     name: "Resort Hotel Booking Receipt",
//     address: "H-15 BSI Business Park, Noida, Uttar Pradesh - 201307",
//     phone: "+91 98765 43210",
//     email: "resort@info.com",
//   };

//   const outputDir = "./invoices";
//   if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

//   const filePath = path.join(
//     outputDir,
//     `Hotel_Booking_Receipt_${booking.name || "Guest"}.pdf`
//   );

//   const writeStream = fs.createWriteStream(filePath);
//   doc.pipe(writeStream);

//   // === HEADER ===
//   doc
//     .font("Helvetica-Bold")
//     .fontSize(18)
//     .fillColor("#000000")
//     .text(hotel.name, { align: "center" })
//     .moveDown(0.5);

//   doc
//     .font("Helvetica")
//     .fontSize(10)
//     .fillColor("#333")
//     .text(`Phone: ${hotel.phone}`, { align: "right" })
//     .text(`Email: ${hotel.email}`, { align: "right" })
//     .moveDown(1.5);

//   // === BOOKING DETAILS TITLE ===
//   doc.font("Helvetica-Bold").fontSize(13).fillColor("#000").text("Booking Details").moveDown(0.5);

//   const roomPrice = parseFloat(booking.totalPrice || 0);
//   const gstRate = 0.18;
//   const gstAmount = roomPrice * gstRate;
//   const totalWithGST = roomPrice + gstAmount;

//   const details = [
//     ["Booking ID", booking._id || `INV-${Date.now()}`],
//     ["Name", booking.name || ""],
//     ["Phone", booking.phone || ""],
//     ["Email", booking.email || ""],
//     ["Room Type", booking.roomType || ""],
//     ["Rooms", booking.roomCount?.toString() || "1"],
//     ["Guests", booking.guestCount?.toString() || "1"],
//     ["Check-In", new Date(booking.checkIn).toLocaleString("en-IN")],
//     ["Check-Out", new Date(booking.checkOut).toLocaleString("en-IN")],
//     ["Room Price", `Rs. ${roomPrice.toLocaleString("en-IN")}`],
//     ["GST (18%)", `Rs. ${gstAmount.toLocaleString("en-IN")}`],
//     ["Total Amount", `Rs. ${totalWithGST.toLocaleString("en-IN")}`],
//     ["Payment ID", paymentResponse?.razorpay_payment_id || "N/A"],
//     ["Payment Status", "Success"],
//   ];

//   // === TABLE ===
//   const startX = 60;
//   let startY = doc.y + 10;

//   details.forEach(([key, value], index) => {
//     const isEven = index % 2 === 0;
//     if (isEven) doc.rect(startX - 10, startY - 4, 480, 20).fill("#f8f9fb").fillColor("#000");
//     doc
//       .font("Helvetica-Bold")
//       .fontSize(10)
//       .text(key + ":", startX, startY, { continued: true })
//       .font("Helvetica")
//       .fontSize(10)
//       .text(" " + value);
//     startY += 20;
//   });

//   // === THANK YOU MESSAGE ===
//   doc.moveDown(1.5);
//   doc.font("Helvetica-Oblique").fontSize(11).fillColor("#333");
//   doc.text("Thank you for booking with Resort Hotel!");
//   doc.text("We hope you enjoy your stay.");

//   // === FOOTER ===
//   doc.moveDown(2);
//   doc.strokeColor("#aaaaaa").lineWidth(0.5).moveTo(50, doc.y).lineTo(550, doc.y).stroke();

//   doc.moveDown(1);
//   const generatedDate = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
//   doc.font("Helvetica").fontSize(9).fillColor("#444");
//   doc.text(`Address: ${hotel.address}`);
//   doc.text(`Generated on: ${generatedDate}`, { align: "right" });

//   doc.end();

//   // Return buffer after PDF is fully written
//   return new Promise((resolve, reject) => {
//     const chunks = [];
//     doc.on("data", (chunk) => chunks.push(chunk));
//     doc.on("end", () => resolve(Buffer.concat(chunks)));
//     doc.on("error", reject);
//   });
// };
