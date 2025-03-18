import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import ApiService from "../../Services/ApiService";

const WithAdminAuth = ({children}) => {
    const navigate = useNavigate();
    const checkAdminStatus = async () => {
        try {
            if (!localStorage.getItem("token")) {
                navigate("/login");
            }
            const response = await ApiService.isAdmin();
            if (!response.data.isAdmin) {

                navigate("/");
            }
        } catch (error) {

            console.error("Error checking admin status:", error);
        }
    };
    useEffect(() => {


        checkAdminStatus();
    }, [navigate]);


    return <>{children}</>;
};

export default WithAdminAuth;