import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId)=>{

    const dispatch = useDispatch();

    const getVideos = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTION)
        const json = await data.json();

      const filteredVideo = json.results.filter(video=>video.type==="Trailer");

      console.log(filteredVideo);   

      const trailer = filteredVideo.length ? filteredVideo[0] : json.results[0];
       dispatch(addTrailer(trailer));

    }

    useEffect(()=>{
        getVideos();
    },[])
}

export default useMovieTrailer;