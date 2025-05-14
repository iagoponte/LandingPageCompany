import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './pages/Home/home'
import { Navbar } from './layout/navbar/navbar'
import { Footer } from './layout/Footer/footer'
import { ContactUs } from './pages/ContactUs/contactUs'
import { Router } from './router/Router'
import './App.css'

function App() {

  return (
    <Router/>      
  )
}

export default App
