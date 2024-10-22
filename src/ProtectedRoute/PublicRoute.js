import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const PublicRoute = () => {
    return<>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
};
export default PublicRoute;