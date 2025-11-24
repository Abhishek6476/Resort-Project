
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RoomsSection() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);

  // Fetch rooms from backend
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/rooms");
        setRooms(res.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    fetchRooms();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Rooms & Suites</h2>
          <p className="mt-3 text-gray-600">Choose from our range of luxurious rooms designed for your comfort.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room._id} className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
              <img 
                src={`http://localhost:5000${room.image}`} 
                alt={room.name} 
                className="w-full h-56 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{room.name}</h3>
                <p className="text-gray-600 font-semibold mb-3">{room.price}</p>
                <p className="text-gray-600 mb-4">{room.description}</p>

                <a
                  onClick={() => navigate("/booking", { state: { room } })}
                  className="inline-block bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-900 transition cursor-pointer"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
