import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Blog = () => {

    useEffect(() => {
        AOS.init({
          duration: 1200,
          offset: 50,
          easing: 'ease-in-out',
        });    
      }, []);

    return (
        <div data-aos="zoom-in" className="py-12 bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-200">
            <div data-aos="zoom-in" className=" container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
                    Latest News Update
                </h2>

                {/* Grid for News Cards */}
                <div  className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div data-aos="zoom-in" className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                        <div>
                            <p className="text-gray-500 text-sm mb-2">July 13, 2024</p>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Niger PM says oil export blockade violates accords
                            </h3>
                            <p className="text-gray-600 mb-4">
                                We closed out what was a strong week for equity indices large number of trades within a short timeframe, aiming to profit from small price...
                            </p>
                        </div>
                        {/* Read More & Admin with Avatar */}
                        <div className="flex items-center justify-between mt-4">
                            <a href="#" className="text-blue-500 font-medium hover:underline">
                                Read More
                            </a>
                            <div className="flex items-center">
                                <img
                                    src="../../Images/avtaar.avif"
                                    alt="admin avatar"
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <p className="text-sm text-gray-400">admin</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div data-aos="zoom-in" className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                        <div>
                            <p className="text-gray-500 text-sm mb-2">July 14, 2024</p>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Stock markets rally amid investor optimism
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Stock markets surged today as investors reacted positively to new trade deals and promising economic data from multiple countries...
                            </p>
                        </div>
                        {/* Read More & Admin with Avatar */}
                        <div className="flex items-center justify-between mt-4">
                            <a href="#" className="text-blue-500 font-medium hover:underline">
                                Read More
                            </a>
                            <div className="flex items-center">
                                <img
                                    src="../../Images/avtaar.avif"
                                    alt="admin avatar"
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <p className="text-sm text-gray-400">admin</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div data-aos="zoom-in" className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                        <div>
                            <p className="text-gray-500 text-sm mb-2">July 15, 2024</p>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Global oil prices continue to fluctuate
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Oil prices continue their volatile swings as geopolitical tensions, supply chain disruptions, and currency fluctuations affect the market...
                            </p>
                        </div>
                        {/* Read More & Admin with Avatar */}
                        <div className="flex items-center justify-between mt-4">
                            <a href="#" className="text-blue-500 font-medium hover:underline">
                                Read More
                            </a>
                            <div className="flex items-center">
                                <img
                                    src="../../Images/avtaar.avif"
                                    alt="admin avatar"
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <p className="text-sm text-gray-400">admin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
