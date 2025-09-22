// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { name: "Home", link: "/" },
//     { name: "About", link: "/about" },
//     { name: "Rooms", link: "/rooms" },
//     { name: "Dining", link: "/dining" },
//     { name: "Banquets", link: "/banquets" },
//     { name: "Weddings", link: "/weddings" },
//     { name: "Career", link: "/career" },
//     { name: "Gallery", link: "/gallery" },
//     { name: "Contact", link: "/contact" },
//   ];

//   return (
//     <nav className="bg-white shadow-md fixed w-full z-50">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <a href="/" className="text-2xl font-bold text-gray-800">
//           <span className="text-green-600">Resort</span>
//         </a>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           {menuItems.map((item, idx) => (
//             <a
//               key={idx}
//               href={item.link}
//               className="text-gray-700 hover:text-green-600 transition"
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//         {/* Book Now button */}
//         <div className="hidden md:block">
//           <a
//             href="/booking"
//             className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
//           >
//             Book Now
//           </a>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <div className="flex flex-col space-y-4 px-6 py-4">
//             {menuItems.map((item, idx) => (
//               <a
//                 key={idx}
//                 href={item.link}
//                 className="text-gray-700 hover:text-green-600 transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//             <a
//               href="/booking"
//               className="bg-green-600 text-white text-center px-5 py-2 rounded-full hover:bg-green-700 transition"
//             >
//               Book Now
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Rooms", link: "/rooms" },
    { name: "Dining", link: "/dining" },
    { name: "Banquets", link: "/banquets" },
    { name: "Weddings", link: "/weddings" },
    { name: "Career", link: "/career" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-gray-900" : "bg-black/40 text-white"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          <span className={`${scrolled ? "text-blue-800" : "text-white"}`}>
            Resort
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className={`transition ${
                scrolled
                  ? "text-gray-700 hover:text-blue-800"
                  : "text-white hover:text-blue-400"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Book Now button */}
        <div className="hidden md:block">
          <a
            href="/booking"
            className={`px-5 py-2 rounded-full transition ${
              scrolled
                ? "bg-blue-800 text-white hover:bg-blue-900"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden transition ${
            scrolled ? "bg-white text-black" : "bg-black/80 text-white"
          }`}
        >
          <div className="flex flex-col space-y-4 px-6 py-4">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="hover:text-blue-500 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/booking"
              className={`text-center px-5 py-2 rounded-full transition ${
                scrolled
                  ? "bg-blue-800 text-white hover:bg-blue-900"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
