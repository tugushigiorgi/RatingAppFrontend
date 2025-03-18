import style from "./AdminSellersReviewsModalItem.module.css"

const AdminSellersReviewsModalItem = ({date, comment, stars}) => {
    const starHandler = (value) => (
        <div className={style.starwrapperArray}>
            {Array.from({length: value}, (_, index) => (
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

        </div>
    </div>
}

export default AdminSellersReviewsModalItem;