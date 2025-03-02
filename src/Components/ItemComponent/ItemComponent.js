

import style from './ItemComponent.module.css';


const ItemComponent=({title,text,price,image,username})=>{


    return (
        <div className={style.MainWrapper}>
            <div className={style.Container}>
       
             


              
 
                <div className={style.ImageContainer}>
                    <img src={image} alt="Image" className={style.ImageItem}/>
                </div>
                <div className={style.txtdiv}> 
                <div onClick={()=>console.log("AE")} className={style.userinfowrapper}>

<img className={style.userphotowrapper} src={image}/> 
<div className={style.usernamewrapper}>{username}</div>
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