import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/atoms/Button'
import GoogleIcon from '../../components/atoms/icons/GoogleIcon'
import TextField from '../../components/atoms/TextField'



export default function SignUp() {
  const navigate = useNavigate()
  return (
    <div className='bg-primary-bg text-white'>
      <div className='flex flex-col  sm:flex-row justify-between'>
        <div className='bg-hero-pattern py-4 relative px-3 sm:py-12 md:px-16 bg-cover bg-no-repeat  h-screen sm:w-1/2 md:w-3/5'>
          <div className=''>
            <h2 className='text-3xl text-black font-bold'>MOVIBES</h2>
          </div>
          <div className='absolute bottom-10'>
            <h2 className='font-semibold text-2xl sm:text-4xl'>Benefits of your free IMDB account</h2>
            <div className="flex flex-col gap-4 mt-8">
              <p className='text-2xl font-light'>
                <span className='font-bold block'>Personal Recommendation</span>
                Discover shows you will love.
              </p>
              <p className='text-2xl font-light'>
                <span className='font-bold block'>Your Ratings</span>
                Rate and remember everything you've seen.
              </p>
              <p className='text-2xl font-light'>
                <span className='font-bold block'>Contribute to IMDb</span>
                Add data that will be seen by millions of people and get cool badges.
              </p>
            </div>
          </div>
        </div>
        <div className='sm:w-1/2 md:w-2/5 grid place-content-center py-16 px-4'>
          <div className=''>
            <h2 className='font-semibold text-3xl text-center tracking-wider'>Create an account</h2>
            <p className='text-xl text-gray-01 font-semibold mt-2'>Let's get started  with your 30 days free trial</p>
            <form className='px-2 flex flex-col gap-6' action="">
              <TextField placeholder='Name' name='name' type={"text"} />
              <TextField placeholder='Email' name='email' type={"email"} />
              <TextField placeholder='password' name='password' type={"password"} />
              <Button type='button' onClick={() => navigate('/login')}>Create account</Button>
              <button type='button' className='flex items-center justify-center py-4 gap-4 border border-border-01 rounded-2xl text-xl'><GoogleIcon /> sign up with Google</button>
            </form>
            <p className='text-center text-gray-01 text-base mt-8'>Already have an account ? <Link to={"/login"}>Login</Link> </p>
          </div>
        </div>
      </div>
    </div>
  )
}
