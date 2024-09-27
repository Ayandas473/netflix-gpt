import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className='text-3xl text-white py-4 pl-6'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hide pl-4'>
        <div className='flex'>
          {movies?.map(movie => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
