import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{

    const dispatch = useDispatch();

   const getUpcomingMovies= async()=>{
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTION);
    const data = await response.json();
    console.log(data.results);
     dispatch(addUpcomingMovies(data?.results));
   }


   useEffect(()=>{
    getUpcomingMovies();
   },[])
}

export default useUpcomingMovies;