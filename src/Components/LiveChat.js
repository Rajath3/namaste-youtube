import React, { useEffect, useState } from 'react'
import LiveComment from './LiveComment'
import { generateMessage, generateName } from '../utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'


const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('')
  const dispatch = useDispatch();

  const chatMessages = useSelector(state => state.chat.message)
  useEffect(()=> {
    const inter = setInterval(()=>{
        dispatch(addMessage({
            name: generateName(),
            message: generateMessage(30)
        }))
    }, 2000) 

    return () => {
        clearInterval(inter);
    }
  }, [])
  return (
    <>
    <div className='m-2 p-2 border border-black rounded-lg w-[34rem] h-[34rem] overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((val, i)=><LiveComment key={i} name={val.name} message={val.message}/>)}
            
    </div>
    <span className='font-bold px-6 mb-2'>LiveChat</span>
    <form className='w-96 px-4 mx-2 border border-blue-100' onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name: 'Rajath',
            message: liveMessage
        }))
        setLiveMessage("")
    }}>
        <input className='border border-black-100 mx-2 p-4' type='text' value={liveMessage} onChange={(e)=> setLiveMessage(e.target.value)}/>
        <button className='border border-black-100 bg-blue-200 rounded-lg p-2'>Send</button>
    </form>
    </>
  )
}

export default LiveChat