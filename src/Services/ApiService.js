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
        static async getItemById(id){

            const token = localStorage.getItem('token');

            try {
                const response = await axios.get(`${ApiService.apiBase}/item/${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                });
    
    
                if (response && response.status === 200 ) {
                    return response.data.itemdto;
                } else {
    
                    throw new Error(`Error fetching item by id. Status: ${response.status}`);
    
                }
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        }

        

    static  async AddNewitem(formdata){
        const token = localStorage.getItem("token");

        try {
            return await axios.post(`${ApiService.apiBase}/item/add`, formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                     Authorization: 'Bearer ' + token
                }
            });
        } catch (error) {
            console.log(error);
        }

    } 

    
 



}
export default ApiService;