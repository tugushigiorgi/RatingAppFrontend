import style from "../SellerItems/SellerItems.module.css"

const SellerItems = ({image, title, text, price}) => {
    return (
        <div className={style.MainWrapper}>
            <div className={style.Container}>
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

export default SellerItems;