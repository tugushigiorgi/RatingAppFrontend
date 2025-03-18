import style from "./AdminSellersManageItem.module.css"

const AdminSellersManageItem = ({id, fullname, photo, date, email, stars, openModal, DeleteSeller, reviews}) => {
    return <div className={style.mainWrapper}>
        <div className={style.Container}>
            <div className={style.sellerphotowrapper}>
                <img src={photo} alt="seller photo" className={style.sellerphoto}/>
            </div>
            <div className={style.leftsection}>
                <div className={style.contentwrapper}>
                    <div className={style.contentTitle}>Full name</div>
                    <div className={style.content}>{fullname}</div>
                </div>
                <div className={style.contentwrapper}>
                    <div className={style.contentTitle}>
                        Email
                    </div>
                    <div className={style.content}>{email}</div>
                </div>
                <div className={style.contentwrapper}>
                    <div className={style.contentTitle}>Registration Date</div>
                    <div className={style.content}>{date}</div>
                </div>

                <div className={style.contentwrapper}>
                    <div className={style.contentTitle}>Rating</div>
                    <div className={style.content}>{stars}</div>
                </div>

                <div className={style.ViewAllcontentwrapper}>
                    <button onClick={() => openModal(reviews)} className={style.viewreviewsBtn}>View Reviews</button>

                </div>

                <div className={style.ViewAllcontentwrapper}>
                    <button onClick={() => DeleteSeller(id)} className={style.deleteuserBtn}>Delete</button>

                </div>


            </div>


        </div>

    </div>


}

export default AdminSellersManageItem;