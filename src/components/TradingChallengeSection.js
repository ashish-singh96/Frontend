import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const TradingChallengeSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
      easing: 'ease-in-out',
    });    
  }, []);

  return (
    <section className="bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-200 py-16">
      <div data-aos="zoom-in" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Left Content (70%) */}
          <div className="lg:col-span-2">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Apply to Join <span className="text-[#0D363C]">My Trading Challenge</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Join over 584,700 traders in mastering the art of trading. Get access to professional insights, improve your strategies, and compete with fellow traders to sharpen your skills. This challenge is your chance to elevate your trading game to the next level.
            </p>
            
            <div className="flex items-center space-x-6 mb-8">
              {/* Testimonial Profile Images */}
              <div className="flex -space-x-3 overflow-hidden">
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Trader 1"
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Trader 2"
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt="Trader 3"
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Trader 4"
                />
              </div>
              <span className="text-lg font-medium text-gray-900">
                Join 584,700+ traders inside
              </span>
            </div>

            <span
              
              className="inline-block bg-[#0D363C] text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Explore Membership
            </span>
          </div>

          {/* Right Image (30%) */}
          <div className="relative h-full">
            <img
              src="../../Images/bar-graph-moving-up-positive-bar-chart-blue-rising-line-orange-business-financial-figures-analyzing-growth-market-research-stock-market-exchange-abstract-financial-concept_1132.avif"
              alt="Trading Challenge"
              className="w-full h-auto object-cover rounded-xl shadow-2xl transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingChallengeSection;
