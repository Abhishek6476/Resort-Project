export default function CTASection() {
  return (
    <section
      className="relative w-full h-[60vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/cta-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Plan Your Perfect Stay With Us
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          Experience luxury, comfort, and world-class hospitality at unbeatable
          prices. Book your dream getaway now!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/booking"
            className="bg-blue-800 text-white px-8 py-3 rounded-full hover:bg-blue-900 transition"
          >
            Book Now
          </a>
          <a
            href="/contact"
            className="bg-white text-blue-800 px-8 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
