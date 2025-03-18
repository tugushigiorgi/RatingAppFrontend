import style from './AddNewItemModal.module.css';
import {useEffect, useState, useRef} from "react";
import ApiService from "../../Services/ApiService";

const AddNewItemModal = ({CloseNewItemModal, addnewitemhandler}) => {

    const photoInputRef = useRef();
    const [state, setState] = useState({
        Successmessage: '',
        userInputErrorsData: [],
        title: '',
        text: '',
        price: '',
        photo: ''
    })
    const handleGetInputData = (e) => {
        const {name, value, files} = e.target;

        if (files && files.length > 0) {

            setState((prevState) => ({
                ...prevState,
                [name]: files[0],
            }));
        } else {

            setState((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleAddnewItem = async () => {
        setState((prevState) => ({
            ...prevState,
            userInputErrorsData: [],
            Successmessage: "",
        }));

        const {title, text, price, photo} = state;
        const errors = [];

        if (!title.trim()) errors.push("Title is required.");
        if (!text.trim()) errors.push("Text is required.");
        if (!price.trim()) errors.push("Price is required.");
        if (!photo) errors.push("Picture is required.");

        if (errors.length > 0) {
            setState((prevState) => ({
                ...prevState,
                userInputErrorsData: [...errors],
            }));
            return;
        }


        const formDataToSend = new FormData();
        formDataToSend.append("title", title);
        formDataToSend.append("text", text);
        formDataToSend.append("price", price);
        formDataToSend.append("photo", photo);

        try {
            const response = await ApiService.AddNewGameObject(formDataToSend);

            if (response && response.status === 200) {
                setState((prevState) => ({
                    ...prevState,
                    title: "",
                    text: "",
                    price: "",
                    photo: "",
                    Successmessage: "Game object added successfully!",
                }));


                if (photoInputRef.current) {
                    photoInputRef.current.value = "";
                }


                addnewitemhandler();

            } else {
                setState((prevState) => ({
                    ...prevState,
                    Successmessage: "Something went wrong. Please try again.",
                }));
            }
        } catch (error) {
            console.error("Error adding game object:", error);

            setState((prevState) => ({
                ...prevState,
                Successmessage: error.response?.data || "Failed to add item.",
            }));
        }
    };


    return <div id="myModal" className={style.modal}>
        <div className={style.modalcontent}>
            <div className={style.modalheader}>
                <div className={style.headertitle}>Add new item</div>
                <button onClick={() => CloseNewItemModal()} className={style.close}>&times;</button>
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
                           type="number"
                           required={true}/>
                </div>
                <div className={style.Inputcontainer}>
                    <div className={style.InputTitle}>Picture</div>
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
                <button onClick={handleAddnewItem} className={style.Addbtn}>Add</button>
            </div>
        </div>
    </div>


}

export default AddNewItemModal;