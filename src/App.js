import { Route, Routes } from 'react-router-dom';
import './App.css';
import AnimePage from './pages/anime-page/anime-page';
import MangaDetails from './pages/manga-details/manga-details';
import SearchPage from './pages/search-page/search-page';

function App() {
  return (
    <div className="App">
        <Routes>
         <Route path="/" element ={<SearchPage></SearchPage>}></Route>
         <Route path="/manga-details" element ={<MangaDetails></MangaDetails>}></Route>
         <Route path="/anime" element ={<AnimePage></AnimePage>}></Route>
        </Routes>
    </div>
  );
}

export default App;
