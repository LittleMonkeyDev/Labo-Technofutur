import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MangaListItem from "./manga-list-item"
import style from "./manga-list.module.css"

const MangaList = (props) => {
    const {searchManga} = props
    const [manga, setManga] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://kitsu.io/api/edge/anime?filter[text]=" + searchManga)
            .then(({data}) => {
                console.log(data)
                setManga(data.data)

            })
    }, [searchManga])

    const navigateToDetails = (index) => {
        navigate("/manga-details", {state : manga[index]})
    }

    return (
        <div className={style.mangaGrid}>
            {manga.map((element, index) => <MangaListItem key={element.id} title={element.attributes.canonicalTitle} image={element.attributes.posterImage.small} index={index} onHandleClick={navigateToDetails}></MangaListItem>)}
        </div>
    )
}

export default MangaList