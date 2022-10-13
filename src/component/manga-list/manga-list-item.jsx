import style from "./manga-list.module.css"

const MangaListItem = (props) => {
    const {title, image, index, onHandleClick} = props
    const handleClick = () => {
        onHandleClick(index)
    }
    
    return (
        <div onClick={handleClick} className={style.mangaCover}>
            <h2 className={style.mangaTitle}>{title}</h2>
            <img className={style.mangaImage} src={image}/>
        </div>
    )
}

export default MangaListItem