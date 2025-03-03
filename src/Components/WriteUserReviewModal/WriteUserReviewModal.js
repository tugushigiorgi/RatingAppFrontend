
import { useState } from "react";
 
import style from "./WriteUserReviewModal.module.css"
const WriteUserReviewModal =({CloseModal})=>{

    const [state,setState] = useState({ starvalue:1, starTypes:[1,0,0,0,0],comment:"",Successmessage:"",userInputErrorsData:[]})
    const handleGetData = (e) => {
        const { value, name } = e.target;
        setState(prevdata => {
            return {
                ...prevdata ,
                [name]: value
            }
        })
    }


const SubmitHandler = ()=>{

    setState(prevdata => {
        return {
            ...prevdata ,
            userInputErrorsData:[]
        }
    })
    const {starvalue,comment } = state;



    const errors = [];
 

    if (!comment .trim()) {
        errors.push('Comment is required.');
    }  

    if (errors.length === 0) {

        try {

           console.log(starvalue,comment)
        } catch (error) {
            setState(prevdata => {
                return {
                    ...prevdata ,
                    userInputErrorsData:[...error.message]
                }
            })
            
        }




    } else {
    //    setUserInputErrorsData(errors);
        setState(prevdata => {
            return {
                ...prevdata ,
                userInputErrorsData:[...errors]
            }
        })
    
}
    
}
 

 


const starClickhandler = (position) => {
    const filledArray = Array(5).fill(0);  
  
   
  
  
    filledArray.fill(1, 0, position);
  
    setState((prevData) => ({
      ...prevData,
      starvalue:position,
      starTypes:[...filledArray ],
    }));

};
 
 
   return     <div id="myModal" className={style.modal}>
 
 
            <div className={style.modalcontent}>
 
                 <div className={style.modalheader}> 
                 
                 <div className={style.headertitle}>Write Review</div>
                 <button   onClick={()=> CloseModal()} className={style.close}>&times;</button>
                 </div>
 
                <div className={style.StarWrapper}>

                <button   className={style.starbtn} onClick={()=>starClickhandler(1)}> 
                <img src={`/star_24dp_E3E3E3_FILL${state.starTypes[0]}_wght400_GRAD-25_opsz24.svg`} />
                </button>
               
                <button   className={style.starbtn} onClick={()=>starClickhandler(2)}> 
                <img src={`/star_24dp_E3E3E3_FILL${state.starTypes[1]}_wght400_GRAD-25_opsz24.svg`} />
                </button>
               
                <button   className={style.starbtn} onClick={()=>starClickhandler(3)}> 
                <img src={`/star_24dp_E3E3E3_FILL${state.starTypes[2]}_wght400_GRAD-25_opsz24.svg`} />
                </button>
            
                <button   className={style.starbtn} onClick={()=>starClickhandler(4)}> 
                <img src={`/star_24dp_E3E3E3_FILL${state.starTypes[3]}_wght400_GRAD-25_opsz24.svg`} />
                </button>
              
                <button    className={style.starbtn} onClick={()=>starClickhandler(5)}> 
                <img src={`/star_24dp_E3E3E3_FILL${state.starTypes[4]}_wght400_GRAD-25_opsz24.svg`} />
                </button>


                 </div>

                 <div className={style.inputsdiv}>
 
              <div className={style.Inputcontainer}>
                         <div className={style.InputTitle}>Comment</div>
                         <textarea  style={{ width: '100%', overflowWrap: 'break-word', whiteSpace: 'pre-wrap' }}   className={style.inp}  name="comment" onInput={handleGetData }   type="text" required={true} />
 
 
                     </div>
                 
                 </div>
              { state.Successmessage &&  <div className={style.Successmessage}>
                     {state.Successmessage}</div>}
                   <div className={style.errorWrapper}>
                                       {state.userInputErrorsData && state.userInputErrorsData.map(err => <div key={err} className={style.Errordiv}>{err}</div>)}
                                     </div>
                     <div className={style.Footerdv}>
                         <button onClick={SubmitHandler} className={style.Addbtn}>Submit</button>
                     </div>
             </div>
         </div>
}

export default WriteUserReviewModal