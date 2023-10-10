import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appNavSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

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
    <div>
      <div className='p-4 m-4 flex'>
        <div>
          <iframe 
          width="1000" 
          height="600" 
          src={"https://www.youtube.com/embed/"+searchParams.get('v')}
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen></iframe>
          </div>
          <div>
            <LiveChat />
          </div>
      </div>
        <CommentsContainer/>
      <div>

      </div>
    </div>
  )
}

export default WatchPage