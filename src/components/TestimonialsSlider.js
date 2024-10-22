import React, {useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from "swiper/modules";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const TestimonialsSlider = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
      easing: 'ease-in-out',
    });    
  }, []);

  const testimonials = [
    {
      id: 1,
      text: "The forex class at Traderoom provided me with the tools to diversify my investments and secure substantial gains.",
      name: "David Miller",
      profession: "Professional Day Trader",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      id: 2,
      text: "The crypto trading course at Traderoom is a must for anyone looking to make serious gains. My portfolio has never looked better!",
      name: "James Smith",
      profession: "Crypto Trader",
      avatar: "https://randomuser.me/api/portraits/men/20.jpg"
    },
    {
      id: 3,
      text: "I've taken several courses before, but none compare to the quality and effectiveness of Traderoom's stock trading class.",
      name: "Ava Thompson",
      profession: "Stock Investor",
      avatar: "https://randomuser.me/api/portraits/women/30.jpg"
    },
    // Add more testimonials as needed...
  ];

  return (
    <section  data-aos="zoom-in" className="bg-[#0D363C] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">
          What Our Members Are Saying
        </h2>
        <p className="text-center text-white mb-8">(674,029 reviews of Traderoom Online)</p>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="h-auto"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto flex items-center space-x-6">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div>
                  <p className="text-xl italic text-gray-800 mb-4">"{testimonial.text}"</p>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.profession}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
