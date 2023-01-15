import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getPopularMovies } from '../../api'
import PlayIcon from '../atoms/icons/PlayIcon'
import SearchIcon from '../atoms/icons/SearchIcon'


export const Recommendation = () => {
  const { data, isLoading } = useQuery(['popularMovies'], getPopularMovies)

  if (!data) {
    return <div>loading</div>
  }

  return (
    <div className='flex-1 py-10 text-white bg-primary-bg '>
      <div>
        <div>
          <div className='flex items-center bg-[#212121] rounded-full py-4 px-8'>
            <SearchIcon />
            <input className='w-full placeholder:text-[#4D4D4D] placeholder:font-semibold text-xl text-[#4D4D4D] outline-none bg-[#212121]' type={"text"} placeholder='Search for movies ,Tv shows ...' />
          </div>
          <div className='relative mt-8'>
            <img src={data[0].poster_path} className='rounded-2xl  h-[400px] w-full object-contain  ' />
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
              {
                data.map((movie) => <MovieCard src={movie.poster_path} alt={movie.original_title} />)
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface MovieProps {
  src: string
  alt: string
}
const MovieCard = ({ src, alt }: MovieProps) => {
  return (
    <div className='rounded-xl relative aspect-[3/2]'>
      <img alt={alt} className='rounded-xl  object-cover' src={src} />
    </div>)

}
const Button = () => {
  return <button className='flex items-center bg-[#8596b8] opacity-90 py-3 backdrop-blur-2xl text-lg px-8 rounded-xl text-white'><PlayIcon /> Play</button>
}
