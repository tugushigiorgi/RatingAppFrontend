import style from './UpdateItemModal.module.css';
import {useEffect, useState, useRef} from "react";
import ApiService from "../../Services/ApiService";

const UpdateItemModal = ({CloseUpdateModal, itemtoUpdate, updateItemHandler}) => {


    const [state, seState] = useState({
        ischanged: false,
        Successmessage: '',
        userInputErrorsData: [],
        id: itemtoUpdate.id,
        title: itemtoUpdate.title,
        text: itemtoUpdate.text,
        price: itemtoUpdate.price,
        pictureUrl: itemtoUpdate.pictureUrl,
        uploaddate: itemtoUpdate.uploaddate
    });


    const handleGetInputData = (e) => {

        const {name, value, files} = e.target;

        if (files && files.length > 0) {

            seState((prevState) => ({
                ...prevState,
                ischanged: true,
                [name]: files[0],
            }));
        } else {

            seState((prevState) => ({
                ...prevState,
                ischanged: true,
                [name]: value,
            }));
        }
    };

    const photoInputRef = useRef();


    const handleUpdateItem = async () => {


        seState((prevFormData) => ({
            ...prevFormData,
            userInputErrorsData: [],

        }));

        const {title, text, price, photo} = state;

        if (state.ischanged) {

            const errors = [];

            if (!title.trim()) {
                errors.push('Title is required.');
            }

            if (!text.trim()) {
                errors.push('Text is required.');
            }
            if (!price) {
                errors.push('Price is required.');


            }


            if (errors.length === 0) {

                try {
                    const formDataToSend = new FormData();
                    formDataToSend.append("id", state.id);
                    formDataToSend.append("title", state.title);
                    formDataToSend.append("text", state.text);
                    formDataToSend.append("price", state.price);
                    if (photo) {
                        formDataToSend.append("photo", state.photo);
                        ApiService.UpdateGameObjectWithPhoto(formDataToSend)
                            .then(response => {
                                console.log(response);
                                if (response && response.status === 200) {

                                    updateItemHandler()

                                } else {
                                    seState((prevFormData) => ({
                                        ...prevFormData,
                                        userInputErrorsData: ["something went wrong"]
                                    }));
                                }

                            }).catch(error => {


                            console.log(error);

                        })

                    } else {

                        ApiService.UpdateGameObject(formDataToSend)

                            .then(response => {
                                console.log(response);
                                if (response && response.status === 200) {
                                    updateItemHandler()
                                } else {
                                    seState((prevFormData) => ({
                                        ...prevFormData,
                                        userInputErrorsData: ["something went wrong"]
                                    }));
                                }
                            }).catch(error => {


                            console.log(error);

                        })
                    }

                } catch (error) {


                }


            } else {


                seState((prevFormData) => ({
                    ...prevFormData,
                    userInputErrorsData: [...errors]
                }));
            }
        }
    };


    return <div id="myModal" className={style.modal}>


        <div className={style.modalcontent}>

            <div className={style.modalheader}>

                <div className={style.headertitle}>Update Item</div>
                <button onClick={() => CloseUpdateModal()} className={style.close}>&times;</button>
            </div>

            <div className={style.inputsdiv}>

                <div className={style.Inputcontainer}>
                    <div className={style.InputTitle}>Title</div>
                    <input className={style.inp} value={state.title} name="title" onInput={handleGetInputData}
                           type="text" required={true}/>


                </div>
                <div className={style.Inputcontainer}>
                    <div className={style.InputTitle}>Text</div>
                    <input className={style.inp} value={state.text} onInput={handleGetInputData} name="text" type="text"
                           required={true}/>


                </div>
                <div className={style.Inputcontainer}>
                    <div className={style.InputTitle}>Price</div>
                    <input className={style.inp} value={state.price} name="price" onInput={handleGetInputData}
                           type="number" required={true}/>


                </div>
                <div className={style.InputTitle}>Current Picture</div>
                <img src={ApiService.staticImagesLocation + state.pictureUrl} alt="Item" className={style.ItemImage}/>
                <div className={style.Inputcontainer}>


                    <input className={style.photoinput} ref={photoInputRef} name="photo" type="file" required={true}
                           onChange={handleGetInputData} accept="image/gif,image/jpeg,image/png"/>


                </div>

            </div>
            {state.Successmessage && <div className={style.Successmessage}>
                {state.Successmessage}</div>}
            <div className={style.errorWrapper}>
                {state.userInputErrorsData && state.userInputErrorsData.map(err => <div key={err}
                                                                                        className={style.Errordiv}>{err}</div>)}
            </div>
            <div className={style.Footerdv}>
                <button onClick={handleUpdateItem} className={style.Addbtn}>Update</button>
            </div>
        </div>
    </div>


}

export default UpdateItemModal;