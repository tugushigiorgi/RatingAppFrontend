import style from './HeadingComponent.module.css'
import {useLocation} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react'

import {useNavigate} from "react-router-dom";


const HeadingComponent = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation();
    const [state, setState] = useState({isAdmin: false, isLoggedIn: false})
    const signout = () => {
        localStorage.setItem("token", '')
        navigate("/login")

    }
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setState((prevState) => ({...prevState, isLoggedIn: true}));
        }


    }, [])
    return <div>
        <div className={style.container}>
            <div className={style.Logowrapper}>
            </div>
            <div className={style.navwrapper}>
                <button onClick={() => {
                    navigate("/")
                }} className={`${style.homebtn} ${pathname === '/' ? style.active : ''}`}>Home
                </button>


                {state.isLoggedIn && <button onClick={() => {
                    navigate("/profile")
                }} className={`${style.profilebtn} ${pathname === '/profile' ? style.active : ''}`}>Profile</button>}
                {!state.isLoggedIn && <button onClick={() => {
                    navigate("/login")
                }} className={style.signinbtn}>Sign in</button>}

                {state.isLoggedIn && <button onClick={() => {
                    signout()
                }} className={style.logoutBtn}>
                    <div>
                        log out
                    </div>

                </button>}

            </div>

        </div>


    </div>
}

export default HeadingComponent;