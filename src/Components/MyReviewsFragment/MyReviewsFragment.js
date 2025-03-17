import style from './MyReviewsFragment.module.css';
import {useEffect, useState} from 'react';
import MyReviewsitem from '../MyReviewsItem/MyReviewsitem';
import ApiService from '../../Services/ApiService';

const MyReviewsFragment = () => {
    const [state, setState] = useState({
        reviews: []
    })


    const fetchData = async () => {
        try {
            setState(prevState => ({
                ...prevState,
                isLoading: true,
                errorMessage: '',
            }));

            const response = await ApiService.getSellerReviews();

            if (response.status === 200) {
                setState(prevState => ({
                    ...prevState,
                    reviews: response.data,
                    isLoading: false,
                }));
            } else if (response.status === 204) {
                setState(prevState => ({
                    ...prevState,
                    reviews: [],
                    isLoading: false,
                    errorMessage: "No reviews found.",
                }));
            }
        } catch (error) {
            setState(prevState => ({
                ...prevState,
                isLoading: false,
                errorMessage: "Failed to fetch reviews. Please try again.",
            }));
        }
    };


    useEffect(() => {
        fetchData();

    }, [])


    return <div>
        <div className={style.ReviewsList}>

            {state.reviews.map((item) => (
                <MyReviewsitem key={item.id} date={item.publishDate} rating={item.review} comment={item.comment}/>
            ))}

        </div>
    </div>


}

export default MyReviewsFragment;