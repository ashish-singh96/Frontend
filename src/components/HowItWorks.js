import React , {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
const HowItWorks = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
      easing: 'ease-in-out',
    });    
  }, []);

    return (
        <div className="container   mx-auto p-4">
        <div data-aos="zoom-in" className="flex flex-col   lg:flex-row w-full gap-8">
          {/* Step Process Section */}
          <div className="lg:w-1/2  space-y-8 ">
            {/* Step 1 */}
            <div className="relative mb-8 p-6 border border-gray-300 rounded-lg flex items-center space-x-4 bg-gray-50 hover:bg-[#0D363C] transition-all duration-500 ease-in-out group hover:shadow-xl hover:scale-[1.02]">
              {/* Step Number Circle */}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white border border-gray-500 rounded-full text-lg font-semibold text-gray-800 transition-transform duration-500 ease-in-out group-hover:scale-110">
                01
              </div>
              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-semibold text-black group-hover:text-white transition-all duration-500">
                  Sign up, It’s Free!
                </h3>
                <p className="text-gray-700 mt-1 group-hover:text-white transition-colors duration-500">
                  Our team will set up your account and help you build your job
                  listings using an easy-to-use web dashboard.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="relative mb-8 p-6 border border-gray-300 rounded-lg flex items-center space-x-4 bg-gray-50 hover:bg-[#0D363C] transition-all duration-500 ease-in-out group hover:shadow-xl hover:scale-[1.02]">
              {/* Step Number Circle */}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white border border-gray-500 rounded-full text-lg font-semibold text-gray-800 transition-transform duration-500 ease-in-out group-hover:scale-110">
                02
              </div>
              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-semibold text-black group-hover:text-white transition-all duration-500">
                  Find Best Deals and Invest
                </h3>
                <p className="text-gray-700 mt-1 group-hover:text-white transition-colors duration-500">
                  Create and Trade anywhere from 1-100% openings with just a few
                  clicks. Customize your own.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative p-6 border border-gray-300 rounded-lg flex items-center space-x-4 bg-gray-50 hover:bg-[#0D363C] transition-all duration-500 ease-in-out group hover:shadow-xl hover:scale-[1.02]">
              {/* Step Number Circle */}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white border border-gray-500 rounded-full text-lg font-semibold text-gray-800 transition-transform duration-500 ease-in-out group-hover:scale-110">
                03
              </div>
              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-semibold text-black group-hover:text-white transition-all duration-500">
                  Get Your Profit Back
                </h3>
                <p className="text-gray-700 mt-1 group-hover:text-white transition-colors duration-500">
                  View market, reviews, and rosters before forex arrive on the site,
                  and post reviews and pay, effortlessly.
                </p>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="../../Images/process-1.jpg"
              className="w-full h-auto rounded-lg shadow-md"
              alt="Process"
            />
          </div>
        </div>
      </div>
      
    )
}

export default HowItWorks