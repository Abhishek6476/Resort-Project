
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

export const generateRoomBookingInvoice = async (booking, paymentResponse, options = {}) => {
  const folder = "invoices";
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

  const filePath =
    options.filePath || path.join(folder, `invoice_${booking._id || Date.now()}.pdf`);

  const doc = new PDFDocument({
    margin: 40,
    size: "A4",
    bufferPages: false,
  });
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  const hotel = options.hotelInfo || {
    name: "Resort Hotel Booking Receipt",
    address: "H-15 BSI Business Park, Noida, Uttar Pradesh - 201307",
    phone: "+91 98765 43210",
    email: "resort@hotel.com",
  };

  const pageWidth = doc.page.width;
  const usableWidth = pageWidth - doc.page.margins.left - doc.page.margins.right;
  const leftMargin = doc.page.margins.left;
  const rightMargin = doc.page.margins.right;
  let cursorY = 40;

  // === HEADER ===
  doc
    .font("Helvetica-Bold")
    .fontSize(18)
    .fillColor("#000")
    .text(hotel.name, { align: "center" });

  // Phone and Email at top right
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

  // === SECTION TITLE ===
  doc
    .font("Helvetica-Bold")
    .fontSize(13)
    .fillColor("#000")
    .text("Booking Details", leftMargin, cursorY);
  cursorY += 10;

  // // Divider line

  cursorY += 15;

  // === PRICE & GST CALC ===
  const roomPrice = parseFloat(booking.totalPrice || 0);
  const gstRate = 0.18;
  const gstAmount = roomPrice * gstRate;
  const totalWithGST = roomPrice + gstAmount;

  // === BOOKING DETAILS ===
  const details = [
    ["Booking ID", booking._id || `INV-${Date.now()}`],
    ["Name", booking.name],
    ["Room Type", booking.roomType],
    ["Rooms", booking.roomCount?.toString() || "1"],
    ["Guests", booking.guestCount?.toString() || "1"],
    ["Check-In", new Date(booking.checkIn).toLocaleString("en-IN")],
    ["Check-Out", new Date(booking.checkOut).toLocaleString("en-IN")],
    ["Room Price", `Rs. ${roomPrice.toLocaleString("en-IN")}`],
    ["GST (18%)", `Rs. ${gstAmount.toLocaleString("en-IN")}`],
    ["Total Amount", `Rs. ${totalWithGST.toLocaleString("en-IN")}`],
    ["Payment ID", paymentResponse?.razorpay_payment_id || "N/A"],
    ["Payment Status", "Success"],
  ];

  const col1X = leftMargin;
  const col2X = leftMargin + 200;
  const tableWidth = usableWidth;
  const rowHeight = 25;

  // === TABLE BODY ===
  details.forEach(([label, value], i) => {
    const y = cursorY + i * rowHeight;

    // Outer border for each row
    doc
      .rect(leftMargin - 2, y - 2, tableWidth, rowHeight)
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
      .text(value, col2X, y + 6, { width: tableWidth - 210 });
  });

  cursorY += details.length * rowHeight + 25;

  // === THANK YOU SECTION ===
  doc
    .font("Helvetica-Oblique")
    .fontSize(10)
    .fillColor("#000")
    .text("Thank you for booking with Resort Hotel!", leftMargin, cursorY);
  cursorY += 15;
  doc.text("We hope you enjoy your stay.", leftMargin, cursorY);

  // === FOOTER ===
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
    .fontSize(9)
    .fillColor("#555")
    .font("Helvetica")
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



