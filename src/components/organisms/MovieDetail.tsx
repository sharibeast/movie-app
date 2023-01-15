import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { PopularMovies } from '../../api'

export default function MovieDetail() {
          const location = useLocation()
          const { id } = useParams()
          const { data } = location.state as { data: PopularMovies }

          console.log(`data ni` + JSON.stringify(data));

          return (
                    <div className='text-white grid place-items-center'>
                              <img src={data.poster_path} alt="" />
                              <h1 className='text-2xl font-semibold'>{data.title}</h1>
                              <div className='flex gap-4'>
                                        <p className=' w-4/5'>{data.overview}</p>
                                        <div className='w-1/5 flex flex-col'>
                                                  <button className='bg-[#36ADA8] rounded-md text-lg font-medium text-white py-4'>See Show times</button>
                                                  <button className='rounded-md bg-[#131313] text-lg font-light text-white py-4'>More Watch Options</button>
                                        </div>
                              </div>
                    </div>
          )
}
