import {useNavigate} from "react-router";

import style from './ItemComponent.module.css';
import ApiService from "../../Services/ApiService";


const ItemComponent=({title,text,price,image,username,profilenav,sellerid,sellerPictureUrl})=>{



    const navigate=useNavigate();


    return (
        <div className={style.MainWrapper}>
            <div className={style.Container}>
       
             


              
 
                <div className={style.ImageContainer}>
                    <img src={ApiService.staticImagesLocation+ image} alt="Image" className={style.ImageItem}/>
                </div>
                <div className={style.txtdiv}> 
                <div onClick={()=>navigate(`/seller/${sellerid}`)} className={style.userinfowrapper}>

<img className={style.userphotowrapper} src={ApiService.staticImagesLocation+sellerPictureUrl}/> 
<div className={style.usernamewrapper}>{username.substring(0,15)}</div>
   </div>

                <div className={style.Footerdiv}>

                <div className={style.footerTxtTitle}>{title}</div>
                <div className={style.footerTxt}>{text}</div>
                <div className={style.footerPrice}>${price}</div>
                </div>
                </div>

            </div>
        </div>
    )

}

export default ItemComponent;