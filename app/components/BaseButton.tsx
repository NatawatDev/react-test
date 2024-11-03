'use client'

import React from 'react'
import { BaseButtonPropsType } from '@/app/types'

const BaseButton: React.FC<BaseButtonPropsType> = ({ title = 'Default Button', actions, isDisable = false }) => {
  return (
    <>
      <button 
        disabled={isDisable} 
        onClick={actions} 
        className='font-semibold text-[16px] px-4 py-1 bg-white border-2 border-[#efeeef]  hover:bg-[#f6f9fb] disabled:bg-[#c0c0c0] disabled:text-white'
      >
        {title}
      </button>
    </>    
  )


}

export default BaseButton