import {useEffect, useState} from "react";
import style from "./SellerProfilePage.module.css"
import {useParams} from "react-router";
import SellerItems from "../../SellerItems/SellerItems"
import ApiService from "../../../Services/ApiService";
import WriteUserReviewModal from "../../WriteUserReviewModal/WriteUserReviewModal"
import AdminApproveMessageModal from "../../../Components/AdminApproveMessageModal/AdminApproveMessageModal";
import LoadingModal from "../../LoadingModal/LoadingModal";

const SellerProfilePage = () => {

    const {sellerid} = useParams()
    const [state, setState] = useState({
        adminapprovalmessage: false,
        WriteReviewModal: false,
        adminappoveModal: false,
        items: [],
        userinfo: {
            fullName: '',
            pictureUrl: '',
            rating: '',
            registretionDate: ''


        }

    })


    const CloseModal = () => {
        setState(prevdata => {
            return {
                ...prevdata,
                WriteReviewModal: false,
            }
        })
    }

    const WriteReviewbtn = () => {

        setState(prevdata => {
            return {
                ...prevdata,
                WriteReviewModal: true,
            }
        })

    }


    const CloseReviveModalVithReview = () => {

        setState(prevdata => {
            return {
                ...prevdata,
                WriteReviewModal: false,
                adminappoveModal: true,
            }
        })
    }


    const CloseMessageModal = () => {
        setState(prevdata => {
            return {
                ...prevdata,
                adminappoveModal: false,
            }
        })


    }


    const fetchData = () => {
        setState(prevData => ({
            ...prevData,
            isLoading: true,
            errorMessage: ''
        }));

        ApiService.getSellerProfileInfo(sellerid)
            .then(response => {
                if (response && response.status === 200) {
                    console.log(response.data);
                    setState(prevData => ({
                        ...prevData,
                        items: response.data.gameObjects,
                        userinfo: response.data.userInfo,
                        isLoading: false
                    }));
                } else {
                    setState(prevData => ({
                        ...prevData,
                        isLoading: false,
                        errorMessage: 'Failed to fetch profile data.'
                    }));
                }
            })
            .catch(error => {

                console.error('Error fetching data:', error);
                setState(prevData => ({
                    ...prevData,
                    isLoading: false,
                    errorMessage: error.message || 'An unexpected error occurred.'
                }));
            });
    };

    useEffect(() => {
        fetchData();
    }, [])


    return <div>
        {state.isLoading && <LoadingModal/>}
        {state.WriteReviewModal &&
            <WriteUserReviewModal sellerid={sellerid} CloseReviveModalVithReview={CloseReviveModalVithReview}
                                  CloseModal={CloseModal}/>}
        {state.adminappoveModal && <AdminApproveMessageModal CloseMessageModal={CloseMessageModal}/>}

        <div className={style.mainWrapper}>

            <div className={style.Container}>

                <div className={style.SellerDetailsWrapper}>
                    <div className={style.sellerphoto}>

                        <img className={style.sellerphoto}
                             src={ApiService.staticImagesLocation + state.userinfo.pictureUrl}/>

                    </div>
                    <div className={style.sellerdetails}>

                        <div className={style.selleruserNameWrapper}>
                            <div className={style.sellerTitle}>{state.userinfo.fullName}</div>
                            <span className={`material-symbols-outlined ${style.verifiedicon}`}>verified</span>
                        </div>
                        <div className={style.sellerRegistrationDateWrapper}>
                            <span class="material-symbols-outlined">calendar_month</span>
                            <div className={style.registrationtitle}>{state.userinfo.registretionDate}</div>
                        </div>
                        <div className={style.sellerratingwrapper}>

            <span class="material-symbols-outlined">
kid_star
</span>
                            <div className={style.userratingtxt}>{state.userinfo.rating}</div>

                        </div>
                        <button onClick={() => WriteReviewbtn()} className={style.reviewBtn}>Write Review


                            <span class="material-symbols-outlined">
edit_square
</span>
                        </button>


                    </div>
                </div>

                <div>
                    <div className={style.listtitle}>
                <span class="material-symbols-outlined">
menu
</span>
                        Seller items

                    </div>
                    <div className={style.sellerItemsWrapper}>

                        {state.items.map((item) => (
                            <SellerItems username={item.username} key={item.id} title={item.title} text={item.text}
                                         price={item.price} image={ApiService.staticImagesLocation + item.pictureUrl}/>
                        ))}
                    </div>

                </div>
            </div>


        </div>


    </div>
}
export default SellerProfilePage;