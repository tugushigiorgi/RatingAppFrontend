

import style from "./AdminReviewSubFragment.module.css"
import AdminRevivewsListItem from "../../Components/AdminsReviewListItem/AdminsReviewListItem";
import {useState} from "react";


const AdminReviewSubFragment=()=>{

        const [state,setState]=useState({


            reviews: 
            [
                {
                  "id": "1",
                  "comment": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.g",
                  "fullname": "Alexander Brown",
                    "stars":5,
                  "date": "2001-09-10"
                },
                {
                "id": "2",
                  "comment": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Alexander Brown",
                    "stars":5,
                  "date": "2001-09-10"
                },
                {
                "id": "14",
                  "comment": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Alexander Brown",
                    "stars":5,
                  "date": "2001-09-10"
                },
                {
                  "id": "5",
                  "comment": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Alexander Brown",
                    "stars":5,
                  "date": "2001-09-10"
                },
                {
                  "id": "5",
                  "sellerphoto": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Anthony Lutz",
                  "email": "cortezeric@gmail.com",
                  "date": "2015-03-31"
                },
                {
                  "id": "6",
                  "sellerphoto": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Janice Miller",
                  "email": "julieolsen@french-marquez.biz",
                  "date": "1990-10-14"
                },
                {
                  "id": "7",
                  "sellerphoto": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Chad Russell",
                  "email": "gosborne@yahoo.com",
                  "date": "2016-09-19"
                },
                {
                  "id": "8",
                  "sellerphoto": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Rebecca Harrison",
                  "email": "rosejudy@anderson-carter.com",
                  "date": "2003-08-31"
                },
                {
                  "id": "9",
                  "sellerphoto": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Taylor Livingston",
                  "email": "joyce05@russell.com",
                  "date": "2017-08-15"
                },
                {
                  "id": "10",
                  "sellerphoto": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Brittany Brown",
                  "email": "rossmichelle@stone.com",
                  "date": "1985-04-06"
                },
                {
                  "id": "11",
                  "sellerphoto": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Joseph Henderson",
                  "email": "danahatfield@johnston.org",
                  "date": "2013-07-29"
                },
                {
                  "id": "12",
                  "sellerphoto": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Dylan Green",
                  "email": "ebony37@boyle-santos.com",
                  "date": "2008-04-22"
                },
                {
                  "id": "13",
                  "sellerphoto": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Andrew Mccarthy DDS",
                  "email": "sandrabarber@butler-stanton.com",
                  "date": "2004-09-14"
                },
                {
                  "id": "14",
                  "sellerphoto": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Anna Cruz PhD",
                  "email": "davistamara@payne-pratt.com",
                  "date": "2020-10-25"
                },
                {
                  "id": "15",
                  "sellerphoto": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Shannon Hughes",
                  "email": "megan15@stevens.com",
                  "date": "2006-03-23"
                },
                {
                  "id": "16",
                  "sellerphoto": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Joel Turner",
                  "email": "porterdana@yahoo.com",
                  "date": "1992-10-28"
                },
                {
                  "id": "17",
                  "sellerphoto": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Kevin Bass",
                  "email": "russellstephanie@hotmail.com",
                  "date": "1989-09-18"
                },
                {
                  "id": "18",
                  "sellerphoto": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Michael Robinson",
                  "email": "austin45@mcneil.net",
                  "date": "2006-05-24"
                },
                {
                  "id": "19",
                  "sellerphoto": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "Jonathan Young",
                  "email": "owensgregory@gmail.com",
                  "date": "1993-10-28"
                },
                {
                  "id": "20",
                  "sellerphoto": "https://www.w3schools.com/howto/img_avatar.png",
                  "fullname": "William Sanchez",
                  "email": "zanderson@yahoo.com",
                  "date": "1994-08-16"
                }
              ]
              




        });




        const accepthander=(id)=>{

            console.log("accept"+id)

        }
        const declinehandler=(id)=>{

           console.log("decline"+id)
            setState((prev) => ({
                ...prev,
                reviews: prev. reviews.filter((item) => item.id !== id),
                
              
            }));
        }

     return <div className={style.mainWrapper}>
    
        <div className={style.Container}>
    
    
            
            <div className={style.Listwrapper}>




            {state.reviews.map((item) => (
                <AdminRevivewsListItem key={item.id} id= {item.id  } fullname ={item.fullname} stars={item.stars} date={item.date} comment={item.comment} accepthander={accepthander} declinehandler={declinehandler} />

        ))}



            
  

            </div>
    
    
    
    
    
    
    
    
    
        </div>
    
        </div>
}

export default AdminReviewSubFragment;