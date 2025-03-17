
import style from './HeadingComponent.module.css'
import { useLocation } from 'react-router-dom';
import {useContext, useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import {useNavigate} from "react-router";
 
import ApiService from "../../Services/ApiService";
const HeadingComponent =()=>{



     const navigate=useNavigate()
    const { pathname } = useLocation();
    const  [state,setState]=useState({isAdmin:false,isLoggedIn:false})
    const signout=()=>{



  
        localStorage.setItem("token", '')
        navigate("/login")

    }

     
    useEffect(()=>{
        
            const token= localStorage.getItem("token")
  
            if(token){
                setState((prevState) => ({ ...prevState, isLoggedIn:true}));
            }


    },[])


    return <div>

     
        <div className={style.container}>


            <div className={style.Logowrapper}>


                                {/* <img   className={style.leverxlogo} src = "https://workshub.imgix.net/63e1b0e3502ceaf9de3491ac0f8deed7?fit=clip&crop=entropy&auto=format" /> */}
                
            </div>
            <div className={style.navwrapper}>
                <button  onClick={()=>{navigate("/")}}       className={`${style.homebtn} ${pathname === '/' ? style.active : ''}`}>Home</button>
          
               
 
         {state.isLoggedIn  &&     <button onClick={()=>{navigate("/profile")}}     className={`${style.profilebtn} ${pathname === '/profile' ? style.active : ''}`}>Profile</button>}
          {!state.isLoggedIn  &&  <button  onClick={()=>{navigate("/login")}} className={style.signinbtn}>Sign in</button>}   
     
          {state.isLoggedIn  &&  <button  onClick={()=>{signout()}} className={style.logoutBtn}>
            <div>
            log out
            </div>
   
            </button>}   

            </div>

        </div>

 

    </div>
}

export default HeadingComponent;