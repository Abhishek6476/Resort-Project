

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function Hero() {
  const slides = [
    { image: "/images/slider1.jpg", title: "Explore & Enjoy With Resort" },
    { image: "/images/slider2.jpg", title: "Luxury Banquets for Every Need" },
    { image: "/images/slider3.jpg", title: "Resort for Corporate" },
  ];

  return (
    <section className="w-full min-h-[80vh] md:h-screen relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        className="absolute inset-0 h-full w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full min-h-[80vh]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover absolute top-0 left-0"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
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
