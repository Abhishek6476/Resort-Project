
export const bookingEmailTemplate = (booking) => {
  return `

      <h2 style="text-align: center; color: #2c3e50; margin-bottom: 5px;">Booking Confirmation</h2>
      <p style="text-align: center; color: #888; margin-top: 0;">Thank you for choosing <b>Hotel Resert Stay</b></p>

      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">

      <p style="font-size: 15px; color: #333;">Dear <b>${booking.name || "Guest"}</b>,</p>
      <p style="font-size: 15px; color: #444;">
        We are pleased to confirm your booking. Below are your stay details. A detailed invoice PDF has been attached for your reference.
      </p>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><b>Booking ID</b></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking._id || "N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><b>Name</b></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.name || "Guest"}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><b>Room Type</b></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.roomType || "N/A"}</td>
        </tr>
       
      
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><b>Check-In</b></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.checkIn || "N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><b>Check-Out</b></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.checkOut || "N/A"}</td>
        </tr>
        
       
      </table>

      <p style="font-size: 15px; color: #444;">
        We look forward to welcoming you. For any assistance, feel free to contact our support team.
      </p>

      <p style="margin-top: 20px; color: #555; font-size: 14px;">
        Warm regards,<br>
        <b>Hotel Royal Stay Team</b><br>
        📞 +91-11-35017951<br>
        ✉️ contact@hotelresertstay.com
      </p>

      <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;">
 
  `;
};

