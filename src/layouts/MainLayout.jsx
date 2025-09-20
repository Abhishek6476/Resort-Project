import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-[70px]">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
