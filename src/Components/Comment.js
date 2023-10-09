import React from 'react'

const Comment = ({data}) => {

  const {name, text} = data;  
  return (
    <div className='flex shadow-sm rounded-lg bg-gray-100 my-2 p-2'>
        <img 
        alt="user"
        className='h-8'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbU49DD_iYcjSUEXG-Oy7POjJzaMn1GYEZg&usqp=CAU' />
    <div>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
    </div>

    </div>
  )
}

export default Comment