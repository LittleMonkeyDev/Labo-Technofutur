import { useLocation } from "react-router-dom"
import style from "./manga-details.module.css"

const MangaDetails = () => {
    const {state} = useLocation()

    return (
        <div className={style.mangaDetails}>
            <h3 className={style.mangaTitle}>{state.attributes.canonicalTitle}</h3>
            <div className={style.mangaDetails}>
                <img className={style.imageSize} src={state.attributes.coverImage.original}/>
                <p className={style.mangaDescription}>{state.attributes.synopsis}</p>
            </div>
        </div>
    )
}

export default MangaDetails