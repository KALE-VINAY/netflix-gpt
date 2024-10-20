import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from '../utils/constants';
import {addGptMoviesResult } from "../utils/gptSlice";

// import openai from '../utils/openai';

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const genAI = new GoogleGenerativeAI("AIzaSyC922Irh1s9_c8L-1Azit3fCsRHysA10zg");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


const GptSearchBar = () => {
    const langKey = useSelector((store) =>  store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

//search movie in tmdb database
  const searchMovieTMDB = async (movie) => {

    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1',
       API_OPTIONS);
       const json = await data.json()

       return json.results;


  };


    const handleGptSearchClick = async() =>{

        const prompt = "Act as a Movie Recomendation system and suggest some movies for the query : " + searchText.current.value +".only give me names of 5 movies, comma separated like the example result given ahead . Example Result should be like this: gadar,  sholey,  don, golmaal,  koi mil gaya ";

        const result = await model.generateContent(prompt);
        
        if (result.response.text()){
          // todo write a error handling code

        }
        console.log(result.response.text());
        const gptMovies = result.response.text().split(",");

        const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(addGptMoviesResult({movieNames: gptMovies ,movieResults: tmdbResults}));
    };

  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center '>

        <form className='w-full md:w-1/2  bg-black grid grid-cols-12 ' 
        onSubmit ={(e) => e.preventDefault()} >

        <input 
        ref={searchText } 
        type='text' 
        className=' p-4 m-4 col-span-9 '
        placeholder={lang[langKey].gptSearchPlaceHolder}/>
        <button className='py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg 
        ' onClick= {handleGptSearchClick}>{lang[langKey].Search}</button>

        </form>
        
    </div>
  )
}

export default GptSearchBar




  // console.log(searchText.current.value);
        //make an api call to gpt api and get movie results

        // const gptQuery =
        //  "Act as a Movie Recomendation system and suggest some movies for the query : " + searchText.current.value +".only give me names of 5 movies, comma separated like the example result given ahead . Example Result should be like this: gadar,  sholey,  don, golmaal,  koi mil gaya ";
        
        //  const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery }],
        //     model: 'gpt-3.5-turbo',
        //   });

        //   console.log(gptResults.choices)
