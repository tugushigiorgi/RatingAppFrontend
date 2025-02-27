import style from "./PasswordResetPage.module.css"
import { useNavigate } from 'react-router';
import {   Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import ApiService from "../../../Services/ApiService";
 
const  PasswordResetPage=()=>{
    const navigate = useNavigate();
      const [userInputErrorsData, setUserInputErrorsData] = useState([]);
    const [resetpasswordData, setresetpasswordData] = useState({ code: '', password: '',repeatpassword: '' });
    const [successResetMessage, setsuccessResetMessage] = useState(false)
    const handleGetResetData = (e) => {
        const { value, name } = e.target;
        setresetpasswordData(resetpasswordData => {
            return {
                ...resetpasswordData,
                [name]: value
            }
        })
    };

 
    const handleActionReset = async () => {
        setUserInputErrorsData([]);


         const { code, password ,repeatpassword} =resetpasswordData;



         const errors = [];

        if (!code.trim()) {
            errors.push('Code is required.');
        }

        if (!password.trim()) {
            errors.push('New Password is required.');
        } else if (password.trim().length < 6) {
            errors.push('Password should contain at least 6 characters');
        }
        if (!repeatpassword.trim()) {
            errors.push('Repeat Password is required.');
        } 
        else if (password.trim() !== repeatpassword.trim()) {
            errors.push('Passwords do not match.');
        }






        if (errors.length === 0) {

            try {

                const result = await ApiService.ResetPassword(resetpasswordData);

                if (result) {

                    setsuccessResetMessage(true)

                } else {

                    setUserInputErrorsData(['Invalid Code']);
                }
            } catch (error) {

                setUserInputErrorsData([error.message]);
            }




        } else {
            setUserInputErrorsData(errors);


        }
        
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
                        <div className={style.InputTitle}>Code</div>
                        <input className={style.inp}  name="code" onInput={handleGetResetData}  type="text" required={true} />


                    </div>
                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>New Password</div>
                        <input className={style.inp}  name="password"  onInput={handleGetResetData}   type="password"  required={true} />



                    </div>
                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Repeat new password</div>
                        <input className={style.inp}  name="repeatpassword"  onInput={handleGetResetData}   type="password"  required={true} />



                    </div>
                    {successResetMessage && <div  className={style.successdivwrapper} > <div className={style.successMessage}>Password changed successfully. </div> 
                    
                    <Link to={"/login"} className={style.loginhref}>Login</Link>
                
                 </div>}

                    <div className={style.errorWrapper}>
                      {userInputErrorsData && userInputErrorsData.map(err => <div key={err} className={style.Errordiv}>{err}</div>)}
                    </div>

                   
                  


                    <div className={style.loginfooter}>


                  <button className={style.signinBtn} onClick={handleActionReset}>

                      Reset

                  </button>

                 </div>

                </div>


            </div>


        </div>

    </div>)


}

export default PasswordResetPage;