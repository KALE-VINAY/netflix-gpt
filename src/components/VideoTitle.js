import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[25%] px-6  md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h className=" text-2xl md:text-5xl font-bold">{title}</h>
    <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>

      <div className='my-4 md:m-0'>
        <button className='bg-white text-black font-bold p-4 py-1 md:py-4 px-3 text-xl  rounded-lg hover:bg-opacity-70'>play</button>
        <button  className='hidden md:inline-block mx-2 my-2 bg-white text-black font-bold p-4  px-12  text-xl rounded-lg bg-opacity-30 hover:bg-opacity-70'>More Info</button>
      
      </div>
    </div>
  );
}

export default VideoTitle;