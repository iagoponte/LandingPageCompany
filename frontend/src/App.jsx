import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './pages/home/home'
import { Navbar } from './layout/navbar/navbar'
import { Footer } from './layout/Footer/footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
