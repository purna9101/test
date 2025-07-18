import React from 'react'
import { useNavigate } from 'react-router-dom' 
export default function Navbar() {
   const navigate = useNavigate();  
  return (
    <div className='absolute top-5 w-full'>
      <div className='flex flex-col items-center gap-10 justify-center'>

        <nav className='flex gap-10'>
            <button className='bg-slate-400 p-2 rounded' onClick={() => navigate("/")}>
              Home
            </button>
            <button className='bg-slate-400 p-2 rounded' onClick={() => navigate("/a1")}>
              A1
            </button>
            <button className='bg-slate-400 p-2 rounded'onClick={() => navigate("/a2")}>
              A2
            </button>
        </nav>
    </div>
    </div>
  )
}
