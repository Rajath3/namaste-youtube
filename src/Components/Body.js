import React from 'react'
import Sidebar from './Sidebar'
import MainComponent from './MainComponent'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
        <Sidebar/>
        <MainComponent/>
    </div>
  )
}

export default Body