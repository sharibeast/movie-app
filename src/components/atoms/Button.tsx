import React from 'react'


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
          children: React.ReactNode
}
export default function Button({ type = "button", children, ...rest }: ButtonProps) {
          return (
                    <button type={type} {...rest} className='bg-white text-black py-3 rounded-2xl text-xl font-bold'>{children}</button>
          )
}
