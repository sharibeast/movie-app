import React from 'react'
import SearchIcon from '../atoms/icons/SearchIcon'

export default function MovieSearchInput() {
  return (
    <div className='flex md:flex-1 items-center bg-[#212121] rounded-full py-0 md:py-2 px-16 md:px-8'>
      <SearchIcon />
      <input className='w-full placeholder:text-[#4D4D4D] placeholder:font-semibold text-sm md:text-xl text-[#a4a4a4] outline-none bg-[#212121]' type={"text"} placeholder='Search for movies ,Tv shows ...' />
    </div>
  )
}
