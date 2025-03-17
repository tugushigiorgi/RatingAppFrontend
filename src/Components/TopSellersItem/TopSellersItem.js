
import style from './TopSellersItem.module.css'
import {useNavigate} from "react-router";

const TopSellersItem =({id,username,score,photo})=>{



    const navigate=useNavigate()
    

    return <div onClick={()=>{navigate("/seller/"+id)}} >
        <div className={style.MainWrapper}>
        <div className={style.Content}>
         <div className={style.imgwrapper}>

            <img src={photo} alt={username} className={style.photo}/>
         </div>
         <div className={style.usernamewrapper}>

        <div>{username}</div>
        <div className={style.scorewrapper}>
        <span className={`material-symbols-outlined ${style.staricon}`}>
kid_star
</span>
             <div>{score}</div>
        </div>
       
         </div>
       
        </div>
        </div>





    </div>

}

export default TopSellersItem;