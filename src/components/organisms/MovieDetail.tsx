import React, { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { getSimilarMovies, PopularMovies } from '../../api'
import BookMarkIcon from '../atoms/icons/BookMarkIcon'
import CaretDownIcon from '../atoms/icons/CaretDownIcon'
import LoveIcon from '../atoms/icons/LoveIcon'
import MenuIcon from '../atoms/icons/MenuIcon'
import PlayIcon from '../atoms/icons/PlayIcon'
import SettingIcon from '../atoms/icons/SettingIcon'
import ShareIcon from '../atoms/icons/ShareIcon'
import StarIcon from '../atoms/icons/StarIcon'
import MovieSearchInput from '../molecules/MovieSearchInput'
import { MovieCard, SearchInputBar } from './Recommendation'
import { useQuery } from '@tanstack/react-query'
import Loader from '../atoms/Loader'

export default function MovieDetail() {
  const { id } = useParams()
  const { data: similarMovies, isLoading } = useQuery(['similarMovies', id], () => getSimilarMovies(id!))
  const location = useLocation()
  const { data } = location.state as { data: PopularMovies }

  if (isLoading) {
    return <div className='flex-1 grid place-items-center'><Loader /></div>
  }

  if (!data) {
    return <div>No movie data available</div>
  }

  return (
    <div>
      <div className='flex-1 py-4 text-white bg-primary-bg px-2 md:px-16 md:py-10 max-w-screen-2xl lg:mx-auto'>
        <SearchInputBar />
        <div className='max-h-96 relative'>
          <img src={data.backdrop_path} className="w-full max-h-96 h-auto rounded-3xl" alt={data.original_title} loading="lazy" />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center'>
            <div className='bg-[#7F847F]  opacity-60 hover:opacity-80 transition-all duration-200 rounded-full w-16 h-16 md:w-24 md:h-24 grid place-content-center '>
              <PlayIcon size={40} />
            </div>
            <h2 className='text-xl font-medium'>Watch Trailer</h2>
          </div>
        </div>
        <div className='grid   gap-6 md:grid-cols-6'>
          <div className='p-4 md:col-span-4'>
            <div className=''>
              <h2 className='font-semibold text-2xl'>{data.title} 2013 ‧ War/Action ‧ 2h 1m
              </h2>
              <p className='font-normal tracking-tight md:text-xl mt-4'>{data.overview}</p>
            </div>
            <ProducersList />
            <div className='grid grid-cols-1 md:grid-cols-2 mt-6'>
              <button className='bg-[#3DD0CA] rounded-md py-1 px-2'>Top rated movies #65</button>
              <button className='flex items-center py-1 px-2 justify-between'>Awards 9 nomination <CaretDownIcon /></button>
            </div>
            <div className='mt-6'>
              <div className='font-semibold text-lg mb-6'>Top Cast</div>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>
                {CastList.map((cast, idx) => <CastProfile key={idx} src={cast.src} movieName={cast.movieName} name={cast.name} />)}
              </div>
            </div>
            <div className='flex justify-between items-center border-t border-b border-gray-01 py-4 mt-4'>
              All cast & Crew  <CaretDownIcon />
            </div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 py-6'>
              <div>
                <h1 className='font-medium text-lg'>{data.original_title}</h1>
                <p className='tracking-tight font-normal'>{data.overview}</p>
                <span>Learn More</span>
              </div>
              <img src={data.poster_path} className={"h-[250px] w-full rounded-xl object-cover"} alt={data.title} />
            </div>


            <div className='flex justify-between mb-8'>
              <span className='text-lg md:text-xl text-white font-bold'>Similar movies</span>
              <button className='text-gray-500 text-base md:text-xl capitalize'>see all</button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-16'>
              {
                similarMovies?.map((movie) => <Link onClick={() => window.scrollTo(0, 0)} to={String(movie.id)} key={movie.id} state={{ data: movie }}><MovieCard src={movie.poster_path} alt={movie.original_title} /></Link>
                )
              }
            </div>
          </div>
          <div className=' p-4   md:col-span-2'>
            <div className='flex items-center gap-4 font-medium text-lg'>
              <LoveIcon />
              <ShareIcon />
              <BookMarkIcon />
              <StarIcon />
              8.5 | 350K
            </div>
            <div>
              <button className='bg-[#3DD0CA] rounded-md py-1 px-2 w-full font-semibold text-lg'>See Show Time</button>
              <button className='bg-[#131313] rounded-md py-2 px-2 w-full mt-4 font-semibold text-lg flex items-center justify-center gap-4'> <MenuIcon /> More watch Options</button>
            </div>

            {
              (similarMovies![0].poster_path && similarMovies![1].poster_path && similarMovies![0].poster_path) ? (
                <div className='mt-8 relative'>
                  <div className='grid grid-cols-3'>
                    <img src={similarMovies![0].poster_path} className="rounded-l-2xl" alt={similarMovies![0].title} />
                    <img src={similarMovies![1].poster_path} alt={similarMovies![0].title} />
                    <img src={similarMovies![2].poster_path} className="rounded-r-2xl" alt={similarMovies![0].title} />
                  </div>
                  <div className='flex items-center px-4 gap-4 bg-black opacity-75 text-sm md:text-base py-3 absolute bottom-0 w-full'>
                    <MenuIcon /> The best movies and shows in september
                  </div>
                </div>
              ) : null
            }




            <div className='grid gap-4 mt-8'>
              <MovieStunt
                detail='updated 1 week ago ‧ 50 images'
                src={similarMovies![0].backdrop_path}
                title="The billion dollar film club:50 Movie to reach $1 Billion worldwide"
              />
              <MovieStunt
                detail='updated 1 month ago ‧ 52 images'
                src={similarMovies![6].backdrop_path}
                title="2022 summer movies guide"
              />
              <MovieStunt
                detail='updated 1 month ago ‧ 52 images'
                src={similarMovies![3].backdrop_path}
                title="Upcoming Action and Adventure Movies and Tv"
              />
            </div>





            <div className='mt-8 relative'>
              <div className='grid grid-cols-3'>
                <img src={similarMovies![3].poster_path} className="rounded-l-2xl" alt={similarMovies![0].title} />
                <img src={similarMovies![4].poster_path} alt={similarMovies![0].title} />
                <img src={similarMovies![5].poster_path} className="rounded-r-2xl" alt={similarMovies![0].title} />
              </div>
              <div className='flex items-center px-4 gap-4 bg-black opacity-75 text-sm md:text-base py-3 absolute bottom-0 w-full'>
                <MenuIcon /> Top 50 TV dramas
              </div>
            </div>
            <div className='mt-8 relative'>
              <div className='grid grid-cols-3'>
                <img src={similarMovies![0].poster_path} className="rounded-l-2xl" alt={similarMovies![0].title} />
                <img src={similarMovies![7].poster_path} alt={similarMovies![0].title} />
                <img src={similarMovies![6].poster_path} className="rounded-r-2xl" alt={similarMovies![0].title} />
              </div>
              <div className='flex items-center px-4 gap-4 bg-black opacity-75 text-sm md:text-base py-3 absolute bottom-0 w-full'>
                <MenuIcon /> New & upcoming sequels, prequels
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export const NameSpan = ({ children }: { children: React.ReactNode }) => <span className='text-[#3DD0CA]'>{children}</span>

export const ProducersList = () => {
  return (

    <div className='mt-4'>
      <ul>
        <li className='border-t border-gray-01 py-2'>Director: <NameSpan>Joseph Kasinki</NameSpan></li>
        <li className='border-t border-gray-01 py-2'>Writers: <NameSpan>Jim Cash, Jack Epps Jr, Peter Craig</NameSpan></li>
        <li className='border-t border-gray-01 py-2 border-b'>Stars: <NameSpan>Tom Cruise, Jennifer Connelly, Miles Teller</NameSpan></li>
      </ul>
    </div>
  )
}

interface ICastProfile {
  name: string;
  movieName: string;
  src: string;
}

const CastList: ICastProfile[] = [
  {
    name: 'Miley Telles',
    movieName: 'Lt. Bradley Bradshow',
    src: '/src/assets/images/pr4.jpeg',
  },
  {
    name: 'Val Kilmer',
    movieName: 'Adm.Tom Kazansky',
    src: '/src/assets/images/pr3.jpeg'
  },

  {
    name: 'Val Kilmer',
    movieName: 'Adm.Tom Kazansky',
    src: '/src/assets/images/pr2.jpeg'
  },

  {
    name: 'Val Kilmer',
    movieName: 'Adm.Tom Kazansky',
    src: '/src/assets/images/pr1.jpeg'
  }
]
export const CastProfile = ({ movieName, name, src }: ICastProfile) => {
  return (

    <div className='grid place-items-center w-fit'>
      <img src={src} className='h-24 w-24 md:h-32 md:w-32 rounded-full aspect-[2/2]' />
      <h2 className='font-medium text-xl text-center'>{name}</h2>
      <p className='text-lg text-gray-01 text-center'>{movieName}</p>
    </div>
  )
}



interface IMovieStunt {
  src: string
  title: string
  detail: string
}
export const MovieStunt = ({ src, detail, title }: IMovieStunt) => {
  return (
    <div className='grid grid-cols-6 border rounded-lg p-4'>
      <div className='col-span-3 md:col-span-4'>
        <h4 className='text-gray-400'>{title}</h4>
        <p className='text-gray-01'>{detail}</p>
      </div>
      <img className='col-span-3 md:col-span-2 rounded-lg ' src={src} />
    </div>
  )
}
