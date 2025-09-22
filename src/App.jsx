import { useState } from 'react'
// import './App.css'
import Header from './conponents/Header'
import Router from './router.jsx'
import Footer from './conponents/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Router/>
      <Footer/>
    </>
  )
}

export default App
