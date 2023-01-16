import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getPopularMovies, getUpcomingMovies } from '../../api'
import ExclamationIcon from '../atoms/icons/ExclamationIcon'
import MenuIcon from '../atoms/icons/MenuIcon'
import PlayIcon from '../atoms/icons/PlayIcon'
import SearchIcon from '../atoms/icons/SearchIcon'
import SettingIcon from '../atoms/icons/SettingIcon'
import MovieSearchInput from '../molecules/MovieSearchInput'


export const Recommendation = () => {
  const { data, isLoading } = useQuery(['popularMovies'], getPopularMovies)
  const { data: upComingMovies } = useQuery(['upcomingMovies'], getUpcomingMovies)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)


  if (!data || !upComingMovies) {
    return <div>loading</div>
  }

  return (

    <div className='flex-1 py-4 text-white bg-primary-bg px-2 md:px-16 md:py-10'>
      <div>
        {/* search bar Input */}
        <SearchInputBar />
        {/* mobile nav --end */}
        <div className='grid gap-4'>
          {/* Top Card */}
          <div className='max-h-96 relative'>
            <img src={data[4].backdrop_path} className="w-full max-h-96 h-auto rounded-3xl" />
            <div className='absolute right-5 bottom-5 md:right-20 md:bottom-20 flex items-center gap-8'>
              <button className='flex items-center bg-[#7F847F] py-2 px-3 md:py-4 md:px-8 rounded-lg gap-2  opacity-90 hover:opacity-80 transition-all duration-200'>
                <PlayIcon /> play
              </button>
              <button className='flex items-center bg-[#7F847F] py-2 px-3 md:py-4 md:px-8 rounded-lg gap-2  opacity-90 hover:opacity-80 transition-all duration-200'>
                <ExclamationIcon /> More info
              </button>
            </div>
          </div>

          {/* Top card --end */}
          {/* container for movies */}
          <div>
            <div className='flex justify-between mb-8'>
              <span className='text-lg md:text-3xl text-white font-bold'>Trending</span>
              <button className='text-gray-500 text-base md:text-xl capitalize'>see all</button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-16'>
              {
                data.map((movie) => <Link to={String(movie.id)} key={movie.id} state={{ data: movie }}><MovieCard src={movie.poster_path} alt={movie.original_title} /></Link>
                )
              }
            </div>
          </div>
          {/* container for movies --end */}


          {/* upcoming movies */}

          <div>
            <div className='flex justify-between mb-8'>
              <span className='text-lg md:text-3xl text-white font-bold'>Upcoming</span>
              <button className='text-gray-500 text-base md:text-xl capitalize'>see all</button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-16'>
              {
                upComingMovies.map((movie) => <Link to={String(movie.id)} key={movie.id} state={{ data: movie }}><MovieCard src={movie.poster_path} alt={movie.original_title} /></Link>
                )
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
export const MovieCard = ({ src, alt }: MovieProps) => {
  return (
    <div className='rounded-xl relative aspect-[3/2]'>
      <img alt={alt} className='rounded-xl  object-cover' src={src} />
    </div>)
}





export const SearchInputBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className='flex justify-between mb-8 gap-6'>
        <button onClick={() => setOpen(!open)}>
          <MenuIcon />
        </button>
        <MovieSearchInput />
        <button>
          <SettingIcon />
        </button>
      </div>
      {/* search bar input --end */}

      {/* mobile nav */}
      {
        open ? (
          <div onClick={() => setOpen(!open)} className='bg-black w-3/5 sm:w-[400px] h-screen z-10 absolute top-0 -mx-4'>

          </div>
        ) : null
      }
    </>

  )
}

