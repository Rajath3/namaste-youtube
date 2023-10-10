import React from 'react'

const LiveComment = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm'>
         <img 
        alt="user"
        className='h-8'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbU49DD_iYcjSUEXG-Oy7POjJzaMn1GYEZg&usqp=CAU' />
        <span className='font-bold p-4'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default LiveComment