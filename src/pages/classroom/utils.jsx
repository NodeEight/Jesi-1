import React from 'react'
import { SlBadge } from "react-icons/sl";

export const CurrentlyLearning = () => {
  return (
    <section className="relative justify-center flex items-center w-full pb-10 h-[35rem] ">
      <div className="bg-green_bg opacity-10 rounded-lg absolute inset-0 z-0"></div>
      <div className='items-center justify-center flex flex-col align-center'>
        <SlBadge className='h-16 w-16 text-primary' />
        <h1 className="mt-4 font-quicksand font-bold text-2xl">Enroll in Your Next Program</h1>
        <p className='mt-2 font-quicksand'>Take the next step in your learning journey</p>
        <button className='mt-10 bg-primary text-white font-quicksand p-3 pl-8 pr-8 rounded-md'>
          Browse Courses
        </button>
      </div>
    </section>
  )
}
