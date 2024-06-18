import React, { useState } from 'react';
import Navigation from './components/navigation';
import LandingPage from './components/landing';
import About from './components/about';
import Courses from './components/courses';
import CoursePage from "./pages/courses/Course"
import WhyChooseUs from './components/choose';
import Join from "./components/join";
import Blog from "./components/blog";
import Footer from './components/footer';
import ScrollToTopButton from './components/scroll';

const App = () => {
  const [showComponents, setShowComponents] = useState(true);
  const [showCourses, setShowCourses] = useState(false);

  const handleCourseClick = () => {
    setShowComponents(false);
    setShowCourses(true);
  }


  return (
    <div className='w-full h-full'>
      <Navigation />
      {showComponents && (
        <>
          <LandingPage />
          <Courses handleCourseClick={handleCourseClick} />
          <About />
          <WhyChooseUs />
          <Join />
          <Blog />
        </>
      )}
      {showCourses && <CoursePage />}
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
