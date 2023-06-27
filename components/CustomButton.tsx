// by default all components in next js are server side components
// but if there is a functionality like onClick which is done by client
// so we need to convert this component to client side component
"use client";

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';

const CustomButton = ({title, containerStyles, handleClick, btnType, textStyles, 
  rightIcon}: CustomButtonProps) => {
  return (
    <button 
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>

        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image
              src={rightIcon} className='object-contain'
              alt = "right icon" fill
            />
          </div>
        )}
    </button>
  )
}

export default CustomButton