// import React from 'react'

// const VideoTitle = ({title,overview}) => {
//   return (
//     <div className='w-screen aspect-video pt-[25%] px-6  md:px-24 absolute text-white bg-gradient-to-r from-black'>
//       <h className=" text-2xl md:text-5xl  font-bold">{title}</h>
//     <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>

//       <div className='my-4 md:m-0 '>
//         <button className='bg-white text-black font-bold p-4 py-1 md:py-4 px-3 text-xl  rounded-lg hover:bg-opacity-70'>play</button>
//         <button  className='hidden md:inline-block mx-2 my-2 bg-white text-black font-bold p-4  px-12  text-xl rounded-lg bg-opacity-30 hover:bg-opacity-70'>More Info</button>
      
//       </div>
//     </div>
//   );
// }

// export default VideoTitle;

import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video -mt-[10%] md:mt-[0%] my-[10%] md:my-[0%] pt-[50%] md:pt-[25%] px-4 md:px-16 lg:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
      <p className="hidden md:block py-4 text-base md:text-lg md:w-3/4 lg:w-3/12">{overview}</p>

      <div className="my-4 md:my-0 flex flex-col md:flex-row md:items-center">
        <button className="bg-white text-black font-bold px-0 md:px-8 p-2 md:p-4 text-lg md:text-xl rounded-lg hover:bg-opacity-70 transition">
          Play
        </button>
        <button className="hidden md:inline-block mx-2 mt-4 md:mt-0 bg-white text-black font-bold p-2 md:p-4 px-8 md:px-12 text-lg md:text-xl rounded-lg bg-opacity-30 hover:bg-opacity-70 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
