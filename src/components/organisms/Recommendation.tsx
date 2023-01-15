import React from 'react'
import PlayIcon from '../atoms/icons/PlayIcon'
import SearchIcon from '../atoms/icons/SearchIcon'


export const Recommendation = () => {
  return (
    <div className='flex-1 py-10 text-white h-screen'>
      <div>
        <div>
          <div className='flex items-center bg-[#212121] rounded-full py-4 px-8'>
            <SearchIcon />
            <input className='w-full placeholder:text-[#4D4D4D] placeholder:font-semibold text-xl text-[#4D4D4D] outline-none bg-[#212121]' type={"text"} placeholder='Search for movies ,Tv shows ...' />
          </div>
          <div className='relative mt-8'>
            <img src='/src/assets/images/mfGJl8.jpg' className='rounded-2xl  h-[400px] w-full object-fill object-center ' />
            <div className='absolute bottom-4 right-4 flex item-center gap-4'>
              <Button />
              <Button />
            </div>
          </div>

          {/* trending */}
          <div>
            <div className='flex justify-between'>
              <span className='text-3xl text-white font-bold'>Trending</span>
              <button className='text-gray-500 text-xl capitalize'>see all</button>
            </div>
            <div className='grid grid-cols-4 gap-4'>
              <div className='rounded-xl relative aspect-[3/2]'>
                <img className='rounded-xl  object-cover' src='/src/assets/images/bg2.jpg' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const Button = () => {
  return <button className='flex items-center bg-[#8596b8] opacity-90 py-3 backdrop-blur-2xl text-lg px-8 rounded-xl text-white'><PlayIcon /> Play</button>
}
