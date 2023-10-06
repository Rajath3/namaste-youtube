import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainComponent = () => {
  return (
    <div className='grid-cols-11'> 
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainComponent