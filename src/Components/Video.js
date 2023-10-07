import React from 'react'

const Video = ({info}) => {

  return (
    <div className='w-64 shadow-lg p-2 m-2'>
        <img 
        className='rounded-lg'
        src={info.snippet.thumbnails.medium.url} 
        alt={info.snippet.title}/>
        <ul>
            <li className='font-bold w-fit'>{info.snippet.title}</li>
            <li>{info.statistics.viewCount} Views</li>
        </ul>
    </div>
  )
}

export default Video