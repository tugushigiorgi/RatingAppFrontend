import style from './MyItemsListItem.module.css';

const MyItemsListItem = ({image, title, text, uploaddate, price, id, OpenUpdateModal, OpenDeleteModal}) => {
    return (
        <div className={style.MainWrapper}>
            <div className={style.Container}>
                <div className={style.ContainerHeading}>
                    <div className={style.DateHeading}>

                    <span class="material-symbols-outlined">
calendar_month
</span>
                        <div>{uploaddate}</div>

                    </div>
                    <div className={style.CrudButtons}>

                        <button onClick={() => OpenUpdateModal(id)} className={style.CrudButtonEdit}>
<span class="material-symbols-outlined">
edit_square
</span>
                        </button>
                        <button onClick={() => OpenDeleteModal(id, title)} className={style.CrudButtonRemove}>

<span className="material-symbols-outlined">
delete
</span>
                        </button>
                    </div>


                </div>

                <div className={style.ImageContainer}>
                    <img src={image} alt="Image" className={style.ImageItem}/>
                </div>

                <div className={style.Footerdiv}>

                    <div className={style.footerTxtTitle}>{title}</div>
                    <div className={style.footerTxt}>{text}</div>
                    <div className={style.footerPrice}>${price}</div>
                </div>


            </div>
        </div>
    )

}
export default MyItemsListItem;