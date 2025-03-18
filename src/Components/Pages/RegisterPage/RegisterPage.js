import style from './RegisterPage.module.css'

import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useEffect, useState, useRef} from "react";
import ApiService from "../../../Services/ApiService";
import ConfirmationEmailModal from "../../ConfirmationEmailModal/ConfirmationEmailModal"

const RegisterPage = () => {


    const navigate = useNavigate();
    const isValidEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    const photoInputRef = useRef();

    const [state, setState] = useState({
        EmailConfirmationModal: false,
        isloading: false,
        userInputErrorsData: [],
        name: '',
        surname: '',
        email: '',
        password: '',
        repeatpassword: '',
        photo: ''
    });


    const handleGetLoginData = (e) => {
        const {name, value, files} = e.target;

        if (files && files.length > 0) {

            setState((prevState) => ({
                ...prevState,
                [name]: files[0],
            }));
        } else {

            setState((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };
    useEffect(() => {

        const token = localStorage.getItem("token");
        if (token) {
            navigate("/")
        }
    }, [])


    const handleActionRegister = async () => {

        setState((prevdata) => ({
            ...prevdata,
            userInputErrorsData: []
        }));
        const errors = [];

        const {name, surname, email, password, repeatpassword, photo} = state;


        if (!name.trim()) {
            errors.push('Name is required.');
        }
        if (!photo) {
            errors.push('Photo is required.');
        }
        if (!surname.trim()) {
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


        if (errors.length === 0) {


            const formDataToSend = new FormData();
            formDataToSend.append("name", state.name);
            formDataToSend.append("surname", state.surname);
            formDataToSend.append("email", state.email);
            formDataToSend.append("password", state.password);
            // formDataToSend.append("repeatpassword", state.repeatpassword);
            formDataToSend.append("photo", state.photo);

            setState((prevFormData) => ({
                ...prevFormData,
                isloading: true
            }));
            ApiService.RegisterUser(formDataToSend)
                .then(response => {
                    console.log("API Response:", response);

                    if (response.status === 200) {
                        setState(prev => ({
                            ...prev,
                            title: '',
                            text: '',
                            price: '',
                            photo: '',
                            EmailConfirmationModal: true,
                            isloading: false,
                            userInputErrorsData: [],
                            SuccessMessage: "User registered successfully! Please check your email."
                        }));

                        if (photoInputRef.current) {
                            photoInputRef.current.value = '';
                        }
                    } else {
                        handleError(response);
                    }
                })
                .catch(error => {
                    console.error("Registration Request Failed:", error);
                    handleError(error.response);
                });


            const handleError = (response) => {
                let errorMessage = "An unexpected error occurred. Please try again.";

                if (!response) {
                    errorMessage = "No response from server. Check your internet connection.";
                } else if (response.status === 400) {
                    errorMessage = response.data || "Invalid request. Please check your input.";
                } else if (response.status === 409) {
                    errorMessage = "Email already in use.";
                } else if (response.status === 500) {
                    errorMessage = "Server error. Please try again later.";
                } else if (typeof response.data === "string") {
                    errorMessage = response.data;
                } else if (typeof response.data === "object") {
                    errorMessage = response.data.errors?.join(', ') || response.data.message || "An error occurred.";
                }

                setState(prev => ({
                    ...prev,
                    isloading: false,
                    userInputErrorsData: [errorMessage]
                }));
            };
        } else {
            setState((prevdata) => ({
                ...prevdata,
                userInputErrorsData: [...errors]
            }));

        }
    };

    const closeConfirmationModal = () => {
        setState((prevdata) => ({
            ...prevdata,
            EmailConfirmationModal: false
        }));
    }

    return (<div>
        <div className={style.Maindiv}>


            {state.EmailConfirmationModal &&
                <ConfirmationEmailModal closeConfirmationModal={closeConfirmationModal} email={state.email}/>}

            <div className={style.Loginwrapper}>
                <div className={style.Logincontainer}>
                    <div className={style.Containertitle}>Sign up now</div>

                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Name</div>
                        <input className={style.inp} onInput={handleGetLoginData} name="name" type="text"/>
                    </div>
                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Surname</div>
                        <input className={style.inp} onInput={handleGetLoginData} name="surname" type="text"/>
                    </div>

                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Email</div>
                        <input className={style.inp} onInput={handleGetLoginData} name="email" type="text"/>
                    </div>
                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Password</div>
                        <input className={style.inp} onInput={handleGetLoginData} name="password" type="password"/>


                    </div>

                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Repeat password</div>
                        <input className={style.inp} onInput={handleGetLoginData} name="repeatpassword"
                               type="password"/>


                    </div>
                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Picture</div>

                        <input className={style.photoinput} ref={photoInputRef} name="photo" type="file" required={true}
                               onChange={handleGetLoginData} accept="image/gif,image/jpeg,image/png"/>


                    </div>

                    <div className={style.errorWrapper}>
                        {state.userInputErrorsData && state.userInputErrorsData.map(err =>
                            <div key={err}
                                 className={style.Errordiv}>{err}</div>)}


                    </div>


                    <div className={style.loginfooter}>


                        <button className={style.signinBtn} onClick={handleActionRegister}>
                            <div>
                                Sign up
                            </div>
                            <div>
                                {state.isloading && <span className={`material-symbols-outlined ${style.loadingicon}`}>
progress_activity
</span>}</div>
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