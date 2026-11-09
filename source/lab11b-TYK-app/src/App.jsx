import { useState } from 'react';
import './App.css';
import movieData from './components/movie-data.js';
import MovieList from './components/MovieList.jsx';

function addToFavorites(movie) {
  alert(movie.title);
}

function App() {
  const dataCopy = movieData;

  return (
    <MovieList movieData={dataCopy} handler={addToFavorites}/>
  )
}

export default App
