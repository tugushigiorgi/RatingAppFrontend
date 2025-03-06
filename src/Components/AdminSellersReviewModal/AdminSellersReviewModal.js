

import style from "./AdminSellersReviewModal.module.css"

import AdminSellersReviewsModalItem from "../../Components/AdminSellersReviewsModalItem/AdminSellersReviewsModalItem"
import {useState} from "react"
const AdminSellersReviewModal =({CloseModal})=>{

    const [state,setState] =useState({

        totalreviewsCount:0,
        reviews:[
                {
                    id:1,
                    date:"2022-01-01",
                    comment:"Great product!",
                    stars:4
                     
                },
                {
                    id:2,
                    date:"2022-01-01",
                    comment:"Great product!",
                    stars:4
                     
                },
                {
                    id:3,
                    date:"2022-01-01",
                    comment:"Great product!",
                    stars:4
                     
                },
                {
                    id:4,
                    date:"2022-01-01",
                    comment:"Great product!",
                    stars:4
                     
                },
                {
                    id:5,
                    date:"2022-01-01",
                    comment:"Great product!",
                    stars:4
                     
                },
        ]


    });

   
 
  return   <div id="myModal" className={style.modal}>


            <div className={style.modalcontent}>

                <div className={style.modalheader}> 
                
                <div className={style.deletetitle}>Reviews</div>
                <button  onClick={()=>CloseModal()} className={style.close}>&times;</button>
                </div>

                   <div className={style.Listwrapper}>

 


{state.reviews.map((item) => (
                    <AdminSellersReviewsModalItem   key={item.id} date={item.date} comment={item.comment} stars={item.stars}/>

        ))}

                  
                    </div>
    
         
        </div>

    </div>
}

export default AdminSellersReviewModal;