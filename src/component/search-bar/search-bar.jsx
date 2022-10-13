import { useState } from "react"

const SearchBar = (props) => {
    const {onSearchManga} = props
    const [mangaName, setMangaName] = useState("")

    return (
        <>
            <input type="text" value={mangaName} onChange={(e) => setMangaName(e.target.value)} placeholder="Entrez un anime"/><br/>
            <button onClick={() => onSearchManga(mangaName)}>Search</button>
        </>
    )
}

export default SearchBar