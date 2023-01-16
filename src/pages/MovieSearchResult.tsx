import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { getPopularMovies, getUpcomingMovies, PopularMovies } from '../api'
import ExclamationIcon from '../components/atoms/icons/ExclamationIcon'
import PlayIcon from '../components/atoms/icons/PlayIcon'
import { MovieCard, SearchInputBar } from '../components/organisms/Recommendation'

export default function () {
  const navigate = useNavigate()
  const location = useLocation()
  const { data } = location.state as { data: PopularMovies[] }
  if (!data) {
    return <Navigate to={"/"} replace />
  }
  return (

    <div className='flex-1 py-4 text-white bg-primary-bg px-2 md:px-16 md:py-10'>
      <div>
        <SearchInputBar />
        <div className='grid gap-4'>
          <div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-16'>
              {
                data.map((movie) => <Link to={String(movie.id)} key={movie.id} state={{ data: movie }}><MovieCard src={movie.poster_path} alt={movie.original_title} /></Link>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
