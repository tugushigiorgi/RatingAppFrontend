import style from './MyReviewsitem.module.css';

const MyReviewsitem = ({date, rating, comment}) => {


    return <div>

        <div className={style.MainWrapper}>

            <div className={style.Container}>

                <div className={style.headingwrapper}>
                    <div><span class="material-symbols-outlined">
calendar_month
</span></div>
                    <div>{date}</div>

                </div>
                <div className={style.ScoreWrapper}>

                    <div className={style.Score}>{rating}/5</div>
                    <span className={`material-symbols-outlined  ${style.star}`}>
reviews
</span>
                </div>
                <div className={style.CommentWrapper}>
                    <div className={style.commenttitle}>Comment</div>
                    <div className={style.CommentContent}>{comment} </div>
                </div>
            </div>


        </div>


    </div>


}
export default MyReviewsitem;