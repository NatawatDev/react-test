'use client'

import React, { useState } from 'react'
import BaseButton from '@/app/components/BaseButton'
import { CardTodoPropsType } from '@/app/types'

const CardTodo: React.FC<CardTodoPropsType> = ({ task, deleteList }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  return (
    <div className='flex gap-4 items-center pt-4'>
      <div className='w-[200px] px-2  flex gap-4 bg-[#023EBA] rounded-full border-2 border-[#efeeef] text-white'>
        <input 
          type="checkbox" 
          onChange={(event:React.ChangeEvent<HTMLInputElement>) => setIsChecked(event.target.checked)} 
        />        
        <label style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{task}</label>
      </div>      
      <BaseButton title='Delete' actions={deleteList}/>
    </div>
  )
}

export default CardTodo