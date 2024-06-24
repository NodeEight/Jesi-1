import React, { useEffect } from 'react'
import Header from './Header'
import CoursePage from './Main'

const Course = ({ selectedCourse }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <CoursePage selectedCourse={selectedCourse} />
    </div>
  )
}

export default Course