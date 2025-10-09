// import React, { useEffect, useState } from "react";

// const RoomBookings = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/bookings")
//       .then((res) => res.json())
//       .then((data) => setBookings(data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">All Room Bookings</h2>
//       <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
//         <thead className="bg-blue-800 text-white">
//           <tr>
//             <th className="p-2 border">Name</th>
//             {/* <th className="p-2 border">Email</th> */}
//             <th className="p-2 border">Room Type</th>
//             <th className="p-2 border">Rooms</th>
//             <th className="p-2 border">Guests</th>
//             {/* <th className="p-2 border">Check-in</th>
//             <th className="p-2 border">Check-out</th> */}
//             <th className="p-2 border">Total Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((b) => (
//             <tr key={b._id} className="border text-center hover:bg-gray-100">
//               <td className="p-2">{b.name}</td>
//               <td className="p-2">{b.email}</td>
//               <td className="p-2">{b.roomType}</td>
//               <td className="p-2">{b.roomCount}</td>
//               <td className="p-2">{b.guestCount}</td>
//               <td className="p-2">{b.checkIn}</td>
//               <td className="p-2">{b.checkOut}</td>
//               <td className="p-2 font-semibold text-green-700">
//                 ₹{b.totalPrice?.toLocaleString("en-IN")}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RoomBookings;


import React, { useEffect, useState } from "react";

const RoomBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Fetch all bookings from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Room Bookings</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Room Type</th>
              <th className="p-2 border">Rooms</th>
              <th className="p-2 border">Guests</th>
              <th className="p-2 border">Total Price</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.length > 0 ? (
              bookings.map((b) => (
                <tr key={b._id} className="border text-center hover:bg-gray-100">
                  <td className="p-2">{b.name}</td>
                  <td className="p-2">{b.roomType}</td>
                  <td className="p-2">{b.roomCount}</td>
                  <td className="p-2">{b.guestCount}</td>
                  <td className="p-2 font-semibold text-green-700">
                    ₹{b.totalPrice?.toLocaleString("en-IN")}
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => setSelectedBooking(b)}
                      className="bg-blue-700 hover:bg-blue-900 text-white px-3 py-1 rounded-md text-sm"
                    >
                      View More
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for details */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
            <h3 className="text-xl font-bold mb-3 text-blue-800">
              Booking Details
            </h3>

            <div className="space-y-2 text-gray-700">
              <p><strong>Name:</strong> {selectedBooking.name}</p>
              <p><strong>Email:</strong> {selectedBooking.email}</p>
              <p><strong>Mobile No:</strong> {selectedBooking.phone}</p>
              <p><strong>Room Type:</strong> {selectedBooking.roomType}</p>
              <p><strong>Rooms:</strong> {selectedBooking.roomCount}</p>
              <p><strong>Guests:</strong> {selectedBooking.guestCount}</p>
              <p><strong>Message:</strong> {selectedBooking.message || "N/A"}</p>
              <p>
                <strong>Check-In:</strong>{" "}
                {new Date(selectedBooking.checkIn).toLocaleString()}
              </p>
              <p>
                <strong>Check-Out:</strong>{" "}
                {new Date(selectedBooking.checkOut).toLocaleString()}
              </p>
              <p className="font-semibold text-green-700">
                <strong>Total Price:</strong> ₹
                {selectedBooking.totalPrice?.toLocaleString("en-IN")}
              </p>
            </div>

            <button
              onClick={() => setSelectedBooking(null)}
              className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomBookings;
