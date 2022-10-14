import { useState } from "react"
import style from "./search-bar.module.css"

const SearchBar = (props) => {
    const {onSearchManga} = props
    const [mangaName, setMangaName] = useState("")

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            onSearchManga(mangaName)
            setMangaName("")
        }
        if (mangaName.length > 3) {
            onSearchManga(mangaName)
        }
    }
    const handleClick = () => {
        onSearchManga(mangaName)
        setMangaName("")
    }

    return (
        <>
            <div className={style.searchbar}>
                <input className={style.input} type="text" value={mangaName} onChange={(e) => setMangaName(e.target.value)} onKeyUp={handleKeyUp} placeholder="Entrez le titre d'un animé"/>
                <button className={style.button} onClick={handleClick}>Search</button>
            </div>
        </>
    )
}

export default SearchBar