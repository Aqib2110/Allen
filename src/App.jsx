import { useState } from 'react'
import Navbar from './components/Navbar'
import SecondNav from './components/SecondNav'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Trending from './components/Trending'
import Testimonial from './components/Testimonial'
import QNA from './components/QNA'
import Course from './components/Course'
import Footer from './components/Footer'
import './App.css'
import { Router,Routes,Route } from 'react-router-dom'
function App()
{
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar />
 <Hero />
<Hero2 />
<Trending/>
<QNA/>
<Testimonial />
<Course />
<Footer />
   </>
  )
}

export default App
