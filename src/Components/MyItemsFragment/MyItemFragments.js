import style from './MyItemFragments.module.css';
import AddNewItemModal from '../AddNewItemModal/AddNewItemModal';
import MyItemsListItem from '../MyItemsListItem/MyItemsListItem';
import UpdateItemModal from '../UpdateItemModal/UpdateItemModal';
import {useEffect, useState} from "react";
import ApiService from "../../Services/ApiService";
import DeleteItemModal from '../DeleteItemModal/DeleteItemModal';

const MyItemFragments = () => {

    const [state, setState] = useState({
        addnewitemModalVisibility: false,
        UpdateItemModalvisibility: false,
        itemtoUpdate: {id: '', title: '', text: '', uploaddate: '', price: '', photo: ''},
        deleteItemModalvisibility: false,
        CurrentObjectToDelete: {id: '', title: '',},

        items: []
    });

    const fetchData = async () => {
        console.log('Fetching user games...');

        try {
            setState(prevState => ({
                ...prevState,
                isLoading: true,
                errorMessage: '',
            }));

            const response = await ApiService.getCurrentlyLoggedUserGames();

            if (response.status === 200) {
                setState(prevState => ({
                    ...prevState,
                    items: response.data,
                    isLoading: false,
                }));
            } else if (response.status === 204) {
                setState(prevState => ({
                    ...prevState,
                    items: [],
                    isLoading: false,
                    errorMessage: "No games found.",
                }));
            } else {
                setState(prevState => ({
                    ...prevState,
                    isLoading: false,
                    errorMessage: "Something went wrong.",
                }));
            }
        } catch (error) {
            setState(prevState => ({
                ...prevState,
                isLoading: false,
                errorMessage: "Failed to fetch games. Please try again.",
            }));
        }
    };


    useEffect(() => {
        fetchData()
    }, [])


    const updateItemHandler = (updatedItem) => {

        fetchData();
        CloseUpdateModal();


    };


    const OpenNewItemModal = () => {


        setState((prev) => ({
            ...prev,
            addnewitemModalVisibility: true,
        }));


    }
    const CloseNewItemModal = () => {
        setState((prev) => ({
            ...prev,
            addnewitemModalVisibility: false,
        }));

    }
    const CloseUpdateModal = () => {
        setState((prev) => ({
            ...prev,
            UpdateItemModalvisibility: false
        }));

    }

    const OpenUpdateModal = (id) => {

        setState((prev) => ({
            ...prev,

            itemtoUpdate: state.items.find(item => item.id === id),
            UpdateItemModalvisibility: true
        }));


    }

    const CloseDeleteModal = () => {

        setState((prev) => ({
            ...prev,
            deleteItemModalvisibility: false,
        }));

    }


    const OpenDeleteModal = (id, title) => {


        setState((prev) => ({
            ...prev,
            CurrentObjectToDelete: {id: id, title: title},
            deleteItemModalvisibility: true,
        }));


    }
    const ConfirmDeletionCallback = () => {


        ApiService.DeleteSellerGame(state.CurrentObjectToDelete.id)

            .then(response => {
                console.log(response);
                if (response && response.status === 200) {
                    setState((prev) => ({
                        ...prev,

                        CurrentObjectToDelete: {id: '', title: '',},
                    }));
                    fetchData()
                } else {
                    setState((prevFormData) => ({
                        ...prevFormData,
                        Successmessage: "something went wrong"
                    }));
                }

            }).catch(error => {


            console.log(error);

        })


        CloseDeleteModal();
    }

    const addnewitemhandler = () => {

        CloseNewItemModal();
        fetchData();


    }
    return <div>


        <div className={style.MainWrapper}>

            {state.addnewitemModalVisibility &&
                <AddNewItemModal addnewitemhandler={addnewitemhandler} CloseNewItemModal={CloseNewItemModal}/>}
            {state.UpdateItemModalvisibility &&
                <UpdateItemModal updateItemHandler={updateItemHandler} itemtoUpdate={state.itemtoUpdate}
                                 CloseUpdateModal={CloseUpdateModal}/>}
            {state.deleteItemModalvisibility &&
                <DeleteItemModal ConfirmDeletionCallback={ConfirmDeletionCallback} CloseDeleteModal={CloseDeleteModal}
                                 title={state.CurrentObjectToDelete.title}/>}

            <div className={style.Heading}>

                <button onClick={() => OpenNewItemModal()} className={style.addnewitemBtn}>

                    <div className={style.addbuttoncontent}>
                <span className="material-symbols-outlined">
add_circle
</span>
                        <div>Add item</div>


                    </div>

                </button>


            </div>

            <div className={style.ItemsList}>
                {state.items.map((item) => (
                    <MyItemsListItem key={item.id} id={item.id} OpenDeleteModal={OpenDeleteModal}
                                     OpenUpdateModal={OpenUpdateModal}
                                     image={ApiService.staticImagesLocation + item.pictureUrl} title={item.title}
                                     text={item.text} uploaddate={item.publishDate} price={item.price}/>
                ))}


            </div>

        </div>


    </div>

}

export default MyItemFragments;