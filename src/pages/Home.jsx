// import Hero from "../components/Home/Hero";
// import BookingForm from "../components/Home/BookingForm";
// import AboutSection from "../components/Home/AboutSection";
// import RoomsSection from "../components/Home/RoomsSection";
// import Dining from "../components/Home/Dining";
// import BanquetsSection from "../components/Home/BanquetsSection";
// import FacilitiesSection from "../components/Home/FacilitiesSection";
// import CTASection from "../components/Home/CTASection";
// import ReviewsSection from "../components/Home/ReviewsSection";


// export default function Home() {
//   return (
//     <div>
//       <Hero />
//       <BookingForm />
//       <AboutSection />
//       <RoomsSection />
//       <Dining />
//       <BanquetsSection />
//       <FacilitiesSection/>
//       <ReviewsSection/>
//       <CTASection/>
//     </div>
//   );
// }



import { useState } from "react";
import Hero from "../components/Home/Hero";
import BookingForm from "../components/Home/BookingForm";
import AboutSection from "../components/Home/AboutSection";
import RoomsSection from "../components/Home/RoomsSection";
import Dining from "../components/Home/Dining";
import BanquetsSection from "../components/Home/BanquetsSection";
import FacilitiesSection from "../components/Home/FacilitiesSection";
import CTASection from "../components/Home/CTASection";
import ReviewsSection from "../components/Home/ReviewsSection";

import MultiStepPopup from "../components/PopupForm/MultiStepPopup";

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(true); // default open on homepage

  return (
    <div>
      <Hero />
      <BookingForm />
      <AboutSection />
      <RoomsSection />
      <Dining />
      <BanquetsSection />
      <FacilitiesSection />
      <ReviewsSection />
      <CTASection />

      {/* Popup */}
      <MultiStepPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
}
