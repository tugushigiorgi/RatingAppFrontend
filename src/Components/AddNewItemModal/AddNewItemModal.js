
import style from './AddNewItemModal.module.css';
import {useEffect, useState,useRef} from "react";
import ApiService from "../../Services/ApiService";
const AddNewItemModal = ({CloseNewItemModal,addnewitemhandler}) => {
 
    const photoInputRef = useRef();

    const [state,setState]=useState({Successmessage:'',  userInputErrorsData:[],title: '', text: '' , price: '', photo: ''})

     const handleGetInputData = (e) => {
                const { value, name} = e.target;
                setState((prevFormData) => ({
                    ...prevFormData,
                    [name]: value
                }));
            };

    const handleAddnewItem = async () => {
        
          setState((prevFormData) => ({
        ...prevFormData,
        userInputErrorsData:[]
    }));



      
     const { title , text , price , photo  } = state;

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

  
        if (errors.length === 0) {

            addnewitemhandler();
                    console.log(state);
                    setState((prevFormData) => ({
                        ...prevFormData,
                        userInputErrorsData:[]
                    }));
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
            //setUserInputErrorsData(errors);
            setState((prevFormData) => ({
                ...prevFormData,
                userInputErrorsData:[...errors]
            }));

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
             { state.Successmessage &&  <div className={style.Successmessage}>
                    {state.Successmessage}</div>}
                  <div className={style.errorWrapper}>
                                      {state.userInputErrorsData && state.userInputErrorsData.map(err => <div key={err} className={style.Errordiv}>{err}</div>)}
                                    </div>
                    <div className={style.Footerdv}>
                        <button onClick={handleAddnewItem} className={style.Addbtn}>Add</button>
                    </div>
            </div>
        </div>

    

}

export default AddNewItemModal;