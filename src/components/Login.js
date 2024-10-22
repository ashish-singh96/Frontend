import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import { myContext } from '../ContextApi';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigation = useNavigate();
    const initialState = ({
        email: "",
        password: ""
    })

    const { userLogin, setUserLogin, loginUser } = useContext(myContext);
    const [response, setResponse] = useState("");
    const [errors, setErrors] = useState("");

    const handleLoginChangeValue = (event) => {
        const { name, value } = event.target;
        setUserLogin({ ...userLogin, [name]: value });
        setErrors("");
    }

    const handleSubmitUser = async (event) => {
        event.preventDefault();
        if (!userLogin.email || !userLogin.password) {
            setErrors("All fields are required.");
            return;
        }

        try {
            const res = await loginUser(userLogin);
            const role = res.data.user.role;
            const token = res.data.user.token;
            localStorage.setItem("role", role);
            localStorage.setItem("token", token);
            if (res.status >= 200 && res.status < 300) {
                setResponse("Welcome ETI Trader! Login Successfull"); // Updated success message
                setErrors(""); // Clear any previous errors
                setUserLogin(initialState);
            }
            if (role === 'admin') {
                navigation('/admin/dashboard')
            } else {
                navigation('/');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    setErrors("All fields are required.");
                } else if (error.response.status === 401) {
                    setErrors("Invalid email or password.");
                } else {
                    setErrors("An unexpected error occurred.");
                }
            } else {
                setErrors("An unexpected error occurred.");
            }
        }
    };


    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-r mt-[5.5rem] from-indigo-200 via-indigo-100 to-indigo-200 min-h-screen flex items-center justify-center">
                <div className="max-w-7xl mx-auto py-6">
                    <div className="grid md:grid-cols-2 items-center gap-8 px-6">
                        {/* Login Form */}
                        <form className="max-w-md mx-auto w-full p-12 py-16 shadow-lg bg-white rounded-lg" onSubmit={handleSubmitUser}>
                            <div>
                                <div className="relative flex items-center">
                                    <input
                                        name="email"
                                        type="text"
                                        value={userLogin.email}
                                        onChange={handleLoginChangeValue}
                                        required
                                        className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md border border-gray-300 focus:outline-blue-600"
                                        placeholder="Enter email"
                                    />
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="relative flex items-center">
                                    <input
                                        name="password"
                                        type="password"
                                        value={userLogin.password}
                                        onChange={handleLoginChangeValue}
                                        required
                                        className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md border border-gray-300 focus:outline-blue-600"
                                        placeholder="Enter password"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 justify-between mt-8">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-[#0D363C] focus:ring-[#0D363C] rounded-md"
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="ml-3 block text-sm text-[#0D363C]"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <span className="text-[#0D363C] font-semibold hover:underline">
                                        Forgot your password?
                                    </span>
                                </div>
                            </div>
                            {errors && <p className='text-red-500 italic text-sm mt-2'>{errors}</p>}
                            {response && <p className='text-green-600 italic text-sm mt-2'>{response}</p>}
                            <div className="mt-12">
                                <button
                                    type="submit" // Changed to submit type for form handling
                                    className="w-full shadow-lg py-4 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-[#0D363C] focus:outline-none"
                                >
                                    Log in
                                </button>
                            </div>
                            <p className="text-sm mt-8 text-center text-[#0D363C]">
                                Don't have an account?{" "}
                                <span className="text-[#0D363C] font-semibold tracking-wide hover:underline ml-1">
                                    Register here
                                </span>
                            </p>
                        </form>

                        {/* Welcome Section */}
                        <div className="flex flex-col justify-center  rounded-lg p-6">
                            <h2 className="text-4xl font-bold text-[#0D363C] mb-4">
                                Welcome to ETI Trading Expert
                            </h2>
                            <p className="text-lg text-[#0D363C] mb-6">
                                Start trading with our secure platform. Sign in to manage your portfolio, analyze the latest stock market trends, and make informed trades effortlessly.
                            </p>
                            <div className="flex -space-x-3 overflow-hidden mt-6">
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?auto=format&fit=facearea&w=256&h=256&q=80"
                                    alt="Trader 1"
                                />
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&w=256&h=256&q=80"
                                    alt="Trader 2"
                                />
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&w=256&h=256&q=80"
                                    alt="Trader 3"
                                />
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&w=256&h=256&q=80"
                                    alt="Trader 4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
