import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
const Product = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            offset: 50,
            easing: 'ease-in-out',
        });
    }, []);
    return (
        <div>
            <div className="bg-[#0D363C] py-8">
                <div data-aos="zoom-in" className="container  mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="w-full lg:w-auto">
                            <div className="flex justify-center space-x-4">
                                {/* Product Tab Navigation */}
                                <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 text-center">
                                    {/* ALL SOFTWARES Tab */}
                                    <li>
                                        <a
                                            href="#featured"
                                            className="text-white font-bold text-2xl lg:text-3xl py-2 px-4"
                                            data-bs-toggle="tab"
                                        >
                                            <span>ALL SOFTWARES</span>
                                        </a>
                                    </li>
                                    {/* EURUSD ROBOT Tab */}
                                    <li>
                                        <a
                                            href="#new-arrivals"
                                            className="text-white pt-2 lg:pt-4 text-lg lg:text-xl py-2 px-4 border-b-2 border-transparent transition duration-300"
                                            data-bs-toggle="tab"
                                        >
                                            <span>EURUSD ROBOT</span>
                                        </a>
                                    </li>
                                    {/* GOLD ROBOT Tab */}
                                    <li>
                                        <a
                                            href="#best-seller"
                                            className="text-white pt-2 lg:pt-4 text-lg lg:text-xl py-2 px-4 border-b-2 border-transparent transition duration-300"
                                            data-bs-toggle="tab"
                                        >
                                            <span>GOLD ROBOT</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div
                data-aos="zoom-in-up"
                className="grid bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-200 pt-10 grid-cols-1  pb-12 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
            >
                {/* Product 1 */}
                <div className="h-full">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                        <div className="product-img relative">
                            <a href="https://forexbaazar.com/products/eurgold-50">
                                <img
                                    className="w-full h-[18rem] object-contains"
                                    src="../../Images/robot3.avif"
                                    alt="EurGold 5.0"
                                />
                            </a>
                        </div>
                        <div className="product-content p-4 flex-grow flex flex-col justify-between">
                            <div className="product-desc_info">
                                <div className="price-box flex items-center space-x-2">
                                    <span className="new-price text-xl font-bold text-gray-900">$499</span>
                                    <span className="old-price text-sm line-through text-gray-500">$1399</span>
                                </div>
                                <h6 className="product-name text-lg font-medium mt-2">
                                    <a
                                        href="https://forexbaazar.com/products/eurgold-50"
                                        className="text-gray-800 hover:text-blue-600"
                                    >
                                        EurGold 5.0
                                    </a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="h-full">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                        <div className="product-img relative">
                            <a href="https://forexbaazar.com/products/eurgold-50">
                                <img
                                    className="w-full h-[18rem] object-contains"
                                    src="../../Images/robot3.jpg"
                                    alt="EurGold 5.0"
                                />
                            </a>
                        </div>
                        <div className="product-content p-4 flex-grow flex flex-col justify-between">
                            <div className="product-desc_info">
                                <div className="price-box flex items-center space-x-2">
                                    <span className="new-price text-xl font-bold text-gray-900">$499</span>
                                    <span className="old-price text-sm line-through text-gray-500">$1399</span>
                                </div>
                                <h6 className="product-name text-lg font-medium mt-2">
                                    <a
                                        href="https://forexbaazar.com/products/eurgold-50"
                                        className="text-gray-800 hover:text-blue-600"
                                    >
                                        EurGold 5.0
                                    </a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="h-full">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                        <div className="product-img relative">
                            <a href="https://forexbaazar.com/products/eurgold-50">
                                <img
                                    className="w-full h-[18rem] object-contains"
                                    src="../../Images/robot1.avif"
                                    alt="EurGold 5.0"
                                />
                            </a>
                        </div>
                        <div className="product-content p-4 flex-grow flex flex-col justify-between">
                            <div className="product-desc_info">
                                <div className="price-box flex items-center space-x-2">
                                    <span className="new-price text-xl font-bold text-gray-900">$499</span>
                                    <span className="old-price text-sm line-through text-gray-500">$1399</span>
                                </div>
                                <h6 className="product-name text-lg font-medium mt-2">
                                    <a
                                        href="https://forexbaazar.com/products/eurgold-50"
                                        className="text-gray-800 hover:text-blue-600"
                                    >
                                        EurGold 5.0
                                    </a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="bg-[#0D363C]  w-full py-12"> {/* Full-width background */}
                <div data-aos="zoom-in" className="container mx-auto px-4"> {/* Center content inside the container */}
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Banner 1 */}
                        <div className="hover:scale-105 transition-transform duration-300">

                            <img
                                className="w-full h-auto object-cover rounded-lg"
                                src="/Images/banner-63dab7950ac58.jpg"
                                alt="Umino's Banner 1"
                            />

                        </div>
                        {/* Banner 2 */}
                        <div className="hover:scale-105 transition-transform duration-300">

                            <img
                                className="w-full h-auto object-cover rounded-lg"
                                src="/Images/banner-63df6543e0f72.jpg"
                                alt="Umino's Banner 2"
                            />

                        </div>
                        {/* Banner 3 */}
                        <div className="hover:scale-105 transition-transform duration-300">

                            <img
                                className="w-full h-auto object-cover rounded-lg"
                                src="/Images/banner-63df6ff4768c7.jpg"
                                alt="Umino's Banner 3"
                            />

                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Product