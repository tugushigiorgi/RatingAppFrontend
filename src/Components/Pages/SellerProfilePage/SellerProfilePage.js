
import { useState } from "react";
import style from "./SellerProfilePage.module.css"
import {useParams} from "react-router";
import SellerItems from "../../SellerItems/SellerItems"
import WriteUserReviewModal from "../../WriteUserReviewModal/WriteUserReviewModal"
import AdminApproveMessageModal from "../../../Components/AdminApproveMessageModal/AdminApproveMessageModal";

const SellerProfilePage= ()=>{

    const {sellerid} =useParams()
         


    const CloseModal=()=>{
        setState(prevdata => {
            return {
                ...prevdata ,
                WriteReviewModal:false,
            }
        })
    }

    const WriteReviewbtn =()=>{

        setState(prevdata => {
            return {
                ...prevdata ,
                WriteReviewModal:true,
            }
        })
        
    } 


    const CloseReviveModalVithReview =()=>{

        setState(prevdata => {
            return {
                ...prevdata ,
                WriteReviewModal:false,
                adminappoveModal:true,
            }
        })
    }


    const CloseMessageModal=()=>{
        setState(prevdata => {
            return {
                ...prevdata ,
                adminappoveModal:false,
            }
        })


    }



    const [state,setState]=useState({
        adminapprovalmessage:false,
        WriteReviewModal:false,
        adminappoveModal:false,
        items:[
                
            {id:'1',username :"Giorgi tughushi",title:'title1',text:'cs go skin',uploaddate:'12/02/2024',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'2',username :"giorgi tughushi",title:'title2',text:'cs go wapon',uploaddate:'12/02/2083',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
            {id:'3',username :"giorgi tughushi",title:'title3',text:'cs go skin',uploaddate:'12/02/2034',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'4',username :"giorgi tughushi", title:'title4',text:'cs go wapon',uploaddate:'12/02/2029',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
            {id:'5',username :"giorgi tughushi", title:'title5',text:'cs go skin',uploaddate:'12/02/2021',price:'730',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'6',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'623523',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'2526',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'15363',username :"giorgi tughushi", title:'title1',text:'cs go skin',uploaddate:'12/02/2024',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'223',username :"giorgi tughushi", title:'title2',text:'cs go wapon',uploaddate:'12/02/2083',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
            {id:'325325',username :"giorgi tughushi", title:'title3',text:'cs go skin',uploaddate:'12/02/2034',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'425323',username :"giorgi tughushi", title:'title4',text:'cs go wapon',uploaddate:'12/02/2029',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
            {id:'5567563',username :"giorgi tughushi", title:'title5',text:'cs go skin',uploaddate:'12/02/2021',price:'730',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'6346',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'6363',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'6145236',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'1456452345',username :"giorgi tughushi", title:'title1',text:'cs go skin',uploaddate:'12/02/2024',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'235232',username :"giorgi tughushi", title:'title2',text:'cs go wapon',uploaddate:'12/02/2083',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
            {id:'4674524',username :"giorgi tughushi", title:'title3',text:'cs go skin',uploaddate:'12/02/2034',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'234764',username :"giorgi tughushi", title:'title4',text:'cs go wapon',uploaddate:'12/02/2029',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
            {id:'142534455',username :"giorgi tughushi", title:'title5',text:'cs go skin',uploaddate:'12/02/2021',price:'730',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'62342',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'45675676',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'6234523',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'17457567',username :"giorgi tughushi", title:'title1',text:'cs go skin',uploaddate:'12/02/2024',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'4562',username :"giorgi tughushi", title:'title2',text:'cs go wapon',uploaddate:'12/02/2083',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
            {id:'3463',username :"giorgi tughushi", title:'title3',text:'cs go skin',uploaddate:'12/02/2034',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'567564',username :"giorgi tughushi", title:'title4',text:'cs go wapon',uploaddate:'12/02/2029',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
            {id:'5756756',username :"giorgi tughushi", title:'title5',text:'cs go skin',uploaddate:'12/02/2021',price:'730',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'5646',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'234256',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'236',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},

    ],
        
        
        
        
        
        userrating:"12",fullname:"Giorgi tughushi", registrationDate:"12/02/2025", userphoto:"https://www.w3schools.com/howto/img_avatar.png"})
 
    return <div>
{   state.WriteReviewModal  &&    <WriteUserReviewModal CloseReviveModalVithReview={CloseReviveModalVithReview} CloseModal={ CloseModal}/>}
{state.adminappoveModal && <AdminApproveMessageModal CloseMessageModal={CloseMessageModal}/>}

    <div className={style.mainWrapper}>
 
        <div className={style.Container}>

            <div className={style.SellerDetailsWrapper}>
            <div className={style.sellerphoto}>

            <img className={style.sellerphoto} src={state.userphoto}/>

            </div>  
            <div className={style.sellerdetails}>

            <div className={style.selleruserNameWrapper}>
            <div className={style.sellerTitle}>{state.fullname}</div>
 <span className={`material-symbols-outlined ${style.verifiedicon}`}>verified</span> 
             </div>
            <div className={style.sellerRegistrationDateWrapper}>
            <span class="material-symbols-outlined">calendar_month</span>
            <div className={style.registrationtitle}>{state.registrationDate}</div>
            </div>
            <div className={style.sellerratingwrapper}>

            <span class="material-symbols-outlined">
kid_star
</span>
    <div className={style.userratingtxt}>{state.userrating}</div>

            </div>
           <button onClick={()=>WriteReviewbtn()} className={style.reviewBtn}>Write Review



           <span class="material-symbols-outlined">
edit_square
</span>
           </button>




            </div>
            </div>

             <div> 
                <div className={style.listtitle}>
                <span class="material-symbols-outlined">
menu
</span>
    Seller items
                   
                </div>
            <div className={style.sellerItemsWrapper}>
             
            {state.  items.map((item) => (
                            <SellerItems   username={item.username} key={item.id} title={item.title} text={item.text} price={item.price} image={item.photo}   />
                        ))}
            </div>

            </div>
        </div>



    </div>




    </div>
}
export default SellerProfilePage;