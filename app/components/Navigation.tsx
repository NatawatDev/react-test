'use client'

import React from 'react'
import BaseButton from "./BaseButton";
import { TaskButton } from "../types"
import { useRouter  } from "next/navigation";

const Navigation = () => {
  const taskButton: TaskButton[] = [
    { title: 'Todo List', path: '/views/todo' },
    { title: 'Validate Form', path: '/views/submit-form' },
    { title: 'Serch Bar', path: '/views/search-data' },
    { title: 'Home', path: '/' }
  ]
  const router = useRouter() 

  const nextPage = (path: string): void => {
    router.push(path)
  }
  return (
    <div className="w-full flex items-center justify-center p-8 gap-6">
    {taskButton.map((item, index) => (        
      <BaseButton key={index} title={item.title} actions={() => nextPage(item.path)} />
    ))}
    </div>
  )
}

export default Navigation