import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'

const App = () => {

  return (
    <>
      <div className="app-container">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App;
