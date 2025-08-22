import React from 'react'
import MovieLists from './MovieLists';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-58 relative z-20">
      <MovieLists title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieLists title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieLists title={"Popular"} movies={movies.popularMovies}/>
      <MovieLists title={"Upcomming movies"} movies={movies.upcommingMovies}/>
      <MovieLists title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
          </div>
  )
};

export default SecondaryContainer;
