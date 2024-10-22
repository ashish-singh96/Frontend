import React, {useEffect} from 'react'
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
        <div>
            <div className="bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-200 pt-[5rem] py-24 sm:py-32">
                <div data-aos="zoom-in" className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div data-aos="zoom-in" className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Trading Insights
                        </h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Stay updated with the latest strategies and market trends to sharpen your trading skills.
                        </p>
                    </div>
                    <div data-aos="zoom-in" className="mx-auto mt-10 grid max-w-2xl grid-cols-3 sm:grid-col-1 md:grid-col-3 gap-x-8 gap-y-16 border-t border-gray-500 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <article data-aos="zoom-in" className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime="2024-10-22" className="text-gray-500">
                                    Oct 22, 2024
                                </time>
                                <a
                                    href="#"
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    Market Analysis
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href="#">
                                        <span className="absolute inset-0" />
                                        Understanding Market Trends in 2024
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                    Explore the key trends shaping the financial markets in 2024, from global events to sector-specific developments, and how you can leverage them for successful trading.
                                </p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img
                                    src="../../Images/image1.avif"
                                    alt="Market trends"
                                    className="h-10 w-10 rounded-full bg-gray-50"
                                />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href="#">
                                            <span className="absolute inset-0" />
                                            Emily Carter
                                        </a>
                                    </p>
                                    <p className="text-gray-600">Senior Market Analyst</p>
                                </div>
                            </div>
                        </article>

                        <article data-aos="zoom-in" className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime="2024-10-21" className="text-gray-500">
                                    Oct 21, 2024
                                </time>
                                <a
                                    href="#"
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    Trading Strategies
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href="#">
                                        <span className="absolute inset-0" />
                                        Mastering Swing Trading in Volatile Markets
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                    Learn how to take advantage of price swings in highly volatile markets using strategic entry and exit points.
                                </p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img
                                    src="../../Images/image3.avif"
                                    alt="Volatile market"
                                    className="h-10 w-10 rounded-full bg-gray-50"
                                />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href="#">
                                            <span className="absolute inset-0" />
                                            John Doe
                                        </a>
                                    </p>
                                    <p className="text-gray-600">Trading Expert</p>
                                </div>
                            </div>
                        </article>

                        <article data-aos="zoom-in" className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime="2024-10-20" className="text-gray-500">
                                    Oct 20, 2024
                                </time>
                                <a
                                    href="#"
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    Investment Tips
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href="#">
                                        <span className="absolute inset-0" />
                                        Diversifying Your Portfolio in 2024
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                    Discover how to diversify your portfolio to minimize risk and maximize returns in the evolving market landscape.
                                </p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img
                                    src="../../Images/image2.avif"
                                    alt=" Investment Tips"
                                    className="h-10 w-10 rounded-full bg-gray-50"
                                />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href="#">
                                            <span className="absolute inset-0" />
                                            Sarah Lee
                                        </a>
                                    </p>
                                    <p className="text-gray-600">Investment Advisor</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
