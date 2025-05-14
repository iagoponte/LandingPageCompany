import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
<<<<<<< HEAD
import { Home } from './pages/Home/home'
import { Navbar } from './layout/navbar/navbar'
import { Footer } from './layout/Footer/footer'
import { ContactUs } from './pages/ContactUs/contactUs'
import { Router } from './router/Router'
import './App.css'

function App() {

  return (
    <Router/>      
=======
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
>>>>>>> 02a881eadff78309a66bee9f6d61dfc3a68edabf
  )
}

export default App
