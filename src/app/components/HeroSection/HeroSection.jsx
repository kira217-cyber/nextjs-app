// Slider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSection = () => {
  const slides = [
  {
    image: "https://i.ibb.co.com/tMgKFXYx/elegant-smartphone-composition.jpg",
    title: "Discover the New iPhone 15 Pro",
  },
  {
    image: "https://i.ibb.co.com/Q7C8NDfY/1135.jpg",
    title: "Powerful Performance with MacBook Pro",
  },
  {
    image: "https://i.ibb.co.com/FLqcLR48/hand-using-smartwatch-close-up.jpg",
    title: "Stay Connected with Apple Watch",
  },
];


  return (
    <div className="relative w-full h-[80vh] ">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Full overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Text container with solid semi-transparent background */}
              <div className="relative z-10 text-center text-white px-6 max-w-2xl bg-black/70 rounded-lg p-6 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;