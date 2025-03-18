import style from './AdminApproveMessageModal.module.css'

const AdminApproveMessageModal = ({CloseMessageModal}) => {

    return <div id="myModal" className={style.modal}>
        <div className={style.modalcontent}>
            <div className={style.modalheader}>
                <div className={style.headertitle}>Review needs admin approval</div>
            </div>
            <div className={style.modalbody}>
                <button className={style.CloseBtn} onClick={() => CloseMessageModal()}>Close</button>
            </div>
        </div>
    </div>
}

export default AdminApproveMessageModal;    