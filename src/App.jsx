
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Dining from "./pages/Dining";
import Career from "./pages/Career";
import Gallery from "./pages/Gallery";
import Engagement from './pages/Services/SocialEvent/Engagement';
import Mehndi from "./pages/Services/SocialEvent/Mehndi";
import AdminLogin from "./pages/Admin/AdminLogin";
//import Dashboard from "./components/Admin/Dashboard";
import AdminLayout from "./layouts/AdminLayout";

import ContactSidebar from "./components/Admin/ContactSidebar";
import CareerData from "./components/Admin/CareerData";
import AllRooms from "./pages/Admin/Rooms/AllRooms";
// import AddRooms from "./pages/Admin/Rooms/AddRooms";
// import AllBookings from "./pages/Admin/Rooms/AllBookings";

import RoomBookings from "./components/Admin/RoomBookings";


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
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/dining" element={<Dining />} />
                <Route path="/career" element={<Career />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
               
                <Route path="/Services/social/Engagement" element={<Engagement />} />
                <Route path="/Services/social/Mehndi" element={<Mehndi />} />
               
              </Routes>
            </MainLayout>
          }
        />
      
         {/* Admin Login */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/*  Admin Panel */}
        <Route path="/admin/" element={<AdminLayout />} >
          {/* Default dashboard */}
          {/* <Route index element={<Dashboard />} /> */}
          
          <Route path="contactus" element={<ContactSidebar />} />

          <Route path="career" element={<CareerData />} />
         <Route path="rooms/all" element={<AllRooms />} />
          {/* <Route path="rooms/add" element={<AddRooms />} /> */}
          {/* <Route path="rooms/booking" element={<AllBookings />} /> */}
          {/* <Route path="room/booking" element={<RoomBookings />} /> */}
            <Route path="rooms/booking" element={<RoomBookings />} />

          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

