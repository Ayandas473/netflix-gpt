import React, { useEffect } from 'react'
import { API_OPTION } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailer } from '../utils/movieSlice';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector((store)=>store.movies.trailer);

    console.log(trailerVideo);
    useMovieTrailer(movieId);

  return (
    <div className='w-screen'>
        <iframe className='w-screen aspect-video'
          src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}
           title="YouTube video player"></iframe>
    </div>
  )
}

export default VideoBackground