import React, { useContext, useState, useRef, useEffect } from 'react';
import { myContext } from '../ContextApi';

const countries = [
    { code: "+971", name: "Dubai", flag: "https://flagcdn.com/ae.svg" },
    { code: "+91", name: "India", flag: "https://flagcdn.com/in.svg" },
    { code: "+1", name: "USA", flag: "https://flagcdn.com/us.svg" },
    { code: "+44", name: "UK", flag: "https://flagcdn.com/gb.svg" },
    // Add more countries here
];

const SignUp = () => {
    const initialSignupState = {
        fname: '',
        lname: '',
        phone: '',
        email: '',
        password: '',
        cpassword: '',
        countryCode: countries[0].code // Default country code
    };

    const { userSignup, setUserSignUp, submitUser } = useContext(myContext);
    const [errors, setErrors] = useState({});
    const [response, setResponse] = useState("");

    const handleUserSignUpChangeValue = (event) => {
        const { name, value } = event.target;
        setUserSignUp({ ...userSignup, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Client-side validation: check if passwords match
        if (userSignup.password !== userSignup.cpassword) {
            setErrors({ cpassword: "Passwords do not match." });
            return; // Stop submission if validation fails
        }

        try {
            const res = await submitUser(userSignup);
            if (res.status >= 200 && res.status < 300) {
                setResponse("Your account is registered successfully!");
                setErrors({});
                setUserSignUp(initialSignupState);
            }
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (status === 400) {
                    setErrors(data.errors);
                } else if (status === 409) {
                    setErrors({ email: "Email already exists." });
                } else {
                    setErrors({ general: "An unexpected error occurred." });
                }
            }
        }
    };

    const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default to Dubai
    const [dropdownOpen, setDropdownOpen] = useState(false); // To handle dropdown visibility

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        handleUserSignUpChangeValue({ target: { name: 'countryCode', value: country.code } });
        setDropdownOpen(false); // Close dropdown after selection
    };

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev); // Toggle dropdown open state
    };

    // Close dropdown when clicking outside
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="bg-gradient-to-r mt-14 from-indigo-200 via-indigo-100 to-indigo-200 min-h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center py-6 px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 w-full">
                    {/* Sign Up Form */}
                    <form className="max-w-md mx-auto w-full p-8 shadow-lg bg-white rounded-lg" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input
                                    name="fname"
                                    value={userSignup.fname}
                                    onChange={handleUserSignUpChangeValue}
                                    type="text"
                                    required
                                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
                                    placeholder="First name"
                                />
                                {errors?.fname && <p className='text-sm italic text-red-500'>{errors.fname}</p>}
                            </div>
                            <div>
                                <input
                                    name="lname"
                                    value={userSignup.lname}
                                    onChange={handleUserSignUpChangeValue}
                                    type="text"
                                    required
                                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
                                    placeholder="Last name"
                                />
                                {errors?.lname && <p className='text-sm italic text-red-500'>{errors.lname}</p>}
                            </div>
                        </div>

                        <div className="mt-6" ref={dropdownRef}>
                            <div className="relative flex items-center border border-gray-300 rounded-md overflow-hidden">
                                {/* Custom Country Code Dropdown */}
                                <button 
                                    type="button" 
                                    onClick={toggleDropdown} 
                                    className="flex items-center px-4 py-2 bg-gray-100 focus:outline-none"
                                >
                                    <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-5 h-5 mr-2" />
                                    {selectedCountry.code}
                                </button>

                                {dropdownOpen && (
                                    <div className="fixed z-50 left-20 top-24 mt-12 bg-white border border-gray-300 rounded-md shadow-lg">
                                        {countries.map((country) => (
                                            <div
                                                key={country.code}
                                                onClick={() => handleCountryChange(country)}
                                                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                                <img src={country.flag} alt={country.name} className="w-5 h-5 mr-2" />
                                                {country.code}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Phone Number Input */}
                                <input
                                    name="phone"
                                    value={userSignup.phone}
                                    onChange={handleUserSignUpChangeValue}
                                    type="tel"
                                    required
                                    className="flex-grow text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3 border-0 focus:outline-none"
                                    placeholder="Mobile number"
                                />
                            </div>
                            {errors?.phone && <p className="text-sm italic text-red-500">{errors.phone}</p>}
                        </div>

                        <div className="mt-6">
                            <input
                                name="email"
                                value={userSignup.email}
                                onChange={handleUserSignUpChangeValue}
                                type="email"
                                required
                                className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
                                placeholder="Email address"
                            />
                            {errors?.email && <p className='text-sm italic text-red-500'>{errors.email}</p>}
                        </div>

                        <div className="mt-6">
                            <input
                                name="password"
                                value={userSignup.password}
                                onChange={handleUserSignUpChangeValue}
                                type="password"
                                required
                                className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
                                placeholder="Password"
                            />
                            {errors?.password && <p className='text-sm italic text-red-500'>{errors.password}</p>}
                        </div>

                        <div className="mt-6">
                            <input
                                name="cpassword"
                                value={userSignup.cpassword}
                                onChange={handleUserSignUpChangeValue}
                                type="password"
                                required
                                className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
                                placeholder="Confirm password"
                            />
                            {errors?.cpassword && <p className='text-sm italic text-red-500'>{errors.cpassword}</p>}
                        </div>

                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full shadow-lg py-3 text-sm tracking-wide font-semibold rounded-md text-white bg-[#0D363C] focus:outline-none"
                            >
                                Sign Up
                            </button>
                        </div>
                        {errors?.general && <p className='text-sm italic text-red-500'>{errors.general}</p>}
                        {response && <p className='text-sm italic text-[#0D363C]'>{response}</p>}
                    </form>

                    {/* Signup Info Section */}
                    <div className="flex flex-col justify-center rounded-lg p-6">
                        <h2 className="text-3xl font-bold text-[#0D363C] mb-4">
                            Join ETI Trading Expert Today!
                        </h2>
                        <p className="text-lg text-[#0D363C] mb-6">
                            Create your account to start trading, manage your portfolio, and access real-time insights and tools for making the best trading decisions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
