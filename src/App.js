import { Route, Routes } from 'react-router-dom';
import './App.css';
import MangaDetails from './pages/manga-details/manga-details';
import SearchPage from './pages/search-page/search-page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
         <Route path="/" element ={<SearchPage></SearchPage>}></Route>
         <Route path="/manga-details" element ={<MangaDetails></MangaDetails>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
