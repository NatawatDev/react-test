'use client'

import React from 'react'
import BaseButton from '@/app/components/BaseButton'
import { CardTodoPropsType } from '@/app/types'

const CardTodo: React.FC<CardTodoPropsType> = ({ task, deleteList, isDone, toggleTask }) => {

  return (
    <div className='flex gap-4 items-center pt-4 w-full'>
      <div className='min-w-[200px] px-2 py-2 flex gap-4 bg-[#f4f8fc] rounded-[5px] border-2 border-[#efeeef]'>
        <button 
          className={`rounded-full border-2 border-[#98a2a4] w-[25px] py-2 ${isDone ? 'bg-[#efeeef]' : ''}`} 
          onClick={toggleTask}
        >
        </button>     
        <label className={ isDone ? 'line-through' : ''}>{task}</label>
      </div>      
      <BaseButton title='Delete' actions={deleteList}/>
    </div>
  )
}

export default CardTodo