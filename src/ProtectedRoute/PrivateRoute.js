import { Navigate, Outlet } from "react-router-dom";

// const useAuth = () => {
//     const role = localStorage.getItem("role"); 
//     return role ? true : false; 
// };


const PrivateRoute = () => {
    const  role = localStorage.getItem("role");
    const  token = localStorage.getItem("token");

    if(!token){
        return <Navigate to={'/'} />;
    }

    if(role === 'admin'){
        return <Outlet/>
    }else{
        return <Navigate to={'/'}/>
    }

};

export default PrivateRoute;
