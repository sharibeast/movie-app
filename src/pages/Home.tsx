import React from 'react'
import { useLocation, Link, Outlet } from 'react-router-dom'
import HomeIcon from '../components/atoms/icons/HomeIcon'
import SearchIcon from '../components/atoms/icons/SearchIcon'
import TvSeriesIcon from '../components/atoms/icons/TvSeriesIcon'
import { StyledLogo } from '../components/atoms/Logo'
import VideoCameraIcon from '../components/atoms/VideoCameraIcon'

export default function Home() {
          const match = location.pathname
          console.log('this is', match);
          return (
                    <div className='bg-primary-bg'>
                              <div className='flex justify-around gap-4'>
                                        {/* navigation */}
                                        <div className='w-1/5 bg-[#212121] rounded-r-custom01 pl-10 py-10'>
                                                  <StyledLogo />
                                                  <ul className='flex flex-col gap-4  mt-8'>
                                                            <GlowLink icon={<HomeIcon active={match === '/'} />} to={"/"}>
                                                                      Home
                                                            </GlowLink>
                                                            <GlowLink icon={<VideoCameraIcon active={match === '/movies'} />} to={"/movies"}>
                                                                      movies
                                                            </GlowLink>
                                                            <GlowLink icon={<TvSeriesIcon />} to={"/tv series"}>Tv series</GlowLink>
                                                  </ul>
                                        </div>

                                        <Outlet />
                                        {/* sidebar */}
                                        <div className='bg-zinc-400 h-screen w-1/5'>

                                        </div>
                              </div>
                    </div>
          )
}


interface CustomLinkProps {
          children: React.ReactNode
          to: string
          icon: React.ReactNode
}
function GlowLink({ children, to, icon }: CustomLinkProps) {
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
          return (<div className='bg-orange-400 flex-1'>
                    <div>
                              <div>
                                        <input />
                              </div>
                    </div>
          </div>)
}

