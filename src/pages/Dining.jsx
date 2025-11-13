// import React from "react";
// import {
//   FaUtensils,
//   FaConciergeBell,
//   FaCoffee,
//   FaMusic,
//   FaDoorClosed,
//   FaGlassCheers,
//   FaCocktail,
//   FaStar,
//   FaDrumstickBite,
//   FaIceCream,


// } from "react-icons/fa";

// const Dining = () => {
//   return (
//     <div className="w-full bg-white text-gray-900">
//       {/* ✅ Hero Banner */}
//       <div
//         className="relative h-[60vh] bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1600')",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/30"></div>

//         {/* Content */}
//         <div className="absolute inset-0 flex items-center justify-center text-center px-8 sm:px-16 z-10">
//           <div className="text-white">
//             <h1 className="text-5xl font-bold mb-4">Dining Experience</h1>
//             <p className="text-lg">
//               <span className="text-white">Home</span> &gt; Dining
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ✅ About Dining */}
//       <section className="py-12 px-8 text-justify max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold mb-4">Welcome to Our Dining</h2>
//         <p className="text-lg text-gray-700 leading-relaxed">
//           Savor an extraordinary culinary journey with our range of dining
//           options. Whether you’re enjoying an intimate dinner under the stars,
//           relaxing with freshly brewed coffee, or indulging in a lavish buffet,
//           our chefs promise to deliver flavors from around the world, crafted
//           with love and local ingredients.
//         </p>
//       </section>

//       {/*  Dining Options */}
//       <section className="py-12 px-8">
//         <h2 className="text-3xl font-bold text-center mb-10">Dining Options</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Main Restaurant",
//               img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
//               desc: "Fine dining experience with a curated multi-cuisine menu.",
//             },
//             {
//               title: "Rooftop Bar & Grill",
//               img: "https://images.unsplash.com/photo-1758551909205-fae9cb75cc2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhcnxlbnwwfHwyfHx8MA%3D%3D",
//               desc: "Enjoy cocktails, grills & BBQ with a panoramic rooftop view.",
//             },
//             {
//               title: "Coffee Lounge",
//               img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
//               desc: "Relax with aromatic coffees, teas & fresh pastries.",
//             },
//             {
//               title: "Buffet Hall",
//               img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
//               desc: "Lavish buffet spreads featuring global cuisines.",
//             },
//             {
//               title: "In-Room Dining",
//               img: "https://images.unsplash.com/photo-1755742319537-449f661a3190?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHJvb20lMjBkaW5uZXIlMjB0YWJsZXxlbnwwfHwyfHx8MA%3D%3D",
//               desc: "24/7 dining comfort served right in your room.",
//             },
//             {
//               title: "Private Dining",
//               img: "https://media.istockphoto.com/id/1135956400/photo/happy-family-eating-together-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=vfWt7e1bKodTZNP6gZT4yyvR1ykJawwn51W4SxyKoss=",
//               desc: "Exclusive dining spaces for family dinners & celebrations.",
//             },
//           ].map((dining, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
//             >
//               <img
//                 src={dining.img}
//                 alt={dining.title}
//                 className="h-48 w-full object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold">{dining.title}</h3>
//                 <p className="text-gray-600 mt-2">{dining.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/*  Dining Facilities */}
//       <section className="py-12 px-8 bg-gray-50">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Dining Facilities
//         </h2>
//         <div className="grid md:grid-cols-4 gap-6 text-center">
//           {[
//             {
//               title: "Multi-Cuisine Menu",
//               icon: (
//                 <FaUtensils className="w-6 h-6 text-gray-600 mx-auto mb-3" />
//               ),
//             },
//             {
//               title: "24/7 Room Service",
//               icon: (
//                 <FaConciergeBell className="w-6 h-6 text-gray-600 mx-auto mb-3" />
//               ),
//             },
//             {
//               title: "Buffet Breakfast",
//               icon: <FaCoffee className="w-6 h-6 text-gray-600 mx-auto mb-3" />,
//             },
//             {
//               title: "Live Music Nights",
//               icon: <FaMusic className="w-6 h-6 text-gray-600 mx-auto mb-3" />,
//             },
//             {
//               title: "Private Dining Rooms",
//               icon: (
//                 <FaDoorClosed className="w-6 h-6 text-gray-600 mx-auto mb-3" />
//               ),
//             },
//             {
//               title: "Rooftop Experience",
//               icon: (
//                 <FaGlassCheers className="w-6 h-6 text-gray-600 mx-auto mb-3" />
//               ),
//             },
//             {
//               title: "Cocktail Bar",
//               icon: (
//                 <FaCocktail className="w-6 h-6 text-gray-600 mx-auto mb-3" />
//               ),
//             },
//             {
//               title: "Chef’s Specials",
//               icon: <FaStar className="w-6 h-6 text-gray-600 mx-auto mb-3" />,
//             },
//           ].map((facility, i) => (
//             <div
//               key={i}
//               className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
//             >
//               {facility.icon}
//               <p className="font-semibold text-gray-700">{facility.title}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//       {/*  Food Gallery */}

//       <section className="py-12 px-8">
//         <h2 className="text-3xl font-bold text-center mb-10">Food Gallery</h2>
//         <div className="grid md:grid-cols-4 gap-4">
//           {[
//             "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800",
//             "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
//             "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800",
//             "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800",
//             "https://images.unsplash.com/photo-1758552013326-01b93dd12c3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ja3RhaWx8ZW58MHx8Mnx8fDA%3DSS",
//             "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800",
//             "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=800",
//             "https://images.unsplash.com/photo-1756521975279-872c96f60f8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvY2t0YWlsJTIwcGFydHl8ZW58MHx8Mnx8fDA%3D",
//           ].map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt="Food"
//               className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
//             />
//           ))}
//         </div>
//       </section>

//       {/* ✅ Menu Highlights */}
//       <section className="py-16 px-8 bg-gradient-to-b from-gray-50 to-white">
//         <h2 className="text-3xl font-bold text-center mb-4">Menu Highlights</h2>
//         <div className="w-20 h-1 bg-blue-800 mx-auto mb-10 rounded-full"></div>

//         <div className="grid md:grid-cols-4 gap-8 text-center">
//           <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
//             <FaUtensils className="w-10 h-10 text-gray-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold mb-3">Starters</h3>
//             <p className="text-gray-600">
//               Soups, Salads, Appetizers, Bruschetta
//             </p>
//           </div>

//           <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
//             <FaDrumstickBite className="w-10 h-10 text-gray-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold mb-3">Main Course</h3>
//             <p className="text-gray-600">
//               Indian, Continental, Chinese, BBQ Grills
//             </p>
//           </div>

//           <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
//             <FaIceCream className="w-10 h-10 text-gray-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold mb-3">Desserts</h3>
//             <p className="text-gray-600">
//               Cakes, Ice Creams, Pastries, Cheesecake
//             </p>
//           </div>

//           <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
//             <FaCocktail className="w-10 h-10 text-gray-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold mb-3">Beverages</h3>
//             <p className="text-gray-600">
//               Cocktails, Mocktails, Coffee, Tea, Juices
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ✅ Dining Hours */}
//       <section className="py-12 px-8 text-center">
//         <h2 className="text-3xl font-bold mb-6">Dining Hours</h2>
//         <div className="max-w-xl mx-auto text-lg space-y-3">
//           <p>
//             🍳 Breakfast: 7:00 AM – 10:30 AM (Main Restaurant & Buffet Hall)
//           </p>
//           <p>🥗 Lunch: 12:00 PM – 3:00 PM (Main Restaurant)</p>
//           <p>🍷 Rooftop Bar & Grill: 6:00 PM – 12:00 AM</p>
//           <p>🍽️ Dinner: 7:00 PM – 11:00 PM (All Restaurants)</p>
//           <p>🛎️ In-Room Dining: Available 24/7</p>
//         </div>
//       </section>

//       {/* ✅ Reservation Form */}
//       <section className="py-12 px-8 bg-gray-100 text-center">
//         <h2 className="text-3xl font-bold mb-6">Book Your Table</h2>
//         <form className="max-w-lg mx-auto grid gap-4">
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="border px-4 py-3 rounded-md"
//           />
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="border px-4 py-3 rounded-md"
//           />
//           <input type="date" className="border px-4 py-3 rounded-md" />
//           <input type="time" className="border px-4 py-3 rounded-md" />
//           <input
//             type="number"
//             placeholder="No. of Guests"
//             className="border px-4 py-3 rounded-md"
//           />
//           <button className="bg-blue-900 text-white py-3 rounded-md font-semibold hover:bg-blue-800">
//             Reserve Table
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Dining;





import React from "react";
import {
  FaUtensils,
  FaConciergeBell,
  FaCoffee,
  FaMusic,
  FaDoorClosed,
  FaGlassCheers,
  FaCocktail,
  FaStar,
  FaDrumstickBite,
  FaIceCream,
  FaWineGlassAlt,
} from "react-icons/fa";

const Dining = () => {
  const hours = [
    {
      icon: <FaCoffee className="text-gray-600 text-3xl" />,
      title: "Breakfast",
      time: "7:00 AM – 10:30 AM",
      place: "Main Restaurant & Buffet Hall",
    },
    {
      icon: <FaUtensils className="text-gray-600 text-3xl" />,
      title: "Lunch",
      time: "12:00 PM – 3:00 PM",
      place: "Main Restaurant",
    },
    {
      icon: <FaWineGlassAlt className="text-gray-600 text-3xl" />,
      title: "Rooftop Bar & Grill",
      time: "6:00 PM – 12:00 AM",
      place: "Rooftop",
    },
    {
      icon: <FaUtensils className="text-gray-600 text-3xl" />,
      title: "Dinner",
      time: "7:00 PM – 11:00 PM",
      place: "All Restaurants",
    },
    {
      icon: <FaConciergeBell className="text-gray-600 text-3xl" />,
      title: "In-Room Dining",
      time: "Available 24/7",
      place: "Room Service",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900">
      {/* ✅ Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1600')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-8 sm:px-16 z-10">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Dining Experience</h1>
            <p className="text-lg">
              <span className="text-white">Home</span> &gt; Dining
            </p>
          </div>
        </div>
      </div>

      {/* ✅ About Dining */}
      <section className="py-12 px-8 text-justify max-w-full mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">Welcome to Our Dining</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Savor an extraordinary culinary journey with our range of dining
          options. Whether you’re enjoying an intimate dinner under the stars,
          relaxing with freshly brewed coffee, or indulging in a lavish buffet,
          our chefs promise to deliver flavors from around the world, crafted
          with love and local ingredients.
        </p>
      </section>

      {/* ✅ Dining Options */}
      <section className="py-12 px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Dining Options</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Main Restaurant",
              img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
              desc: "Fine dining experience with a curated multi-cuisine menu.",
            },
            {
              title: "Rooftop Bar & Grill",
              img: "https://images.unsplash.com/photo-1758551909205-fae9cb75cc2e?w=600&auto=format&fit=crop&q=60",
              desc: "Enjoy cocktails, grills & BBQ with a panoramic rooftop view.",
            },
            {
              title: "Coffee Lounge",
              img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
              desc: "Relax with aromatic coffees, teas & fresh pastries.",
            },
            {
              title: "Buffet Hall",
              img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
              desc: "Lavish buffet spreads featuring global cuisines.",
            },
            {
              title: "In-Room Dining",
              img: "https://images.unsplash.com/photo-1755742319537-449f661a3190?w=600&auto=format&fit=crop&q=60",
              desc: "24/7 dining comfort served right in your room.",
            },
            {
              title: "Private Dining",
              img: "https://plus.unsplash.com/premium_photo-1724707432306-d0c30519e2db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              desc: "Exclusive dining spaces for family dinners & celebrations.",
            },
          ].map((dining, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={dining.img}
                alt={dining.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{dining.title}</h3>
                <p className="text-gray-600 mt-2">{dining.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Dining Facilities */}
      <section className="py-12 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Dining Facilities
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            {
              title: "Multi-Cuisine Menu",
              icon: (
                <FaUtensils className="w-6 h-6 text-gray-600 mx-auto mb-3" />
              ),
            },
            {
              title: "24/7 Room Service",
              icon: (
                <FaConciergeBell className="w-6 h-6 text-gray-600 mx-auto mb-3" />
              ),
            },
            {
              title: "Buffet Breakfast",
              icon: <FaCoffee className="w-6 h-6 text-gray-600 mx-auto mb-3" />,
            },
            {
              title: "Live Music Nights",
              icon: <FaMusic className="w-6 h-6 text-gray-600 mx-auto mb-3" />,
            },
            {
              title: "Private Dining Rooms",
              icon: (
                <FaDoorClosed className="w-6 h-6 text-gray-600 mx-auto mb-3" />
              ),
            },
            {
              title: "Rooftop Experience",
              icon: (
                <FaGlassCheers className="w-6 h-6 text-gray-600 mx-auto mb-3" />
              ),
            },
            {
              title: "Cocktail Bar",
              icon: (
                <FaCocktail className="w-6 h-6 text-gray-600 mx-auto mb-3" />
              ),
            },
            {
              title: "Chef’s Specials",
              icon: <FaStar className="w-6 h-6 text-gray-600 mx-auto mb-3" />,
            },
          ].map((facility, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
            >
              {facility.icon}
              <p className="font-semibold text-gray-700">{facility.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Food Gallery */}
      <section className="py-12 px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Food Gallery</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800",
            "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800",
            "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800",
            "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=800",
                "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800",
            "https://images.unsplash.com/photo-1756521975279-872c96f60f8b?w=600&auto=format&fit=crop&q=60",
            
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Food"
              className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>

      {/* ✅ Menu Highlights */}
      <section className="py-16 px-8 bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-3xl font-bold text-center mb-4">Menu Highlights</h2>
        <div className="w-20 h-1 bg-blue-800 mx-auto mb-10 rounded-full"></div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <FaUtensils className="w-10 h-10 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Starters</h3>
            <p className="text-gray-600">
              Soups, Salads, Appetizers, Bruschetta
            </p>
          </div>

          <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <FaDrumstickBite className="w-10 h-10 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Main Course</h3>
            <p className="text-gray-600">
              Indian, Continental, Chinese, BBQ Grills
            </p>
          </div>

          <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <FaIceCream className="w-10 h-10 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Desserts</h3>
            <p className="text-gray-600">
              Cakes, Ice Creams, Pastries, Cheesecake
            </p>
          </div>

          <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <FaCocktail className="w-10 h-10 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Beverages</h3>
            <p className="text-gray-600">
              Cocktails, Mocktails, Coffee, Tea, Juices
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Dining Hours (Updated with Cards & Icons) */}
     <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Dining Hours</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {hours.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-blue-800 font-medium">{item.time}</p>
            <p className="text-gray-600 text-sm">{item.place}</p>
          </div>
        ))}
      </div>
    </section>

      {/* ✅ Reservation Form */}
      <section className="py-12 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Book Your Table</h2>
        <form className="max-w-lg mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border px-4 py-3 rounded-md"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border px-4 py-3 rounded-md"
          />
          <input type="date" className="border px-4 py-3 rounded-md" />
          <input type="time" className="border px-4 py-3 rounded-md" />
          <input
            type="number"
            placeholder="No. of Guests"
            className="border px-4 py-3 rounded-md"
          />
          <button className="bg-blue-900 text-white py-3 rounded-md font-semibold hover:bg-blue-800">
            Reserve Table
          </button>
        </form>
      </section>
    </div>
  );
};

export default Dining;
