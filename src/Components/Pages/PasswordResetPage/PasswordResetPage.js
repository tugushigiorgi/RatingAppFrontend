import style from "./PasswordResetPage.module.css"
import { useNavigate } from 'react-router';
import {   Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import ApiService from "../../../Services/ApiService";
 
const  PasswordResetPage=()=>{
    const navigate = useNavigate();
    const [state,setState]=useState({isSucces:false,isLoading:false,successResetMessage:false,userInputErrorsData:[], password: '',repeatpassword: ''});

    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
  const handleGetResetData = (e) => {
        const { value, name } = e.target;
        setState(prevdata => {
            return {
                ...prevdata,
                [name]: value
            }
        })
    };


    const handleActionReset = async () => {
        // Clear previous errors
        setState(prevData => ({
            ...prevData,
            userInputErrorsData: []  // Clear any previous errors before validating
        }));

        const { password, repeatpassword } = state;

        const errors = [];

        // Validate password fields
        if (!password.trim()) {
            errors.push("New Password is required.");
        } else if (password.trim().length < 6) {
            errors.push("Password should contain at least 6 characters.");
        }

        if (!repeatpassword.trim()) {
            errors.push("Repeat Password is required.");
        } else if (password.trim() !== repeatpassword.trim()) {
            errors.push("Passwords do not match.");
        }

        if (errors.length > 0) {

            setState(prevData => ({
                ...prevData,
                userInputErrorsData: errors
            }));
            return;
        }


        try {
            setState(prevData => ({
                ...prevData,
                isLoading: true
            }));

            const dto = {
                password: state.password,
                newpassword: state.repeatpassword,
                token: token
            };

            const response = await ApiService.Recoverpass(dto);

            if (response && response.status === 200) {
                // Success: password updated
                setState(prevData => ({
                    ...prevData,
                    email: "",
                    isLoading: false,
                    isSucces: true,
                    successMessage: "Password updated successfully."
                }));
            } else {

                handleApiError(response);
            }
        } catch (error) {
            // Catch unexpected errors
            console.error("Error updating password:", error);
            setState(prevData => ({
                ...prevData,
                isLoading: false,
                userInputErrorsData: ["An unexpected error occurred. Please try again."]
            }));
        }
    };


    const handleApiError = (response) => {
        let errorMessage = "An unexpected error occurred. Please try again.";

        if (response && response.data) {
            if (typeof response.data === 'string') {
                errorMessage = response.data;
            } else if (response.data.errors) {
                errorMessage = response.data.errors.join(', ') || errorMessage;
            }
        }

        setState(prevData => ({
            ...prevData,
            isLoading: false,
            userInputErrorsData: [errorMessage]
        }));
    };




    return (<div>

         <div className={style.Maindiv}>
            <Link to="/">  
                <img   className={style.leverxlogo} src = "https://workshub.imgix.net/63e1b0e3502ceaf9de3491ac0f8deed7?fit=clip&crop=entropy&auto=format" />

                </Link>
            <div className={style.Loginwrapper}>
                <div className={style.Logincontainer}>
                    <div className={style.Containertitle}>Password Reset</div>

                  
                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>New Password</div>
                        <input className={style.inp}  name="password"  onInput={handleGetResetData}   type="password"  required={true} />



                    </div>
                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Repeat new password</div>
                        <input className={style.inp}  name="repeatpassword"  onInput={handleGetResetData}   type="password"  required={true} />



                    </div>
                    {state.successResetMessage && <div  className={style.successdivwrapper} > <div className={style.successMessage}>Password changed successfully. </div> 
                    
                    <Link to={"/login"} className={style.loginhref}>Login</Link>
                
                 </div>}

                    <div className={style.errorWrapper}>
                      {state.userInputErrorsData && state.userInputErrorsData.map(err => <div key={err} className={style.Errordiv}>{err}</div>)}
                    </div>

                   
                  
                    { state.isSucces &&<div className={style.passwrapepr}>Password updated, you can now <Link to='/login' className={style.lnkfw}>log in </Link></div>}


                    <div className={style.loginfooter}>


                  <button className={style.signinBtn} onClick={handleActionReset}>
                <div>
                     Reset
                </div>
                     <div>
   {  state.isLoading  &&         <span className={`material-symbols-outlined ${style.loadingicon}`}>
progress_activity
</span>     }</div>
                  </button>


          

                 </div>
                 </div>


            </div>


        </div>

    </div>)


}

export default PasswordResetPage;