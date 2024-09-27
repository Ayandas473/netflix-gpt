import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const nowPlayingMovies = useSelector((store)=>store.movies?.nowPlayingMovies);

  if(!nowPlayingMovies) return;


  const mainVideo = nowPlayingMovies[10];
  const {title,overview,id} = mainVideo;

  return (
    <div>
         <VideoTitle title={title} overview={overview} />
        <VideoBackground movieId={id}/> 
    </div>
  )
}

export default MainContainer;