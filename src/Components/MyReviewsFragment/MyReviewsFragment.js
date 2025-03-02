


import style from './MyReviewsFragment.module.css';
import { useState } from 'react';
import  MyReviewsitem from '../MyReviewsItem/MyReviewsitem';
const MyReviewsFragment = () => {
    const [state,setState] = useState({reviews:[

            {id :1,date:"12/12/2014", rating:"4", comment:"This is a comment"},
            {id :2,date:"12/12/2014", rating:"4", comment:"This is a comment"},
            {id :3, date:"12/12/2014", rating:"4", comment:"This is a comment"},
            {id :51, date:"12/12/2014", rating:"4", comment:"This is a comment"},

    ]})


    return <div>
            <div className={style.ReviewsList}> 

            {state.reviews.map((item) => (
                <MyReviewsitem key={item.id} date={item.date} rating={item.rating} comment={item.comment} />
            ))}
 
            </div>
    </div>


}

export default MyReviewsFragment;