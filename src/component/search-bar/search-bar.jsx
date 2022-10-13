import { useState } from "react"
import style from "./search-bar.module.css"

const SearchBar = (props) => {
    const {onSearchManga} = props
    const [mangaName, setMangaName] = useState("")

    return (
        <>
            <div className={style.searchbar}>
                <input type="text" value={mangaName} onChange={(e) => setMangaName(e.target.value)} placeholder="Entrez un anime"/>
                <button onClick={() => onSearchManga(mangaName)}>Search</button>
            </div>
        </>
    )
}

export default SearchBar