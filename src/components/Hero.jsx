import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function Hero() {
  const slides = [
    {
      image: "/images/slider-3.jpg",
      title: "Explore & Enjoy With City Park Resort",
    },
    {
      image: "/images/slider-3.jpg",
      title: "Luxury Banquets for Every Need",
    },
    {
      image: "/images/slider-3.jpg",
      title: "Resort for Corporate",
    },
  ];

  return (
    <section className="w-full h-[80vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Caption */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white text-center animate-fadeIn">
                  {slide.title}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </section>
  );
}


