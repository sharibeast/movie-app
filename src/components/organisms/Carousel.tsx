import React from 'react'
import Carousel from 'better-react-carousel'
// import ArroLeftIcon from '../atoms/icons/ArroLeft'
// import ArrowRightIcon from '../atoms/icons/ArrowRight'

// export default function CarouselSlide() {
//           return (
//                     <Carousel style={{ backgroundColor: "black", position: "relative" }} className='bg-primary-bg'
//                               arrowLeft={<ArrowLeft />}
//                               arrowRight={<ArrowRight />}
//                               containerClassName='lg:w-1/2 h-screen' cols={1} rows={1} gap={10} loop>
//                               <Carousel.Item className='relative'>
//                                         <MovieDetail
//                                                   title='Avatar: The Way of Water'
//                                                   description='2022 | Sci-fi/Action  | 3h 12m'
//                                                   genre='Genres: Sci-fi/Action'
//                                                   src='/src/assets/images/ava.jpg'
//                                         />
//                               </Carousel.Item>
//                               <Carousel.Item className='relative'>
//                                         <MovieDetail
//                                                   src='/src/assets/images/mfGJl8.jpg'

//                                         />
//                               </Carousel.Item>

//                     </Carousel>
//           )
// }





interface MovieDetailProps {
          title?: string,
          description?: string,
          genre?: string,
          src?: string
}
const MovieDetail = ({ title, description, genre, src }: MovieDetailProps) => {
          return (
                    <div className=''>
                              <div className='absolute bottom-10 md:bottom-20 left-4 md:left-10'>
                                        <h2 className='text-2xl md:text-3xl font-bold'>{title}</h2>
                                        <p className='font-semibold'>{description}
                                        </p>
                                        <p className='font-semibold'>{genre}</p>
                              </div>
                              <img width="100%" className='max-h-screen object-cover aspect-[2/2]' src={src} />
                    </div>
          )
}
