import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';


const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
  
  movies.nowPlayingMovies && (
    <div className=" bg-black pt-[20%] md:pt-[0%]">
      <div className=' mt-0 md:-mt-32 relative z-20 pl-4 md:pl-12'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
      <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
      </div>
      
    </div>
  ));
};

export default SecondaryContainer;