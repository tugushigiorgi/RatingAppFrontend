import axios, {Axios} from "axios";


class ApiService {
    static apiBase = process.env.REACT_APP_APP_BASE;

    static staticImagesLocation = 'http://localhost:8080/images/'


    static async ResetPassword(data) {


        try {
            const response = await axios.post(`${ApiService.apiBase}/`, data);
            return true
        } catch (error) {
            return false
        }

    }

// static async Login(credentials){

//     try {
//         const response = await axios.post(`${ApiService.apiBase}/api/auth/login`, credentials);


//         if(response.data.token){
//             localStorage.setItem("token", response.data.token);
//             return true
//         }
//         return false
//     } catch (error) {
//         return false
//      }

// }


    static async Login(credentials) {
        try {
            const response = await axios.post(`${ApiService.apiBase}/api/auth/login`, credentials);

            if (response.data && response.data.token) {
                localStorage.setItem("token", response.data.token);
                return {success: true, role: response.data.role};
            } else {
                return {success: false, error: "Invalid response from server"};
            }
        } catch (error) {
            console.error("Login Error:", error.response?.data || error.message);

            let errorMessage = "Something went wrong. Please try again.";

            if (error.response) {
                if (error.response.status === 400) {
                    errorMessage = "Your account has not been approved by an admin.";
                } else if (error.response.status === 401) {
                    errorMessage = "Invalid email or password.";
                } else {
                    errorMessage = error.response.data || "Unexpected error occurred.";
                }
            }

            return {success: false, error: errorMessage};
        }
    }


    // static async RegisterUser(formData) {
    //     axios.defaults.baseURL = 'http://localhost:8080';
    //
    //     try {
    //         const response = await axios.post('/api/auth/register', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });
    //         return response;
    //     } catch (error) {
    //         console.error('Registration API Error:', error);
    //
    //         if (error.response) {
    //             return error.response;
    //         } else {
    //             return {status: 500, data: {errors: ["An unexpected error occurred"]}};
    //         }
    //     }
    // }
    static async RegisterUser(formData) {
        axios.defaults.baseURL = 'http://localhost:8080';

        try {
            const response = await axios.post('/api/auth/register', formData, {
                headers: {'Content-Type': 'multipart/form-data'},
            });

            return response;
        } catch (error) {
            console.error('Registration API Error:', error);


            if (axios.isAxiosError(error)) {
                if (!error.response) {

                    return {
                        status: 503,
                        data: {errors: ["No response from server. Please check your internet connection."]}
                    };
                }


                return {
                    status: error.response.status,
                    data: error.response.data || {errors: ["An unexpected error occurred."]},
                };
            }

            // Return a generic error if it's not an Axios error
            return {status: 500, data: {errors: ["An unknown error occurred."]}};
        }
    }


    static async CheckConfiramtionCode(code) {

        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        try {
            return await axios.post('http://localhost:8080/api/auth/verify/' + code, {});
        } catch (error) {
            console.log(error);
        }


    }


    // static async SendRecoverCode(email) {
    //
    //     axios.defaults.baseURL = 'http://localhost:8080';
    //     axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
    //     axios.defaults.headers.common['Content-Type'] = 'application/json'
    //     try {
    //         return await axios.post('http://localhost:8080/api/auth/recovercode/' + email, {});
    //     } catch (error) {
    //         console.log(error);
    //     }
    //
    //
    // }
    static async SendRecoverCode(email) {
        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json';

        try {
            return await axios.post(`http://localhost:8080/api/auth/recovercode/${encodeURIComponent(email)}`, {});
        } catch (error) {
            console.error("API Error:", error.response?.data || error.message);
            throw error;
        }
    }

    static async getItemById(id) {

        const token = localStorage.getItem('token');

        try {
            const response = await axios.get(`${ApiService.apiBase}/item/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            });


            if (response && response.status === 200) {
                return response.data.itemdto;
            } else {

                throw new Error(`Error fetching item by id. Status: ${response.status}`);

            }
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }


    static async DeleteSellerGame(id) {
        //const token = localStorage.getItem('token');
        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        try {
            return await axios.delete(`http://localhost:8080/api/game/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            });
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }


    static async getsellerGamesById(id) {


        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        try {
            return await axios.get('http://localhost:8080/api/game/' + id, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            });
        } catch (error) {
            console.log(error);
        }


    }


    static async getCurrentlyLoggedUserGames() {
        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json';

        try {
            const response = await axios.get('/api/seller/games', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            });

            return response; // Return full response to check status codes
        } catch (error) {
            console.error("Error fetching user games:", error);
            throw error; // Rethrow to handle in `fetchData`
        }
    }


    static async AddNewGameObject(formdata) {
        const token = localStorage.getItem("token");

        try {
            return await axios.post('http://localhost:8080/api/game', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            console.error("API Error:", error);
            throw error;
        }
    }



    static async UpdateGameObjectWithPhoto(formdata) {
        const token = localStorage.getItem("token");
        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['access-control-allow-origin'] = 'http://localhost:3000';

        try {
            return await axios.put('http://localhost:8080/api/game/detailed', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer ' + token,
                },
            });
        } catch (error) {
            console.log(error);
        }

    }


    static async UpdateGameObject(formdata) {
        const token = localStorage.getItem("token");
        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['access-control-allow-origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
        try {
            return await axios.put('http://localhost:8080/api/game', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer ' + token,
                },
            });
        } catch (error) {
            console.log(error);
        }

    }

    static async gettopratedsellers() {
        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Content-Type'] = 'application/json';

        try {
            const response = await axios.get('/api/main/topselers');  // relative URL
            return response;
        } catch (error) {

            console.error('Error fetching top-rated sellers:', error);


            return {
                status: 500,
                data: {
                    errors: ['An unexpected error occurred while fetching top-rated sellers. Please try again later.']
                }
            };
        }
    }

    static async WriteRegisteredSellerReview(dto) {
        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['access-control-allow-origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json';

        try {
            // Send POST request to the backend
            const response = await axios.post('/api/main/addcomment', dto);
            return response;  // Return the response directly for handling in the frontend
        } catch (error) {
            console.error('Error in submitting review:', error);

            // Propagate the error to the frontend for proper handling
            throw error;
        }
    }



    static async getSellerReviews() {
        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json';

        try {
            const response = await axios.get('/api/seller/reviews', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            });

            return response; // Return full response for status checking
        } catch (error) {
            console.error("Error fetching reviews:", error);
            throw error; // Rethrow for handling in the component
        }
    }



//ADMIN

    static async AdmingetsellersRequests() {


        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        try {
            return await axios.get('http://localhost:8080/api/admin/users/requests', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            });
        } catch (error) {
            console.log(error);
        }


    }


    static async isAdmin() {

        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        try {
            return await axios.get('http://localhost:8080/api/user/verifyrole', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            });
        } catch (error) {
            console.log(error);
        }


    }


//ADMIN
    static async AdminApproveSellerRegistrationRequests(id) {


        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        try {
            return await axios.post('http://localhost:8080/api/admin/user/approve/' + id, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            });
        } catch (error) {
            console.log(error);
        }


    }

    //ADMIN
    static async ReviewsRequestsList() {


        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        try {
            return await axios.get('http://localhost:8080/api/admin/comments/requests', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            });
        } catch (error) {
            console.log(error);
        }


    }


//ADMIN 
    static async AdminApproveUserReview(id) {

        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        try {
            return await axios.post(
                `http://localhost:8080/api/admin/comments/approve/${id}`,
                {}, // Empty body for POST
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token'),
                    },
                }
            );
        } catch (error) {
            console.log("Admin Approve Error:", error.response?.data || error.message);
        }
    }

//ADMIN
    static async AdminDeclineUserReview(id) {

        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        try {
            return await axios.delete('http://localhost:8080/api/admin/comments/decline/' + id, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            });
        } catch (error) {
            console.log(error);
        }
    }


    static async getRegisteredSellersDetailed() {


        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        try {
            return await axios.get('http://localhost:8080/api/admin/user/registeredusers', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            });
        } catch (error) {
            console.log(error);
        }

    }


    static async getRegisteredSellersDetailedByUsername(username) {


        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        try {
            return await axios.get('http://localhost:8080/api/admin/user/registeredusers/' + username, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            });
        } catch (error) {
            console.log(error);
        }

    }


    static async deleteUserById(id) {


        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        try {
            return await axios.delete('http://localhost:8080/api/admin/user/' + id, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            });
        } catch (error) {
            console.log(error);
        }

    }


    static async getcurrentuserInfo() {


        const token = localStorage.getItem("token");
        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        try {
            return await axios.get('http://localhost:8080/api/seller/info', {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            });
        } catch (error) {
            console.log(error);
        }

    }


    static async ChangePassword(dto) {
        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Content-Type'] = 'application/json';

        try {
            const response = await axios.put('/api/user/password', dto, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            });
            return response;
        } catch (error) {
            console.error('Error changing password:', error);
            throw error;
        }
    }


    static async getSellerProfileInfo(sellerId) {
        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json';

        try {
            const response = await axios.get(`/api/main/SellerProfile/${sellerId}`);
            return response;  // Return the response object
        } catch (error) {
            console.error('Error fetching seller profile:', error);
            // Throw error for the calling function to handle
            throw new Error(error.message || 'Failed to fetch seller profile data');
        }
    }


    static async getSellerProfileInfo(sellerId) {


        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json';


        try {
            return await axios.get('http://localhost:8080/api/main/SellerProfile/' + sellerId, {});

        } catch (error) {
            console.log(error);
        }


    }


    static async Recoverpass(dto) {
        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json';

        try {
            const response = await axios.post('/api/auth/updatepassword', dto);
            return response;
        } catch (error) {
            console.error("Error during password update request:", error);


            return {status: 500, data: {errors: ["An unexpected error occurred."]}};
        }
    }


    static async SearchgameBy(title, userrating) {
        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        axios.defaults.headers.common['Content-Type'] = 'application/json';

        try {
            const response = await axios.get(`/api/main/search`, {
                params: {
                    title: title || "",
                    sellerRating: userrating || 0
                }
            });

            return response.data;
        } catch (error) {
            console.error("Error fetching game data:", error);
            throw error;
        }
    }


}

export default ApiService;