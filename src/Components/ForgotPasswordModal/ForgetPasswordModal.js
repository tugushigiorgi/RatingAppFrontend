import ApiService from '../../Services/ApiService';
import style from './ForgetPasswordModal.module.css'
import {useEffect, useState} from "react";

const ForgetPasswordModal = ({ClosePasswordResetModal}) => {

    const emailValidationRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const [state, setState] = useState({
        errorMessage: "",
        SuccessMessage: "",
        isLoading: false,
        isSuccess: false,
        userInputErrorsData: [],
        email: ''
    })

    const handleGetforgotPassword = (e) => {
        const {value, name} = e.target;
        setState(prevdata => {
            return {
                ...prevdata,
                [name]: value
            }
        })
    }
    const handleActionLogin = async () => {
        setState(prevData => ({
            ...prevData,
            userInputErrorsData: []
        }));

        const {email} = state;

        setState(prevData => ({
            ...prevData,
            isLoading: true
        }));

        const errors = [];

        if (!email.trim()) {
            errors.push('Email is required.');
        } else if (!emailValidationRegex.test(email.trim())) {
            errors.push('Invalid Email format');
        }

        if (errors.length === 0) {
            try {
                setState(prevData => ({
                    ...prevData,

                    isLoading: true,
                    SuccessMessage: "",
                    errorMessage: ""
                }));

                const response = await ApiService.SendRecoverCode(email);

                if (response && response.status === 200) {
                    setState(prevData => ({
                        ...prevData,
                        email: "",
                        isLoading: false,
                        SuccessMessage: "Check your inbox for recovery instructions."
                    }));
                } else {
                    setState(prevData => ({
                        ...prevData,
                        isLoading: false,
                        errorMessage: "Something went wrong. Please try again."
                    }));
                }
            } catch (error) {
                console.error("Error:", error.response?.data || error.message);

                let errorMessage = "An unexpected error occurred. Please try again.";

                if (error.response) {
                    if (error.response.status === 404) {
                        errorMessage = "User not found with this email.";
                    } else if (typeof error.response.data === "string") {
                        errorMessage = error.response.data;
                    } else if (typeof error.response.data === "object") {
                        errorMessage = JSON.stringify(error.response.data);
                    }
                }

                setState(prevData => ({
                    ...prevData,
                    isLoading: false,
                    errorMessage
                }));
            }
        } else {
            setState(prevData => ({
                ...prevData,
                userInputErrorsData: [...errors]
            }));
        }
    };


    return <div>

        <div id="myModal" className={style.modal}>


            <div className={style.modalcontent}>

                <div className={style.modalheader}>

                    <div className={style.deletetitle}>Reset Password</div>
                    <button onClick={() => ClosePasswordResetModal(false)} className={style.close}>&times;</button>
                </div>

                <div className={style.Inputcontainer}>
                    <div className={style.InputTitle}>Email</div>
                    <input className={style.inp} value={state.email} name="email" onInput={handleGetforgotPassword}
                           type="text"
                           required={true}/>
                </div>
                {state.userInputErrorsData && state.userInputErrorsData.map(err => <div key={err}
                                                                                        className={style.ErrorMessage}>{err}</div>)}
                {state.SuccessMessage && <div className={style.successmessage}>
                    {state.SuccessMessage}
                </div>
                }


                {state.errorMessage && <div className={style.ErrorMessage}>
                    {state.errorMessage}
                </div>
                }

                <div className={style.buttonwrapper}>


                    <button className={style.resetbtn} onClick={handleActionLogin}>

                        <div> Reset</div>
                        <div>
                            {state.isLoading && <span className={`material-symbols-outlined ${style.loadingicon}`}>
                                    progress_activity
                                    </span>}
                        </div>
                    </button>
                </div>


            </div>
        </div>

    </div>
}

export default ForgetPasswordModal;