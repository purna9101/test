import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center gap-10 justify-center h-screen'>
        <nav className='flex gap-10'>
            <button className='bg-slate-400 p-2 rounded' onClick={() => navigate("/a1")}>
              A1
            </button>
            <button className='bg-slate-400 p-2 rounded'>
              A2
            </button>
            <button className='bg-slate-400 p-2 rounded'>
              A3
            </button>
        </nav>
      <h1>this is home page</h1>
    </div>
  )
}
