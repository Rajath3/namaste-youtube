import React, { useState, useMemo } from 'react'
import { findNthPrime } from '../utils/helper'

const Demo = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [num, setNum] = useState(0)

  // Memoise the return of heavy function
  const val =  useMemo(() =>findNthPrime(num), [num])
// const val =  findNthPrime(num)
  return (
    <div>
        <div className={'h-96 w-96 p-4 m-4 border border-black shadow-lg bg-slate-100' + (isDarkMode ? ' bg-red-900': '')}>
            <button className='p-w m-2 bg-green-100' onClick={()=> setIsDarkMode(!isDarkMode)}>Toggle Theme</button>
            <input type="number" value={num} onChange={(e)=> setNum(e.target.value)}/>
            <h4 className='text-white font-bold'>{val}</h4>
        </div>
    </div>
  )
}

export default Demo