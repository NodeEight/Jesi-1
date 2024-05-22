import React, { useState } from 'react';
import Navigation from './components/navigation';
import LandingPage from './components/landing';
import About from './components/about';
import Courses from './components/courses';
import WhyChooseUs from './components/choose';
import Join from "./components/join";
import Blogs from "./components/blog";
import Footer from './components/footer';
import ScrollToTopButton from './components/scroll';
import Program from "./pages/classroom/program";
import Course from './pages/classroom/course';

const App = () => {
  const [isClassroomOpen, setIsClassroomOpen] = useState(false);
  const [activePage, setActivePage] = useState('program');

  const toggleClassroom = () => {
    setIsClassroomOpen(!isClassroomOpen);
    setActivePage('program');
  };

  return (
    <div>
      <Navigation isClassroomOpen={isClassroomOpen} toggleClassroom={toggleClassroom} setActivePage={setActivePage} />

      {isClassroomOpen ? (
        activePage === 'program' ? <Program /> : <Course />
      ) : (
        <>
          <LandingPage />
          <Courses />
          <About />
          <WhyChooseUs />
          <Join />
          <Blogs />
          <Footer />
          <ScrollToTopButton />

        </>
      )}
    </div>
  );
}

export default App;
