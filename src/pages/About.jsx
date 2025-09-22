// export default function About() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative h-[60vh] bg-gray-800 text-white">
//         <img
//           src="/src/assets/About.jpg"
//           alt="About CityPark Resort"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50"></div>
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//           <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
//           <p className="mt-4 text-lg md:text-xl max-w-2xl">
//             Where Comfort Meets Luxury
//           </p>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="py-16 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
//         <img
//           src="/src/assets/bout.jpg"
//           alt="Our Story"
//           className="rounded-2xl shadow-lg"
//         />
//         <div>
//           <h2 className="text-3xl font-bold mb-4">Our Story</h2>
//           <p className="text-gray-600 leading-relaxed">
//             CityPark Resort started with a dream to redefine luxury hospitality.
//             From intimate weddings to grand corporate events, we’ve been
//             crafting unforgettable experiences for our guests.
//           </p>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
//             <p className="text-gray-600">
//               To provide world-class hospitality with personalized service and
//               unmatched comfort.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
//             <p className="text-gray-600">
//               To be recognized as the leading luxury resort brand known for
//               excellence and unforgettable experiences.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 max-w-7xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="p-6 bg-white rounded-2xl shadow-md">
//             <h4 className="text-xl font-semibold mb-2">Prime Location</h4>
//             <p className="text-gray-600">Easily accessible and well-connected.</p>
//           </div>
//           <div className="p-6 bg-white rounded-2xl shadow-md">
//             <h4 className="text-xl font-semibold mb-2">Luxury Stays</h4>
//             <p className="text-gray-600">
//               Spacious rooms designed for ultimate comfort.
//             </p>
//           </div>
//           <div className="p-6 bg-white rounded-2xl shadow-md">
//             <h4 className="text-xl font-semibold mb-2">World-Class Dining</h4>
//             <p className="text-gray-600">
//               Multiple restaurants serving global cuisines.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Highlight Section */}
//       <section className="py-16 bg-blue-800 text-white text-center">
//         <h2 className="text-3xl font-bold mb-4">Over 5000+ Happy Guests</h2>
//         <p className="mb-6">
//           From family vacations to destination weddings, our guests love the
//           CityPark experience.
//         </p>
//         <a
//           href="/rooms"
//           className="inline-block bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200"
//         >
//           Book Your Stay
//         </a>
//       </section>
//     </div>
//   );
// }


import AboutHero from "../components/About/HeroSection";
import OurStory from "../components/About/OurStory";
import MissionVision from "../components/About/MissionVision";
import HighlightSection from "../components/About/HighlightSection";

export default function About() {
  return (
    <div>
      <AboutHero />
      <OurStory/>
      <MissionVision/>
      <HighlightSection/>
    </div>
  );
}
