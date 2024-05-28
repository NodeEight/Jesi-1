import React, { useState } from 'react';
import { Blogs, CourseDetails } from './utils';
import MKT1 from "../../assets/mkt1.png"
import Course from "../../assets/rect.png"
import Pers from "../../assets/pers.png"
import { Tabs } from '@mantine/core';

const Main = () => {
    const data = [
        {
            id: 1,
            imageSrc: MKT1,
            title: "Event's Name",
            date: "Date",
            instructor: "Instructor",
            name: "Jane Doe",
            courseMode: "Course Mode",
            mode: "In-Person",
            courseDuration: "Course Duration",
            duration: "6 months",
            venue: "Venue",
            location: "Node Eight",
            btn: "Enroll Now",
            tag: "Free"

        },
    ]

    const coureDetails = [
        {
            id: 1,
            imageSrc: Course,
            Pers: Pers,
            title: "Data Science Bootcamp 2023",
            role: "Trainer",
            name: "Jane Doe",
            update: "Last Updated",
            date: "10th  May, 2023",
            course: "Data Science",
            instructor: "Instructor",
        },
    ]

    const [activeTab, setActiveTab] = useState(0);

    const tabs = ['Overview', 'Curriculum', 'Instructor', 'Reviews'];

    return (
        <div id='home' className="relative h-full grid lg:grid-cols-2  lg:pb-0 pb-12 grid-cols-1 lg:gap-8  lg:p-8">
            <div className="flex flex-col items-center justify-center">
                {coureDetails.map((item) => (
                    <CourseDetails key={item.id} {...item} />
                ))}
                <div className="flex flex-col items-center p-4 w-full font-quicksand">
                    <div className="flex gap-0.5 mb-4">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 lg:w-[9rem] w-[5.5rem] lg:text-sm text-xs font-medium focus:outline-none transition-colors duration-300 ${activeTab === index
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="lg:w-[36.5rem] w-[23rem] p-4 border bg-white shadow-sm">
                        {activeTab === 0 && <div className='lg:text-sm text-xs '>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit beatae distinctio assumenda quaerat consectetur
                                modi fugit cum iure labore nemo quo excepturi, animi libero enim facere repellendus doloremque, eveniet optio odio.
                            </p>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit beatae distinctio assumenda quaerat consectetur
                                modi fugit cum iure labore nemo quo excepturi, animi libero enim facere repellendus doloremque, eveniet optio odio.
                            </p>
                        </div>}
                        {activeTab === 1 && <div className='lg:text-sm text-xs '>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit beatae distinctio assumenda quaerat consectetur
                                modi fugit cum iure labore nemo quo excepturi, animi libero enim facere repellendus doloremque, eveniet optio odio.
                            </p>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit beatae distinctio assumenda quaerat consectetur
                                modi fugit cum iure labore nemo quo excepturi, animi libero enim facere repellendus doloremque, eveniet optio odio.
                            </p>
                        </div>}
                        {activeTab === 2 && <div className='lg:text-sm text-xs'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit beatae distinctio assumenda quaerat consectetur
                                modi fugit cum iure labore nemo quo excepturi, animi libero enim facere repellendus doloremque, eveniet optio odio.
                            </p>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit beatae distinctio assumenda quaerat consectetur
                                modi fugit cum iure labore nemo quo excepturi, animi libero enim facere repellendus doloremque, eveniet optio odio.
                            </p>
                        </div>}
                        {activeTab === 3 && <div className='lg:text-sm text-xs'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit beatae distinctio assumenda quaerat consectetur
                                modi fugit cum iure labore nemo quo excepturi, animi libero enim facere repellendus doloremque, eveniet optio odio.
                            </p>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit beatae distinctio assumenda quaerat consectetur
                                modi fugit cum iure labore nemo quo excepturi, animi libero enim facere repellendus doloremque, eveniet optio odio.
                            </p>
                        </div>}
                    </div>
                </div>

            </div>
            <div className="flex items-center justify-center ">
                {data.map((item) => (
                    <Blogs key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}

export default Main;
