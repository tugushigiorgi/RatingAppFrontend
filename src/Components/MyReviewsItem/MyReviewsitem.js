




import style from './MyReviewsitem.module.css';

const MyReviewsitem =()=>{


    return <div> 

        <div className={style.MainWrapper}>

        <div className={style.Container}>

        <div className={style.headingwrapper}>
            <div><span class="material-symbols-outlined">
calendar_month
</span></div>
    <div>12/02/2023</div>

        </div>
        <div className={style.ScoreWrapper}>4/5</div>
        <div className={style.CommentWrapper}>
            <div className={style.commenttitle}>Comment</div>
            <div className={style.CommentContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum  </div>
        </div>
        </div>



        </div>





    </div>



}
export default MyReviewsitem;