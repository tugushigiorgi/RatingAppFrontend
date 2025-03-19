import ApiService from '../../Services/ApiService';
import style from './ChangePasswordFragment.module.css';

import {useState} from 'react';

const ChangePasswordFragment = () => {
    const [state, setState] = useState({
        Sucessmessage: "",
        userInputErrorsData: [],
        CurrentPassword: '',
        Newpassword: '',
        RepeatNewPassword: ''
    });

    const handleGetLoginData = (e) => {
        const {value, name} = e.target;
        setState(prevdata => {
            return {
                ...prevdata,
                [name]: value
            }
        })
    };
    const handleUpdate = async () => {
        setState(prevData => ({
            ...prevData,
            userInputErrorsData: [],
            Sucessmessage: '',
            isLoading: true,
        }));

        const {CurrentPassword, Newpassword, RepeatNewPassword} = state;

        const errors = [];


        if (!CurrentPassword.trim()) {
            errors.push('Current Password field is required.');
        } else if (CurrentPassword.trim().length < 6) {
            errors.push('Current Password should contain at least 6 characters.');
        }

        if (!Newpassword.trim()) {
            errors.push('New Password field is required.');
        } else if (Newpassword.trim().length < 6) {
            errors.push('New Password should contain at least 6 characters.');
        }

        if (!RepeatNewPassword.trim()) {
            errors.push('Repeat Password field is required.');
        } else if (RepeatNewPassword.trim().length < 6) {
            errors.push('Repeat Password should contain at least 6 characters.');
        }

        if (Newpassword.trim() !== RepeatNewPassword.trim()) {
            errors.push('Passwords do not match.');
        }

        if (errors.length > 0) {
            setState(prevData => ({
                ...prevData,
                userInputErrorsData: [...errors],
                isLoading: false,
            }));
            return;
        }

        const dto = {
            oldPassword: CurrentPassword,
            newPassword: Newpassword,
            repeatPassword: RepeatNewPassword
        };

        try {
            const response = await ApiService.ChangePassword(dto);

            if (response && response.status === 200) {
                setState(prevData => ({
                    ...prevData,
                    Sucessmessage: response.data,
                    CurrentPassword: '',
                    Newpassword: '',
                    RepeatNewPassword: '',
                    userInputErrorsData: [],
                    isLoading: false
                }));
            } else {
                setState(prevData => ({
                    ...prevData,
                    userInputErrorsData: ["Incorrect Password"],
                    isLoading: false
                }));
            }
        } catch (error) {
            console.error("Error updating password:", error);
            setState(prevData => ({
                ...prevData,
                userInputErrorsData: [error.response?.data || "An unexpected error occurred."],
                isLoading: false
            }));
        }
    };


    return (
        <div className={style.Mainwrapper}>

            <div>

                <div className={style.inputwrapper}>
                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Current Password</div>
                        <input className={style.inp} onInput={handleGetLoginData} name="CurrentPassword" type="password"
                               required={true}/>
                    </div>
                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>New Password</div>
                        <input className={style.inp} onInput={handleGetLoginData} name="Newpassword" type="password"
                               required={true}/>
                    </div>
                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Repeat new password</div>
                        <input className={style.inp} onInput={handleGetLoginData} name="RepeatNewPassword"
                               type="password" required={true}/>
                    </div>
                </div>

                <div className={style.errorWrapper}>
                    {state.userInputErrorsData && state.userInputErrorsData.map(err => <div key={err}
                                                                                            className={style.Errordiv}>{err}</div>)}
                    {state.Sucessmessage && <div className={style.succesmessage}>{state.Sucessmessage}</div>}
                </div>

                <center>
                    <button onClick={() => handleUpdate()} className={style.UpdateBtn}>Update</button>
                </center>
            </div>

        </div>
    )
}
export default ChangePasswordFragment;