import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Serv from './Components/Serv/Serv'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Serv/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
