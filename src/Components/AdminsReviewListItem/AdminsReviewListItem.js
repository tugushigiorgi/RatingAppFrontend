
import style from "./AdminsReviewListItem.module.css"

import {useState} from "react";
const AdminsReviewListItem =({id, fullname,stars,date,comment, accepthander , declinehandler})=>{

    const [state, setState] =useState({


        isaccepted:false,
    })

    const  accept=()=>{
      accepthander(id);
        setState(prevdata => {
            return {
                ...prevdata ,
                isaccepted:true,
            }
        })

        

    }
 
    const starHandler = (value) => (
        <div className={style.starwrapperArray}>
          {Array.from({ length: value }, (_, index) => (
            <img
              key={index}
              className={style.staritem}
              src="https://www.svgrepo.com/show/13695/star.svg"
              alt="star"
            />
          ))}
        </div>
      );
      

      return <div className={style.mainWrapper}>
     
         <div className={style.Container}>
     
                <div className={style.infowrapper}>
                    <div className={style.infoContent}>
                <div className={style.infoTitle}>For</div>
                <div className={style.infovalue}>{fullname}</div>
 </div>
 <div className={style.infoContent}>
                <div className={style.infoTitle}>Stars</div>
                <div className={style.infovalue}>{starHandler(stars)}</div>
 </div>
 <div className={style.infoContent}>
                <div className={style.infoTitle}>Date</div>
                <div className={style.infovalue}>{date}</div>
 </div>

                </div>
                <div className={style.commentWrapper}>
                <div className={style.CommentTitle}>Comment</div>
                    <div className={style.CommentContent}>
                {comment}
                    </div>


                </div>
                {!state.isaccepted &&   <div className={style.crudbuttonwrapper}>
              <button onClick={() =>  declinehandler(id)} className={style.declinebtn}>delete</button>
            <button onClick={()=> accept()} className={style.acceptbtn} >accept</button>
        </div>}
   {  state.isaccepted && <div className={style.prwrapepr}>  <div className={style.acceptedTxt}>Accepted</div></div>  }
        
     
         </div>
     
      
     
         </div>
}

export default AdminsReviewListItem;