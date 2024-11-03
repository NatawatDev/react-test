'use client'

import React from 'react'
import { BaseInputPropsType } from '@/app/types'

const BaseInput: React.FC<BaseInputPropsType> = ({ title = 'Default Button', onChange, value = '', isDisable = false }) => {
  return (
    <div className='flex items-center gap-2'>
      <label>{title}</label>
      <input className='border' type="text" value={value} disabled={isDisable} onChange={onChange} />
    </div>
  )
}

export default BaseInput