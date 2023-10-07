import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appNavSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    closeMenuCall()
  }, [])

  const dispatch = useDispatch()
  const closeMenuCall = () => {
    dispatch(closeMenu());
  }

  return (
    <div className='p-4 m-4'>
        <iframe 
        width="1000" 
        height="600" 
        src={"https://www.youtube.com/embed/"+searchParams.get('v')}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage