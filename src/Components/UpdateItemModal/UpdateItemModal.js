
import style from './UpdateItemModal.module.css';
import {useEffect, useState,useRef} from "react";
import ApiService from "../../Services/ApiService";
const UpdateItemModal = ({CloseUpdateModal,itemtoUpdate, updateItemHandler}) => {
 const [ItemData, setItemData] = useState({ id:itemtoUpdate.id, title: itemtoUpdate.title, text: itemtoUpdate.text ,
     price: itemtoUpdate.price, photo: itemtoUpdate.photo, uploaddate: itemtoUpdate.uploaddate});
  
 const [userInputErrorsData, setUserInputErrorsData] = useState([]);
    const handleGetInputData = (e) => {
        const { value, name} = e.target;
        setItemData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
    const [Successmessage, setSuccessmessage] = useState('');
    const photoInputRef = useRef();
 








    const handleUpdateItem = async () => {
        setUserInputErrorsData([]);


        const { title , text , price , photo  } = ItemData;



        const errors = [];

        if (!title.trim()) {
            errors.push('Title is required.');
        } 

        if (!text.trim()) {
            errors.push('Text is required.');
        }  
        if (!price.trim()) {
            errors.push('Price is required.');
            
           
        }  
        if(!photo) {
            errors.push('Picture is required.');

        }
       
        if (errors.length === 0) {

             try {


                updateItemHandler(ItemData);

                // const formDataToSend = new FormData();
                // formDataToSend.append('title', ItemData.title);
                // formDataToSend.append('text', ItemData.text);
                // formDataToSend.append('price', ItemData.price);
                // formDataToSend.append('photo', ItemData.photo);
                // ApiService.AddNewitem( formDataToSend)
                // .then(response=>{

                //     if( response &&  response.status===200){
                //         setSuccessmessage("Item added successfully")
                //         setItemData({
                //             title: '',
                //             text: '',
                //             price: '',
                //             photo: ''
                //         });
                //         photoInputRef.current.value = '';
                         


            //         }else {
            //            // setUserInputErrorsData("Error adding item");
            //         }

            //     }).catch(error=>{




            //    })
          

            //     const result = await ApiService.Login(loginData);

            //     if (result) {

            //        navigate("/")

            //     } else {

            //         setUserInputErrorsData(['Invalid email or password']);
            //     }
            } catch (error) {

            //    setUserInputErrorsData([error.message]);
            }




        } else {
           setUserInputErrorsData(errors);


        }
    };


    return     <div id="myModal" className={style.modal}>


           <div className={style.modalcontent}>

                <div className={style.modalheader}> 
                
                <div className={style.headertitle}>Update Item</div>
                <button   onClick={()=>CloseUpdateModal()} className={style.close}>&times;</button>
                </div>
 
                <div className={style.inputsdiv}>

             <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Title</div>
                        <input className={style.inp}  value={ItemData.title} name="title" onInput={ handleGetInputData}   type="text" required={true} />


                    </div>
                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Text</div>
                        <input className={style.inp} value={ItemData.text} onInput={ handleGetInputData}  name="text"    type="text" required={true} />


                    </div>
                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Price</div>
                        <input className={style.inp} value={ItemData.price} name="price" onInput={ handleGetInputData}    type="number" required={true} />


                    </div>
                    <div className={style.InputTitle}>Picture</div>
                    <img src={ItemData.photo} alt="Item" className={style.ItemImage}/>
                    <div className={style.Inputcontainer}>
                        
                         
                        <input     className={style.photoinput}         ref={photoInputRef}  name="photo"    type="file" required={true} onInput={ handleGetInputData}   accept="image/gif,image/jpeg,image/png"  />


                    </div>

                </div>
             { Successmessage &&  <div className={style.Successmessage}>
                    {Successmessage}</div>}
                  <div className={style.errorWrapper}>
                                      {userInputErrorsData && userInputErrorsData.map(err => <div key={err} className={style.Errordiv}>{err}</div>)}
                                    </div>
                    <div className={style.Footerdv}>
                        <button onClick={handleUpdateItem} className={style.Addbtn}>Update</button>
                    </div>
            </div>
        </div>

    

}

export default UpdateItemModal;