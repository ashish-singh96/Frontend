import React , {useEffect}from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
const Footer = () => {

    useEffect(() => {
        AOS.init({
          duration: 1200,
          offset: 50,
          easing: 'ease-in-out',
        });    
      }, []);

    return (
        <div>
            <footer data-aos="zoom-in" className="w-full  text-white">
                {/* Main footer */}
                <div className="bg-[#0D363C] pt-16 pb-12 text-sm">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                            <div
                                className="col-span-4 md:col-span-8 lg:col-span-4"
                                aria-labelledby="footer-header"
                            >
                                <span
                                    id="TradingLogo"
                                    aria-label="Trading logo"
                                    aria-current="page"
                                    className="mb-6 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 text-white focus:outline-none"
                                   
                                >
                                    <img src='../../Images/logo1.png' className='w-[4rem] h-[4rem] object-fit' />
                                </span>
                                <p>
                                    Your go-to platform for trading resources, strategies, and insights to elevate your trading experience.
                                </p>
                            </div>
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-2"
                                aria-labelledby="footer-trading-resources"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-white"
                                    id="footer-trading-resources"
                                >
                                    Trading Resources
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Trading Strategies
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Market Analysis
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Trading Tools
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Economic Calendar
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-2"
                                aria-labelledby="footer-docs-help"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-white"
                                    id="footer-docs-help"
                                >
                                    Help & Support
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Documentation
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Trading FAQs
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Customer Support
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-2"
                                aria-labelledby="footer-about-us"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-white"
                                    id="footer-about-us"
                                >
                                    About Us
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Our Story
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Careers
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-2"
                                aria-labelledby="footer-get-in-touch"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-white"
                                    id="footer-get-in-touch"
                                >
                                    Get in Touch
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Support
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className="w-full text-white">
                <div className="py-4 text-sm bg-[#0D363C]">
                    {/* Line above the footer content */}
                    <div className="h-[1px] bg-white mb-4"></div> {/* Change color as needed */}
                    <div className="container px-6 mx-auto">
                        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                            <div className="col-span-2 md:col-span-4 lg:col-span-6">
                                Copyright © 2024, ETI. All Rights Reserved
                            </div>
                            <nav
                                aria-labelledby="footer-social-links"
                                className="col-span-2 text-right md:col-span-4 lg:col-span-6"
                            >
                                <h2 className="sr-only" id="footer-social-links">
                                    Social Media Links
                                </h2>
                                <ul className="flex items-center justify-end gap-4">
                                    <li

                                        className="transition-colors duration-300 hover:text-emerald-100"
                                    >
                                        {/* Your SVG icon for a social media platform */}

                                    </li>
                                    {/* Add more social media links as needed */}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Footer;
