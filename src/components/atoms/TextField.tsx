import React from 'react'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  name: string
}
export default function TextField({ placeholder, name, ...rest }: TextFieldProps) {
  return (
    <input placeholder={placeholder} {...rest} name={name} className='w-full focus:bg-primary-bg placeholder:text-placeholder-color placeholder:text-2xl bg-primary-bg outline-none py-4 border-b border-border-01 text-lg' />
  )
}
