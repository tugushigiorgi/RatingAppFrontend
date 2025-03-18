import style from "./AdminSellersReviewModal.module.css"

import AdminSellersReviewsModalItem from "../../Components/AdminSellersReviewsModalItem/AdminSellersReviewsModalItem"
import {useState} from "react"

const AdminSellersReviewModal = ({CloseModal, reviews}) => {
    const [state, setState] = useState({
        totalreviewsCount: 0,
        reviews: [
            ...reviews,
        ]
    });
    return <div id="myModal" className={style.modal}>
        <div className={style.modalcontent}>
            <div className={style.modalheader}>
                <div className={style.deletetitle}>Approved Reviews ({state.reviews.length})</div>
                <button onClick={() => CloseModal()} className={style.close}>&times;</button>
            </div>
            <div className={style.Listwrapper}>
                {state.reviews.map((item) => (
                    <AdminSellersReviewsModalItem
                        key={item.id}
                        date={item.publishDate}
                        comment={item.comment}
                        stars={item.review}/>

                ))}
            </div>
        </div>
    </div>
}

export default AdminSellersReviewModal;