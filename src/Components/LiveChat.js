import React, { useEffect } from 'react'
import LiveComment from './LiveComment'
import { generateMessage, generateName } from '../utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'


const LiveChat = () => {

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
    <div className='m-2 p-2 border border-black rounded-lg w-[34rem] h-[34rem] overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((val, i)=><LiveComment name={val.name} message={val.message}/>)}
            
    </div>
  )
}

export default LiveChat