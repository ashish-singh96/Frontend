import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css"; // Make sure the CSS is imported
import "@glidejs/glide/dist/css/glide.theme.min.css"; // Optional, but recommended for default styles
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Banner = () => {

  useEffect(() => {
    const slider = new Glide(".glide-06", {
      type: "carousel",
      focusAt: "center",
      perView: 1,
      autoplay: 3000, // Autoplay slides every 3 seconds
      animationDuration: 700,
      gap: 0,
      breakpoints: {
        1024: {
          perView: 1,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
      easing: 'ease-in-out', // smoother animation
    });
  }, []);

  return (
    <div className="glide-06 top-[5rem] relative w-full overflow-hidden rounded bg-white shadow-xl shadow-slate-200">
      {/* Slides */}
      <div className="glide__track overflow-hidden" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide relative" key="slide-1">
            <img
              src="/Images/banner-1.jpg"
              className="m-auto h-[500px] w-full max-w-full object-cover" // Increased height to 500px
              alt="Banner 1"
            />
            <div
              data-aos="fade-up-right"
              className="absolute top-1/3 left-[1rem] md:left-[2rem] hidden sm:block space-y-4 w3-container w3-center animate-slideDown"
            >
              <strong className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold p-4 md:p-6 bg-black/40 backdrop-blur-sm shadow-lg rounded-lg">
                Trading for Anyone,<br />Anywhere, Anytime.
              </strong>
              <p
                data-aos="fade-up-left"
                className="text-white text-sm md:text-lg lg:text-xl p-2 md:p-4 max-w-xs md:max-w-lg leading-relaxed bg-black/40 backdrop-blur-sm shadow-lg rounded-lg"
              >
                Trade over 1000 Instruments. Forex, CFDs on Stock Indices, Commodities, Stocks, Metals, and Energies.
              </p>
            </div>
          </li>

          <li className="glide__slide relative" key="slide-2">
            <img
              src="/Images/banner-2.jpg"
              className="m-auto h-[500px] w-full max-w-full object-cover" // Increased height to 500px
              alt="Banner 2"
            />
            <div
              data-aos="zoom-in"
              className="absolute top-1/3 left-[1rem] md:left-[4rem] space-y-4 w3-container w3-center animate-slideDown"
            >
              <strong className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold p-4 md:p-6 bg-black/40 backdrop-blur-sm shadow-lg rounded-lg">
                Trading for Anyone,<br />Anywhere, Anytime.
              </strong>
              <p className="text-white text-sm md:text-lg lg:text-xl p-2 md:p-4 max-w-xs md:max-w-lg leading-relaxed bg-black/40 backdrop-blur-sm shadow-lg rounded-lg">
                Trade over 1000 Instruments. Forex, CFDs on Stock Indices, Commodities, Stocks, Metals, and Energies.
              </p>
            </div>
          </li>

          <li className="glide__slide relative" key="slide-3">
            <img
              src="/Images/banner-3.jpg"
              className="m-auto h-[500px] w-full max-w-full object-cover" // Increased height to 500px
              alt="Banner 3"
            />
            <div
              data-aos="zoom-in"
              className="absolute top-1/3 left-[1rem] md:left-[4rem] space-y-4 w3-container w3-center animate-slideDown"
            >
              <strong className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold p-4 md:p-6 bg-black/40 backdrop-blur-sm shadow-lg rounded-lg">
                Trading for Anyone,<br />Anywhere, Anytime.
              </strong>
              <p className="text-white text-sm md:text-lg lg:text-xl p-2 md:p-4 max-w-xs md:max-w-lg leading-relaxed bg-black/40 backdrop-blur-sm shadow-lg rounded-lg">
                Trade over 1000 Instruments. Forex, CFDs on Stock Indices, Commodities, Stocks, Metals, and Energies.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
