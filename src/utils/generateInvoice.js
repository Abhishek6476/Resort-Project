
// 2nd working
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// export const generateRoomBookingInvoice = (booking, paymentResponse, options = {}) => {
//   const doc = new jsPDF({ unit: "pt", format: "A4" });

//   const hotel = options.hotelInfo || {
//     name: "Resort Hotel",
//     address: "H-15 BSI Business Park, Noida, Uttar Pradesh - 201307",
//     phone: "+91 98765 43210",
//     email: "resort@info.com",
//     gst: "GSTIN: 29ABCDE1234F1Z5",
//   };

//   const logoBase64 = options.logoBase64 || null;
//   const leftMargin = 40;
//   let cursorY = 40;

//   // ==== HEADER BAR ====
//   doc.setFillColor("#1E40AF");
//   doc.rect(0, 0, doc.internal.pageSize.getWidth(), 80, "F");

//   // Logo + Hotel Info
//   if (logoBase64) {
//     try {
//       doc.addImage(logoBase64, "PNG", leftMargin, 20, 60, 40);
//     } catch {
//       console.warn("Logo error, skipping...");
//     }
//   }

//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(22);
//   doc.setTextColor("#FFFFFF");
//   doc.text(hotel.name, leftMargin + 80, 45);

//   doc.setFontSize(10);
//   doc.setFont("helvetica", "normal");
//   doc.text(
//     `${hotel.address}\nPhone: ${hotel.phone} | Email: ${hotel.email}\n${hotel.gst}`,
//     leftMargin + 80,
//     60
//   );

//   // ==== INVOICE TITLE ====
//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(18);
//   doc.setTextColor("#1E40AF");
//   doc.text("ROOM BOOKING RECEIPT", 300, 110, { align: "center" });

//   // ==== INVOICE INFO ====
//   const invoiceNo = booking._id || `INV-${Date.now()}`;
//   const invoiceDate = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
//   doc.setFontSize(11);
//   doc.setFont("helvetica", "normal");
//   doc.setTextColor("#000000");
//   doc.text(`Invoice No: ${invoiceNo}`, leftMargin, 130);
//   doc.text(`Date: ${invoiceDate}`, 450, 130);

//   // ==== GUEST DETAILS BOX ====
//   cursorY = 160;
//   doc.setDrawColor("#1E40AF");
//   doc.setLineWidth(1);
//   doc.roundedRect(leftMargin - 5, cursorY - 20, 520, 70, 6, 6);

//   doc.setFont("helvetica", "bold");
//   doc.setTextColor("#1E40AF");
//   doc.text("Guest Details", leftMargin, cursorY);

//   doc.setFont("helvetica", "normal");
//   doc.setTextColor("#000");
//   doc.text(`Name: ${booking.name || ""}`, leftMargin, cursorY + 15);
//   doc.text(`Email: ${booking.email || ""}`, leftMargin, cursorY + 30);
//   doc.text(`Phone: ${booking.phone || ""}`, leftMargin, cursorY + 45);

//   // ==== ROOM DETAILS TABLE ====
//   cursorY += 90;
//   doc.autoTable({
//     startY: cursorY,
//     head: [["Room Type", "Rooms", "Guests", "Check-In", "Check-Out", "Price (₹)"]],
//     body: [
//       [
//         booking.roomType || "",
//         booking.roomCount || "",
//         booking.guestCount || "",
//         new Date(booking.checkIn).toLocaleString("en-IN"),
//         new Date(booking.checkOut).toLocaleString("en-IN"),
//         booking.totalPrice?.toLocaleString("en-IN") || "0",
//       ],
//     ],
//     theme: "grid",
//     styles: {
//       fontSize: 11,
//       cellPadding: 6,
//     },
//     headStyles: {
//       fillColor: "#1E40AF",
//       textColor: 255,
//       fontStyle: "bold",
//     },
//     alternateRowStyles: { fillColor: "#F8FAFC" },
//   });

//   cursorY = doc.lastAutoTable.finalY + 20;

//   // ==== PRICE SUMMARY ====
//   const total = parseFloat(booking.totalPrice || 0);
//   const gst = total * 0.18;
//   const grandTotal = total + gst;

//   doc.setFontSize(12);
//   doc.setFont("helvetica", "bold");
//   doc.setTextColor("#1E40AF");
//   doc.text("Payment Summary", leftMargin, cursorY);

//   doc.setDrawColor("#1E40AF");
//   doc.roundedRect(leftMargin - 5, cursorY + 5, 520, 70, 6, 6);

//   doc.setFont("helvetica", "normal");
//   doc.setTextColor("#000");
//   doc.text(`Subtotal: ₹${total.toLocaleString("en-IN")}`, 400, cursorY + 25);
//   doc.text(`GST (18%): ₹${gst.toLocaleString("en-IN")}`, 400, cursorY + 40);

//   doc.setFont("helvetica", "bold");
//   doc.setTextColor("#1E40AF");
//   doc.text(`Grand Total: ₹${grandTotal.toLocaleString("en-IN")}`, 400, cursorY + 60);

//   // ==== PAYMENT DETAILS ====
//   cursorY += 100;
//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(12);
//   doc.setTextColor("#1E40AF");
//   doc.text("Payment Details", leftMargin, cursorY);

//   doc.setFont("helvetica", "normal");
//   doc.setTextColor("#000");
//   doc.text(`Payment ID: ${paymentResponse?.razorpay_payment_id || "N/A"}`, leftMargin, cursorY + 20);
//   doc.text(`Payment Status: Success`, leftMargin, cursorY + 35);

//   // ==== FOOTER MESSAGE ====
//   cursorY += 80;
//   doc.setFontSize(10);
//   doc.setFont("helvetica", "italic");
//   doc.setTextColor("#555");
//   doc.text(
//     "Thank you for choosing Resort Hotel. We look forward to hosting you again!",
//     leftMargin,
//     cursorY
//   );
//   doc.text("For any assistance, contact our front desk or email us at resort@info.com.", leftMargin, cursorY + 15);

//   // Add subtle line on footer
//   doc.setDrawColor("#E5E7EB");
//   doc.line(leftMargin - 5, cursorY + 25, 550, cursorY + 25);

//   // ==== SAVE ====
//   doc.save(`Room_Booking_Receipt_${booking.name || "Guest"}.pdf`);
// };





//100 work code
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// export const generateRoomBookingInvoice = (booking, paymentResponse, options = {}) => {
//   const doc = new jsPDF({ unit: "pt", format: "a4" });

//   const hotel = options.hotelInfo || {
//     name: "Resort Hotel Booking Receipt",
//     address: "H-15 BSI Business Park, Noida, Uttar Pradesh - 201307",
//     phone: "+91 98765 43210",
//     email: "resort@info.com",
//   };

//   const leftMargin = 40;
//   let cursorY = 40;
//   const pageWidth = doc.internal.pageSize.getWidth();

//   // === RECEIPT TEXT (Top Left) ===
//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(13);
//   doc.setTextColor("#008000");
//   doc.text("RECEIPT", leftMargin, cursorY);

//   // === HOTEL TITLE (Center) ===
//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(16);
//   doc.setTextColor("#000000");
//   doc.text(hotel.name, pageWidth / 2, cursorY, { align: "center" });

//   // === PHONE + EMAIL (Top Right) ===
//   doc.setFont("helvetica", "normal");
//   doc.setFontSize(10);
//   const rightX = pageWidth - leftMargin;

//   // fix: show properly on right side
//   doc.text(`Phone: ${hotel.phone}`, rightX, cursorY - 5, { align: "right" });
//   doc.text(`Email: ${hotel.email}`, rightX, cursorY + 7, { align: "right" });

//   cursorY += 35;

//   // === BOOKING DETAILS TITLE ===
//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(12);
//   doc.setTextColor("#000000");
//   doc.text("Booking Details", leftMargin, cursorY);

//   cursorY += 10;

//   // === PRICE & GST Calculation ===
//   const roomPrice = parseFloat(booking.totalPrice || 0);
//   const gstRate = 0.18;
//   const gstAmount = roomPrice * gstRate;
//   const totalWithGST = roomPrice + gstAmount;

//   // === Booking Info Table ===
//   const bookingDetails = [
//     ["Booking ID", booking._id || `INV-${Date.now()}`],
//     ["Name", booking.name || ""],
//     ["Phone", booking.phone || ""],
//     ["Email", booking.email || ""],
//     ["Room Type", booking.roomType || ""],
//     ["Room(s)", booking.roomCount?.toString() || "1"],
//     ["Guest(s)", booking.guestCount?.toString() || "1"],
//     ["Check-In", new Date(booking.checkIn).toLocaleString("en-IN")],
//     ["Check-Out", new Date(booking.checkOut).toLocaleString("en-IN")],
//     ["Room Price", `₹ ${roomPrice.toLocaleString("en-IN")}`],
//     ["GST (18%)", `₹ ${gstAmount.toLocaleString("en-IN")}`],
//     ["Total Amount (incl. GST)", `₹ ${totalWithGST.toLocaleString("en-IN")}`],
//     ["Payment ID", paymentResponse?.razorpay_payment_id || "N/A"],
//     ["Payment Status", "Success"],
//   ];

//   doc.autoTable({
//     startY: cursorY + 5,
//     head: [],
//     body: bookingDetails,
//     theme: "grid",
//     margin: { left: leftMargin },
//     styles: {
//       fontSize: 10,
//       cellPadding: 6,
//       valign: "middle",
//     },
//     columnStyles: {
//       0: { fontStyle: "bold", cellWidth: 150 },
//       1: { cellWidth: 350 },
//     },
//   });

//   // === Thank You Note ===
//   const afterTableY = doc.lastAutoTable.finalY + 20;
//   doc.setFont("helvetica", "italic");
//   doc.setFontSize(10);
//   doc.setTextColor("#333");
//   doc.text("Thank you for booking with Resort Hotel!", leftMargin, afterTableY);
//   doc.text("We hope you enjoy your stay.", leftMargin, afterTableY + 12);

//   // === Footer Line ===
//   doc.setDrawColor("#E5E7EB");
//   doc.line(leftMargin, afterTableY + 25, pageWidth - leftMargin, afterTableY + 25);

//   // === Footer Info ===
//   const generatedDate = new Date().toLocaleString("en-IN", {
//     timeZone: "Asia/Kolkata",
//   });

//   doc.setFontSize(9);
//   doc.setFont("helvetica", "normal");
//   doc.setTextColor("#000000");

//   // Left: Address
//   doc.text(`Address: ${hotel.address}`, leftMargin, afterTableY + 40);

//   // Right: Generated Date
//   doc.text(`Generated on: ${generatedDate}`, pageWidth - leftMargin, afterTableY + 40, {
//     align: "right",
//   });

//   // === Save PDF ===
//   doc.save(`Hotel_Booking_Receipt_${booking.name || "Guest"}.pdf`);
// };





import jsPDF from "jspdf";
import "jspdf-autotable";

export const generateRoomBookingInvoice = (booking, paymentResponse, options = {}) => {
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  const hotel = options.hotelInfo || {
    name: "Resort Hotel Booking Receipt",
    address: "H-15 BSI Business Park, Noida, Uttar Pradesh - 201307",
    phone: "+91 98765 43210",
    email: "resort@info.com",
    // logo: "/mnt/data/9286cc3e-5822-434e-aed3-7c7a172ed1b3.png", // Your uploaded logo
  };

  const leftMargin = 40;
  let cursorY = 40;
  const pageWidth = doc.internal.pageSize.getWidth();

  // === HEADER LOGO & RECEIPT TEXT ===
  // if (hotel.logo) {
  //   doc.addImage(hotel.logo, "PNG", leftMargin, cursorY - 10, 60, 60); // logo size
  // }

  // doc.setFont("helvetica", "bold");
  // doc.setFontSize(16);
  // doc.setTextColor("#008000");
  // doc.text("RECEIPT", leftMargin + 70, cursorY + 20); // shift right of logo

  // === HOTEL TITLE (Center) ===
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor("#000000");
  doc.text(hotel.name, pageWidth / 2, cursorY + 20, { align: "center" });

  // === PHONE + EMAIL (Top Right) ===
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const rightX = pageWidth - leftMargin;
  doc.text(`Phone: ${hotel.phone}`, rightX, cursorY, { align: "right" });
  doc.text(`Email: ${hotel.email}`, rightX, cursorY + 12, { align: "right" });

  cursorY += 80;

  // === BOOKING DETAILS TITLE ===
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Booking Details", leftMargin, cursorY);

  cursorY += 10;

  // === PRICE & GST Calculation ===
  const roomPrice = parseFloat(booking.totalPrice || 0);
  const gstRate = 0.18;
  const gstAmount = roomPrice * gstRate;
  const totalWithGST = roomPrice + gstAmount;

  // === Booking Info Table ===
  const bookingDetails = [
    ["Booking ID", booking._id || `INV-${Date.now()}`],
    ["Name", booking.name || ""],
    ["Phone", booking.phone || ""],
    ["Email", booking.email || ""],
    ["Room Type", booking.roomType || ""],
    ["Room(s)", booking.roomCount?.toString() || "1"],
    ["Guest(s)", booking.guestCount?.toString() || "1"],
    ["Check-In", new Date(booking.checkIn).toLocaleString("en-IN")],
    ["Check-Out", new Date(booking.checkOut).toLocaleString("en-IN")],
    ["Room Price", `₹ ${roomPrice.toLocaleString("en-IN")}`],
    ["GST (18%)", `₹ ${gstAmount.toLocaleString("en-IN")}`],
    ["Total Amount", `₹ ${totalWithGST.toLocaleString("en-IN")}`],
    ["Payment ID", paymentResponse?.razorpay_payment_id || "N/A"],
    ["Payment Status", "Success"],
  ];

  doc.autoTable({
    startY: cursorY,
    head: [],
    body: bookingDetails,
    theme: "grid",
    margin: { left: leftMargin, right: leftMargin },
    styles: { fontSize: 10, cellPadding: 6, valign: "middle" },
    columnStyles: { 0: { fontStyle: "bold", cellWidth: 150 }, 1: { cellWidth: 350 } },
  });

  const afterTableY = doc.lastAutoTable.finalY + 20;

  // === Thank You Note ===
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  doc.text("Thank you for booking with Resort Hotel!", leftMargin, afterTableY);
  doc.text("We hope you enjoy your stay.", leftMargin, afterTableY + 12);

  // === FOOTER LINE ===
  const footerY = doc.internal.pageSize.getHeight() - 40;
  doc.setDrawColor("#E5E7EB");
  doc.line(leftMargin, footerY - 10, pageWidth - leftMargin, footerY - 10);

  // === Footer Info ===
  const generatedDate = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(`Address: ${hotel.address}`, leftMargin, footerY);
  doc.text(`Generated on: ${generatedDate}`, pageWidth - leftMargin, footerY, { align: "right" });

  // === Save PDF ===
  doc.save(`Hotel_Booking_Receipt_${booking.name || "Guest"}.pdf`);
};
