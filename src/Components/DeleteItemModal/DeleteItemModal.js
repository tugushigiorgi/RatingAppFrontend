
import style from './DeleteItemModal.module.css';

 
import {useEffect, useState,useRef} from "react";
const DeleteItemModal =({CloseDeleteModal,ConfirmDeletionCallback,title})=>{

 
    
    
        return     <div id="myModal" className={style.modal}>
    
    
               <div className={style.modalcontent}>
    
                    <div className={style.modalheader}> 
                    
                    <div className={style.headertitle}>Are you sure you want to delete "{title}" ?</div>
                   
                    </div>
      
                    <div className={style.modalbody}>
                    <button className={style.DeleteBtn} onClick={()=>ConfirmDeletionCallback()}>Delete</button>
                        <button className={style.CloseBtn}  onClick={()=>CloseDeleteModal()}>Close</button>
                    </div>
                </div>
            </div>
    
        
    
 

};

export default DeleteItemModal;