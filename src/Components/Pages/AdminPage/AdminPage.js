

import style from './AdminPage.module.css'
import AdminRegistrationsFragment from "../../AdminRegistrationsFragment/AdminRegistrationsFragment";
import AdminSellersFragment from "../../AdminSellersFragment/AdminSellersFragment";
import AdminReviewsFragment from '../../AdminReviewsFragment/AdminReviewsFragment';



import {useState} from "react";
const AdminPage =()=>{

    const [state,setState] =useState({

        adminRegistrationsFragment:true,
        adminSellersFragment:false,
        adminReviewsFragment:false





    });

    const OpenadminRegistrationfragment=()=>{
        setState(prevdata => {
            return {
                ...prevdata ,
                adminRegistrationsFragment:true,
                adminSellersFragment:false,
                adminReviewsFragment:false
            }
        })

    }
    const Openadminsellersfragment=()=>{
        setState(prevdata => {
            return {
                ...prevdata ,
                adminRegistrationsFragment:false,
                adminSellersFragment:true,
                adminReviewsFragment:false
            }
        })

    }
    const OpenadminReviewsFragment=()=>{
        setState(prevdata => {
            return {
                ...prevdata ,
                adminRegistrationsFragment:false,
                adminSellersFragment:false,
                adminReviewsFragment:true
            }
        })

    }

    return <div>
        


            <div className={style.MainWrapper}>


            <div className={style.Container}>

                <div className={style.Sidebarwrapper}>


                    <div className={style.HeaderWrapper}>

                    <img   className={style.leverxlogo} src = "https://workshub.imgix.net/63e1b0e3502ceaf9de3491ac0f8deed7?fit=clip&crop=entropy&auto=format" />
                        <div className={style.headerTitle}>Admin</div>


                    </div>
                    <div className={style.buttonWrapperTitle}>
                            Requets
                        </div>
                    <div className={style.ButtonsWrapper}>
       


 
 

                     <button className={style.navbutton} onClick={()=>OpenadminRegistrationfragment()}>
 

     <div                      className={state.adminRegistrationsFragment ?  style.activenavbtn :  style.navbuttondiv}> 
                     <span class="material-symbols-outlined">
account_box
</span>
<div className={style.buttontitle}>Registrations</div>
</div>
                     </button>


                     <button  className={style.navbutton}  onClick={()=>OpenadminReviewsFragment()}   >

 <div className={state. adminReviewsFragment ? style.activenavbtn :  style.navbuttondiv} > 
<span class="material-symbols-outlined">
forum
</span>
<div className={style.buttontitle}>Reviews</div>
</div>
</button>
 
                    </div>

                    <div className={style.buttonWrapperTitle}>
                            Manage
                        </div>
                        <div className={style.ButtonsWrapper}>

<button onClick={()=> Openadminsellersfragment()}  className={style.navbutton}>
 
<div className={state.  adminSellersFragment ? style.activenavbtn :  style.navbuttondiv}> 
<span class="material-symbols-outlined">
group
</span>
<div className={style.buttontitle}>Sellers</div>
</div>
</button>
 
</div>
<div className={style.FooterWrapper}>

<button className={style.footernavbutton}>
    <div className={style.navbuttondiv}>
    <span class="material-symbols-outlined">
logout
</span>
<div className={style.buttontitle}>log out</div>
    </div>
</button>


</div>
                </div>
                <div className={style.FragmentsWrapper}>



            {state.adminRegistrationsFragment && <AdminRegistrationsFragment/>}
        
            {state.adminSellersFragment && <AdminSellersFragment/>}
            {state.adminReviewsFragment  && <   AdminReviewsFragment/>}

                </div>


            </div>


            </div>








    </div>
}

export default AdminPage;