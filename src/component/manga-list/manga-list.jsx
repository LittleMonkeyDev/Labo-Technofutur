import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MangaListItem from "./manga-list-item"
import style from "./manga-list.module.css"

const MangaList = (props) => {
    const { type } = props
    const {searchManga} = props
    const [manga, setManga] = useState([])
    const [page, setPage] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://kitsu.io/api/edge/${type}?filter[text]=` + searchManga + "&page[limit]=12&page[offset]=" + page * 12)
            .then(({data}) => {
                console.log(data)
                setManga(data.data)

            })
    }, [searchManga, page])

    const navigateToDetails = (index) => {
        navigate("/manga-details", {state : manga[index]})
    }

    const navigateToNextPage = () => {
        setPage(page + 1)
    }

    const navigateToPreviousPage = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }

    return (
        <div>
            <div className={style.mangaGrid}>
                {manga.map((element, index) => <MangaListItem key={element.id} title={element.attributes.canonicalTitle} image={element.attributes.posterImage.small} index={index} onHandleClick={navigateToDetails}></MangaListItem>)}
            </div>
            <div className={style.buttonPage}>
                <button className={style.previousPage} onClick={navigateToPreviousPage}>Previous Page</button>
                <button className={style.nextPage} onClick={navigateToNextPage}>Next Page</button>
            </div>
        </div>
    )
}

export default MangaList