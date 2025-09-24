import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Reserve from "./pages/Reserve";
import GrandBallRoom from "./pages/Services/Venue/GrandBallRoom";
import EliteBallRoom from "./pages/Services/Venue/EliteBallRoom";
import RoyalBallRoom from "./pages/Services/Venue/RoyalBallRoom";
import CorporateMeetings from "./pages/Services/CorparoteEvent/CorporateMeetings";
function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/Services/venue/grand" element={<GrandBallRoom />} />
          <Route path="/Services/venue/elite" element={<EliteBallRoom />} />
          <Route path="/Services/venue/royal" element={<RoyalBallRoom />} />
          <Route path="/Services/corporate/meeting" element={<CorporateMeetings/>} />

         
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

