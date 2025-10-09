
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
// import Engagement from './pages/Services/SocialEvent/Engagement';

// import Mehndi from "./pages/Services/SocialEvent/Mehndi";


// import AdminLogin from "./pages/Admin/AdminLogin";
// import Dashboard from "./components/Admin/Dashboard";
// import AdminLayout from "./layouts/AdminLayout";

// import ContactSidebar from "./components/Admin/ContactSidebar";



// function App() {
//   return (
//     <Router>
//       <MainLayout>
//         <Routes>
//           <Route path="/" element={<Home />} />
          
//           <Route path="/about" element={<About />} />
//           <Route path="/rooms" element={<Rooms />} />
//           <Route path="/dining" element={<Dining/>} />
//           <Route path="/career" element={<Career/>} />
//           <Route path="/gallery" element={<Gallery/>} />
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
//           <Route path="/Services/Social/Engagement" element={<Engagement />} />
         
//           <Route path="/Services/Social/Mehndi" element={<Mehndi />} />

//  {/* Admin Routes */}
//         <Route path="/admin/dashboard" element={<Dashboard/>}/>
//         <Route path="/admin-login" element={<AdminLogin />} />

      
//         <Route path="/admin/*" element={<AdminLayout />} />
//         <Route path="contactsidebar" element={<ContactSidebar />} />

//         {/* <Route path="/admin" element={<AdminLayout />}>
//   <Route path="dashboard" element={<Dashboard />} />
//   <Route path="contactsidebar" element={<ContactSidebar />} />
// </Route> */}


//         </Routes>
//       </MainLayout>

   
          

//     </Router>
//   );
// }

// export default App;


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





// function App() {
//   return (
//     <Router>
//       <MainLayout>
//         <Routes>
//           <Route path="/" element={<Home />} />
          
//           <Route path="/about" element={<About />} />
//           <Route path="/rooms" element={<Rooms />} />
//           <Route path="/dining" element={<Dining/>} />
//           <Route path="/career" element={<Career/>} />
//           <Route path="/gallery" element={<Gallery/>} />
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
//           <Route path="/Services/Social/Engagement" element={<Engagement />} />
         
//           <Route path="/Services/Social/Mehndi" element={<Mehndi />} />

//  {/* Admin Routes */}
//         {/* <Route path="/admin/dashboard" element={<Dashboard/>}/>
//         <Route path="/admin-login" element={<AdminLogin />} />

      
//         <Route path="/admin/*" element={<AdminLayout />} />
//         <Route path="contactsidebar" element={<ContactSidebar />} /> */}

//         </Routes>
//       </MainLayout>


   
          

//     </Router>
//   );
// }

// export default App;




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
    


    
          {/* Admin child routes */}
          
          {/* <Route path="rooms/all" element={<AllRooms />} />
          <Route path="rooms/add" element={<AddRooms />} /> */}
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

