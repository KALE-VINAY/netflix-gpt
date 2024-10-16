import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchPage from './GptSearchPage'
import { BG_URL } from '../utils/constants'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
  return (
    <div>
        <div className="fixed -z-10">
            <img 
            src={BG_URL} alt="bg img"
            />
        </div>
        
    <GptSearchBar/>
    <GptSearchPage/>
    <GptMovieSuggestion />


    </div>
  )
}

export default GptSearch