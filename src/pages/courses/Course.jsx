import React from 'react'
import Header from './Header'
import CoursePage from './Main'

const Course = ({ selectedCourse }) => {
  return (
    <div>
      <Header />
      <CoursePage selectedCourse={selectedCourse} />
    </div>
  )
}

export default Course