import { useLocation } from "react-router-dom"
import style from "./manga-details.module.css"

const MangaDetails = () => {
    const {state} = useLocation()

    return (
        <>
            <h3 className={style.mangaTitle}>{state.attributes.canonicalTitle}</h3>
            <div className={style.mangaDetails}>
                <img className={style.imageSize} src={state.attributes.coverImage.original}/>
                <p className={style.mangaDescription}>{state.attributes.synopsis}</p>
            </div>
        </>
    )
}

export default MangaDetails