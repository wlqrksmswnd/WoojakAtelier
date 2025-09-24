import { use, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
// import './App.css'
import Header from './components/Header'
import Router from './router.jsx'
import Footer from './components/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header/>
      <Router/>
      <Footer/>
    </>
  )
}

export default App
