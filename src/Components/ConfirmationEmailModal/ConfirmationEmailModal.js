import ApiService from "../../Services/ApiService";
import style from "./ConfirmationEmailModal.module.css"


import {useState} from "react"


const ConfirmationEmailModal = ({email, closeConfirmationModal}) => {
    const [state, setState] = useState({
        isloading: false, successMessage: '',
        errorMessage: '', Code: ''
    });


    const handleGetData = (e) => {
        const {value, name} = e.target;
        setState(prevdata => {
            return {
                ...prevdata,
                [name]: value
            }
        })
    }


    const handleConfirm = () => {
        setState((prevFormData) => ({
            ...prevFormData,
            isloading: true,
        }));

        ApiService.CheckConfiramtionCode(state.Code)
            .then(response => {
                console.log("API Response:", response);

                if (response && response.status === 200) {

                    setState((prevFormData) => ({
                        ...prevFormData,
                        Code: '',
                        isloading: false,
                        successMessage: "Email confirmed successfully. After admin approval, you can log in.",
                        errorMessage: '',
                    }));
                } else {
                    // Invalid or expired code
                    setState((prevFormData) => ({
                        ...prevFormData,
                        errorMessage: "The code is invalid or has expired. Please check and try again.",
                        successMessage: '',
                        isloading: false,
                    }));
                }
            })
            .catch(error => {

                console.error("Confirmation Request Failed:", error);

                let errorMessage = "An unexpected error occurred. Please try again.";

                if (!error.response) {
                    errorMessage = "No response from server. Please check your internet connection.";
                } else if (error.response.status === 400) {
                    errorMessage = "Invalid confirmation code. Please ensure you have entered the correct one.";
                } else if (error.response.status === 404) {
                    errorMessage = "Confirmation code not found. It might have expired.";
                } else if (error.response.status === 500) {
                    errorMessage = "Server error. Please try again later.";
                } else if (typeof error.response.data === "string") {
                    errorMessage = error.response.data;
                } else if (error.response.data.errors) {
                    errorMessage = error.response.data.errors.join(', ') || "An error occurred.";
                }

                setState((prevFormData) => ({
                    ...prevFormData,
                    isloading: false,
                    errorMessage: errorMessage,
                    successMessage: '',
                }));
            });
    };


    return <div>

        <div id="myModal" className={style.modal}>


            <div className={style.modalcontent}>


                <div className={style.modalheader}>

                    <div className={style.deletetitle}>Email sent to : {email}</div>
                    <button onClick={() => {
                        closeConfirmationModal()
                    }} className={style.close}>&times;</button>
                </div>

                <div className={style.Inputcontainer}>
                    <div className={style.InputTitle}>Code</div>
                    <input className={style.inp} value={state.Code} name="Code" onInput={handleGetData} type="text"
                           required={true}/>
                </div>
                {state.errorMessage && <div className={style.ErrorMessage}>{state.errorMessage}</div>}
                {state.successMessage && <div className={style.successmessage}>{state.successMessage}</div>}


                <div className={style.buttonwrapper}>


                    <button className={style.confirmbtn} onClick={handleConfirm}>Confirm

                        {state.isloading && <span className={`material-symbols-outlined ${style.loadingicon}`}>
                                        progress_activity
                                        </span>}
                    </button>
                </div>
            </div>


        </div>

    </div>
}

export default ConfirmationEmailModal;