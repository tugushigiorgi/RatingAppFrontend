import {useEffect, useState} from "react";
import ApiService from "../../../Services/ApiService";
import apiService from "../../../Services/ApiService";
import styles from "./MainPage.module.css"
import TopSellersItem from "../../TopSellersItem/TopSellersItem";
import ItemComponent from "../../../Components/ItemComponent/ItemComponent";
import HeadingComponent from "../../../Components/HeadingComponent/HeadingComponent";
import SellerCreationViaCommentModal
    from "../../../Components/SellerCreationViaCommentModal/SellerCreationViaCommentModal";

import AdminApproveMessageModal from "../../../Components/AdminApproveMessageModal/AdminApproveMessageModal";
import LoadingModal from "../../LoadingModal/LoadingModal";

const MainPage = () => {


    const [state, setState] = useState({
        gameData: [],
        topsellers: [],
        sellerreviewmodal: false,
        Loading: true,
        adminapprovemessageModal: false,

        MinRating: 0,
        CurrentTitle: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState((prevState) => ({
            ...prevState,

            [name]: value,
        }))
    };


    const setSearchResults = (title, gameData) => {


        setState((prevState) => ({
            ...prevState,
            CurrentTitle: title,
            Loading: false,
            gameData: shuffleArray(gameData)

        }));
    };


    const CloseMessageModal = () => {


        setState((prevState) => ({...prevState, adminapprovemessageModal: false}));

    }

    const CloseReviewmodal = () => {

        setState((prevState) => ({...prevState, sellerreviewmodal: false}));

    }
    const OpenReviewmodal = () => {

        setState((prevState) => ({...prevState, sellerreviewmodal: true}));
    }
    const handleError = (error) => {
        setState((prevState) => ({
            ...prevState,
            Loading: false,
            gameData: [],
        }));

    };

    const SearchGameHandler = async () => {
        try {
            setState((prevState) => ({
                ...prevState,

                MinRating: 0,
            }));

            if (!state.CurrentTitle) FetchInitialData();

            const gameData = await ApiService.SearchgameBy(
                state.CurrentTitle.trim()
            );

            setSearchResults(state.CurrentTitle, gameData);
        } catch (error) {
            handleError(error);
        }
    };

    const FilterHandler = async () => {

        try {
            if (!state.CurrentTitle) {
                const gameData = await ApiService.SearchgameBy(
                    ""
                    ,
                    state.MinRating
                );
            }

            const gameData = await ApiService.SearchgameBy(
                state.CurrentTitle.trim()
                ,
                state.MinRating
            );

            setSearchResults(state.CurrentTitle, gameData);
        } catch (error) {
            handleError(error);
        }


    };

    const Categorybuttonhandler = (title) => {
        setState((prevState) => ({
            ...prevState,

            CurrentTitle: title,
        }));
    };

    const FetchGamessBytitle = async () => {
        try {
            setState((prevState) => ({...prevState, Loading: true, MinRating: 0}));

            const gameData = await ApiService.SearchgameBy(state.CurrentTitle, 0);

            setSearchResults(state.CurrentTitle, gameData);
        } catch (error) {
            handleError(error);
        }
    };

    useEffect(() => {
        if (state.CurrentTitle) {
            FetchGamessBytitle();
        } else {
            FetchInitialData()
        }
    }, [state.CurrentTitle]);


    const CloseWithMessageModal = () => {

        setState((prevState) => ({...prevState, sellerreviewmodal: false, adminapprovemessageModal: true}));

    }


    const fetchTopRatedSellers = () => {
        setState(prevState => ({
            ...prevState,
            isLoading: true,
            errorMessage: ''
        }));

        ApiService.gettopratedsellers()
            .then(response => {
                if (response && response.status === 200) {
                    console.log('Top-rated sellers:', response.data);

                    setState(prevState => ({
                        ...prevState,
                        topsellers: response.data,
                        isLoading: false
                    }));
                } else {

                    handleApiError(response);
                }
            })
            .catch(error => {
                console.error('Request failed:', error);
                handleApiError(error);
            });
    };


    const handleApiError = (error) => {
        let errorMessage = 'An unexpected error occurred. Please try again later.';


        if (error.response) {
            if (error.response.data && error.response.data.errors) {
                errorMessage = error.response.data.errors.join(', ') || errorMessage;
            } else if (error.response.data) {
                errorMessage = error.response.data || errorMessage;
            } else {
                errorMessage = 'Unknown error occurred. Please try again later.';
            }
        }


        setState(prevState => ({
            ...prevState,
            isLoading: false, // Stop loading
            errorMessage: errorMessage
        }));
    };


    const FetchInitialData = async () => {
        try {

            const gameData = await ApiService.SearchgameBy()
            setSearchResults("", gameData);
        } catch (error) {
            handleError(error);
        }
    }

    function shuffleArray(array) {
        let shuffledArray = [...array]; // Create a copy to avoid modifying the original array
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // Random index
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
        }
        return shuffledArray;
    }

    useEffect(() => {
        FetchInitialData();
        fetchTopRatedSellers();
    }, [])


    return (
        <div>
            <HeadingComponent/>

            {state.sellerreviewmodal && <SellerCreationViaCommentModal CloseWithMessageModal={CloseWithMessageModal}
                                                                       CloseModal={CloseReviewmodal}/>}
            {state.adminapprovemessageModal && <AdminApproveMessageModal CloseMessageModal={CloseMessageModal}/>}

            <div className={styles.wrapper}>

                <div className={styles.content}>

                    <div className={styles.Categoriesbar}>
                        <div className={styles.CategoriesHeader}>
                    <span className={`material-symbols-outlined ${styles.cateogriesicon}`}>
                    stadia_controller
                                            </span>

                            Games
                        </div>
                        <div className={styles.Catecogireslist}>
                            <ul className={styles.Categoriesul}>


                                <li className={state.CurrentTitle === "Counter-Strike 2" ? `${styles.activatedbtn}` : ""}>
                                    <button
                                        onClick={() => Categorybuttonhandler("Counter-Strike 2")}>Counter-Strike 2
                                    </button>


                                </li>

                                <li className={state.CurrentTitle === "Team Fortress 2" ? `${styles.activatedbtn}` : ""}>
                                    <button className={styles.activatedbtn}
                                            onClick={() => Categorybuttonhandler("Team Fortress 2")}>Team Fortress 2
                                    </button>
                                </li>
                                <li className={state.CurrentTitle === "Red Dead Redemption 2" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("Red Dead Redemption 2")}>Red Dead
                                        Redemption 2
                                    </button>
                                </li>

                                <li className={state.CurrentTitle === "The Witcher 3: Wild Hunt" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("The Witcher 3: Wild Hunt")}>The
                                        Witcher 3: Wild Hunt
                                    </button>
                                </li>

                                <li className={state.CurrentTitle === "God of War" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("God of War")}>God of War</button>
                                </li>

                                <li className={state.CurrentTitle === "The Last of Us Part I" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("The Last of Us Part I")}>The Last of
                                        Us Part I
                                    </button>
                                </li>


                                <li className={state.CurrentTitle === "Metro Exodus" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("Metro Exodus")}>Metro Exodus</button>
                                </li>


                                <li className={state.CurrentTitle === "Uncharted 4: A Thief’s End" ? `${styles.activatedbtn}` : ""}>
                                    <button
                                        onClick={() => Categorybuttonhandler("Uncharted 4: A Thief’s End")}>Uncharted 4:
                                        A Thief’s End
                                    </button>
                                </li>
                                <li className={state.CurrentTitle === "Detroit: Become Human" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("Detroit: Become Human")}>Detroit:
                                        Become Human
                                    </button>
                                </li>
                                <li className={state.CurrentTitle === "Heavy Rain" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("Heavy Rain")}>Heavy Rain</button>
                                </li>


                                <li className={state.CurrentTitle === "Resident Evil 2" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("Resident Evil 2")}>Resident Evil 2
                                    </button>
                                </li>

                                <li className={state.CurrentTitle === "Alan Wake II" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("Alan Wake II")}>Alan Wake II</button>
                                </li>

                                <li className={state.CurrentTitle === "Silent Hill 2" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("Silent Hill 2")}>Silent Hill 2
                                    </button>
                                </li>


                            </ul>
                        </div>
                        <div className={styles.TopratedSellers}>
                            <div className={styles.TopratedSellereader}>
                    <span className={`material-symbols-outlined ${styles.TopratedSellericon}`}>
                    mode_heat
                                            </span>

                                Top Sellers
                            </div>

                            <div className={styles.TopratedSellerlist}>
                                {state.topsellers.map((item) => (
                                    <TopSellersItem key={item.id} id={item.id} username={item.fullName}
                                                    score={item.rating}
                                                    photo={ApiService.staticImagesLocation + item.pictureUrl}/>
                                ))}


                            </div>

                        </div>
                        {/*<div className={styles.sellerreviewWrapper}>*/}
                        {/*    <div className={styles.Reviewttxt}>Can't find Seller to Review?</div>*/}
                        {/*    <button onClick={() => OpenReviewmodal()} className={styles.reviewBtn}> Create it !</button>*/}
                        {/*</div>*/}

                    </div>
                    <div className={styles.gamescontent}>

                        <div className={styles.searchwrapper}>

                            <div>
                                <input className={styles.searchinput} name="CurrentTitle" type="text"
                                       onChange={handleInputChange}/>
                                <button className={styles.searchBtn} onClick={() => SearchGameHandler()}>
                            <span className="material-symbols-outlined">
                                    search
                                    </span>
                                </button>
                            </div>
                            <div className={styles.Filtrationdiv}>


                                <div className={styles.RatingFiltering}>

                                    <div className={styles.pricefilteringtitle}>Min Seller
                                        Rating {state.MinRating}</div>
                                    <input
                                        type="range"
                                        className={styles.ratingrangerinput}
                                        min="0"
                                        max="10"
                                        name="MinRating"
                                        step="1"
                                        value={state.MinRating}
                                        onChange={handleInputChange}
                                    />


                                </div>
                                <button className={styles.filterbtn}
                                        onClick={() => FilterHandler()}

                                >Filter
                                </button>

                            </div>


                        </div>


                        <div className={styles.itemslistwrapper}>


                            {state.gameData.map((item) => (
                                <ItemComponent sellerPictureUrl={item.sellerPictureUrl} sellerid={item.sellerId}
                                               username={item.sellerFullName} key={item.id} title={item.title}
                                               text={item.text} price={item.price} image={item.pictureUrl}/>
                            ))}

                        </div>
                        <div className={styles.notfoundWrapper}>
                            {!state.Loading && !state.gameData.length &&
                                <div className={styles.NotFounderror}>
                                    <div> Game(s) not found</div>
                                    <img src="/a9994415-956e-429d-94f8-0bb872c3c485.png" alt="Error Image not found"/>
                                </div>
                            }


                        </div>


                    </div>


                </div>


            </div>


        </div>
    );
};

export default MainPage;