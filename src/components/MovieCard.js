import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({poster_path}) => {



  return (
    <div className='w-48 px-2'>
        <img alt="movie_image" src={IMG_CDN_URL+poster_path}/>
    </div>
  )
}

export default MovieCard