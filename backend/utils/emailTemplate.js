export const bookingEmailTemplate = (booking) => {
  return `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f7f7f7; padding: 30px;">
    <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      
      <div style="background-color: #003580; padding: 20px; text-align: center;">
        <h1 style="color: #fff; margin: 0;">Hotel Royal Stay</h1>
        <p style="color: #dcdcdc; margin: 5px 0 0;">Booking Confirmation</p>
      </div>

      <div style="padding: 25px;">
        <p style="font-size: 16px;">Dear <b>${booking.name || "Guest"}</b>,</p>
        <p>We’re delighted to confirm your booking with <b>Hotel Royal Stay</b>. Below are your booking details:</p>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td><b>Room Type:</b></td><td>${booking.roomType || "N/A"}</td></tr>
          <tr><td><b>Room Count:</b></td><td>${booking.roomCount || "1"}</td></tr>
          <tr><td><b>Guests:</b></td><td>${booking.guestCount || "1"}</td></tr>
          <tr><td><b>Check-In:</b></td><td>${booking.checkIn || "N/A"}</td></tr>
          <tr><td><b>Check-Out:</b></td><td>${booking.checkOut || "N/A"}</td></tr>
          <tr><td><b>Total Price:</b></td><td>₹${booking.totalPriceWithGST || booking.totalPrice || 0}</td></tr>
          <tr><td><b>Payment ID:</b></td><td>${booking.paymentId || "Pending"}</td></tr>
        </table>

        <p>Thank you for choosing our hotel. We look forward to providing you with an exceptional stay!</p>
        <p style="margin-top: 15px;">Warm regards,<br><b>Hotel Royal Stay Team</b></p>

        <hr style="margin-top: 30px;">
        <p style="font-size: 12px; color: #888;">This is an automated email. Please do not reply.</p>
      </div>
    </div>
  </div>
  `;
};
