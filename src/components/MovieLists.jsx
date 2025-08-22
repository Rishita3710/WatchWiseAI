import React from 'react'
import MovieCard from './MovieCard';

const MovieLists = ({title, movies}) => {
    if (!Array.isArray(movies) || movies.length === 0) {
    return (
      <div>
        <h1>{title}</h1>
        <p>No movies to display.</p>
      </div>
    );
  }
  return (
    <div className="px-6">
      <h1 className="text-2xl py-6 font-semibold text-white">{title}</h1>
    <div className="flex overflow-x-scroll">
      <div className="flex gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default MovieLists;