import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Sidebar = () => {

  const toggleVal = useSelector((store)=> store.store.toggleMenu)

  if(!toggleVal) return null;

  return (
    <div className='w-24 p-2 m-2'>
        <div>
            <ul>
              <li>Home</li>
              <li>Subscriptions</li>
              <li>Playback</li>
          </ul>
          </div>
          <br/>
          <div>
            <h2 className='font-bold'>Music</h2>
              <ul>
                <li>Pop</li>
                <li>Classical</li>
                <li>Rock</li>
            </ul>
          </div>
          <br/>
          <div>
            <h2 className='font-bold'>Games</h2>
              <ul>
                <li>Arcade</li>
                <li>Action</li>
                <li>Friendly</li>
            </ul>
          </div>
    </div>
  )
}

export default Sidebar