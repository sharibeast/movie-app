import React from 'react'
import { LinkIconProps } from '../../@types'



// 505050

export default function VideoCameraIcon({ active }: LinkIconProps) {
          return (
                    <svg className={`${active ? "text-[#3CCBC6]" : "text-[#505050]"} `}
                              xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                              <path d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h26q1.2 0 2.1.9.9.9.9 2.1v10.75l8-8v20.5l-8-8V37q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h26V11H7v26Zm0 0V11v26Z" />
                    </svg>
          )
}


