import React from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from '../utils/appNavSlice'

const Head = () => {

  const dispatch = useDispatch()

  const handleClickHamburger = () => {
    dispatch(toggle())
  }

  return (
    <div className='grid grid-flow-col'>
        <div className='flex grid-cols-1'>
            <img alt='hamburger-menu'
            className='h-16 mt-2 pl-2 pr-4'
            onClick={() => handleClickHamburger()}
            src='https://static.vecteezy.com/system/resources/thumbnails/021/190/402/small_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg'/>

            <img alt='youtube-logo'
            className='h-20'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ14LVGaN_KSdlSAgALQT18-oYukGg7su66A&usqp=CAU'
            />
        </div>

        <div className='mt-2'>
            <input type='text' className='border border-gray-500 rounded-l-full w-10/12 mt-4 p-2'/>
            <button className='border border-gray-500 rounded-r-full p-2'>Search</button>
        </div>

        <div className='grid-cols-1 flex justify-end'>
            <img alt='user' 
            className='h-12 mt-4'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbU49DD_iYcjSUEXG-Oy7POjJzaMn1GYEZg&usqp=CAU'/>
        </div>
    </div>
  )
}

export default Head