import style from './RegisterPage.module.css'

import { useNavigate } from 'react-router';
import {   Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import ApiService from "../../../Services/ApiService";

const RegisterPage = ()=>{


    const navigate = useNavigate();
    const isValidEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    // const [userInputErrorsData, setUserInputErrorsData] = useState([]);
    // const [RegisterData, setRegisterData] = useState({ name: '', surname: '', email: '', password: '', repeatpassword: '' });
   


    const [state, setState] = useState({ userInputErrorsData:[],name: '', surname: '', email: '', password: '', repeatpassword: '' });



    const handleGetLoginData = (e) => {
        const { value, name } = e.target;
        setState((prevdata) => ({
            ...prevdata,
            [name]: value
        }));
    };

        // useEffect(()=>{

        // const token = localStorage.getItem("token");
        // if(token) {
        //     navigate("/")
        // }},[])

    

    const handleActionLogin = async () => {
     //   setUserInputErrorsData([]);
        setState((prevdata) => ({
            ...prevdata,
            userInputErrorsData:[]
        }));
        const errors = [];

        const {name,surname, email, password, repeatpassword } = state;


        if(!name.trim()){
            errors.push('Name is required.');
        }
        if(!surname.trim()){
            errors.push('Surname is required.');
        }
        if (!email.trim()) {
            errors.push('Email is required.');
        } else if (!isValidEmail.test(email.trim())) {
            errors.push('Invalid Email format');
        }

        if (!password.trim()) {
            errors.push('Password is required.');
        } else if (password.trim().length < 6) {
            errors.push('Password should contain at least 6 characters');
        }

        if (password.trim() !== repeatpassword.trim()) {
            errors.push('Passwords do not match.');
        }



        if ( errors.length === 0) {



            try {
                const result = await ApiService.Register(state);
                if (result) {

                    console.log('Register  successful');
                    navigate("/")
                } else {
                    setState((prevdata) => ({
                        ...prevdata,
                        userInputErrorsData:['Invalid email or password']
                    }));
                  //  setUserInputErrorsData(['Invalid email or password']);
                }
            } catch (error) {
                setState((prevdata) => ({
                    ...prevdata,
                    userInputErrorsData:["Server error"]
                }));
                //setUserInputErrorsData([error.message]);
            }








        } else {
            setState((prevdata) => ({
                ...prevdata,
                userInputErrorsData:[...errors]
            }));
            // setUserInputErrorsData(errors);
            // console.log(userInputErrorsData);
        }
    };



    return (<div>
        <div className={style.Maindiv}>
   <Link to="/">  
                <img   className={style.leverxlogo} src = "https://workshub.imgix.net/63e1b0e3502ceaf9de3491ac0f8deed7?fit=clip&crop=entropy&auto=format" />

                </Link>
            <div className={style.Loginwrapper}>
                <div className={style.Logincontainer}>
                    <div className={style.Containertitle}>Sign up now</div>

                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Name</div>
                        <input className={style.inp} onInput={handleGetLoginData}  name="name" type="text"/>
                    </div>
                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Surname</div>
                        <input className={style.inp} onInput={handleGetLoginData}  name="surname" type="text"/>
                    </div>

                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Email</div>
                        <input className={style.inp} onInput={handleGetLoginData}  name="email" type="text"/>
                    </div>
                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Password</div>
                        <input className={style.inp} onInput={handleGetLoginData} name="password" type="password"/>


                    </div>

                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Repeat password</div>
                        <input className={style.inp} onInput={handleGetLoginData} name="repeatpassword"          type="password"/>


                    </div>


                    <div className={style.errorWrapper}>
                        {state.userInputErrorsData && state.userInputErrorsData.map(err => <div key={err}
                                                                         className={style.Errordiv}>{err}</div>)}


                    </div>


                    <div className={style.loginfooter}>


                        <button className={style.signinBtn} onClick={handleActionLogin}>

                            Sign up

                        </button>

                        <div className={style.footertitle}>Already have account ? <Link className={style.signuplink}
                                                                                        to="/login">Sign in</Link>
                        </div>
                    </div>

                </div>


            </div>


        </div>

    </div>)


}

export default RegisterPage;