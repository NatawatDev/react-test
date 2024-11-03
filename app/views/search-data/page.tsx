'use client'

import React, { useState, useMemo } from 'react'
import TableData from './components/TableData'
import { UserData, TableDataHeader } from '@/app/types/index'

const mockUsers: UserData[] = [
  { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
  { name: 'Alice Johnson', email: 'alice@example.com', phone: '555-555-5555' }
]

const displayHeader: TableDataHeader[] = [
  { key: 'name', title: 'Name' }, 
  { key: 'email', title: 'Email' }, 
  { key: 'phone', title: 'Phone' }
]    

const SearchData = () => {
  const [searchValue, setSearchValue] = useState('')
  const [users, setUsers] = useState(mockUsers)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const filteredUsers = useMemo(() => {
    return users.filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  }, [users, searchValue])

  return (
    <div className='container mx-auto p-4'>
      <TableData 
        title='User Table'
        displayHeader={displayHeader} 
        dataList={filteredUsers} 
        handleSearch={handleSearch} 
        searchValue={searchValue} 
      />
    </div>
  )
}

export default SearchData