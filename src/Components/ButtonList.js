import React from 'react'
import Button from './Button'

const list = ['All', 'Bollwood', 'Movies', 'Songs', 'T-Series', 'Hello', 'World', 'New', 'Random', 'Hit', 'Popular', 'Coding', 'Javascript', 'React', 'Node', 'Rails']
const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((idx)=> <Button key={idx} name={idx} />) }
    </div>
  )
}

export default ButtonList