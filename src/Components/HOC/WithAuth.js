import {Navigate, useNavigate} from "react-router-dom";

const WithAuth = ({ children }) => {
    const token = localStorage.getItem("token");

    const  navigate=useNavigate()
    if (!token) return <Navigate to="/login" />
    return <>{children}</>;
}

export default WithAuth;