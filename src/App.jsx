import React from 'react'
import Navbar from './companets/Navbar'
import Silader from './companets/Silader'
import { Routes, Route } from 'react-router-dom'
import Home from './peges/Home'
import About from './peges/About'
import Contact from './peges/Contact'
import Footer from './companets/Footer'
import View from './peges/View'
import Favourite from './peges/Favourite'
import Packet from './peges/Packet'
export default function App() {
  return (
    <>
      <Navbar />
      <Silader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/packet' element={<Packet />} />
      </Routes>
      <Footer/>
    </>
  )
}
