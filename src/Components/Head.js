import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from '../utils/appNavSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(false)


  const dispatch = useDispatch()

  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)

    const json = await data.json()

    setSuggestions(json[1]);
  }

  useEffect(()=> {
    const timer = setTimeout(()=> getSuggestions(), 200)

    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery])

  const handleClickHamburger = () => {
    dispatch(toggle())
  }

  return (
    <div className='grid grid-flow-col'>
        <div className='grid-cols-1 flex'>
            <img alt='hamburger-menu'
            className='h-16 mt-2 pl-2 pr-4'
            onClick={() => handleClickHamburger()}
            src='https://static.vecteezy.com/system/resources/thumbnails/021/190/402/small_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg'/>

            <img alt='youtube-logo'
            className='h-20'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ14LVGaN_KSdlSAgALQT18-oYukGg7su66A&usqp=CAU'
            />
        </div>

        <div className='grid-cols-11'>
          <div>
            <input type='text' 
            className='border border-gray-500 rounded-l-full w-10/12 mt-4 p-2'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={()=> setShowSuggestion(false)}
            onFocus={()=> setShowSuggestion(true)}
            />
            <button className='border border-gray-500 rounded-r-full p-2'>Search</button>
          </div>

          {showSuggestion && 
          <div className='bg bg-white w-[31.2rem] px-4 py-2 m-4 shadow-lg rounded-lg absolute'>
            <ul>
              {suggestions.map((s)=> <li key={s} className='py-2'> 🔎 {s}</li>)}
            </ul>
          </div>}
        </div>

        <div className='flex grid-cols-1 justify-end'>
            <img alt='user' 
            className='h-12 mt-4 '
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbU49DD_iYcjSUEXG-Oy7POjJzaMn1GYEZg&usqp=CAU'/>
        </div>
    </div>
  )
}

export default Head