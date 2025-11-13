export default function AboutHero() {
  return (
    <section
      className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/images/About.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative text-center text-white">
        {/* Page Title */}
        <h3 className="text-3xl md:text-5xl font-bold mb-4">About Us</h3>

        {/* Breadcrumb */}
        <ul className="flex justify-center space-x-3 text-sm md:text-base">
          <li>
            {/* <a
              href="/"
              className="hover:underline hover:text-gray-200 transition"
            >
              Home
            </a> */}
            Home
          </li>
          <li> &gt;</li>
          <li className="text-gray-200">About Us</li>
        </ul>
      </div>
    </section>
  );
}


