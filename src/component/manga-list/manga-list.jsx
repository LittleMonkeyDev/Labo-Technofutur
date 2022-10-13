import axios from "axios"
import { useEffect, useState } from "react"

const MangaList = (props) => {
    const {searchManga} = props
    const [manga, setManga] = useState([])

    useEffect(() => {
        axios.get("https://kitsu.io/api/edge/manga?filter[text]=" + searchManga)
            .then(({data}) => {
                console.log(data)
                setManga(data.data)

            })
    }, [searchManga])

    return (
        <>
            {manga.map((element) => (<h3>{element.attributes.canonicalTitle}</h3>))}
            {manga.map((element) => (<img src={element.attributes.posterImage.small}/>))}
        </>
    )
}

export default MangaList