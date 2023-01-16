import React from 'react'
import Button from '../../components/atoms/Button'
import GoogleIcon from '../../components/atoms/icons/GoogleIcon'
import TextField from '../../components/atoms/TextField'
import { Link, useNavigate } from 'react-router-dom'
import Carousel from '../../components/organisms/Carousel'
import CarouselSlide from '../../components/organisms/Carousel'
import { StyledLogo } from '../../components/atoms/Logo'

export default function Login() {
  const navigate = useNavigate()
  return (
    <div className='bg-primary-bg text-white py-10 px-4'>
      <StyledLogo />
      <div className='flex flex-col  lg:flex-row justify-between'>
        <div className='lg:w-1/2 grid place-content-center py-16 px-4'>
          <div className='flex flex-col gap-8'>
            <div>
              <h2 className='font-semibold text-3xl text-center tracking-wider'>Welcome back, Olivia </h2>
              <p className='text-xl text-gray-01 font-semibold mt-2'>Welcome back! Please enter your details</p>
            </div>
            <button type='button' className='flex w-full items-center gap-4 justify-center py-4 border border-border-01 rounded-2xl text-xl'><GoogleIcon />Login in with Google</button>
            <div className='flex items-center gap-8'>
              <div className='h-[0.5px] w-full bg-border-01'></div>
              or
              <div className='h-[0.5px] w-full bg-border-01'></div>
            </div>
            <form className='px-2 flex flex-col gap-6' action="">
              <TextField placeholder='Email' name='email' type={"email"} />
              <TextField placeholder='password' name='password' type={"password"} />
              <div className='flex justify-between'>
                <label className='text-gray-01' htmlFor="checkbox">
                  <input className='mr-2' type={"checkbox"} />
                  Remember me for 30 days
                </label>
                <span className='underline text-sm text-[#A8A8A8]'>Forgot password</span>
              </div>
              <Button type='button' onClick={() => navigate("/")}>Log in</Button>
              <p className='text-center text-gray-01 text-base mt-8'>Dont have account ? <Link to={"/signup"}>Sign up for free</Link> </p>
            </form>
          </div>
        </div>

        {/* carousel */}
        {/* <CarouselSlide /> */}
      </div>
    </div>
  )
}
