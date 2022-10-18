import MangaList from "../../component/manga-list/manga-list"
import NavBar from "../../component/navbar/navbar"
const AnimePage = () => {
    

    return (
        <div>
            <h1>Anime Page</h1>
            <NavBar></NavBar>
            <MangaList searchManga="One piece" type="anime"/>
        </div>
    )
}

export default AnimePage