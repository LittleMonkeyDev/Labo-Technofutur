import { useState } from "react"
import style from "./manga-list.module.css"

const MangaListItem = (props) => {
    const {title, image, index, onHandleClick} = props
    const [showButton, setShowButton] = useState(false)

    const handleClick = () => {
        onHandleClick(index)
    }
    
    return (
        <div onClick={handleClick} className={style.mangaCover}>
            <h2 className={style.mangaTitle}>{title}</h2>
            <div className={style.imageButton} onMouseOver={() => setShowButton(true)} onMouseOut={() => setShowButton(false)}>
                <img className={style.mangaImage} src={image}/>
                {showButton && (<button className={style.wantToKnowMore}>Click to know more !</button>)}
            </div>
        </div>
    )
}

export default MangaListItem