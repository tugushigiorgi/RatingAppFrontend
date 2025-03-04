import {useEffect, useState} from "react";
 import ApiService from "../../../Services/ApiService";
import apiService from "../../../Services/ApiService";
import styles from "./MainPage.module.css"
import TopSellersItem from "../../TopSellersItem/TopSellersItem"; 
 import ItemComponent from "../../../Components/ItemComponent/ItemComponent";
import HeadingComponent from "../../../Components/HeadingComponent/HeadingComponent";
import SellerCreationViaCommentModal from "../../../Components/SellerCreationViaCommentModal/SellerCreationViaCommentModal";
import LoadingModal from "../../../Components/LoadingModal/LoadingModal";
import AdminApproveMessageModal from "../../../Components/AdminApproveMessageModal/AdminApproveMessageModal";
const MainPage= () => {


    const [state, setState] = useState({
        items:[
                
            {id:'1',sellerid :1,username :"Giorgi tughushi",title:'title1',text:'cs go skin',uploaddate:'12/02/2024',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'2',username :"giorgi tughushi",title:'title2',text:'cs go wapon',uploaddate:'12/02/2083',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
            {id:'3',username :"giorgi tughushi",title:'title3',text:'cs go skin',uploaddate:'12/02/2034',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'4',username :"giorgi tughushi", title:'title4',text:'cs go wapon',uploaddate:'12/02/2029',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
            {id:'5',username :"giorgi tughushi", title:'title5',text:'cs go skin',uploaddate:'12/02/2021',price:'730',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'6',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'623523',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'2526',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'15363',username :"giorgi tughushi", title:'title1',text:'cs go skin',uploaddate:'12/02/2024',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'223',username :"giorgi tughushi", title:'title2',text:'cs go wapon',uploaddate:'12/02/2083',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
            {id:'325325',username :"giorgi tughushi", title:'title3',text:'cs go skin',uploaddate:'12/02/2034',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'425323',username :"giorgi tughushi", title:'title4',text:'cs go wapon',uploaddate:'12/02/2029',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
            {id:'5567563',username :"giorgi tughushi", title:'title5',text:'cs go skin',uploaddate:'12/02/2021',price:'730',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'6346',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'6363',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'6145236',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'1456452345',username :"giorgi tughushi", title:'title1',text:'cs go skin',uploaddate:'12/02/2024',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'235232',username :"giorgi tughushi", title:'title2',text:'cs go wapon',uploaddate:'12/02/2083',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
            {id:'4674524',username :"giorgi tughushi", title:'title3',text:'cs go skin',uploaddate:'12/02/2034',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'234764',username :"giorgi tughushi", title:'title4',text:'cs go wapon',uploaddate:'12/02/2029',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
            {id:'142534455',username :"giorgi tughushi", title:'title5',text:'cs go skin',uploaddate:'12/02/2021',price:'730',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'62342',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'45675676',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'6234523',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'17457567',username :"giorgi tughushi", title:'title1',text:'cs go skin',uploaddate:'12/02/2024',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'4562',username :"giorgi tughushi", title:'title2',text:'cs go wapon',uploaddate:'12/02/2083',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
            {id:'3463',username :"giorgi tughushi", title:'title3',text:'cs go skin',uploaddate:'12/02/2034',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'567564',username :"giorgi tughushi", title:'title4',text:'cs go wapon',uploaddate:'12/02/2029',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
            {id:'5756756',username :"giorgi tughushi", title:'title5',text:'cs go skin',uploaddate:'12/02/2021',price:'730',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
            {id:'5646',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'234256',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
            {id:'236',username :"giorgi tughushi", title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},

    ],
            sellerreviewmodal:false,
        Loading: true,
        adminapprovemessageModal :false,
        CurrentSearchType: 'bycategory',
        FilterParameters: {
            
            MaxRating: 1,
            SearchKeyword: '',
        },
        Category: 'Counter-Strike 2',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            FilterParameters: {
                ...prevState.FilterParameters,
                [name]: value,
            },
        }));
    };

    const setSearchResults = (searchType, bookData) => {
        setState((prevState) => ({
            ...prevState,
            CurrentSearchType: searchType,
            Loading: false,
            BookData: bookData,
        }));
    };
        const CloseMessageModal=()=>{
          

                setState((prevState) => ({...prevState,  adminapprovemessageModal: false }));
              
        }

        const CloseReviewmodal=()=>{

            setState((prevState) => ({...prevState, sellerreviewmodal: false }));
            
        }
        const OpenReviewmodal=()=>{

            setState((prevState) => ({...prevState, sellerreviewmodal: true }));
        }
    const handleError = (error) => {
        setState((prevState) => ({
            ...prevState,
            Loading: false,
            BookData: [],
        }));
        console.log(error.message);
    };

    const SearchBookHandler = async () => {
        try {
            if (!state.FilterParameters.SearchKeyword) return;
            setState((prevState) => ({  ...prevState, Category: ''}));
            const bookData = await ApiService.SearchBookByTitle(
                state.FilterParameters.SearchKeyword.trim()
            );

            setSearchResults('byKeyword', bookData);
        } catch (error) {
            handleError(error);
        }
    };

    const FilterHandler = async () => {
        try {
            if (state.CurrentSearchType === 'byKeyword') {
                const bookData = await ApiService.SearchBookByTitle(
                    state.FilterParameters.SearchKeyword.trim(),
                    state.FilterParameters.MaxPrice,
                    state.FilterParameters.sort
                );

                setSearchResults('byKeyword', bookData);
            } else {
                const params = {
                    category: state.Category,
                    maxprice: state.FilterParameters.MaxPrice,
                    order: state.FilterParameters.sort,
                };

                const bookData = await ApiService.Filterbooks(params);

                setSearchResults('bycategory', bookData);
            }
        } catch (error) {
            handleError(error);
        }
    };

    const Categorybuttonhandler = (name) => {
        setState((prevState) => ({
            ...prevState,
            FilterParameters: {
                ...prevState.FilterParameters,
                SearchKeyword: '',
            },
            Category: name,
        }));
    };

    const FetchBooksByCategory = async () => {
        try {
            setState((prevState) => ({ ...prevState, Loading: true }));
            const bookData = await ApiService.GetBooksByCategory(state.Category);

            setSearchResults('bycategory', bookData);
        } catch (error) {
            handleError(error);
        }
    };

    useEffect(() => {
        if (state.Category) {
            FetchBooksByCategory();
        }
    }, [state.Category]);


    const CloseWithMessageModal=()=> {
       
            setState((prevState) => ({...prevState, sellerreviewmodal: false,adminapprovemessageModal:true  }));
         
    }


    return (
        <div>
                <HeadingComponent/>
                { state.sellerreviewmodal    &&   <SellerCreationViaCommentModal CloseWithMessageModal={CloseWithMessageModal} CloseModal={CloseReviewmodal}/>} 
                {state.adminapprovemessageModal && <AdminApproveMessageModal CloseMessageModal={CloseMessageModal}/>}
        
                  {  state.Loading &&  <LoadingModal/>}
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


                                <li   className={state.Category === "Counter-Strike 2" ? `${styles.activatedbtn}` : ""}>
                                    <button
                                        onClick={() => Categorybuttonhandler("Counter-Strike 2")}>Counter-Strike 2
                                    </button>


                                </li>

                                <li className={state.Category === "Team Fortress 2" ? `${styles.activatedbtn}` : ""}>
                                    <button className={styles.activatedbtn} onClick={() => Categorybuttonhandler("Team Fortress 2")}>Team Fortress 2</button>
                                </li>
                                <li className={state.Category === "Red Dead Redemption 2" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("Red Dead Redemption 2")}>Red Dead Redemption 2
                                    </button>
                                </li>

                                <li className={state.Category === "The Witcher 3: Wild Hunt" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("The Witcher 3: Wild Hunt")}>The Witcher 3: Wild Hunt</button>
                                </li>

                                <li className={state.Category === "God of War" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("God of War")}>God of War</button>
                                </li>

                                <li className={state.Category === "The Last of Us Part I" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("The Last of Us Part I")}>The Last of Us Part I</button>
                                </li>

                              

                                <li className={state.Category === "Metro Exodus" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("Metro Exodus")}>Metro Exodus</button>
                                </li>

                              

                                <li className={state.Category === "Uncharted 4: A Thief’s End" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("Uncharted 4: A Thief’s End")}>Uncharted 4: A Thief’s End</button>
                                </li>
                                <li className={state.Category === "Detroit: Become Human" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("Detroit: Become Human")}>Detroit: Become Human</button>
                                </li>
                                <li className={state.Category === "Heavy Rain" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("Heavy Rain")}>Heavy Rain</button>
                                </li>
                               
 
                                <li className={state.Category === "Resident Evil 2" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("Resident Evil 2")}>Resident Evil 2 </button>
                                </li>

                                <li className={state.Category === "Alan Wake II" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("Alan Wake II")}>Alan Wake II</button>
                                </li>

                                <li className={state.Category === "Silent Hill 2" ? `${styles.activatedbtn}` : ""}>
                                    <button onClick={() => Categorybuttonhandler("Silent Hill 2")}>Silent Hill 2</button>
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
                            <TopSellersItem  username="Giorgi tughushi"  score="24" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHK_xd4GHWvzXkA3DygGiU3---JdQdHXbA_uTguFvckcwsMDakFodlYlaQMv4p6fWM5I&usqp=CAU"   />
                            <TopSellersItem  username="Giorgi tughushi"  score="24" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHK_xd4GHWvzXkA3DygGiU3---JdQdHXbA_uTguFvckcwsMDakFodlYlaQMv4p6fWM5I&usqp=CAU"   />

                            <TopSellersItem  username="Giorgi tughushi"  score="24" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHK_xd4GHWvzXkA3DygGiU3---JdQdHXbA_uTguFvckcwsMDakFodlYlaQMv4p6fWM5I&usqp=CAU"   />

                            <TopSellersItem  username="Giorgi tughushi"  score="24" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHK_xd4GHWvzXkA3DygGiU3---JdQdHXbA_uTguFvckcwsMDakFodlYlaQMv4p6fWM5I&usqp=CAU"   />
                            <TopSellersItem  username="Giorgi tughushi"  score="24" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHK_xd4GHWvzXkA3DygGiU3---JdQdHXbA_uTguFvckcwsMDakFodlYlaQMv4p6fWM5I&usqp=CAU"   />
                            <TopSellersItem  username="Giorgi tughushi"  score="24" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHK_xd4GHWvzXkA3DygGiU3---JdQdHXbA_uTguFvckcwsMDakFodlYlaQMv4p6fWM5I&usqp=CAU"   />

                        </div>
                        
                        </div>
                       <div className={styles.sellerreviewWrapper}>
                    <div className={styles.Reviewttxt}>Can't find Seller to Review?</div>
                        <button onClick={()=>OpenReviewmodal()} className={styles.reviewBtn}> Create it !</button>
                       </div>
 
                    </div>
                    <div className={styles.Bookcontent}>

                        <div className={styles.searchwrapper}>

                            <div>
                                <input  className={styles.searchinput} name="SearchKeyword"  type="text" value={state.FilterParameters.SearchKeyword}  onChange={handleInputChange}/>
                                <button className={styles.searchBtn} onClick={()=>SearchBookHandler()}>
                            <span className="material-symbols-outlined">
                                    search
                                    </span>
                                </button>
                            </div>
                            <div className={styles.Filtrationdiv}>
       
                          

                                <div className={styles.RatingFiltering}>

                                    <div className={styles.pricefilteringtitle}>Min Rating {state.FilterParameters.MaxRating}</div>
                                    <input
                                        type="range"
                                        className={styles.ratingrangerinput}
                                        min="1"
                                        max="100"
                                        name="MaxRating"
                                        step="1"
                                        value={state.FilterParameters.MaxRating}
                                        onChange={handleInputChange}
                                    />


                                </div>   
                                <button className={styles.filterbtn}
                                        onClick={()=>FilterHandler()}

                                >Filter</button>

                            </div>


                        </div>



                    <div className={styles.itemslistwrapper}>



                    
                        {state.  items.map((item) => (
                            <ItemComponent  sellerid={item.sellerid} username={item.username} key={item.id} title={item.title} text={item.text} price={item.price} image={item.photo}   />
                        ))}


                        {/*Not found banner image Icon*/}
                        {/* {!state.item.length && !state.Loading && (
                            <div className={styles.NotFounderror}>
                                <div> items(s) not found </div>
                                <img src="/a9994415-956e-429d-94f8-0bb872c3c485.png" alt="Error Image not found" />
                            </div>
                        )}
                        {state.Loading && (
                            <div className={styles.NotFounderror}>
                                Loading..
                                <span className="material-symbols-outlined">hourglass_empty</span>
                            </div>
                        )} */}
                    </div>
               
            
               
                
                
                </div>
                        
           
           
            </div> 
            
            
 
             </div> 
            
            
 
            </div>
    );
};

export default MainPage;