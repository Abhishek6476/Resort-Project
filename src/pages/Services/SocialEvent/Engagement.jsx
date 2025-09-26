
// 100 work

import { useState } from "react";
import ModalForm from "../../../components/ModalForm";
import { FaMusic, FaLightbulb, FaUtensils, FaUsers, FaCar, FaGift , FaConciergeBell,} from "react-icons/fa";
import { FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa";
import { FaGlassCheers, FaCamera, FaUserFriends } from "react-icons/fa";

// Hero Image
import heroImg from "../../../assets/eng1.jpg";

// Gallery Images
import img1 from "../../../assets/eng2.jpg";
import img2 from "../../../assets/eng3.jpg";
import img3 from "../../../assets/eng4.jpg";
import img4 from "../../../assets/eng5.jpg";
import img5 from "../../../assets/eng6.jpg";
import img6 from "../../../assets/eng7.jpg";

// Packages Images (Placeholder)
import pack1 from "../../../assets/pack1.jpg";
import pack2 from "../../../assets/pack2.jpg";
import pack3 from "../../../assets/pack3.jpg";

export default function Engagement() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const gallery = [img1, img2, pack3, img4, img5, img6];

  const packages = [
    {
      title: "Silver Package",
    
      features: ["Basic Decorations", "Catering for 50 Guests", "Music System"],
      img: pack1,
    },
    {
      title: "Gold Package",
    
      features: ["Premium Decorations", "Catering for 100 Guests", "DJ & Music"],
      img: pack2,
    },
    {
      title: "Platinum Package",
    
      features: ["Luxury Decorations", "Catering for 200 Guests", "Full Event Coordination"],
      img: img3,
    },
  ];

 

  const timeline = [
  {
    step: "Arrival & Welcome",
    time: "3:00 PM",
    description: "Guests arrive and enjoy welcome drinks at the lounge.",
    icon: "cheers",
  },
  {
    step: "Event Ceremony",
    time: "5:00 PM",
    description: "The formal engagement ceremony begins in the main hall.",
    icon: "friends",
  },
  {
    step: "Photo Session",
    time: "6:00 PM",
    description: "Photos with family, friends, and the lovely couple.",
    icon: "camera",
  },
 
  {
    step: "Music & Dance",
    time: "7:30 PM",
    description: "Live music and dancing to celebrate the joyous occasion.",
    icon: "music",
  },
   {
    step: "Dinner & Toasts",
    time: "9:00 PM",
    description: "A gourmet dinner is served with heartfelt toasts and speeches.",
    icon: "dinner",
  },
];


  const testimonials = [
    { name: "Rohit & Priya", text: "The engagement was magical! Everything perfect." },
    { name: "Ankit & Neha", text: "Beautiful venue and amazing service!" },
    { name: "Rahul & Simran", text: "Guests loved the setup and the food." },
  ];

  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Engagement Hall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold animate-fadeInDown">Engagement</h1>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl animate-fadeInUp">
            celebrate your engagement in style with our elegant and intimate venue
          </p>
        
        </div>
      </section>

 {/* About + Gallery Section */}
<section className="pt-16 bg-gray-50">
  <div className="container mx-auto px-6">
    <div className="flex flex-col lg:flex-row items-stretch gap-10">
      
      {/* About Section - narrower, clean */}
      <div className="lg:w-5/12 flex flex-col justify-between p-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-6 leading-tight">
            Engagement
          </h2>
          <p className="text-gray-700 text-justify leading-[28px] mb-5">
            Your engagement marks the beginning of a beautiful journey  and there's no better place to begin than in our elegantly designed engagement hall. With a perfect blend of charm and sophistication, we create unforgettable moments tailored to your love story.
          </p>
          <p className="text-gray-700 text-justify leading-[28px] mb-5">
            Whether you're planning an intimate gathering or a lavish celebration, our venue offers customizable décor, seamless coordination, and a romantic atmosphere that sets the tone for your big day. From floral arrangements to curated menus, our experienced team handles every detail with care.
          </p>
        </div>

        <div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-800 text-white text-base font-medium py-3 px-8 rounded-lg hover:bg-blue-900 transition duration-300"
          >
            Get Quote
          </button>
        </div>
      </div>

      {/* Gallery Section - wider */}
      <div className="lg:w-7/12 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {gallery.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img}
              alt={`Engagement Hall ${idx + 1}`}
              className="w-full h-60 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

    </div>
  </div>
</section>



      {/* Our Engagement Packages*/}
      <section className="pt-16 bg-gray-50">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
      Our Engagement Packages
    </h2>
    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
      Choose a package that fits your dream engagement.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {packages.map((pkg, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
        >
          <img
            src={pkg.img}
            alt={pkg.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-left">
            {/* Blue Title */}
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              {pkg.title}
            </h3>

            {/* Features List */}
            <ul className="text-gray-700 space-y-2">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
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

 {/* Event Timeline / Itinerary */}
<section className="pt-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-16 tracking-widest drop-shadow-md">
          Engagement Event Timeline
        </h2>

        <div className="relative">
          {/* Gradient vertical timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-500 rounded-full shadow-lg -translate-x-1/2"></div>

          <div className="space-y-1">
            {timeline.map((item, idx) => {
              // Choose icon based on step
              let Icon;
              switch (item.icon) {
                case "cheers":
                  Icon = FaGlassCheers;
                  break;
                case "camera":
                  Icon = FaCamera;
                  break;
                case "dinner":
                  Icon = FaUtensils;
                  break;
                case "music":
                  Icon = FaMusic;
                  break;
                case "friends":
                  Icon = FaUserFriends;
                  break;
                default:
                  Icon = FaGlassCheers;
              }

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center ${
                    idx % 2 === 0
                      ? "md:justify-start md:pl-16"
                      : "md:justify-end md:pr-16 text-right"
                  }`}
                >
                  {/* Timeline Dot with pulse */}
                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 bg-blue-800 rounded-full shadow-lg border-4 border-white
                    flex items-center justify-center text-white text-2xl
                    hover:scale-110 hover:shadow-blue-400 transition-transform duration-300
                    before:absolute before:inset-0 before:rounded-full before:bg-blue-300 before:opacity-50 before:animate-ping"
                    >
                      <Icon />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className="bg-white border border-blue-200 shadow-xl rounded-2xl p-8 max-w-sm w-80
                  ml-6 md:ml-12 md:mr-0
                  hover:shadow-blue-400 transition-shadow duration-300"
                  >
                    <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-3 tracking-wide">
                      <Icon className="text-blue-800" />
                      {item.step}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-1">{item.time}</p>
                    <p className="text-gray-900 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

      {/* Amenities / Features */}
      <section className="pt-16 container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Amenities & <span className="text-blue-800">Facilities</span></h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">All you need for a seamless and memorable engagement celebration.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <FaMusic className="text-3xl text-blue-800"/>, title: "Live Music & DJ", desc: "Set the perfect mood." },
            { icon: <FaLightbulb className="text-3xl text-blue-800"/>, title: "Ambient Lighting", desc: "Create a romantic atmosphere." },
            { icon: <FaUtensils className="text-3xl text-blue-800"/>, title: "Catering Services", desc: "Delicious cuisines for your guests." },
            { icon: <FaUsers className="text-3xl text-blue-800"/>, title: "Private Lounges", desc: "Comfortable spaces for the couple and family." },
            { icon: <FaCar className="text-3xl text-blue-800"/>, title: "Parking", desc: "Safe & convenient parking." },
            { icon: <FaGift className="text-3xl text-blue-800"/>, title: "Event Coordination", desc: "Professional support for a smooth celebration." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

     
  
   {/* Why Choose Us Section */}
<section className="pt-16 container mx-auto px-6 lg:px-12">
  {/* Section Heading */}
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
      Why Choose <span className="text-blue-800">Our Hall</span>
    </h2>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
      Make your engagement truly unforgettable with our elegant venue
      and top-notch amenities designed to impress.
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {[
      {
        icon: <FaGift className="text-3xl text-white" />,
        title: "Romantic Ambiance",
        desc: "Elegant décor perfect for engagement celebrations.",
      },
      {
        icon: <FaCar className="text-3xl text-white" />,
        title: "Spacious Parking",
        desc: "Convenient and secure parking for your guests.",
      },
      {
        icon: <FaUsers className="text-3xl text-white" />,
        title: "Event Support",
        desc: "Professional coordination for a seamless experience.",
      },
      {
        icon: <FaLightbulb className="text-3xl text-white" />,
        title: "Custom Lighting",
        desc: "Create the perfect atmosphere with dynamic lighting.",
      },
      {
        icon: <FaMusic className="text-3xl text-white" />,
        title: "Live Music Ready",
        desc: "Acoustic-ready space for bands or DJs to perform.",
      },
      {
        icon: <FaConciergeBell className="text-3xl text-white" />,
        title: "In-House Catering",
        desc: "Delicious menus crafted by expert chefs for your guests.",
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300"
      >
        {/* Icon */}
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 mb-5 shadow-md">
          {item.icon}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
      </div>
    ))}
  </div>
</section>


 {/* { Review} */}
     <section className="py-16 container mx-auto px-6">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
    What Our Guests Say
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {testimonials.map((test, idx) => (
      <div
        key={idx}
        className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500"
      >
        {/* 👤 Customer Icon */}
        <div className="text-blue-500 text-6xl mb-4">
          <FaUserCircle className="mx-auto" />
        </div>
        

        {/* 💬 Quote Icon */}
        <div className="text-blue-400 text-2xl mb-3">
          <FaQuoteLeft className="mx-auto" />
        </div>

        {/* 📝 Testimonial Text */}
        <p className="text-gray-600 italic mb-4">"{test.text}"</p>

        {/* ⭐ Star Rating */}
        <div className="flex justify-center text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* 🙍 Customer Name */}
        <h4 className="font-semibold text-blue-800">{test.name}</h4>
      </div>
    ))}
  </div>
</section>


      {/* Modal Form */}
      {isOpen && <ModalForm onClose={() => setIsOpen(false)} />}

      {/* Image Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Enlarged"
            className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}

