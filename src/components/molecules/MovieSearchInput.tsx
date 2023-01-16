import React, { useState } from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import { searchMovies } from '../../api'
import { useDispatch } from 'react-redux'
import SearchIcon from '../atoms/icons/SearchIcon'
import { addMovies, searchMovieByWord } from '../../store/slices/movieSlice'
import { AppDispatch } from '../../store/store'

export default function MovieSearchInput() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()



  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(searchMovieByWord(query)).then(() => {
      navigate("/results")
    })
  }

  return (
    <div className='flex md:flex-1 items-center bg-[#212121] rounded-full py-0 md:py-2 px-16 md:px-8'>
      <SearchIcon />
      <form onSubmit={onSubmit} action="">
        <input onChange={(e) => (setQuery(e.target.value))} value={query} className='w-full md:w-96 placeholder:text-[#4D4D4D] placeholder:font-semibold text-sm md:text-xl text-[#a4a4a4] outline-none bg-[#212121]' type={"text"} placeholder='Search for movies ,Tv shows ...' />
      </form>
    </div>
  )
}
