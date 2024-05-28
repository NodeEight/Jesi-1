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
import Blogs from "./pages/blogs/Blogs"
// import Program from "./pages/classroom/program";
// import Course from './pages/classroom/course';

const App = () => {
  const [isClassroomOpen, setIsClassroomOpen] = useState(false);
  const [showComponents, setShowComponents] = useState(true);
  const [showBlogs, setShowBlogs] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  // const [activePage, setActivePage] = useState('program');

  // const toggleClassroom = () => {
  //   setIsClassroomOpen(!isClassroomOpen);
  //   setActivePage('program');
  // };

  const handleButtonClick = () => {
    setShowComponents(false);
    setShowBlogs(true);
  };

  const handleCourseClick = () => {
    setShowComponents(false);
    setShowCourses(true);
  }

  return (
    <div>
      <Navigation />
      {showComponents && (
        <>
          <LandingPage />
          <Courses handleCourseClick={handleCourseClick} />
          <About />
          <WhyChooseUs />
          <Join />
          <Blog handleButtonClick={handleButtonClick} />
        </>
      )}
      {showBlogs && <Blogs />}
      {showCourses && <CoursePage/>}
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
