import  style from './ForgetPasswordModal.module.css'
import {useEffect, useState} from "react";
const ForgetPasswordModal = ({ClosePasswordResetModal})=>{

    const emailValidationRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

   const [forgotPasswordData, setforgotPasswordData] = useState({ email: '' });
 const [userInputErrorsData, setUserInputErrorsData] = useState([]);
 const [isSuccess, setIsSuccess] = useState(false);
    const handleGetforgotPassword = (e) => {
        const { value, name } = e.target;
        setforgotPasswordData(PasswordData => {
            return {
                ...PasswordData,
                [name]: value
            }
        })
    };
 const handleActionLogin = async () => {
        setUserInputErrorsData([]);
        const { email } = forgotPasswordData;



        const errors = [];

        if (!email.trim()) {
            errors.push('Email is required.');
        } else if (!emailValidationRegex.test(email.trim())) {
            errors.push('Invalid Email format');
        }
        
        if (errors.length === 0) {

            try {

            //    const result = await ApiService.Login(loginData);

                // if (result) {

                //    navigate("/")

                // } else {

                //     setUserInputErrorsData(['Invalid email or password']);
                // }
            } catch (error) {

                setUserInputErrorsData([error.message]);
            }




        } else {
            setUserInputErrorsData(errors);


        }
    };


    return <div>

        <div id="myModal" className={style.modal}>


            <div className={style.modalcontent}>

                <div className={style.modalheader}> 
                
                <div className={style.deletetitle}>Reset Password</div>
                <button  onClick={()=>ClosePasswordResetModal(false)} className={style.close}>&times;</button>
                </div>

                  <div className={style.Inputcontainer}>
                                    <div className={style.InputTitle}>Email</div>
                                    <input className={style.inp}  name="email"  onInput={handleGetforgotPassword}     type="text"  required={true} />
            
            
            
                                </div>

                               
                                
                               

                                       {userInputErrorsData && userInputErrorsData.map(err => <div key={err}
                                                                                                           className={style.ErrorMessage}>{err}</div>)}
                               {isSuccess  &&  <div className={style.successmessage} >
                                    Check your inbox
                                </div>
                                }
                                <div className={style.buttonwrapper}>

                              

                                 <button className={style.resetbtn} onClick={  handleActionLogin} >Reset</button>
                                 </div>
                
    
            </div>
        </div>

    </div>
}

export default  ForgetPasswordModal;