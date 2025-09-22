export default function AboutContent() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative">
          <img
            src="/images/about1.jpg" 
            alt="Resort view"
            className="rounded-2xl shadow-lg"
          />
          {/* Decorative Element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-800 rounded-2xl -z-10"></div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-blue-800">Story</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Since our inception, we have been dedicated to creating unforgettable
            experiences for our guests. With a perfect balance of luxury and
            nature, our resort has become a haven for families, business
            travelers, and event celebrations alike.
          </p>

          {/* Highlights */}
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-800 rounded-full mr-3"></span>
              Premium Rooms & Suites
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-800 rounded-full mr-3"></span>
              World-class Dining & Catering
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-800 rounded-full mr-3"></span>
              Banquets & Event Facilities
            </li>
          </ul>

          {/* CTA */}
          <a
            href="/facilities"
            className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition"
          >
            Explore Facilities
          </a>
        </div>
      </div>
    </section>
  );
}
