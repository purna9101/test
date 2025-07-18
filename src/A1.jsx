import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function A1() {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center gap-10 justify-center h-screen'>
      <button className='bg-slate-400 p-2 rounded' onClick={() => navigate("/")}>back</button>
      <h1>this is A1 Page</h1>
    </div>
  )
}
