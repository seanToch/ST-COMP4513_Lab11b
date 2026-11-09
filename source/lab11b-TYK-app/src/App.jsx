import { useState } from 'react';
import './App.css';
import movieData from './components/movie-data.js';
import MovieList from './components/MovieList.jsx';
import Header from './components/Header.jsx';



function App() {
  const dataCopy = movieData;

  const [favorites, setFavorites] = useState([]);

  function addToFavorites(movie) {
  if(favorites.some(e => e.id === movie.id)) {
    setFavorites(favorites.filter(e => e.id !== movie.id));
  } else {
    setFavorites([...favorites, movie]);
  }
}

  return (
    <div>
      <Header favorites={favorites} />
      <MovieList movieData={dataCopy} handler={addToFavorites}/>
    </div>
  )
}

export default App
