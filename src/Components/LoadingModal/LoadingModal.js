
import style from './LoadingModal.module.css'

const LoadingModal=( )=>{



     return     <div id="myModal" className={style.modal}>
        
        
                   <div className={style.modalcontent}>
        
                        <div className={style.modalheader}> 
                        
                        <div className={style.headertitle}>

                        <span className={`material-symbols-outlined ${style.loadingicon}`}>
progress_activity
</span>
<div>Loading</div>


                        </div>
                       
                        </div>
 
                        
                    </div>
                </div>
}

export default LoadingModal;    