import React from 'react';

import {  useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {
  
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
 
  useMovieTrailer(movieId);
 

  return (
    <div className='w-screen '>

      <iframe 
        className='w-screen aspect-video -my-8 md:my-0 scroll-pt-36'
        src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?autoplay=1&mute=1&loop=1&controls=0&color=black&modestbranding=0&playsinline=1&enablejsapi=1&rel=0&autohide=1&showinfo=0&playlist="+trailerVideo?.key }
        title="YouTube video player" 
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        ></iframe>
    </div>
  )
};

export default VideoBackground;

// &start=0