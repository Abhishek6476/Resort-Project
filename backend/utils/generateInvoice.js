// utils/generateInvoice.js
import PDFDocument from "pdfkit";
import fs from "fs";

export const generateRoomBookingInvoice = async (booking, options = {}) => {
  const filePath = options.filePath || `invoices/invoice_${booking._id}.pdf`;

  // Folder create agar exist nahi karta
  if (!fs.existsSync("invoices")) {
    fs.mkdirSync("invoices");
  }

  const doc = new PDFDocument();
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  // --- Header ---
  doc.fontSize(20).text("🏨 Hotel Booking Invoice", { align: "center" });
  doc.moveDown();

  // --- Booking Details ---
  doc.fontSize(12).text(`Booking ID: ${booking._id}`);
  doc.text(`Name: ${booking.name}`);
  doc.text(`Email: ${booking.email}`);
  doc.text(`Mobile: ${booking.mobile}`);
  doc.text(`Room Type: ${booking.roomType}`);
  doc.text(`Room Count: ${booking.roomCount}`);
  doc.text(`Guest Count: ${booking.guestCount}`);
  doc.text(`Check In: ${booking.checkIn}`);
  doc.text(`Check Out: ${booking.checkOut}`);
  doc.text(`Room Price: ₹${booking.totalPrice}`);
  doc.text(`Total (with GST): ₹${booking.totalWithGST}`);
  doc.text(`Payment ID: ${booking.paymentId}`);
  doc.text(`Payment Status: ${booking.paymentStatus}`);

  // --- Footer ---
  doc.moveDown();
  doc.text("Thank you for booking with our hotel!", { align: "center" });
  doc.text("We look forward to welcoming you soon.", { align: "center" });
  doc.end();

  return new Promise((resolve, reject) => {
    stream.on("finish", () => resolve(filePath));
    stream.on("error", reject);
  });
};
