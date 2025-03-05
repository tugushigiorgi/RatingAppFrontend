
import style from "./AdminReviewsFragment.module.css"

import {useState} from "react";
import AdminReviewRegistrationSubFragment from "../../Components/AdminReviewRegistrationSubFragment/AdminReviewRegistrationSubFragment";
import  AdminReviewSubFragment from "../../Components/AdminReviewSubFragment/AdminReviewSubFragment"

const AdminReviewsFragment=()=>{

    const [state,setState] = useState({

        reviewsSubFragment:true,
        reviewsAndRegistrationSubFragment:false



    });


    const openReviewFragmenthandler=()=>{
        setState(prevdata => {
            return {
                ...prevdata ,
                reviewsSubFragment:true,
        reviewsAndRegistrationSubFragment:false
            }
        })
    }

    const openReviewRegistraionFragmenthandler=()=>{

        setState(prevdata => {
            return {
                ...prevdata ,
                reviewsSubFragment:false,
        reviewsAndRegistrationSubFragment:true
            }
        })
    }

    return <div className={style.MainWrapper}>

    <div className={style.Conteiner}>

    <div className={style.FragmetnTitle}>Reviews requests</div>
  
    <div className={style.subfragmentwrapper}>

    <div className={style.FragmentTitleWrapper}>
        <div  onClick={()=>openReviewFragmenthandler()} className={state. reviewsSubFragment ? style.activesubbutton : style.navbutton}>Reviews</div>
        <div onClick={()=>openReviewRegistraionFragmenthandler()}  className={state.   reviewsAndRegistrationSubFragment ? style.activesubbutton : style.navbutton}>Reviews&Registration </div>
    </div>
    <div className={style.Fragment}>

        {state.reviewsSubFragment && <AdminReviewSubFragment/>}
        {state.reviewsAndRegistrationSubFragment && <AdminReviewRegistrationSubFragment/>}
    </div>

    </div>



    </div>  
    </div>
}

export default AdminReviewsFragment;