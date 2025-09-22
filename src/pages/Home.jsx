import Hero from "../components/Home/Hero";
import BookingForm from "../components/Home/BookingForm";
import AboutSection from "../components/Home/AboutSection";
import RoomsSection from "../components/Home/RoomsSection";
import Dining from "../components/Home/Dining";
import BanquetsSection from "../components/Home/BanquetsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <BookingForm />
      <AboutSection />
      <RoomsSection />
      <Dining />
      <BanquetsSection />
    </div>
  );
}
