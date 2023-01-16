import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getPopularMovies } from '../../api'
import ExclamationIcon from '../atoms/icons/ExclamationIcon'
import MenuIcon from '../atoms/icons/MenuIcon'
import PlayIcon from '../atoms/icons/PlayIcon'
import SearchIcon from '../atoms/icons/SearchIcon'
import SettingIcon from '../atoms/icons/SettingIcon'
import MovieSearchInput from '../molecules/MovieSearchInput'


export const Recommendation = () => {
  const { data, isLoading } = useQuery(['popularMovies'], getPopularMovies)
  const [open, setOpen] = useState(false)


  if (!data) {
    return <div>loading</div>
  }

  return (

    <div className='flex-1 py-4 text-white bg-primary-bg px-2'>
      <div>
        <div className='flex justify-between'>
          <button onClick={() => setOpen(!open)}>
            <MenuIcon />
          </button>
          <MovieSearchInput />
          <button>
            <SettingIcon />
          </button>
        </div>
        {
          open ? (
            <div onClick={() => setOpen(!open)} className='bg-black w-3/5 h-screen z-10 absolute top-0 -mx-4'>

            </div>
          ) : null
        }
        <div>
          <div className='max-h-96 relative'>
            <img src={data[0].backdrop_path} className="w-full max-h-96 h-auto rounded-3xl" />
            <div className='absolute right-5 bottom-5 md:right-20 md:bottom-20 flex items-center gap-8'>
              <button className='flex items-center bg-[#7F847F] py-2 px-3 md:py-4 md:px-8 rounded-lg gap-2  opacity-90 hover:opacity-80 transition-all duration-200'>
                <PlayIcon /> play
              </button>
              <button className='flex items-center bg-[#7F847F] py-2 px-3 md:py-4 md:px-8 rounded-lg gap-2  opacity-90 hover:opacity-80 transition-all duration-200'>
                <ExclamationIcon /> More info
              </button>
            </div>
          </div>
          <div>
            <div className='flex justify-between'>
              <span className='text-3xl text-white font-bold'>Trending</span>
              <button className='text-gray-500 text-xl capitalize'>see all</button>
            </div>
            <div className='grid grid-cols-4 gap-4'>
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


// const MenuOpenContext = React.createContext<any>(false)

// const MenuOpenProvider = ({ children }: { children: React.ReactNode }) => {
//   const [open, setOpen] = useState(false)

//   const value = { open, setOpen }
//   return (
//     <MenuOpenContext.Provider value={value}>
//       {children}
//     </MenuOpenContext.Provider>
//   )
// }


// const SearchInputBar = () => {
//   const { open, setOpen } = React.useContext(MenuOpenContext)

//   // console.log('data',);


//   return (
//     <div className='flex justify-between'>
//       <button onClick={() => {
//         console.log('clicked');
//         setOpen(false)
//         console.log(open);
//       }}>
//         <MenuIcon />
//       </button>
//       <MovieSearchInput />
//       <button>
//         <SettingIcon />
//       </button>
//     </div>
//   )
// }
