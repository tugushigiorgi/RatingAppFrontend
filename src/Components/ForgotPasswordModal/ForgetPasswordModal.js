import  style from './ForgetPasswordModal.module.css'
import {useEffect, useState} from "react";
const ForgetPasswordModal = ({ClosePasswordResetModal})=>{

    const emailValidationRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const [state,setState]=useState({isSuccess:false,userInputErrorsData:[],email: ''})

    const handleGetforgotPassword = (e) => {
                const { value, name } = e.target;
                setState(prevdata => {
                    return {
                        ...prevdata ,
                        [name]: value
                    }
                })
            }


 const handleActionLogin = async () => {
    //    setUserInputErrorsData([]);

        setState(prevdata => {
            return {
                ...prevdata ,
                userInputErrorsData:[]
            }
        })


        const { email } = state;



        const errors = [];

        if (!email.trim()) {
            errors.push('Email is required.');
        } else if (!emailValidationRegex.test(email.trim())) {
            errors.push('Invalid Email format');
        }
       
        if (errors.length === 0) {
            
            try {
                setState(prevdata => {
                    return {
                        ...prevdata ,
                        isSuccess:true,
                        userInputErrorsData:[]
                    }
                })
            //    const result = await ApiService.Login(loginData);

                // if (result) {

                //    navigate("/")

                // } else {

                //     setUserInputErrorsData(['Invalid email or password']);
                // }
                console.log(state);
            } catch (error) {
                setState(prevdata => {
                    return {
                        ...prevdata ,
                        userInputErrorsData:[...error.message]
                    }
                })
             //   setUserInputErrorsData([error.message]);
            }




        } else {
            setState(prevdata => {
                return {
                    ...prevdata ,
                    userInputErrorsData:[...errors]
                }
            })
          //  setUserInputErrorsData(errors);


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
 {state.userInputErrorsData && state.userInputErrorsData.map(err => <div key={err}
                                                                                                           className={style.ErrorMessage}>{err}</div>)}
                               {state.isSuccess  &&  <div className={style.successmessage} >
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