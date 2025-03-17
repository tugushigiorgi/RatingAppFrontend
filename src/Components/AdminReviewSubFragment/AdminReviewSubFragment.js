

import style from "./AdminReviewSubFragment.module.css"
import AdminRevivewsListItem from "../../Components/AdminsReviewListItem/AdminsReviewListItem";
import {useState,useEffect} from "react";
import ApiService from "../../Services/ApiService";

const AdminReviewSubFragment=()=>{

        const [state,setState]=useState({


            reviews: 
            [
                
              ]
              




        });


        const fetchdata = ()=>{

     
          ApiService.      ReviewsRequestsList()
          .then(response=>{
          if( response &&  response.status===200){
                 
              console.log(response.data);
          
              setState({  reviews:response.data})
          }else {
                  
    
    
                 }
    
             }).catch(error=>{
    
    
                     console.log(error);
    
            })
    



        }



        useEffect(()=>{
          fetchdata();
        },[]);

        const accepthander=(id)=>{







          ApiService.AdminApproveUserReview(id)
          .then(response=>{
            if( response &&  response.status===200){
                   
                console.log(response.data);
            
            
            }else {
                    
      
      
                   }
      
               }).catch(error=>{
      
      
                       console.log(error);
      
              })
      




            

        }
        const declinehandler=(id)=>{

           console.log("decline"+id)
         




            ApiService.AdminDeclineUserReview(id)
            .then(response=>{
              if( response &&  response.status===200){
                     
                setState((prev) => ({
                  ...prev,
                  reviews: prev. reviews.filter((item) => item.id !== id),
                  
                
              }));
              
              
              }else {
                      
        
        
                     }
        
                 }).catch(error=>{
        
        
                         console.log(error);
        
                })







        }

     return <div className={style.mainWrapper}>
    
        <div className={style.Container}>
    
    
            
            <div className={style.Listwrapper}>




            {state.reviews.map((item) => (
                <AdminRevivewsListItem key={item.id} id= {item.id  } fullname ={item.sellerFullName} stars={item.review} date={item.publishDate} comment={item.comment} accepthander={accepthander} declinehandler={declinehandler} />

        ))}



            
  

            </div>
    
    
    
    
    
    
    
    
    
        </div>
    
        </div>
}

export default AdminReviewSubFragment;