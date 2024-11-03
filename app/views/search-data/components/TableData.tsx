'use client'

import React from 'react'
import BaseInput from '@/app/components/BaseInput'
import { TableDataPropsType } from '@/app/types/index'

const TableData: React.FC<TableDataPropsType> = ({ displayHeader, title, searchValue, handleSearch, dataList }) => {
  return (
    <>
      <div className='flex items-center mb-4 justify-between'>        
        <h1 className='text-2xl font-bold'>{title}</h1>
        <BaseInput placeholder='ค้นหา' value={searchValue} onChange={handleSearch} />
      </div>    

      <table className='min-w-full border border-[#efeeef]'>
        <thead>
          <tr className='bg-[#98a2a4]'>
            {displayHeader && 
              displayHeader.map((header, index) => (
                <th key={index} className='border border-[#efeeef] p-2'>
                  {header.title}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {dataList.length > 0 ? (
            dataList.map((item, itemIndex) => (
              <tr key={itemIndex}>
                {displayHeader.map((header, headerIndex) => (
                  <td key={headerIndex} className='border border-[#efeeef] p-2'>
                    {item[header.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={displayHeader.length} className='border border-[#efeeef] p-2 text-center'>
                ไม่พบ User
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default TableData
