import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../ContextApi';

const Navbar = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const token = localStorage.getItem('token');
    const { logoutUser } = useContext(myContext);

    // Function to toggle the dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Close the dropdown if clicking outside
    const handleOutsideClick = (e) => {
        if (e.target.closest('.dropdown-trigger') === null) {
            setIsOpen(false);
        }
    };

    // Add event listener to handle outside clicks
    React.useEffect(() => {
        if (isOpen) {
            window.addEventListener('click', handleOutsideClick);
        } else {
            window.removeEventListener('click', handleOutsideClick);
        }
        return () => window.removeEventListener('click', handleOutsideClick);
    }, [isOpen]);

    const handleLogout = async () => {
        try {
            await logoutUser();
            alert("done");
            localStorage.setItem("token", "");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <header className="fixed top-0 left-0 z-20 w-full bg-black">
                <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                    <nav
                        aria-label="main navigation"
                        className="flex h-[5.5rem] items-stretch justify-between font-medium text-white"
                        role="navigation"
                    >
                        {/* Brand logo */}
                        <Link to="/" target="_top">
                            <img src="../../Images/logo1.png" alt="logo" className="h-auto w-[100px] p-2 rounded-lg" />
                        </Link>

                        {/* Mobile trigger */}
                        <button
                            className={`relative order-10 block h-10 w-10 self-center lg:hidden ${
                                isToggleOpen
                                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0"
                                    : ""
                            }`}
                            onClick={() => setIsToggleOpen(!isToggleOpen)}
                            aria-expanded={isToggleOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                        >
                            <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
                                ></span>
                            </div>
                        </button>

                        <ul
                            role="menubar"
                            aria-label="Select page"
                            className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-black px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
                                isToggleOpen ? "visible opacity-100 backdrop-blur-sm" : "invisible opacity-0"
                            }`}
                        >
                            <li role="none" className="flex items-stretch">
                                <span role="menuitem" aria-haspopup="false" className="flex items-center gap-2 py-4 lg:px-8">
                                    <Link to="/" target="_top">
                                        <span>Home</span>
                                    </Link>
                                </span>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <span role="menuitem" aria-current="page" aria-haspopup="false" className="flex items-center gap-2 py-4 lg:px-8">
                                    <Link to="/about-us" target="_top">
                                        <span>About</span>
                                    </Link>
                                </span>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <span role="menuitem" aria-haspopup="false" className="flex items-center gap-2 py-4 lg:px-8">
                                    <Link to="/our-service" target="_top">
                                        <span>Services</span>
                                    </Link>
                                </span>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <span role="menuitem" aria-haspopup="false" className="flex items-center gap-2 py-4 lg:px-8">
                                    <Link to="/blog" target="_top">
                                        <span>Blog</span>
                                    </Link>
                                </span>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <span role="menuitem" aria-haspopup="false" className="flex items-center gap-2 py-4 lg:px-8">
                                    <Link to="/shop" target="_top">
                                        <span>Shop</span>
                                    </Link>
                                </span>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <span role="menuitem" aria-haspopup="false" className="flex items-center gap-2 py-4 lg:px-8">
                                    <Link to="/contact-us" target="_top">
                                        <span>Contact</span>
                                    </Link>
                                </span>
                            </li>
                        </ul>

                        <div className="relative inline-flex dropdown-trigger ml-auto items-center px-6 lg:ml-0 lg:p-0">
                            {/* User Button */}
                            <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white" onClick={toggleDropdown}>
                                <i className="fa-solid fa-user text-xl"></i>
                            </button>

                            {/* Dropdown Menu */}
                            {isOpen && (
                                <ul className="absolute z-20 flex flex-col py-2 mt-0 list-none bg-white w-[12rem] top-full left-[-40px] rounded-lg shadow-lg">
                                    {token ? (
                                        <>
                                            <li className="border-b">
                                                <span className="flex cursor-pointer items-center justify-center gap-2 p-2 transition-colors duration-300 hover:bg-gray-100 text-black whitespace-nowrap">
                                                    <span className="w-full">
                                                        <Link to="/edit" target="_top" className="font-semibold ml-4 text-center text-gray-700">
                                                            Edit Profile
                                                        </Link>
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="flex cursor-pointer items-center justify-center gap-2 p-2 transition-colors duration-300 hover:bg-gray-100 text-black whitespace-nowrap">
                                                    <span className="w-full">
                                                        <button onClick={handleLogout} className="font-semibold ml-4 text-center text-red-600">
                                                            Logout
                                                        </button>
                                                    </span>
                                                </span>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li className="border-b">
                                                <span className="flex cursor-pointer items-center justify-center gap-2 p-2 transition-colors duration-300 hover:bg-gray-100 text-black whitespace-nowrap">
                                                    <span className="w-full">
                                                        <Link to="/login" target="_top" className="font-semibold text-center ml-6 text-gray-700">
                                                            Login
                                                        </Link>
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="flex cursor-pointer items-center justify-center gap-2 p-2 transition-colors duration-300 hover:bg-gray-100 text-black whitespace-nowrap">
                                                    <span className="w-full">
                                                        <Link to="/signup" target="_top" className="font-semibold text-center ml-6 text-green-600">
                                                            Sign Up
                                                        </Link>
                                                    </span>
                                                </span>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            )}
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
