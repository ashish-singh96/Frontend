import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurService = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
      easing: 'ease-in-out',
    });  
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-200">
        <div className="container px-4">
          <div className="text-center mb-6">
            {/* Section Icon */}
            <div className="inline-block pt-24" data-aos="zoom-in">
              <img
                src="https://forexbaazar.com/storage/app/public/Webassets/images/section-icon/1.png"
                alt="Umino's Section Icon"
                className="h-12 w-12 mx-auto"
              />
            </div>
            {/* Section Title */}
            <h3 className="text-3xl font-bold text-gray-800">Our Service</h3>
          </div>
          <div className="flex flex-wrap justify-center -mx-4">
            {/* Service Item 1 */}
            <div
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
                <span className="block">
                  <img
                    src="https://forexbaazar.com/storage/app/public/images/category/category-63daaa5cb2abc.jpg"
                    alt="Forex Video Course"
                    className="w-full h-48 object-cover"
                  />
                </span>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Forex Video Course
                  </h4>
                  <div className="mt-4">
                    <span
                      className="text-white bg-slate-700 py-2 px-4 rounded-full transition-colors"
                    >
                      Shop Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Service Item 2 */}
            <div
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
                <span className="block">
                  <img
                    src="https://forexbaazar.com/storage/app/public/images/category/category-63daaa5cb2abc.jpg"
                    alt="Forex Indicators"
                    className="w-full h-48 object-cover"
                  />
                </span>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Forex Indicators
                  </h4>
                  <div className="mt-4">
                    <span
                      className="bg-slate-700 text-white py-2 px-4 rounded-full transition-colors"
                    >
                      Shop Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Service Item 3 */}
            <div
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
                <a href="https://forexbaazar.com/shop/forex-robot" className="block">
                  <img
                    src="https://forexbaazar.com/storage/app/public/images/category/category-63daaa5cb2abc.jpg"
                    alt="Forex Robot"
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-gray-800">Forex Robot</h4>
                  <div className="mt-4">
                    <a
                      href="https://forexbaazar.com/shop/forex-robot"
                      className="bg-slate-700 text-white py-2 px-4 rounded-full transition-colors"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default OurService;
