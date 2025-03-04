
import style from "./ProfilePage.module.css"
import {useEffect, useState} from "react";
 
import MyItemFragments from "../../MyItemsFragment/MyItemFragments";
import MyReviewsFragment  from "../../MyReviewsFragment/MyReviewsFragment";
import ChangePasswordFragment from "../../ChangePasswordFragment/ChangePasswordFragment";
import   HeadingComponent from "../../HeadingComponent/HeadingComponent";
 const  ProfilePage=()=>{
    
    const [Data,setData]=useState({

        reviewsFragment:false,
        myItemsFragment:true,
        changePasswordFragment:false,
            Loading:false,


    })

    const ShowReviewsFragment=()=>{
        setData((Data) => ({
            ...Data,
            reviewsFragment:true,
            myItemsFragment:false,
            changePasswordFragment:false,
        }));
    }
    const ShowMyItemsFragment=()=>{
        setData((Data) => ({
            ...Data,
            reviewsFragment:false,
            myItemsFragment:true,
            changePasswordFragment:false,
        }));
    }
    const ShowChangePasswordFragment=()=>{
        setData((Data) => ({
            ...Data,
            reviewsFragment:false,
            myItemsFragment:false,
            changePasswordFragment:true,
        }));
    }




    return <div>


        <div className={style.mainWrapper}>
        <HeadingComponent/>

        <div className={style.MainContainer}>


            <div className={style.navigationMenu}>

            <div className={style.navHeader}>

         
           
  
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={style.ProfilePicture} />

            <div className={style.usernameDiv}>Giorgi tughushi</div>



            </div>


            <div className={style.profileContainer}>

            
  


                <div className={style.UserInfoList}>
                
               <div className={style.InfoData}>
               <span className="material-symbols-outlined">
mail
</span>


<div className={style.UserInfotxt}>giorgi.tugushi.1@btu.edu.ge</div>
               </div>

               <div className={style.InfoData}>
               <span className="material-symbols-outlined">
 pending_actions
</span>


<div className={style.UserInfotxt}>12/02/2023</div>
               </div>

                </div>


            </div>

        <div className={style.buttonContainer}>

        
      
        <button onClick={ ShowMyItemsFragment}  className={ Data.myItemsFragment ?    style. activeFragmentBtn :  style.buttonwrapper}>My items</button>
        <button onClick={  ShowReviewsFragment}      
        className={ Data.reviewsFragment ?    style. activeFragmentBtn :  style.buttonwrapper}>Reviews</button>
        <button onClick={ ShowChangePasswordFragment}    
        className={ Data.changePasswordFragment ?    style. activeFragmentBtn :  style.buttonwrapper}>Change Password</button>
        </div>
                


            </div>
                <div className={style.MainFragment}>

      {Data.myItemsFragment   &&   <div className={style.InnerFragment}>

            
            <div className={style.FragmentHeader}>
            <span className={`material-symbols-outlined ${style.headericon}`}>
category
</span>
            <div className={style.FragmentHeaderTitle}>My items</div>

            </div>
            <MyItemFragments/>
            </div>
} 

    {Data.reviewsFragment &&   
            <div className={style.InnerFragment}>
         <div className={style.FragmentHeader}>
            <span className={`material-symbols-outlined ${style.headericon}`}>
            reviews
</span>
            <div className={style.FragmentHeaderTitle}>Reviews</div>

            </div>
            <MyReviewsFragment/>
            </div>
            }


            
    {Data.changePasswordFragment &&  
            <div className={style.InnerFragment}>

<div className={style.FragmentHeader}>
            <span className={`material-symbols-outlined ${style.headericon}`}>
            lock
</span>
            <div className={style.FragmentHeaderTitle}>Change Password</div>

            </div>

            

            <ChangePasswordFragment/>
          
            
            </div>
  }


                </div>
   


        </div>
     


        </div>











    </div>

}
export default ProfilePage;