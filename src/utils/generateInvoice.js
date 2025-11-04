
import jsPDF from "jspdf";
import "jspdf-autotable";

export const generateRoomBookingInvoice = (booking, paymentResponse, options = {}) => {
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  const hotel = options.hotelInfo || {
    name: "Resort Hotel Booking Receipt",
    address: "H-15 BSI Business Park, Noida, Uttar Pradesh - 201307",
    phone: "+91 98765 43210",
    email: "resort@hotel.com",
    
  };

  const leftMargin = 40;
  let cursorY = 40;
  const pageWidth = doc.internal.pageSize.getWidth();

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
