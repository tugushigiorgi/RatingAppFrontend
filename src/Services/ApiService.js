import axios, {Axios} from "axios";


class ApiService {
    static apiBase = process.env.REACT_APP_APP_BASE;


    

    static async ResetPassword(data){


        try {
            const response = await axios.post(`${ApiService.apiBase}/`, data);
            return true
        } catch (error) {
            return false
    }

}
    static async Login(credentials){

        try {
            const response = await axios.post(`${ApiService.apiBase}/`, credentials);


            if(response.data.token){
                localStorage.setItem("token", response.data.token);
                return true
            }
            return false
        } catch (error) {
            return false
         }

    }

    static async Register(userData){

        try{
            const response = await axios.post(`${ApiService.apiBase}/`,userData);
            if(response.data.token){
                localStorage.setItem("token", response.data.token);
                return true
            }
            return null;

        } catch (error){

            throw error.response ? error.response.data : { message: 'Unable to connect to the server' };

        }

    }


     


    
 



}
export default ApiService;