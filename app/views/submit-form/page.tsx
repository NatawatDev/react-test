'use client'

import React, { useState } from 'react'
import BaseInput from '@/app/components/BaseInput'
import BaseButton from '@/app/components/BaseButton'
import { FormData, FormErrors } from '@/app/types'

const SubmitForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      username: value
    }))
  
    setErrors((prevErrors) => ({
      ...prevErrors,
      username: ''
    }))
  }
  
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      email: value
    }))

    setErrors((prevErrors) => ({
      ...prevErrors,
      email: ''
    }))
  }
  
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      password: value
    }))
  
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: ''
    }))
  };

  const validate = (username: string, email: string, password: string): FormErrors => {
    const errors: FormErrors = {}
  
    if (!username) {
      errors.username = 'กรุณากรอก Username'
    } else if (username.length < 4) {
      errors.username = 'Username จะต้องมีอย่างน้อย 4 ตัวอักษร'
    }

    if (!email) {
      errors.email = 'กรุณากรอก Email'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'กรุณากรอก Email ให้ถูกต้อง'
    }
  
    if (!password) {
      errors.password = 'กรุณากรอก Password'
    } else if (password.length < 6) {
      errors.password = 'Password จะต้องมีอย่างน้อย 6 ตัวอักษร'
    }
  
    return errors
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault()

    const valid = validate(formData.username, formData.email, formData.password)
    setErrors(valid)

    if (Object.keys(valid).length > 0) return

    window.alert('ลงทะเบียนสำเร็จ')

    setFormData({
      username: '',
      email: '',
      password: ''
    })
  }

  return (
    <div className='main-container'>
      <div>
        <form className='flex flex-col justify-center gap-4 mb-2' onSubmit={handleSubmit}>
          
          <div className='flex justify-center font-bold text-[24px]'>
            <p>กรุณาลงทะเบียน</p>
          </div>

          <div>
            <BaseInput title='Username' value={formData.username} onChange={handleUsernameChange}/>
            {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
          </div>

          <div>
            <BaseInput title='Email:' value={formData.email} onChange={handleEmailChange}/>
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>

          <div>
            <BaseInput title='Password:' value={formData.password} onChange={handlePasswordChange}/>
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </div>

          <BaseButton title='ลงทะเบียน'/>
        </form>
      </div>
    </div>
  )
}

export default SubmitForm
