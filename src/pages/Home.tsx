import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useLocation, Link, Outlet, useNavigate } from 'react-router-dom'
import { getPopularMovies, getUpcomingMovies } from '../api'
import ExclamationIcon from '../components/atoms/icons/ExclamationIcon'
import HomeIcon from '../components/atoms/icons/HomeIcon'
import LogoutIcon from '../components/atoms/icons/LogoutIcon'
import PlayIcon from '../components/atoms/icons/PlayIcon'
import TvSeriesIcon from '../components/atoms/icons/TvSeriesIcon'
import Loader from '../components/atoms/Loader'
import { StyledLogo } from '../components/atoms/Logo'
import VideoCameraIcon from '../components/atoms/VideoCameraIcon'
import MovieSearchInput from '../components/molecules/MovieSearchInput'
import { MovieCard, SearchInputBar } from '../components/organisms/Recommendation'

export default function Home() {

  return (
    <div className='bg-primary-bg'>
      <div className='flex justify-around gap-4'>
        {/* navigation */}
        <Navigation />
        <Outlet />
        {/* sidebar */}
        {/* <div className='bg-zinc-400 h-screen w-1/5'>

        </div> */}
      </div>
    </div>
  )
}

interface CustomLinkProps {
  children: React.ReactNode
  to: string
  icon?: React.ReactNode
}
export function GlowLink({ children, to, icon }: CustomLinkProps) {
  const location = useLocation()
  const match = location.pathname === to
  return (
    <Link className={`text-xl flex items-center gap-4   py-4  ${match ? "border-[$39B7B2] bg-[#2C6865] border-r-8 text-[#3DD2CC]" : "text-gray-01"}`} to={to}>
      {match ? icon : icon}
      {children}
    </Link>
  )
}

export const Movies = () => {
  const { data, isLoading } = useQuery(['popularMovies'], getPopularMovies)
  const { data: upComingMovies } = useQuery(['upcomingMovies'], getUpcomingMovies)


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
          {/* container for movies */}
          <div>
            <div className='flex justify-between mb-8'>
              <span className='text-lg md:text-3xl text-white font-bold'>Trending</span>
              <button className='text-gray-500 text-base md:text-xl capitalize'>see all</button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
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
            <div className='grid grid-cols-2 md:grid-cols-4 gap:4 gap-8'>
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


export const Navigation = () => {
  const match = location.pathname
  return (
    <div className='w-1/5 bg-[#212121] hidden lg:block rounded-r-custom01 pl-10 py-10'>
      <StyledLogo />
      <ul className='flex flex-col gap-4  mt-8'>
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
  )
}