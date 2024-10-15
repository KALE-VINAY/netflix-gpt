import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchPage from './GptSearchPage'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
            <img 
            src={BG_URL} alt="bg img"
            />
        </div>
        
    <GptSearchBar/>
    <GptSearchPage/>
    GPT movie s


    </div>
  )
}

export default GptSearch