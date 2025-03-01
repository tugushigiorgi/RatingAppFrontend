
import style from './MyItemFragments.module.css';
import AddNewItemModal from '../AddNewItemModal/AddNewItemModal';
import MyItemsListItem from '../MyItemsListItem/MyItemsListItem';
import UpdateItemModal from '../UpdateItemModal/UpdateItemModal';
import {useEffect, useState} from "react";
import DeleteItemModal from '../DeleteItemModal/DeleteItemModal';
const MyItemFragments = () => {
 
        const [state,setState]=useState({
            addnewitemModalVisibility:false,
            UpdateItemModalvisibility:false,
            itemtoUpdate:{id:'',title:'',text:'',uploaddate:'',price:'',photo:''},
            deleteItemModalvisibility:false,
            CurrentObjectToDelete:{id:'',title:'',},
            
            items:[
                
                {id:'1',title:'title1',text:'cs go skin',uploaddate:'12/02/2024',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
                {id:'2',title:'title2',text:'cs go wapon',uploaddate:'12/02/2083',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
                {id:'3',title:'title3',text:'cs go skin',uploaddate:'12/02/2034',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
                {id:'4',title:'title4',text:'cs go wapon',uploaddate:'12/02/2029',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
                {id:'5',title:'title5',text:'cs go skin',uploaddate:'12/02/2021',price:'730',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
                {id:'6',title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
                {id:'623523',title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
                {id:'2526',title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
                {id:'15363',title:'title1',text:'cs go skin',uploaddate:'12/02/2024',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
                {id:'223',title:'title2',text:'cs go wapon',uploaddate:'12/02/2083',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
                {id:'325325',title:'title3',text:'cs go skin',uploaddate:'12/02/2034',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
                {id:'425323',title:'title4',text:'cs go wapon',uploaddate:'12/02/2029',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
                {id:'5567563',title:'title5',text:'cs go skin',uploaddate:'12/02/2021',price:'730',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
                {id:'6346',title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
                {id:'6363',title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
                {id:'6145236',title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
                {id:'1456452345',title:'title1',text:'cs go skin',uploaddate:'12/02/2024',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
                {id:'235232',title:'title2',text:'cs go wapon',uploaddate:'12/02/2083',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
                {id:'4674524',title:'title3',text:'cs go skin',uploaddate:'12/02/2034',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
                {id:'234764',title:'title4',text:'cs go wapon',uploaddate:'12/02/2029',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
                {id:'142534455',title:'title5',text:'cs go skin',uploaddate:'12/02/2021',price:'730',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
                {id:'62342',title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
                {id:'45675676',title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
                {id:'6234523',title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
                {id:'17457567',title:'title1',text:'cs go skin',uploaddate:'12/02/2024',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
                {id:'4562',title:'title2',text:'cs go wapon',uploaddate:'12/02/2083',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
                {id:'3463',title:'title3',text:'cs go skin',uploaddate:'12/02/2034',price:'1300',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
                {id:'567564',title:'title4',text:'cs go wapon',uploaddate:'12/02/2029',price:'1898',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0DfHPH08Be-7VNEftuZSfykUJnl_c6tHtQ&s',},
                {id:'5756756',title:'title5',text:'cs go skin',uploaddate:'12/02/2021',price:'730',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1IyDmN96bgykZI9s6wmy73x8OaWKK3u6jcy480SVi-WTG9kjghhzMgtEEdTv6yxtz4U&usqp=CAU',},
                {id:'5646',title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
                {id:'234256',title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},
                {id:'236',title:'title6',text:'cs go wapon',uploaddate:'12/02/2021',price:'138',photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_6EC7Rv1uu_GT_khQ9Esv5khhsv7reHYuaKfvB9aHXZy5gw8Pckb8-ClBwuhBXf9-Zs&usqp=CAU',},

        ]
        });
        

        const updateItemHandler = (updatedItem) => {
           
            
                console.log(updatedItem);
               
                let itemarray =[... state.items];
                
              for (let i = 0; i < itemarray.length; i++) {
                if (itemarray[i].id === updatedItem.id) {

                    if(!updatedItem.photo){
                        updatedItem.photo=state.items[i].photo;
                    }
                    itemarray[i] = updatedItem;
                }
                  }
                  
            setState((prev) => ({
                ...prev,
                items: [...itemarray],
                
            }));
            CloseUpdateModal();


          };
          


        const OpenNewItemModal=()=>{


            setState((prev) => ({
                ...prev,
                addnewitemModalVisibility: true,
            }));

             
        }
       const CloseNewItemModal=()=>{
            setState((prev) => ({
                ...prev,
                addnewitemModalVisibility: false,
            }));

            //setnewItemModal(false);
       }
       const CloseUpdateModal=()=>{
        setState((prev) => ({
            ...prev,
            UpdateItemModalvisibility:false
        }));

        
      //  setUpdateItemModalvisibility(false);
       }

        const OpenUpdateModal=(id)=>{
          
            setState((prev) => ({
                ...prev,

                itemtoUpdate:state.items.find(item=>item.id===id),
                UpdateItemModalvisibility:true
            }));



            // setitemIdtoUpdate(id);
            // setUpdateItemModalvisibility(true);
             
        }

        const CloseDeleteModal=()=>{

            setState((prev) => ({
                ...prev,
                deleteItemModalvisibility:false,
            }));



            //setDeleteItemModalvisibility(false);
        }
        


         const OpenDeleteModal=(id,title)=>{
           

            setState((prev) => ({
                ...prev,
                CurrentObjectToDelete:{id:id,title:title},
                deleteItemModalvisibility:true,
            }));




            // setCurrentObjectToDelete({id:id,title:title});

            // setDeleteItemModalvisibility(true);
          
         }
         const ConfirmDeletionCallback=( )=>{


            setState((prev) => ({
                ...prev,
                items: prev.items.filter((item) => item.id !== state.CurrentObjectToDelete.id),
                
                CurrentObjectToDelete: {id:'',title:'',},
            }));


            
            CloseDeleteModal();
         }

         const    addnewitemhandler=()=>{


            console.log("REFETCH DATA")
         }
    return <div>


        <div className={style.MainWrapper}>

        {state. addnewitemModalVisibility && <AddNewItemModal    addnewitemhandler={addnewitemhandler} CloseNewItemModal={CloseNewItemModal} />}
        {state.UpdateItemModalvisibility && <UpdateItemModal updateItemHandler ={updateItemHandler } itemtoUpdate={state.itemtoUpdate} CloseUpdateModal={CloseUpdateModal}  />}
        {state.deleteItemModalvisibility && <DeleteItemModal ConfirmDeletionCallback={ConfirmDeletionCallback} CloseDeleteModal={CloseDeleteModal} title={state.CurrentObjectToDelete.title}   />}
        
        <div className={style.Heading}>

           <button onClick={()=>OpenNewItemModal()} className={style.addnewitemBtn}>

                <div className={style.addbuttoncontent}>
                <span class="material-symbols-outlined">
add_circle
</span>
        <div>Add item</div>


                </div>

           </button>


        </div>
          
            <div className={style.ItemsList}>
            {state.items.map((item) => (
                <MyItemsListItem key={item.id} id={item.id}  OpenDeleteModal={OpenDeleteModal} OpenUpdateModal={OpenUpdateModal} image={item.photo} title={item.title} text={item.text} uploaddate={item.uploaddate} price={item.price}/>
            ))}

              

               
            </div>

        </div>



    </div>
    
}

export default MyItemFragments;