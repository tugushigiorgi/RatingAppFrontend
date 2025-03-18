import style from "./AdminSellersRegistrationItem.module.css"
import {useState} from "react";

const AdminSellersRegistrationItem = ({id, sellerphoto, fullname, email, date, declinehandler, accepthandler}) => {


    const [state, setState] = useState({isaccepted: false,});
    const accept = () => {

        setState(prevdata => {
            return {
                ...prevdata,
                isaccepted: true
            }
        })

        accepthandler(id);
    }


    return <div className={style.mainWrapper}>

        <div className={style.Container}>
            <div className={style.sellerphotowrapper}>
                <img src={sellerphoto} alt="photo" className={style.sellerphoto}/>
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
                    <div className={style.contentTitle}>Date</div>
                    <div className={style.content}>{date}</div>
                </div>
                {!state.isaccepted && <div className={style.crudbuttonwrapper}>
                    <button onClick={() => declinehandler(id)} className={style.declinebtn}>decline</button>
                    <button onClick={() => accept()} className={style.acceptbtn}>accept</button>
                </div>}
                {state.isaccepted && <div className={style.prwrapepr}>
                    <div className={style.acceptedTxt}>Accepted</div>
                </div>}


            </div>


        </div>

    </div>
}
export default AdminSellersRegistrationItem;