import React, { useRef, useState } from 'react'

const Demo2 = () => {
  const [val, setVal] = useState(0);

  let i = 0;
  const changeLetI = () => {
    i = i + 1
    console.log(i)
  }

  const v = useRef(0)

  return (
    <div>
        <div className={'h-96 w-96 border border-black shadow-lg bg-slate-100'}>
            <button className='bg-green-100 p-4 m-4' onClick={changeLetI}>Increase let</button>

            <button className='bg-green-100 p-4 m-4' onClick={() => setVal(val+1)}>Increase State</button>

            <button className='bg-green-100 p-4 m-4' onClick={() => v.current = v.current + 1}>Increase Ref</button>

            <h4>Let value = {i}</h4>
            <h4>State Value = {val}</h4>
            <h4>Ref value = {v.current}</h4>
        </div>
    </div>
  )
}

export default Demo2