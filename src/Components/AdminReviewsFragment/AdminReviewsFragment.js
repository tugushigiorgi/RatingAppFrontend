import style from "./AdminReviewsFragment.module.css"
import AdminReviewSubFragment from "../../Components/AdminReviewSubFragment/AdminReviewSubFragment"

const AdminReviewsFragment = () => {
    return <div className={style.MainWrapper}>
        <div className={style.Conteiner}>
            <div className={style.FragmetnTitle}>Reviews requests</div>
            <div className={style.subfragmentwrapper}>
                <div className={style.Fragment}>
                    <AdminReviewSubFragment/>
                </div>
            </div>
        </div>
    </div>
}

export default AdminReviewsFragment;