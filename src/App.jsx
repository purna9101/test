import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navlayout from './Navlayout'
import Home from './Home'
import A1 from './A1'
import A2 from './A2'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navlayout />} >
          <Route path='/' element={<Home />} />
          <Route path="/a1" element={<A1 />} />
          <Route path="/a2" element={<A2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
