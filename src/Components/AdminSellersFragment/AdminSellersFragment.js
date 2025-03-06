

import {useState} from "react";
import style from "./AdminSellersFragment.module.css"
import AdminSellersManageItem from "../../Components/AdminSellersManageItem/AdminSellersManageItem";
import AdminSellersReviewModal from "../../Components/AdminSellersReviewModal/AdminSellersReviewModal";
const AdminSellersFragment=()=>{


    const [state,setState]= useState({


        reviewsfragment:false,
        searchquery:"",
         sellerid:0,   
         sellers:[
            {
                id:1,
           email:"giorgi tughushi" ,
            fullname:"Giorgawfawghushi" ,
            date:"12/02/23/" ,
            stars:4,
             photo:"https://www.w3schools.com/howto/img_avatar.png"
            },  {
                id:7856443,
           email:"giorgi tughushi" ,
            fullname:"Giorgi tugwafawfhushi" ,
            date:"12/02/23/" ,
            stars:4,
             photo:"https://www.w3schools.com/howto/img_avatar.png"
            },
            {
                id:232353,
           email:"giorgi tughushi" ,
            fullname:"Giorgi tughusrthjrtjhi" ,
            date:"12/02/23/" ,
            stars:4,
             photo:"https://www.w3schools.com/howto/img_avatar.png"
            },
            {
                id:34675753,
           email:"giorgi tughushi" ,
            fullname:"Giowefwesfrgi tughushi" ,
            date:"12/02/23/" ,
            stars:4,
             photo:"https://www.w3schools.com/howto/img_avatar.png"
            },
            {
                id:241343,
           email:"giorgi tughushi" ,
            fullname:"Giorgi tughhrthrthrushi" ,
            date:"12/02/23/" ,
            stars:4,
             photo:"https://www.w3schools.com/howto/img_avatar.png"
            },
            {
                id:658563,
           email:"giorgi tughushi" ,
            fullname:"wefwefwGiorgi tughushi" ,
            date:"12/02/23/" ,
            stars:4,
             photo:"https://www.w3schools.com/howto/img_avatar.png"
            }
            ,
            {
                id:253463,
           email:"giorgi tughushi" ,
            fullname:"Giorgi tughusrthrtyhrthi" ,
            date:"12/02/23/" ,
            stars:4,
             photo:"https://www.w3schools.com/howto/img_avatar.png"
            },
            {
                id:23456263,
           email:"giorgi tughushi" ,
            fullname:"Gwefwefwiorgi tughushi" ,
            date:"12/02/23/" ,
            stars:4,
             photo:"https://www.w3schools.com/howto/img_avatar.png"
            },
            {
                id:673,
           email:"giorgi tughushi" ,
            fullname:"Giorgi tughushirthrthrth" ,
            date:"12/02/23/" ,
            stars:4,
             photo:"https://www.w3schools.com/howto/img_avatar.png"
            },
            {
                id:2343,
           email:"giorgi wefwefwefwtughushi" ,
            fullname:"Giorgi tughushi" ,
            date:"12/02/23/" ,
            stars:4,
             photo:"https://www.w3schools.com/howto/img_avatar.png"
            },
            {
                id:346343,
           email:"giorgi tugwefwefwehushi" ,
            fullname:"Giorgi tughushi" ,
            date:"12/02/23/" ,
            stars:4,
             photo:"https://www.w3schools.com/howto/img_avatar.png"
            }
         ]
    });

    const handlesearch = (e) => {
        const { value, name } = e.target;
        setState(prevdata => {
            return {
                ...prevdata ,
                [name]: value
            }
        })
    }

    const openModal =(id)=>{


            setState((prevdata)=>{
                return {...prevdata,reviewsfragment:true,sellerid:id}
            })


       

        // open modal here
    }

    const DeleteSeller=(id)=>{

      
        setState((prev) => ({
            ...prev,
            sellers: prev. sellers.filter((item) => item.id !== id),
            
          
        }));
    }

    const CloseModal =()=>{
        setState((prevdata)=>{
            return {...prevdata,reviewsfragment:false,sellerid:0}
        })
    }

    const FetchByQuery=()=>{
         
    }


    return <div>

        <div className={style.mainWrapper}>

      {state.reviewsfragment &&   <AdminSellersReviewModal CloseModal ={CloseModal} sellerid={state.sellerid} />}

        <div className={style.Container}>
        <div className={style.Title}>Registered Sellers</div>
        <div className={style.SearchbarWrapper}>
            <input  onInput={ handlesearch }  name="searchquery" className={style.searchinput} type="text" placeholder="Search by  username" />
            <button onClick={()=>FetchByQuery()} className={style.inputbtn}>

            <span className={`material-symbols-outlined`}>
search
</span>
            </button>


        </div>



            <div className={style.Listwrapper}>
            
            {state. sellers.map((item) => (
            <AdminSellersManageItem DeleteSeller={DeleteSeller}  key={item.id}  id={item.id} openModal={openModal} email={item.email}  fullname={item.fullname} date={item.fullname} stars={item.stars} photo={item.photo}/>

        ))}
 </div>

        </div>

        </div>






        
    </div>
}

export default AdminSellersFragment;