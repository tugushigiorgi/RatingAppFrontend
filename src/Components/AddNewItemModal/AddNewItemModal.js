
import style from './AddNewItemModal.module.css';
import {useEffect, useState,useRef} from "react";
import ApiService from "../../Services/ApiService";
const AddNewItemModal = ({CloseNewItemModal,addnewitemhandler}) => {
 const [NewItemData, setNewItemData] = useState({ title: '', text: '' , price: '', photo: '' });
  
 const [userInputErrorsData, setUserInputErrorsData] = useState([]);
    const handleGetInputData = (e) => {
        const { value, name} = e.target;
        setNewItemData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
    const [Successmessage, setSuccessmessage] = useState('');
    const photoInputRef = useRef();
    const handleAddnewItem = async () => {
        setUserInputErrorsData([]);


        const { title , text , price , photo  } = NewItemData;



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

       // addnewitem()

        console.log(NewItemData)
        if (errors.length === 0) {

            addnewitemhandler();

             
            //  try {
            //     const formDataToSend = new FormData();
            //     formDataToSend.append('title', NewItemData.title);
            //     formDataToSend.append('text', NewItemData.text);
            //     formDataToSend.append('price', NewItemData.price);
            //     formDataToSend.append('photo', NewItemData.photo);
            //     ApiService.AddNewitem( formDataToSend)
            //     .then(response=>{

            //         if( response &&  response.status===200){
            //             setSuccessmessage("Item added successfully")
            //             setNewItemData({
            //                 title: '',
            //                 text: '',
            //                 price: '',
            //                 photo: ''
            //             });
            //             photoInputRef.current.value = '';
                         


            //         }else {
            //             setUserInputErrorsData("Error adding item");
            //         }

            //     }).catch(error=>{




            //    })
          

            //     const result = await ApiService.Login(loginData);

            //     if (result) {

            //        navigate("/")

            //     } else {

            //         setUserInputErrorsData(['Invalid email or password']);
            //     }
            // } catch (error) {

            //     setUserInputErrorsData([error.message]);
            // }




        } else {
            setUserInputErrorsData(errors);


        }
    };


    return     <div id="myModal" className={style.modal}>


           <div className={style.modalcontent}>

                <div className={style.modalheader}> 
                
                <div className={style.headertitle}>Add new item</div>
                <button   onClick={()=>CloseNewItemModal()} className={style.close}>&times;</button>
                </div>
 
                <div className={style.inputsdiv}>

             <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Title</div>
                        <input className={style.inp}  name="title" onInput={ handleGetInputData}   type="text" required={true} />


                    </div>
                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Text</div>
                        <input className={style.inp} onInput={ handleGetInputData}  name="text"    type="text" required={true} />


                    </div>
                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Price</div>
                        <input className={style.inp}  name="price" onInput={ handleGetInputData}    type="number" required={true} />


                    </div>
                    <div className={style.Inputcontainer}>
                        <div className={style.InputTitle}>Picture</div>
                       
                        <input    className={style.photoinput}         ref={photoInputRef}  name="photo"    type="file" required={true} onInput={ handleGetInputData}   accept="image/gif,image/jpeg,image/png"  />


                    </div>

                </div>
             { Successmessage &&  <div className={style.Successmessage}>
                    {Successmessage}</div>}
                  <div className={style.errorWrapper}>
                                      {userInputErrorsData && userInputErrorsData.map(err => <div key={err} className={style.Errordiv}>{err}</div>)}
                                    </div>
                    <div className={style.Footerdv}>
                        <button onClick={handleAddnewItem} className={style.Addbtn}>Add</button>
                    </div>
            </div>
        </div>

    

}

export default AddNewItemModal;