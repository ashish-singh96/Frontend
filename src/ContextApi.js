import { createContext, useState } from "react";
import axios from 'axios';

export const myContext = createContext();

const DataContext = ({ children }) => {
    const [userSignup, setUserSignUp] = useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
    password:"",
    cpassword:"",
    role:""
    })

    const [userLogin, setUserLogin] = useState({
        email:"",
        password:"",
    })

    const submitUser = async () => {
        try {
            const response = await axios.post('http://localhost:3500/register', userSignup);
            return response; // Return the response to be handled in SignUp component
        } catch (error) {
            throw error; // Throw the error to be caught in the SignUp component
        }
    }

    const loginUser  = async () => {
        try {
            const response = await axios.post('http://localhost:3500/login', userLogin);
            return response; // Return the response to be handled in login component
        } catch (error) {
            throw error; // Throw the error to be caught in the login component
        }
    }


    const logoutUser = async () => {
        try {
            const response = await axios.post('http://localhost:3500/logout');
            return response; // Return the response to be handled in logout component
        } catch (error) {
            throw error; // Throw the error to be caught in the logout component
        }
    }

    
    return (
        <myContext.Provider value={{userSignup, setUserSignUp, submitUser, loginUser, userLogin, setUserLogin, logoutUser}}>
            {children}
        </myContext.Provider>
    )
};
export default DataContext;