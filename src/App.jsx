import React, { useState } from 'react';
import Navigation from './components/navigation';
import LandingPage from './components/landing';
import About from './components/about';
import Courses from './components/courses';
import WhyChooseUs from './components/choose';
import Join from "./components/join";
import Blog from "./components/blog";
import Footer from './components/footer';
import ScrollToTopButton from './components/scroll';
import Blogs from "./pages/blogs/Blogs"
import Program from "./pages/classroom/program";
import Course from './pages/classroom/course';

const App = () => {
  const [isClassroomOpen, setIsClassroomOpen] = useState(false);
  const [showComponents, setShowComponents] = useState(true);
  const [showBlogs, setShowBlogs] = useState(false);
  
  // const [activePage, setActivePage] = useState('program');

  // const toggleClassroom = () => {
  //   setIsClassroomOpen(!isClassroomOpen);
  //   setActivePage('program');
  // };

  const handleButtonClick = () => {
    setShowComponents(false);
    setShowBlogs(true);
  };

  return (
    <div>
      <Navigation />
      {showComponents && (
        <>
          <LandingPage />
          <Courses />
          <About />
          <WhyChooseUs />
          <Join />
          <Blog handleButtonClick={handleButtonClick} />
        </>
      )}
      {showBlogs && <Blogs />}
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
