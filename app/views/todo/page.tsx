'use client'

import React, { useState } from 'react'
import { TodoList } from '../../types'
import CardTodo from './components/CardTodo'
import BaseButton from '@/app/components/BaseButton'
import BaseInput from '@/app/components/BaseInput'

const Todo = () => {
  
  const [task, setTask] = useState<string>('')    
  const [todoList, setTodoList] = useState<TodoList[]>([])

  const addList = () => {
    if (!task.trim()) return
    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),        
        task: task,
        isDone: false
      }
    ])
    setTask('')
  }

  const toggleTask = (taskIndex: number) => {    
    setTodoList((prev) => {
      const updatedList = [...prev]
      updatedList[taskIndex] = { 
        ...updatedList[taskIndex],
        isDone: !updatedList[taskIndex].isDone
      }
      return updatedList
    })
  }
  

  const deleteList = (taskIndex: number) => {
    setTodoList((prev) => {
      const updatedList = [...prev]
      updatedList.splice(taskIndex, 1)
      return updatedList
    })
  }

  return (
    <div className='main-container'>
      <div>
        <div className='flex items-center gap-2'>
          <BaseInput title='Task:' value={task} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTask(event.target.value)}/>
          <BaseButton title='Add' actions={addList}/>        
        </div>
    
        <div className='flex flex-col gep-4 items-center'>
          {todoList && (
            todoList.map((item, index) => (
              <CardTodo 
                key={item.id}
                id={item.id} 
                task={item.task}
                isDone={item.isDone}
                toggleTask={() => toggleTask(index)}
                deleteList={() => deleteList(index)} 
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Todo