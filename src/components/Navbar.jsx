// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Scroll listener
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menuItems = [
//     { name: "Home", link: "/" },
//     { name: "About", link: "/about" },
//     { name: "Rooms", link: "/rooms" },
//     { name: "Dining", link: "/dining" },
//     { name: "Banquets", link: "/banquets" },
//     { name: "Services", link: "/services" },
//     { name: "Career", link: "/career" },
//     { name: "Gallery", link: "/gallery" },
//     { name: "Contact", link: "/contact" },
//   ];

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-white shadow-md text-gray-900" : "bg-black/40 text-white"
//       }`}
//     >
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <a href="/" className="text-2xl font-bold">
//           <span className={`${scrolled ? "text-blue-800" : "text-white"}`}>
//             Resort
//           </span>
//         </a>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           {menuItems.map((item, idx) => (
//             <a
//               key={idx}
//               href={item.link}
//               className={`transition ${
//                 scrolled
//                   ? "text-gray-700 hover:text-blue-800"
//                   : "text-white hover:text-blue-400"
//               }`}
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//         {/* Book Now button */}
//         <div className="hidden md:block">
//           <a
//             href="/booking"
//             className={`px-5 py-2 rounded-full transition ${
//               scrolled
//                 ? "bg-blue-800 text-white hover:bg-blue-900"
//                 : "bg-white text-black hover:bg-gray-200"
//             }`}
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
//         <div
//           className={`md:hidden transition ${
//             scrolled ? "bg-white text-black" : "bg-black/80 text-white"
//           }`}
//         >
//           <div className="flex flex-col space-y-4 px-6 py-4">
//             {menuItems.map((item, idx) => (
//               <a
//                 key={idx}
//                 href={item.link}
//                 className="hover:text-blue-500 transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//             <a
//               href="/booking"
//               className={`text-center px-5 py-2 rounded-full transition ${
//                 scrolled
//                   ? "bg-blue-800 text-white hover:bg-blue-900"
//                   : "bg-white text-black hover:bg-gray-200"
//               }`}
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
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logoImg from "../assets/logo1.png";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Rooms", link: "/rooms" },
    { name: "Dining", link: "/dining" },
    {
      name: "Services",
      dropdown: [
        {
          name: "Venue",
          subDropdown: [
            { name: "Grand Ball Room", link: "/Services/venue/grand" },
            { name: "Elite Ball Room", link: "/Services/venue/elite" },
            { name: "Royal Ball Room", link: "/Services/venue/royal" },
            // { name: "Crystal Ball Room", link: "/Services/venue/crystal" },
            // { name: "Board Room", link: "/Services/venue/board" },
          ],
        },
        {
          name: "Corporate Event",
          subDropdown: [
            { name: "Meeting", link: "/Services/corporate/meeting" },
            { name: "Conference", link: "/Services/corporate/conference" },
            { name: "Seminar", link: "/Services/corporate/seminar" },
          ],
        },
        {
          name: "Social Event",
          subDropdown: [
            { name: "Engagement", link: "/Services/social/engagement" },
            { name: "Mehndi & Cocktail", link: "/Services/social/mehndi" },
            { name: "Wedding Reception", link: "/Services/social/reception" },
          ],
        },
      ],
    },
   
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
        <a href="/" className="flex items-center gap-2">
  <img
    src={logoImg}
    alt="Resort Logo"
    className="h-10 w-auto" 
  />
  <span className={`${scrolled ? "text-blue-800" : "text-white"} text-xl font-bold`}>
    Resort
  </span>
</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 relative">
          {menuItems.map((item, idx) =>
            item.dropdown ? (
              <div key={idx} className="relative group">
                {/* Parent link */}
                <span
                  className={`flex items-center gap-1 cursor-pointer transition ${
                    scrolled
                      ? "text-gray-700 hover:text-blue-800"
                      : "text-white hover:text-blue-400"
                  }`}
                >
                  {item.name} <ChevronDown size={16} />
                </span>

                {/* Dropdown */}
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-0 w-64 z-50">
                  <ul className="py-2">
                    {item.dropdown.map((drop, i) =>
                      drop.subDropdown ? (
                        <li key={i} className="relative group/sub">
                          <span className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-800 cursor-pointer">
                            {drop.name} <ChevronRight size={14} />
                          </span>
                          {/* Submenu */}
                          <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-lg rounded-md w-56 z-50">
                            <ul className="py-2">
                              {drop.subDropdown.map((sub, j) => (
                                <li key={j}>
                                  <a
                                    href={sub.link}
                                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-800"
                                  >
                                    {sub.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      ) : (
                        <li key={i}>
                          <a
                            href={drop.link}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-800"
                          >
                            {drop.name}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ) : (
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
            )
          )}
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
            {menuItems.map((item, idx) =>
              item.dropdown ? (
                <div key={idx}>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.name ? null : item.name
                      )
                    }
                    className="flex justify-between w-full"
                  >
                    {item.name} <ChevronDown size={16} />
                  </button>
                  {openDropdown === item.name && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((drop, i) =>
                        drop.subDropdown ? (
                          <div key={i}>
                            <button
                              onClick={() =>
                                setOpenSubmenu(
                                  openSubmenu === drop.name ? null : drop.name
                                )
                              }
                              className="flex justify-between w-full"
                            >
                              {drop.name} <ChevronRight size={14} />
                            </button>
                            {openSubmenu === drop.name && (
                              <div className="ml-4 mt-2 space-y-2">
                                {drop.subDropdown.map((sub, j) => (
                                  <a
                                    key={j}
                                    href={sub.link}
                                    className="block hover:text-blue-500"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {sub.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <a
                            key={i}
                            href={drop.link}
                            className="block hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                          >
                            {drop.name}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={idx}
                  href={item.link}
                  className="hover:text-blue-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              )
            )}
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


