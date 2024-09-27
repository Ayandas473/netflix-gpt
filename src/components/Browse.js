import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTION } from '../utils/constant'
import { json } from 'react-router-dom'
import { addNowPlayingMovies } from '../utils/movieSlice'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopular from '../hooks/usePopular'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const Browse = () => {

  useNowPlayingMovies();
  usePopular();
  useTopRatedMovies();
  useUpcomingMovies();
  
  return (
    <div>
        <Header/>
        <MainContainer />   
        <SecondaryContainer />     
    </div>
  )
}

export default Browse