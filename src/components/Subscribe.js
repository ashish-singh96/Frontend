import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Subscribe = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
      easing: 'ease-in-out',
    });    
  }, []);
  
  return (
    <div>
      <div   className="w-full bg-[#0D363C] py-12">
        <div data-aos="zoom-in" className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Subscribe for Latest Updates
            </h2>
            <p className="text-lg text-white mb-8">
              Stay informed with our latest news and updates. Enter your email below
              to subscribe.
            </p>
            <div className="flex justify-center items-center space-x-4">
              {/* Email Input */}
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-3 w-full md:w-1/2 lg:w-1/3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00C8BC] transition duration-300 ease-in-out"
              />
              {/* Subscribe Button */}
              <button className="px-6 py-3 text-lg font-semibold text-white bg-[#021a1e] rounded-lg  transition duration-300 ease-in-out shadow-lg transform hover:scale-105 focus:outline-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Subscribe