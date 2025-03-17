
import style from "./ProfilePage.module.css"
import {useEffect, useState} from "react";
 
import MyItemFragments from "../../MyItemsFragment/MyItemFragments";
import MyReviewsFragment  from "../../MyReviewsFragment/MyReviewsFragment";
import ChangePasswordFragment from "../../ChangePasswordFragment/ChangePasswordFragment";
import   HeadingComponent from "../../HeadingComponent/HeadingComponent";
import ApiService from "../../../Services/ApiService";
 const  ProfilePage=()=>{
    
    const [Data,setData]=useState({

        reviewsFragment:false,
        myItemsFragment:true,
        changePasswordFragment:false,
            Loading:false,
        userinfo:{
            fullname:" ",
            email:" ",
            pictureUrl:" ",
            registretionDate:" ",
            rating:"",
            
        }

    })






    const ShowReviewsFragment=()=>{
        setData((prev) => ({
            ...prev,
            reviewsFragment:true,
            myItemsFragment:false,
            changePasswordFragment:false,
        }));
    }
    const ShowMyItemsFragment=()=>{
        setData((prev) => ({
            ...prev,
            reviewsFragment:false,
            myItemsFragment:true,
            changePasswordFragment:false,
        }));
    }
    const ShowChangePasswordFragment=()=>{
        setData((prev) => ({
            ...prev,
            reviewsFragment:false,
            myItemsFragment:false,
            changePasswordFragment:true,
        }));
    }

    useEffect(()=>{

        fetchdata();

    },[])
    const fetchdata=()=>{
        ApiService.getcurrentuserInfo()
        .then(response=>{
          
            if( response &&  response.status===200){
                console.log(response.data);
                setData((prevdata) => ({
                    ...prevdata,
                    userinfo:{
                             fullname:response.data.fullName,
                        email:response.data.email,
                        pictureUrl: response.data.pictureUrl,
                        registretionDate:response.data.registretionDate,
                        rating:response.data.rating,



                    }
                })
            
            );


                
            }else {
                    
        
        
                   }
        
               }).catch(error=>{
        
        
                       console.log(error);
        
              })
    }

    return <div>


        <div className={style.mainWrapper}>
        <HeadingComponent/>

        <div className={style.MainContainer}>


            <div className={style.navigationMenu}>

            <div className={style.navHeader}>

         
           
  
            <img src={ApiService.staticImagesLocation+Data.userinfo.pictureUrl} alt="Avatar" className={style.ProfilePicture} />

            <div className={style.usernameDiv}>{Data.userinfo.fullname}</div>



            </div>


            <div className={style.profileContainer}>

            
  


                <div className={style.UserInfoList}>
                
               <div className={style.InfoData}>
               <span className="material-symbols-outlined">
mail
</span>


<div className={style.UserInfotxt}>{Data.userinfo.email}</div>
               </div>

               <div className={style.InfoData}>
               <span className="material-symbols-outlined">
 pending_actions
</span>


<div className={style.UserInfotxt}>{Data.userinfo.registretionDate}</div>
               </div>
               
               <div className={style.InfoData}>
               <span className="material-symbols-outlined">
               kid_star
</span>


<div className={style.UserInfotxt}>{Data.userinfo.rating}</div>
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