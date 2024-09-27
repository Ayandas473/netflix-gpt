import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-12 absolute w-screen aspect-video text-white'>
        <h1 className='font-bold text-4xl '>{title}</h1>
        <p className='text-lg mt-4 w-1/4'>{overview}</p>
        <div className='mt-4'>
            <button className='bg-white font-bold  w-32 p-2 text-black rounded-lg hover:bg-opacity-55'>Play</button>
            <button className='bg-white font-bold mx-2  w-32 p-2 text-black rounded-lg hover:bg-opacity-55'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle