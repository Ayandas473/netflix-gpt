import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { API_OPTION } from '../utils/constant';


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

   const getNowPlayingMovies= async()=>{
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTION);
    const data = await response.json();
    console.log(data.results);
     dispatch(addNowPlayingMovies(data?.results));
   }


   useEffect(()=>{
     getNowPlayingMovies();
   },[])
}

export default useNowPlayingMovies