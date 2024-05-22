import React from 'react'
import Navigation from './components/navigation'
import LandingPage from './components/landing'
import About from './components/about'
import Courses from './components/courses'
import WhyChooseUs from './components/choose'
import Join from "./components/join"
import Blogs from "./components/blog";
import Footer from './components/footer'
import ScrollToTopButton from './components/scroll'

const App = () => {
  return (
    <div>
      <Navigation />
      <LandingPage />
      <Courses />
      <About />
      <WhyChooseUs />
      <Join />
      <Blogs />
      <ScrollToTopButton/>
      <Footer/>
    </div>
  )
}

export default App