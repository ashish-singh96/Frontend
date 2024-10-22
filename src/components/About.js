import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
      easing: 'ease-in-out',
    });    
  }, []);

    return (
        <section className="bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-200 pt-[7rem] py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header Section */}
                <div  data-aos="zoom-in" className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        About <span className="text-[#0D363C]">TradeMaster</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                        We are redefining the trading experience with cutting-edge technology, expert insights, and a commitment to transparency. Join us on a journey to trading success.
                    </p>
                </div>

                {/* Content Section */}
                <div data-aos="zoom-in" className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                    {/* Mission */}
                    <div data-aos="zoom-in" className="bg-white p-10 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                        <div className="text-center">
                            <div className="bg-[#0D363C] inline-flex p-4 rounded-full shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.5 0-3 .5-3 2.5 0 1.537.66 2.85 1.611 3.753A9.028 9.028 0 0112 19.5c2.21 0 4.208-.9 5.389-2.366C18.34 13.35 19 12.037 19 10.5 19 8.5 17.5 8 16 8h-4z" />
                                </svg>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-gray-900">Our Mission</h3>
                            <p className="mt-4 text-base text-gray-600">
                                At TradeMaster, our mission is to revolutionize trading by offering seamless experiences, powerful tools, and actionable insights to traders of all levels. We aim to create an environment where trading feels intuitive, empowering, and successful.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div data-aos="zoom-in" className="bg-white p-10 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                        <div className="text-center">
                            <div className="bg-[#0D363C] inline-flex p-4 rounded-full shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.507a5.06 5.06 0 003.37 0L22 8M5 20h14a2 2 0 002-2V10a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-gray-900">Our Vision</h3>
                            <p className="mt-4 text-base text-gray-600">
                                We envision a global community of empowered traders who are equipped to make smart decisions with confidence. Our vision is to be at the forefront of financial innovation, continuously evolving to meet the changing demands of the trading world.
                            </p>
                        </div>
                    </div>

                    {/* Expertise */}
                    <div data-aos="zoom-in" className="bg-white p-10 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                        <div className="text-center">
                            <div className="bg-[#0D363C] inline-flex p-4 rounded-full shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M5 13l4 4L19 7M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-gray-900">Our Expertise</h3>
                            <p className="mt-4 text-base text-gray-600">
                                Backed by a team of seasoned market professionals, we provide unmatched insights and expertise across various asset classes. We leverage cutting-edge technology to ensure traders are always equipped with the best tools and data for success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
