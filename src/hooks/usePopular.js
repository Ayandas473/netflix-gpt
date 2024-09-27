import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopular = ()=>{

    const dispatch = useDispatch();

   const getPopularMovies= async()=>{
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTION);
    const data = await response.json();
    console.log(data.results);
     dispatch(addPopularMovies(data?.results));
   }


   useEffect(()=>{
    getPopularMovies();
   },[])
}

export default usePopular;