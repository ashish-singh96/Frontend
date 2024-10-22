import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const FreqAskQues = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
      easing: 'ease-in-out',
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between current and null
  };

  return (
    <div data-aos="zoom-in" className="bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-200">
      <section className="py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
              Frequently asked questions
            </h2>
          </div>
          <div className="accordion-group">

            {/* Accordion Item 1 */}
            <div
              className={`accordion border border-solid border-gray-300 p-4 rounded-xl mb-8 lg:p-4 transition-transform transform ${activeIndex === 1 ? 'bg-white border-indigo-600 shadow-lg' : 'bg-white'
                }`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
                onClick={() => toggleAccordion(1)}
                aria-controls="basic-collapse-one"
              >
                <h5 className="flex-1">What is day trading?</h5>
                <svg
                  className={`w-6 h-6 transition-transform duration-500 ${activeIndex === 1 ? 'rotate-45' : 'rotate-0'
                    }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                id="basic-collapse-one"
                className={`accordion-content w-full overflow-hidden pr-4 ${activeIndex === 1 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  } transition-max-height duration-500 ease-in-out`}
              >
                <p className="text-base text-gray-900 font-normal leading-6">
                  Day trading is a trading style that involves buying and selling financial instruments within the same trading day. Traders aim to capitalize on short-term price movements and typically close all positions before the market closes.
                </p>
              </div>
            </div>

            {/* Accordion Item 2 */}
            <div
              className={`accordion border border-solid border-gray-300 p-4 rounded-xl mb-8 lg:p-4 transition-transform transform ${activeIndex === 2 ? 'bg-white border-indigo-600 shadow-lg' : 'bg-white'
                }`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
                onClick={() => toggleAccordion(2)}
                aria-controls="basic-collapse-two"
              >
                <h5 className="flex-1">What is a stop-loss order?</h5>
                <svg
                  className={`w-6 h-6 transition-transform duration-500 ${activeIndex === 2 ? 'rotate-45' : 'rotate-0'
                    }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                id="basic-collapse-two"
                className={`accordion-content w-full overflow-hidden pr-4 ${activeIndex === 2 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  } transition-max-height duration-500 ease-in-out`}
              >
                <p className="text-base text-gray-900 font-normal leading-6">
                  A stop-loss order is a type of order designed to limit an investor's loss on a position in a security. By setting a stop-loss order, traders can specify the maximum loss they are willing to accept on a trade.
                </p>
              </div>
            </div>

            {/* Accordion Item 3 */}
            <div
              className={`accordion border border-solid border-gray-300 p-4 rounded-xl mb-8 lg:p-4 transition-transform transform ${activeIndex === 3 ? 'bg-white border-indigo-600 shadow-lg' : 'bg-white'
                }`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
                onClick={() => toggleAccordion(3)}
                aria-controls="basic-collapse-three"
              >
                <h5 className="flex-1">What is technical analysis?</h5>
                <svg
                  className={`w-6 h-6 transition-transform duration-500 ${activeIndex === 3 ? 'rotate-45' : 'rotate-0'
                    }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                id="basic-collapse-three"
                className={`accordion-content w-full overflow-hidden pr-4 ${activeIndex === 3 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  } transition-max-height duration-500 ease-in-out`}
              >
                <p className="text-base text-gray-900 font-normal leading-6">
                  Technical analysis is the study of past market data, primarily price and volume, to forecast future price movements. Traders use charts and technical indicators to identify trends and patterns in the market.
                </p>
              </div>
            </div>

            {/* Accordion Item 4 */}
            <div
              className={`accordion border border-solid border-gray-300 p-4 rounded-xl mb-8 lg:p-4 transition-transform transform ${activeIndex === 4 ? 'bg-white border-indigo-600 shadow-lg' : 'bg-white'
                }`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
                onClick={() => toggleAccordion(4)}
                aria-controls="basic-collapse-four"
              >
                <h5 className="flex-1">What are trading fees?</h5>
                <svg
                  className={`w-6 h-6 transition-transform duration-500 ${activeIndex === 4 ? 'rotate-45' : 'rotate-0'
                    }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                id="basic-collapse-four"
                className={`accordion-content w-full overflow-hidden pr-4 ${activeIndex === 4 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  } transition-max-height duration-500 ease-in-out`}
              >
                <p className="text-base text-gray-900 font-normal leading-6">
                  Trading fees are the costs associated with buying and selling securities. These can include brokerage fees, commissions, and spreads. It's important to understand these fees as they can affect your overall profitability.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
};

export default FreqAskQues;
