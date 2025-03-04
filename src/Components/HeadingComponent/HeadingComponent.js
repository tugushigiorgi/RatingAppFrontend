
import style from './HeadingComponent.module.css'
import { useLocation } from 'react-router-dom';
import {useContext, useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import {useNavigate} from "react-router";
 
import ApiService from "../../Services/ApiService";
const HeadingComponent =()=>{



    // const {   setCartVisible,cartItems, setCartItemTotal ,  userballance,setuserballance, ResetAll} = useCart();
    const navigate=useNavigate()
    const { pathname } = useLocation();
    const  [state,setState]=useState({isAdmin:false, balance:12, cartquantity:0,})
    // const signout=()=>{



    //     ResetAll()
    //     localStorage.setItem("token", '')
    //     navigate("/signin")

    // }

    // useEffect(()=>{
    //     try{
    //         const token= localStorage.getItem("token")

    //         if(token){
    //             try {
    //                 const fetch=async ()=>{

    //                 const { success, data, errorMessage } = await ApiService.HeaderInfo()

    //                 if (success) {
    //                     setCartItemTotal(data.cartQauntity)
    //                    setState((prev)=>({...prev,
    //                     balance: data.balance,
    //                        isAdmin: data.isAdmin,
    //                        cartquantity:data.cartQauntity
    //                    }))
    //                     setuserballance(data.balance)
    //                 } else {
    //                     console.error(`Error fetching all books: ${errorMessage}`);
    //                 }
    //                 }
    //                fetch()
    //             } catch (error) {
    //                 console.error(error);
    //             }

    //         }else{

    //             navigate("/signin")


    //         }

    //     }catch (e){


    //     }



    // },[])

     


    return <div>

     
        <div className={style.container}>


            <div className={style.Logowrapper}>


                                {/* <img   className={style.leverxlogo} src = "https://workshub.imgix.net/63e1b0e3502ceaf9de3491ac0f8deed7?fit=clip&crop=entropy&auto=format" /> */}
                
            </div>
            <div className={style.navwrapper}>
                <button  onClick={()=>{navigate("/")}}       className={`${style.homebtn} ${pathname === '/' ? style.active : ''}`}>Home</button>
          
               
 
                <button onClick={()=>{navigate("/profile")}}     className={`${style.profilebtn} ${pathname === '/profile' ? style.active : ''}`}>Profile</button>
                <button  onClick={()=>{navigate("/login")}} className={style.signinbtn}>Sign in</button>
            </div>

        </div>

 

    </div>
}

export default HeadingComponent;