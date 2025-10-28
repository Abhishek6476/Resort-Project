

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
