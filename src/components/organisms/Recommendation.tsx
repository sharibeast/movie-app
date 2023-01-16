import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getPopularMovies, getUpcomingMovies } from '../../api'
import { GlowLink } from '../../pages/Home'
import CloseIcon from '../atoms/icons/CloseIcon'
import ExclamationIcon from '../atoms/icons/ExclamationIcon'
import HomeIcon from '../atoms/icons/HomeIcon'
import LogoutIcon from '../atoms/icons/LogoutIcon'
import MenuIcon from '../atoms/icons/MenuIcon'
import PlayIcon from '../atoms/icons/PlayIcon'
import SearchIcon from '../atoms/icons/SearchIcon'
import SettingIcon from '../atoms/icons/SettingIcon'
import Loader from '../atoms/Loader'
import { StyledLogo } from '../atoms/Logo'
import VideoCameraIcon from '../atoms/VideoCameraIcon'
import MovieSearchInput from '../molecules/MovieSearchInput'


export const Recommendation = () => {
  const { data, isLoading } = useQuery(['popularMovies'], getPopularMovies)
  const { data: upComingMovies } = useQuery(['upcomingMovies'], getUpcomingMovies)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)


  if (!data || !upComingMovies) {
    return <div className='flex-1 grid place-items-center'><Loader /></div>
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
  const location = useLocation()
  const match = location.pathname
  return (
    <>
      <div className='flex justify-between mb-8 gap-6'>
        <button className='lg:hidden' onClick={() => setOpen(!open)}>
          <MenuIcon />
        </button>
        <MovieSearchInput />
        <button className='lg:hidden'>
          <SettingIcon />
        </button>
        <div className='hidden  lg:flex lg:items-center lg:gap-4'>
          <div className='w-fit p-2 bg-gray-01 rounded-full opacity-50'>
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 12V10C17.25 7.1005 14.8995 4.75 12 4.75C9.10051 4.75 6.75 7.10051 6.75 10V12L4.75 16.25H19.25L17.25 12Z"></path>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 16.75C9 16.75 9 19.25 12 19.25C15 19.25 15 16.75 15 16.75"></path>
            </svg>
          </div>
          <img src='/src/assets/images/pr1.jpeg' className='h-20 w-20 rounded-full' />
        </div>
      </div>
      {/* search bar input --end */}

      {/* mobile nav */}
      {
        open ? (
          <div onClick={() => setOpen(!open)} className='bg-primary-bg p-6 w-3/5 sm:w-[400px] lg:hidden h-screen z-10 absolute top-0 -mx-4'>
            <div className='flex justify-between'>
              <StyledLogo />
              <button onClick={() => setOpen(false)}>
                <CloseIcon />
              </button>
            </div>

            <ul className='flex flex-col gap-4 p-4  mt-8'>
              <GlowLink icon={<HomeIcon active={match === '/'} />} to={"/"}>
                Home
              </GlowLink>
              <GlowLink icon={<VideoCameraIcon active={match === '/movies'} />} to={"/movies"}>
                movies
              </GlowLink>
              {/* <GlowLink  icon={<TvSeriesIcon />} to={"/tvseries"}>Tv series</GlowLink> */}
              <GlowLink icon={<LogoutIcon />} to={"/signup"}>Logout</GlowLink>
            </ul>

          </div>
        ) : null
      }
    </>

  )
}

