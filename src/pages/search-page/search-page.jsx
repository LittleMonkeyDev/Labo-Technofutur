import { useState } from "react"
import MangaList from "../../component/manga-list/manga-list"
import SearchBar from "../../component/search-bar/search-bar"

const SearchPage = () => {
    const [searchManga, setSearchManga] = useState("")

    return (
        <> 
            <h1>Trouvez votre prochain animé à regarder !</h1>
            <SearchBar onSearchManga={(manga) => setSearchManga(manga)}></SearchBar>
            <MangaList searchManga={searchManga}></MangaList>
        </>
    )
}

export default SearchPage