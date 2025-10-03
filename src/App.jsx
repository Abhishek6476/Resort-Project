// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Rooms from "./pages/Rooms";
// import Contact from "./pages/Contact";
// import Reviews from "./pages/Reviews";
// import Reserve from "./pages/Reserve";
// import GrandBallRoom from "./pages/Services/Venue/GrandBallRoom";
// import EliteBallRoom from "./pages/Services/Venue/EliteBallRoom";
// import RoyalBallRoom from "./pages/Services/Venue/RoyalBallRoom";
// import CorporateMeetings from "./pages/Services/CorparoteEvent/CorporateMeetings";
// import Conference from "./pages/Services/CorparoteEvent/Conference";
// import Seminar from "./pages/Services/CorparoteEvent/Seminar";
// import Dining from "./pages/Dining";
// import Career from "./pages/Career";
// import Gallery from "./pages/Gallery";
// import WeddingReception from "./pages/Services/SocailEvent/WeddingReception";
// import BookingPage from "./pages/BookingPage";
// import BookingConfirmation from "./components/BookingConfirmation";



// function App() {
//   return (
//     <Router>
//       <MainLayout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/rooms" element={<Rooms />} />
//           <Route path="/dining" element={<Dining />} />
//           <Route path="/career" element={<Career />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/reviews" element={<Reviews />} />
//           <Route path="/reserve" element={<Reserve />} />
//           <Route path="/Services/venue/grand" element={<GrandBallRoom />} />
//           <Route path="/Services/venue/elite" element={<EliteBallRoom />} />
//           <Route path="/Services/venue/royal" element={<RoyalBallRoom />} />
//           <Route
//             path="/Services/corporate/meeting"
//             element={<CorporateMeetings />}
//           />
//           <Route
//             path="/Services/corporate/conference"
//             element={<Conference />}
//           />
//           <Route path="/Services/corporate/seminar" element={<Seminar />} />
//           <Route
//             path="/Services/social/reception"
//             element={<WeddingReception />}
//           />

//           <Route path="/booking" element={<BookingPage />} />
//           <Route path="/confirmation" element={<BookingConfirmation />} />
//         </Routes>
//       </MainLayout>
//     </Router>
//   );
// }

// export default App;





// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Rooms from "./pages/Rooms";
// import Contact from "./pages/Contact";
// import Reviews from "./pages/Reviews";
// import Reserve from "./pages/Reserve";
// import GrandBallRoom from "./pages/Services/Venue/GrandBallRoom";
// import EliteBallRoom from "./pages/Services/Venue/EliteBallRoom";
// import RoyalBallRoom from "./pages/Services/Venue/RoyalBallRoom";
// import CorporateMeetings from "./pages/Services/CorparoteEvent/CorporateMeetings";
// import Conference from "./pages/Services/CorparoteEvent/Conference";
// import Seminar from "./pages/Services/CorparoteEvent/Seminar";
// import Dining from "./pages/Dining";
// import Career from "./pages/Career";
// import Gallery from "./pages/Gallery";
// import WeddingReception from "./pages/Services/SocailEvent/WeddingReception";
// import Engagement from './pages/Services/SocailEvent/Engagement';
// import Mehndi from "./pages/Services/SocailEvent/Mehndi";
// import BookingPage from "./pages/BookingPage";
// import BookingConfirmation from "./components/BookingConfirmation";

// // Admin
// import AdminLogin from "./pages/Admin/AdminLogin";
// import AdminDashboard from "./pages/Admin/Dashboard"; 
// import ProtectedRoute from "./components/Admin/ProtectedRoute";
// import AdminLayout from "./layouts/AdminLayout";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes with Navbar + Footer */}
//         <Route
//           path="/*"
//           element={
//             <MainLayout>
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/rooms" element={<Rooms />} />
//                 <Route path="/dining" element={<Dining />} />
//                 <Route path="/career" element={<Career />} />
//                 <Route path="/gallery" element={<Gallery />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/reviews" element={<Reviews />} />
//                 <Route path="/reserve" element={<Reserve />} />
//                 <Route path="/Services/venue/grand" element={<GrandBallRoom />} />
//                 <Route path="/Services/venue/elite" element={<EliteBallRoom />} />
//                 <Route path="/Services/venue/royal" element={<RoyalBallRoom />} />
//                 <Route path="/Services/corporate/meeting" element={<CorporateMeetings />} />
//                 <Route path="/Services/corporate/conference" element={<Conference />} />
//                 <Route path="/Services/corporate/seminar" element={<Seminar />} />
//                 <Route path="/Services/social/reception" element={<WeddingReception />} />
//                 <Route path="/Services/social/Engagement" element={<Engagement />} />
//                 <Route path="/Services/social/Mehndi" element={<Mehndi />} />
//                 <Route path="/booking" element={<BookingPage />} />
//                 <Route path="/confirmation" element={<BookingConfirmation />} />
//               </Routes>
//             </MainLayout>
//           }
//         />

//         {/* Admin Routes */}
//           <Route path="/admin-login" element={<AdminLogin />} />
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





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
import Conference from "./pages/Services/CorparoteEvent/Conference";
import Seminar from "./pages/Services/CorparoteEvent/Seminar";
import Dining from "./pages/Dining";
import Career from "./pages/Career";
import Gallery from "./pages/Gallery";
import WeddingReception from "./pages/Services/SocailEvent/WeddingReception";
import Engagement from './pages/Services/SocailEvent/Engagement';
import Mehndi from "./pages/Services/SocailEvent/Mehndi";
import BookingPage from "./pages/BookingPage";
import BookingConfirmation from "./components/BookingConfirmation";

// Admin
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/Dashboard";
 
import ProtectedRoute from "./components/Admin/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import AllRooms from "./pages/Admin/Rooms/AllRooms";
import AddRooms from "./pages/Admin/Rooms/AddRooms";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes with Navbar + Footer */}
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/dining" element={<Dining />} />
                <Route path="/career" element={<Career />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/reserve" element={<Reserve />} />
                <Route path="/Services/venue/grand" element={<GrandBallRoom />} />
                <Route path="/Services/venue/elite" element={<EliteBallRoom />} />
                <Route path="/Services/venue/royal" element={<RoyalBallRoom />} />
                <Route path="/Services/corporate/meeting" element={<CorporateMeetings />} />
                <Route path="/Services/corporate/conference" element={<Conference />} />
                <Route path="/Services/corporate/seminar" element={<Seminar />} />
                <Route path="/Services/social/reception" element={<WeddingReception />} />
                <Route path="/Services/social/Engagement" element={<Engagement />} />
                <Route path="/Services/social/Mehndi" element={<Mehndi />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/confirmation" element={<BookingConfirmation />} />
              </Routes>
            </MainLayout>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* Admin child routes */}
          <Route index element={<AdminDashboard />} />
          <Route path="rooms/all" element={<AllRooms />} />
          <Route path="rooms/add" element={<AddRooms />} />
          {/* Future admin pages */}
          {/* <Route path="bookings" element={<BookingsPage />} /> */}
          {/* <Route path="rooms" element={<RoomsPage />} /> */}
          {/* <Route path="reviews" element={<ReviewsPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
