
import React, { useEffect, useRef, useState } from "react";
import ModalForm from "../../components/ModalForm";
import {
  FaMusic,
  FaLightbulb,
  FaUtensils,
  FaUsers,
  FaCar,
  FaGift,
  FaConciergeBell,
  FaQuoteLeft,
  FaStar,
  FaUserCircle,
  FaHeart,
  FaGlassCheers,
  FaCamera,
  FaUserFriends,
} from "react-icons/fa";
import { MdOutlineEventAvailable, MdOutlineLocalFlorist } from "react-icons/md";
import { motion } from "framer-motion";



// Engagement images
import eng1 from "../../assets/eng1.jpg";
import eng2 from "../../assets/eng2.jpg";
import eng3 from "../../assets/eng3.jpg";
import eng4 from "../../assets/eng4.jpg";

// Mehndi images (also used as Haldi placeholders)
import mehndi1 from "../../assets/mehndi1.jpg";
import mehndi2 from "../../assets/mehndi2.jpg";
import mehndi3 from "../../assets/mehndi3.jpg";
import mehndi6 from "../../assets/mehndi6.jpg";

// Wedding / Reception images
import weddingHero from "../../assets/wedding1.jpg"; // hero for reception (you used this earlier)
import wedding from "../../assets/wedding.jpg";
import wedding2 from "../../assets/wedding2.jpg";
import wedding3 from "../../assets/wedding3.jpg";
import wedding4 from "../../assets/wedding4.jpg";

/* Package placeholders (you can replace with actual images) */
import pack1 from "../../assets/pack1.jpg";
import pack2 from "../../assets/pack2.jpg";



export default function SocialEvents() {

    //const [isOpen, setIsOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const gallery = [eng1, eng3, eng4, mehndi1, mehndi2, mehndi3, mehndi6, wedding, wedding2];
  
  
     const handleClose = () => setSelectedIndex(null);
    const handleNext = () => setSelectedIndex((prev) => (prev + 1) % gallery.length);
    const handlePrev = () => setSelectedIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  // Slider setup
  const slides = [
    {
      key: "ring",
      title: "Ring Ceremony",
      subtitle: "A romantic beginning  celebrate your promise in an intimate setting.",
      img: eng1,
    },
    {
      key: "mehndi",
      title: "Cocktail & Mehndi Night",
      subtitle: "Color, music and signature cocktails a lively pre-wedding celebration.",
      img: mehndi2,
    },
  
    {
      key: "reception",
      title: "Grand Reception Night",
      subtitle: "An elegant evening to celebrate love in style and grandeur.",
      img: weddingHero,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const autoRef = useRef(null);

  // Modals & gallery
  const [isOpen, setIsOpen] = useState(false); // Get quote modal
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImg, setGalleryImg] = useState(null);

  // active event for tabs (ring/mehndi/haldi/reception)
  const [activeEvent, setActiveEvent] = useState("ring");

  // Galleries (per event) - using given image names
  const galleries = {
    ring: [eng1, eng2, eng3, eng4],
    mehndi: [mehndi1, mehndi2, mehndi3, mehndi6],
    
    reception: [wedding, wedding2, wedding3, wedding4],
  };

  // Packages per event

 const packages = [
    {
      title: "Silver Package",
      img: pack1,
      features:["Music System", "Buffet Dinner", "Basic Decorations", "Catering for 100 Guests",  ], 
    },
    {
      title: "Gold Package",
      img: pack2,
      features: ["DJ & Music", "Candlelight Dinner", "Premium Decorations", "Catering for 200 Guests",  ],
       
    },
    {
      title: "Platinum Package",
      img: eng4,
      features:["Live Music & DJ", "Gourmet Dining", "Luxury Decorations", "Catering for 500 Guests",  ],
    },
  ];

  // Testimonials
  const testimonials = [
    { name: "Rohit & Priya", text: "The ring ceremony was magical — impeccable coordination!" },
    { name: "Ankit & Neha", text: "Cocktail & Mehndi Night had the best music and food!" },
    { name: "Rahul & Simran", text: "Turmeric ceremony was warm and beautifully organized." },
    { name: "Asha & Deep", text: "Grand Reception Night was nothing less than spectacular!" },
  ];

  // Timelines
  const timelines = {
    ring: [
      { step: "Arrival & Welcome", time: "3:00 PM", description: "Guests arrive and enjoy welcome drinks.", icon: "cheers" },
      { step: "Ring Exchange", time: "5:00 PM", description: "Formal ring exchange with family and close friends.", icon: "friends" },
      { step: "Photos", time: "6:00 PM", description: "Photos with family and couple portraits.", icon: "camera" },
      { step: "Dinner & Toasts", time: "8:00 PM", description: "Gourmet dinner and speeches.", icon: "dinner" },
    ],
    mehndi: [
      { step: "Welcome & Drinks", time: "5:00 PM", description: "Traditional welcome drinks and snacks.", icon: "cheers" },
      { step: "Mehndi Ceremony", time: "6:30 PM", description: "Henna artists create intricate patterns for the bride.", icon: "music" },
      { step: "Cocktail Hour", time: "9:00 PM", description: "Signature cocktails and live music.", icon: "friends" },
      { step: "Dinner", time: "11:00 PM", description: "Curated menu and desserts.", icon: "dinner" },
    ],
    haldi: [
      { step: "Rituals & Songs", time: "10:00 AM", description: "Traditional songs and application of turmeric.", icon: "music" },
      { step: "Fun Activities", time: "11:30 AM", description: "Family games and candid photography.", icon: "camera" },
      { step: "Lunch", time: "1:30 PM", description: "Comforting home-style lunch served.", icon: "dinner" },
    ],
    reception: [
      { step: "Guest Arrival", time: "6:00 PM", description: "Guests welcomed with red carpet & drinks.", icon: "cheers" },
      { step: "Grand Entry", time: "7:30 PM", description: "Couple enters to applause and lights.", icon: "friends" },
      { step: "Performances", time: "8:00 PM", description: "Live band / DJ and stage shows.", icon: "music" },
      { step: "Dinner & Dance", time: "9:30 PM", description: "Gourmet dinner and dancefloor opens.", icon: "dinner" },
    ],
  };

  // Slider auto advance
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % slides.length);
    }, 5000);
    return () => clearInterval(autoRef.current);
  }, []);

  // Helper: feature -> icon
  const getIcon = (feature) => {
    const f = feature.toLowerCase();
    if (f.includes("music") || f.includes("band")) return <FaMusic className="text-blue-600 mr-2" />;
    if (f.includes("cocktail") || f.includes("bar") || f.includes("drinks")) return <FaGlassCheers className="text-pink-600 mr-2" />;
    if (f.includes("dinner") || f.includes("buffet") || f.includes("catering")) return <FaUtensils className="text-green-600 mr-2" />;
    if (f.includes("photo") || f.includes("photography")) return <FaCamera className="text-yellow-600 mr-2" />;
    if (f.includes("guest") || f.includes("people")) return <FaUsers className="text-purple-600 mr-2" />;
    if (f.includes("decor") || f.includes("decoration") || f.includes("stage")) return <FaGift className="text-red-600 mr-2" />;
    if (f.includes("light") || f.includes("candle")) return <FaLightbulb className="text-orange-600 mr-2" />;
    return <FaHeart className="text-blue-500 mr-2" />;
  };

  const renderTimelineIcon = (iconKey) => {
    switch (iconKey) {
      case "cheers":
        return <FaGlassCheers />;
      case "camera":
        return <FaCamera />;
      case "dinner":
        return <FaUtensils />;
      case "music":
        return <FaMusic />;
      case "friends":
        return <FaUserFriends />;
      default:
        return <FaGlassCheers />;
    }
  };

  // // open gallery image
  const openGallery = (img) => {
    setGalleryImg(img);
    setGalleryOpen(true);
  };

  return (
    <div className="w-full text-gray-800">
      {/* HERO SLIDER */}
      <section className="relative w-full h-[65vh] md:h-[75vh] overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={s.key}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"}`}
            style={{ backgroundImage: `url(${s.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">{s.title}</h2>
              <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-3xl">{s.subtitle}</p>
            </div>
          </div>
        ))}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === currentSlide ? "bg-white scale-125" : "bg-white/40"}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-16 text-center">
          <h3 className="text-3xl font-bold">One Destination <span className="text-blue-800">for All Celebrations</span></h3>
          
            <p className="mt-4 text-gray-600 text-justify leading-relaxed">
            From intimate Ring Ceremonies to lively Cocktail & Mehndi nights, joyful Turmeric rituals, and grand reception nights we plan and execute every detail with creativity and care.
            Your journey of love begins with a beautiful Engagement celebration in our elegant hall  a perfect blend of charm, style, and unforgettable moments. Whether intimate or grand, every detail is specially crafted to reflect your love story.<br/>

          The Mehndi ceremony brings vibrant colors, joyful music, and cultural traditions as intricate henna symbolizes love and prosperity for the bride. The celebration continues into a chic Cocktail evening  lively lights, great music, and refreshing drinks to set the perfect party mood.<br/>

          Finally, tie the knot with a magical Wedding celebration where stunning décor, seamless arrangements, and a romantic atmosphere come together to make your big day truly memorable.
          </p>
        </div>
      </section>
      
{/* About + Gallery Section */} 
  <section className="py-2 bg-gray-50">
  <div className="container mx-auto px-12 text-center">
    
     <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"> Gallery </h2>
    {/* Full Width Gallery Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
      {gallery.map((img, idx) => (
        <div
          key={idx}
          className="overflow-hidden rounded-lg cursor-pointer"
          onClick={() => setSelectedIndex(idx)}
        >
          <img
            src={img}
            alt={`Engagement ${idx + 1}`}
            className="w-full h-56 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Modal */}
  {selectedIndex !== null && (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative max-w-full w-full px-4">
        <button
          onClick={handleClose}
          className="absolute top-2 right-6 text-white text-3xl font-bold hover:text-gray-300"
        >
          ✖
        </button>

        <img
          src={gallery[selectedIndex]}
          alt="Selected"
          className="w-full max-h-[85vh] object-contain rounded-lg shadow-lg"
        />

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold hover:text-gray-300"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold hover:text-gray-300"
        >
          ›
        </button>
      </div>
    </div>
  )}
</section>




  {/* Our Engagement Packages*/}
      
<section className="pt-16 px-6 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our <span className="text-blue-800"> Packages</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose a package that fits your dream wedding.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col items-center text-left"
            >
              <img
                src={pkg.img}
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-6">
                  {pkg.title}
                </h3>

                {/*  Features Centered with Icons */}
                <ul className="text-gray-800 flex flex-col items-left gap-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      {getIcon(feature)}
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> 

      {/* Amenities */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold">Amenities & <span className="text-blue-800"> Facilities</span></h3>
          <p className="max-w-2xl mx-auto mt-3 text-gray-600">Everything you need for a flawless ceremony catering, sound, lighting, parking and professional support.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { icon: <FaMusic className="text-3xl text-blue-800" />, title: "Live Music & DJ", desc: "Bands, DJ setups and MC." },
              { icon: <FaLightbulb className="text-3xl text-blue-800" />, title: "Lighting & Ambience", desc: "Custom lighting to match each event." },
              { icon: <FaUtensils className="text-3xl text-blue-800" />, title: "Catering", desc: "Multi-cuisine menus designed by chefs." },
              { icon: <FaUsers className="text-3xl text-blue-800" />, title: "Guest Management", desc: "Seating, invites and guest handling." },
              { icon: <FaCar className="text-3xl text-blue-800" />, title: "Parking", desc: "Secure on-site parking available." },
              { icon: <FaConciergeBell className="text-3xl text-blue-800" />, title: "Event Coordination", desc: "Dedicated coordinators for each event." },
            ].map((itm, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow p-6 text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-4">{itm.icon}</div>
                <h4 className="font-semibold">{itm.title}</h4>
                <p className="text-gray-600 mt-2">{itm.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-6">What Our<span className="text-blue-800"> Guests Say</span> </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow text-center">
              <div className="text-blue-500 text-5xl mb-3"><FaUserCircle /></div>
              <p className="italic text-gray-600">"{t.text}"</p>
              <div className="flex justify-center text-yellow-400 mt-3">
                {[...Array(5)].map((_, j) => <FaStar key={j} />)}
              </div>
              <h4 className="mt-3 font-semibold text-blue-800">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative h-[40vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${weddingHero})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Event?</h3>
          <p className="max-w-2xl mx-auto mb-6">Contact us for availability, custom packages and a personalized walkthrough.</p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => setIsOpen(true)} className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-md">Get a Quote</button>
            <a href="/contact" className="bg-white text-gray-800 px-6 py-3 rounded-md">Contact</a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && <ModalForm onClose={() => setIsOpen(false)} />}

      {/* Gallery modal */}
      {galleryOpen && galleryImg && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
          <button onClick={() => setGalleryOpen(false)} className="absolute top-6 right-6 text-white text-3xl">✖</button>
          <img src={galleryImg} alt="Large" className="max-w-4xl max-h-[80vh] object-contain rounded" />
        </div>
      )}
    </div>
  );
}
