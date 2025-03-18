import {useState, useEffect} from "react";
import style from "./AdminSellersFragment.module.css"
import AdminSellersManageItem from "../../Components/AdminSellersManageItem/AdminSellersManageItem";
import AdminSellersReviewModal from "../../Components/AdminSellersReviewModal/AdminSellersReviewModal";
import ApiService from "../../Services/ApiService";

const AdminSellersFragment = () => {


    const [state, setState] = useState({
        reviewsfragment: false,
        searchquery: "",
        sellerid: 0,
        sellers: []
    });

    const fetchdata = () => {
        ApiService.getRegisteredSellersDetailed()
            .then(response => {
                if (response && response.status === 200) {
                    console.log(response.data)
                    setState((prev) => ({
                        ...prev,
                        sellers: [...response.data]
                    }));
                } else {
                }

            }).catch(error => {
            console.log(error);

        })


    }
    useEffect(() => {

        fetchdata();
    }, [])
    const handlesearch = (e) => {
        const {value, name} = e.target;
        setState(prevdata => {
            return {
                ...prevdata,
                [name]: value
            }
        })
    }

    const openModal = (reviews) => {
        setState((prevdata) => {
            return {...prevdata, reviewsfragment: true, reviews: reviews}
        })
    }
    const DeleteSeller = (id) => {
        ApiService.deleteUserById(id).then(response => {
            if (response && response.status === 200) {
                setState((prev) => ({
                    ...prev,
                    sellers: prev.sellers.filter((item) => item.id !== id),
                }));
            } else {
            }
        }).catch(error => {
            console.log(error);
        })
    };
    const CloseModal = () => {
        setState((prevdata) => {
            return {...prevdata, reviewsfragment: false, sellerid: 0}
        })
    }
    useEffect(() => {
        if (state.searchquery.length == 0) {
            fetchdata();
        }
    }, [state.searchquery])
    const FetchByQuery = () => {
        if (state.searchquery) {
            ApiService.getRegisteredSellersDetailedByUsername(state.searchquery)
                .then(response => {
                    if (response && response.status === 200) {
                        console.log(response.data)
                        setState((prev) => ({
                            ...prev,
                            sellers: [...response.data]
                        }));
                    } else {

                        console.log("Error fetching data");
                    }

                }).catch(error => {


                console.log(error);

            })

        }


    }


    return <div>

        <div className={style.mainWrapper}>
            {state.reviewsfragment && <AdminSellersReviewModal CloseModal={CloseModal} reviews={state.reviews}/>}
            <div className={style.Container}>
                <div className={style.Title}>Registered Sellers</div>
                <div className={style.SearchbarWrapper}>
                    <input onInput={handlesearch} name="searchquery" className={style.searchinput} type="text"
                           placeholder="Search by  username"/>
                    <button onClick={() => FetchByQuery()} className={style.inputbtn}>
                        <span className={`material-symbols-outlined`}>search</span>
                    </button>
                </div>
                <div className={style.Listwrapper}>

                    {state.sellers.map((item) => (
                        <AdminSellersManageItem
                            DeleteSeller={DeleteSeller}
                            reviews={item.reviews}
                            key={item.id}
                            id={item.id}
                            openModal={openModal}
                            email={item.email}
                            fullname={item.fullName}
                            date={item.date}
                            stars={item.totalRating}
                            photo={ApiService.staticImagesLocation + item.pictureUrl}/>

                    ))}
                </div>

            </div>

        </div>


    </div>
}

export default AdminSellersFragment;