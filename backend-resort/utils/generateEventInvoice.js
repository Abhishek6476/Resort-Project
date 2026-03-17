// import PDFDocument from "pdfkit";
// import fs from "fs";
// import path from "path";

// export const generateEventInvoice = async (booking) => {
//   const invoiceDir = "uploads/event-invoices";

//   if (!fs.existsSync(invoiceDir)) {
//     fs.mkdirSync(invoiceDir, { recursive: true });
//   }

//   const fileName = `event_${booking._id}.pdf`;
//   const filePath = path.join(invoiceDir, fileName);

//   const doc = new PDFDocument({ margin: 50 });
//   doc.pipe(fs.createWriteStream(filePath));

//   // HEADER
//   doc.fontSize(22).text("Resort Event Invoice", { align: "center" });
//   doc.moveDown();

//   // CUSTOMER
//   doc.fontSize(12).text(`Name: ${booking.name || "N/A"}`);
//   doc.text(`Email: ${booking.email || "N/A"}`);
//   doc.text(`Phone: ${booking.phone || "N/A"}`);
//   doc.moveDown();

//   // EVENT DETAILS
//   doc.fontSize(14).text("Event Details", { underline: true });
//   doc.moveDown(0.5);

//   doc.fontSize(12).text(`Event Type: ${booking.eventType || "N/A"}`);
//   doc.text(
//     `Event Date: ${
//       booking.eventDate ? new Date(booking.eventDate).toDateString() : "N/A"
//     }`
//   );
//   doc.text(`Days: ${booking.days || 0}`);
//   doc.text(`Guests: ${booking.guests || 0}`);
//   doc.moveDown();

//   // PAYMENT DETAILS
//   doc.fontSize(14).text("Payment Details", { underline: true });
//   doc.moveDown(0.5);

//   // 🔑 Correct Paid / Remaining calculation
//   const paidAmount =
//     booking.paymentType === "full"
//       ? booking.totalAmount || 0
//       : Math.round((booking.totalAmount || 0) * 0.3);

//   const remainingAmount = (booking.totalAmount || 0) - paidAmount;

//   doc.fontSize(12).text(`Base Amount: ₹${booking.basePrice || 0}`);
//   doc.text(`GST (18%): ₹${booking.gst || 0}`);
//   doc.text(`Total Amount: ₹${booking.totalAmount || 0}`);
//   doc.text(`Paid Amount: ₹${paidAmount}`);
//   doc.text(`Remaining Amount: ₹${remainingAmount}`);

//   doc.moveDown(2);
//   doc.text("Thank you for choosing our resort 💙", { align: "center" });

//   doc.end();

//   return filePath;
// };




import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

export const generateEventInvoice = async (booking, options = {}) => {
  const invoiceDir = "uploads/event-invoices";
  if (!fs.existsSync(invoiceDir)) fs.mkdirSync(invoiceDir, { recursive: true });

  const filePath =
    options.filePath ||
    path.join(invoiceDir, `event_${booking._id || Date.now()}.pdf`);

  const doc = new PDFDocument({ margin: 40, size: "A4" });
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  // ================= HOTEL INFO (SAME AS BOOKING INVOICE) =================
  const hotel = options.hotelInfo || {
    name: "Paradise Resort",
    address: "H-44 BSI Business Park, Noida, Uttar Pradesh - 201309",
    phone: "+91 98765 43210",
    email: "resort@hotel.com",
  };

  const pageWidth = doc.page.width;
  const leftMargin = doc.page.margins.left;
  const rightMargin = doc.page.margins.right;
  const usableWidth = pageWidth - leftMargin - rightMargin;

  let cursorY = 40;

  // ================= HEADER =================
  doc
    .font("Helvetica-Bold")
    .fontSize(18)
    .fillColor("#000")
    .text(hotel.name, { align: "center" });

  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor("#444")
    .text(`Phone: ${hotel.phone}`, pageWidth - rightMargin - 160, 40, {
      width: 160,
      align: "right",
    })
    .text(`Email: ${hotel.email}`, pageWidth - rightMargin - 160, 55, {
      width: 160,
      align: "right",
    });

  cursorY += 85;

  // ================= TITLE =================
  doc
    .font("Helvetica-Bold")
    .fontSize(13)
    .fillColor("#000")
    .text("Event Booking Invoice", leftMargin, cursorY);

  cursorY += 25;

  // ================= PAYMENT CALCULATION (UNCHANGED LOGIC) =================
  const totalAmount = booking.totalAmount || 0;

  const paidAmount =
    booking.paymentType === "full"
      ? totalAmount
      : Math.round(totalAmount * 0.3);

  const remainingAmount = totalAmount - paidAmount;

  // ================= DETAILS TABLE =================
  const details = [
    ["Invoice ID", booking._id || `EVT-${Date.now()}`],
    ["Name", booking.name || "N/A"],
    ["Email", booking.email || "N/A"],
    ["Phone", booking.phone || "N/A"],
    ["Event Type", booking.eventType || "N/A"],
    [
      "Event Date",
      booking.eventDate
        ? new Date(booking.eventDate).toLocaleDateString("en-IN")
        : "N/A",
    ],
    ["Total Days", booking.days?.toString() || "0"],
    ["Guests", booking.guests?.toString() || "0"],
    ["Base Amount", `₹${booking.basePrice || 0}`],
    ["GST (18%)", `₹${booking.gst || 0}`],
    ["Total Amount", `₹${totalAmount}`],
    ["Paid Amount", `₹${paidAmount}`],
    ["Remaining Amount", `₹${remainingAmount}`],
    ["Payment Type", booking.paymentType || "N/A"],
    ["Payment Status", "Success"],
  ];

  const col1X = leftMargin;
  const col2X = leftMargin + 200;
  const rowHeight = 25;

  details.forEach(([label, value], i) => {
    const y = cursorY + i * rowHeight;

    // Row border
    doc
      .rect(leftMargin - 2, y - 2, usableWidth, rowHeight)
      .strokeColor("#E5E7EB")
      .lineWidth(0.5)
      .stroke();

    // Column divider
    doc
      .moveTo(col2X - 10, y - 2)
      .lineTo(col2X - 10, y + rowHeight - 2)
      .strokeColor("#E5E7EB")
      .stroke();

    // Label
    doc
      .font("Helvetica-Bold")
      .fontSize(10)
      .fillColor("#111")
      .text(label, col1X + 5, y + 6, { width: 180 });

    // Value
    doc
      .font("Helvetica")
      .fontSize(10)
      .fillColor("#333")
      .text(value, col2X, y + 6, {
        width: usableWidth - 210,
      });
  });

  cursorY += details.length * rowHeight + 25;

  // ================= THANK YOU =================
  doc
    .font("Helvetica-Oblique")
    .fontSize(10)
    .fillColor("#000")
    .text("Thank you for choosing Paradise Resort!", leftMargin, cursorY);

  cursorY += 15;
  doc.text("We look forward to hosting your event.", leftMargin, cursorY);

  // ================= FOOTER =================
  const footerY = doc.page.height - 70;

  doc
    .moveTo(leftMargin, footerY - 5)
    .lineTo(pageWidth - rightMargin, footerY - 5)
    .strokeColor("#E5E7EB")
    .stroke();

  const generatedDate = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor("#555")
    .text(`Address: ${hotel.address}`, leftMargin, footerY)
    .text(`Generated on: ${generatedDate}`, pageWidth - rightMargin - 220, footerY, {
      width: 220,
      align: "right",
    });

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on("finish", () => resolve(filePath));
    stream.on("error", reject);
  });
};