import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { PopularMovies } from '../../api'
import PlayIcon from '../atoms/icons/PlayIcon'
import MovieSearchInput from '../molecules/MovieSearchInput'

export default function MovieDetail() {
          const location = useLocation()
          const { id } = useParams()
          const { data } = location.state as { data: PopularMovies }

          return (
                    <div className='text-white  flex-1'>
                              <MovieSearchInput />
                              <div className='max-h-96 relative'>
                                        <img src={data.backdrop_path} className="w-full max-h-96 h-auto rounded-3xl" alt={data.original_title} loading="lazy" />
                                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center'>
                                                  <div className='bg-[#7F847F]  opacity-60 hover:opacity-80 transition-all duration-200 rounded-full w-24 h-24 grid place-content-center '>
                                                            <PlayIcon size={40} />
                                                  </div>
                                                  <h2 className='text-xl font-medium'>Watch Trailer</h2>
                                        </div>
                              </div>
                              <div className='grid grid-cols-2 md:grid-cols-6'>
                                        <div className='col-span-4'>
                                                  <h2>{data.title} - {data.release_date.split('')}</h2>
                                        </div>


                              </div>

                              {/* <img src={data.backdrop_path} className="w-full h-[300px] object-contain" alt="" /> */}
                              {/* <h1 className='text-2xl font-semibold'>{data.title}</h1>
                              <div className='flex gap-4'>
                                        <p className=' w-4/5'>{data.overview}</p>
                                        <div className='w-1/5 flex flex-col'>
                                                  <button className='bg-[#36ADA8] rounded-md text-lg font-medium text-white py-4'>See Show times</button>
                                                  <button className='rounded-md bg-[#131313] text-lg font-light text-white py-4'>More Watch Options</button>
                                        </div>
                              </div> */}
                    </div>
          )
}
