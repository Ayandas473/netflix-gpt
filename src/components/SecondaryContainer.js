import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store=>store.movies);


  return movies.nowPlayingMovies && (
    <div className='pt-6 bg-black' >
        <div className='-mt-72 relative z-20'>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
            <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
            {/* <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/> */}
        </div>
        
    </div>
  )
}

export default SecondaryContainer