// import jsPDF from "jspdf";
// import "jspdf-autotable";

import jsPDF from "jspdf";
import "jspdf-autotable";


export const generateRoomBookingInvoice = (booking, paymentResponse, options = {}) => {
  const doc = new jsPDF({ unit: "pt", format: "A4" });

  const hotel = options.hotelInfo || {
    name: "Grand Horizon Hotel",
    addressLine1: "123 MG Road, Bengaluru, Karnataka",
    addressLine2: "Near City Square, 560001",
    phone: "+91 98765 43210",
    email: "info@grandhorizon.example",
    gst: "GSTIN: 29ABCDE1234F1Z5",
  };

  const logoBase64 = options.logoBase64 || null;
  const leftMargin = 40;
  let cursorY = 40;

  if (logoBase64) {
    doc.addImage(logoBase64, "PNG", 460, cursorY, 90, 50);
  }

  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.setTextColor("#1E40AF");
  doc.text(hotel.name, leftMargin, cursorY + 25);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor("#000000");
  doc.text(hotel.addressLine1, leftMargin, cursorY + 45);
  doc.text(hotel.addressLine2, leftMargin, cursorY + 60);
  doc.text(`Phone: ${hotel.phone} | Email: ${hotel.email}`, leftMargin, cursorY + 75);
  doc.text(hotel.gst, leftMargin, cursorY + 90);

  const invoiceNo = booking._id || `INV-${Date.now()}`;
  const invoiceDate = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor("#1E40AF");
  doc.text("ROOM BOOKING INVOICE", 460, cursorY + 30, { align: "right" });
  doc.setFont("helvetica", "normal");
  doc.setTextColor("#000000");
  doc.text(`Invoice No: ${invoiceNo}`, 460, cursorY + 50, { align: "right" });
  doc.text(`Date: ${invoiceDate}`, 460, cursorY + 65, { align: "right" });

  cursorY += 110;

  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor("#1E40AF");
  doc.text("Guest Details", leftMargin, cursorY);
  cursorY += 15;
  doc.setFont("helvetica", "normal");
  doc.setTextColor("#000000");
  doc.text(`Name: ${booking.name}`, leftMargin, cursorY);
  doc.text(`Email: ${booking.email}`, leftMargin, cursorY + 15);
  doc.text(`Phone: ${booking.phone}`, leftMargin, cursorY + 30);
  cursorY += 50;

  const tableColumns = [
    { header: "Room Type", dataKey: "roomType" },
    { header: "Rooms", dataKey: "roomCount" },
    { header: "Guests", dataKey: "guestCount" },
    { header: "Check-In", dataKey: "checkIn" },
    { header: "Check-Out", dataKey: "checkOut" },
    { header: "Price (₹)", dataKey: "price" },
  ];

  const tableRows = [
    {
      roomType: booking.roomType,
      roomCount: booking.roomCount,
      guestCount: booking.guestCount,
      checkIn: new Date(booking.checkIn).toLocaleString(),
      checkOut: new Date(booking.checkOut).toLocaleString(),
      price: booking.totalPrice.toLocaleString("en-IN"),
    },
  ];

  doc.autoTable({
    startY: cursorY,
    head: [tableColumns.map(c => c.header)],
    body: tableRows.map(r => tableColumns.map(c => r[c.dataKey])),
    theme: "grid",
    styles: { fontSize: 10, cellPadding: 6 },
    headStyles: { fillColor: "#1E40AF", textColor: 255, fontStyle: "bold" },
    alternateRowStyles: { fillColor: "#f9f9f9" },
    tableLineWidth: 0.5,
    tableLineColor: "#000",
    didDrawPage: (data) => { cursorY = data.cursor.y; }
  });

  cursorY += 20;

  const gstRate = 0.18; // 18%
  const total = parseFloat(booking.totalPrice);
  const gstAmount = total * gstRate;
  const grandTotal = total + gstAmount;

  doc.setFont("helvetica", "normal");
  doc.text(`Subtotal: ₹${total.toLocaleString("en-IN")}`, 400, cursorY);
  cursorY += 15;
  doc.text(`GST (18%): ₹${gstAmount.toLocaleString("en-IN")}`, 400, cursorY);
  cursorY += 15;

  doc.setFont("helvetica", "bold");
  doc.setTextColor("#1E40AF");
  doc.text(`Grand Total: ₹${grandTotal.toLocaleString("en-IN")}`, 400, cursorY);
  cursorY += 40;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor("#1E40AF");
  doc.text("Payment Details", leftMargin, cursorY);
  cursorY += 15;
  doc.setFont("helvetica", "normal");
  doc.setTextColor("#000");
  doc.text(`Payment ID: ${paymentResponse.razorpay_payment_id}`, leftMargin, cursorY);
  doc.text(`Payment Status: Success`, leftMargin, cursorY + 15);

  cursorY += 50;

  doc.setFontSize(10);
  doc.setFont("helvetica", "italic");
  doc.setTextColor("#555");
  doc.text(
    "Thank you for booking with Grand Horizon Hotel! We look forward to hosting you.",
    leftMargin,
    cursorY
  );

  doc.save(`Room_Booking_Invoice_${booking.name}.pdf`);
};
