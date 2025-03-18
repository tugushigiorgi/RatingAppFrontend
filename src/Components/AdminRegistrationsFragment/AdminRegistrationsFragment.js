import style from "./AdminRegistrationsFragment.module.css"
import AdminSellersRegistrationItem from "../AdminSellersRegistrationItem/AdminSellersRegistrationItem"
import ApiService from "../../Services/ApiService";
import {useEffect, useState} from "react";

const AdminRegistrationsFragment = () => {


    const [state, setState] = useState({sellers: []})

    const fetchdata = () => {
        ApiService.AdmingetsellersRequests()
            .then(response => {
                if (response && response.status === 200) {
                    console.log(response.data);
                    setState({sellers: response.data})
                } else {
                    console.log("Error fetching data")
                }

            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {

        fetchdata();
    }, [])


    const declinehandler = (id) => {
        ApiService.deleteUserById(id).then(response => {
            if (response && response.status === 200) {

                fetchdata()
            } else {
                console.log("Error deleting user")
            }
        }).catch(error => {


            console.log(error);

        })


    }
    const accepthandler = (id) => {

        ApiService.AdminApproveSellerRegistrationRequests(id)
            .then(response => {
                if (response && response.status === 200) {

                    console.log("Successfully approved sellers");
                }

            }).catch(error => {


            console.log(error);

        })


    }
    return <div className={style.MainWrapper}>

        <div className={style.Conteiner}>
            <div className={style.FragmetnTitle}>Registration requests</div>
            <div className={style.Listwrapper}>
                {state.sellers.map((item) => (
                    <AdminSellersRegistrationItem
                        key={item.id} id={item.id}
                        sellerphoto={ApiService.staticImagesLocation + item.pictureUrl}
                        fullname={item.fullName} email={item.email} date={item.date}
                        declinehandler={declinehandler} accepthandler={accepthandler}/>

                ))}


            </div>

        </div>


    </div>
}

export default AdminRegistrationsFragment;