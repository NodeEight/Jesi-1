import React from 'react';
import { Card, coursesPreview } from './utils';

const Courses = ({ handleCourseClick }) => {
    return (
        <div id='courses' className="relative pl-12 pr-12 h-full w-full courseMain pb-12">
            <p className='font-quicksand font-bold lg:text-md text-sm lg:mt-0 mt-6'>COURSES</p>
            <div className='courseSect'>
                <div className='One'>
                    <h1 className="font-bold lg:text-4xl text-2xl font-quicksand ">Choose Your Career Paths</h1>
                </div>
            </div>
            <div className="flex-wrap mt-14 lg:m-24 gap-8 grid lg:grid-cols-3 grid-cols-1">
                {coursesPreview.map((item) => (
                    <Card key={item.id} {...item} handleCourseClick={() => handleCourseClick(item)} />
                ))}
            </div>
        </div>
    );
};

export default Courses;
