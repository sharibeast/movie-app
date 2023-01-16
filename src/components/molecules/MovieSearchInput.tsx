import React from 'react'
import SearchIcon from '../atoms/icons/SearchIcon'

export default function MovieSearchInput() {
  return (
    <div className='flex items-center bg-[#212121] rounded-full py-0 md:py-4 px-16 md:px-8'>
      <SearchIcon />
      <input className='w-full placeholder:text-[#4D4D4D] placeholder:font-semibold text-sm md:text-xl text-[#4D4D4D] outline-none bg-[#212121]' type={"text"} placeholder='Search for movies ,Tv shows ...' />
    </div>
  )
}
