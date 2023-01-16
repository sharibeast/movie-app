import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchMovies } from '../../api'
import SearchIcon from '../atoms/icons/SearchIcon'

export default function MovieSearchInput() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()



  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = await searchMovies(query)

    if(data){
      navigate('/results', { state: data })
    }

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
