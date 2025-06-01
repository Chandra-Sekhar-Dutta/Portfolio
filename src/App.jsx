import { useState } from 'react'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import './App.css'

// importing layout
import RootLayout from './Layout/RootLayout'
import ContactLayout from './Layout/ContactLayout'



// importing pages
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Footer from './component/Footer'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<ContactLayout />} />
      </Route>
    )
  )

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
      <Footer/>
    </>
  )
}

export default App
