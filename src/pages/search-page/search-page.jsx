import { useState } from "react"
import MangaList from "../../component/manga-list/manga-list"
import SearchBar from "../../component/search-bar/search-bar"

const SearchPage = () => {
    const [searchManga, setSearchManga] = useState("One Piece")

    return (
        <> 
        <SearchBar onSearchManga={(manga) => setSearchManga(manga)}></SearchBar>
        <MangaList searchManga={searchManga}></MangaList>
        </>
    )
}

export default SearchPage