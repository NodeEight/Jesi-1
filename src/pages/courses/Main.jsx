import React, { useState } from 'react';
import { IoMdCheckboxOutline } from "react-icons/io";
import { CourseDetails } from './utils';

const CoursePage = ({ selectedCourse }) => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Overview', 'Curriculum'];

    if (!selectedCourse) {
        return null;
    }

    return (
        <div id='home' className="relative  h-full grid xl:grid-cols-2 xl:pl-12 xl:mt-12 lg:pb-16 pb-12 lg:p-8">
            <div className="flex flex-col items-center justify-center w-full">
                <CourseDetails {...selectedCourse} />
                <div className="flex flex-col items-center p-4 w-full font-quicksand">
                    <div className="gap-0.5 mb-4 lg:-ml-[20rem] -ml-[8.5rem]">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 lg:w-[9rem] w-[7rem] text-xs font-medium focus:outline-none transition-colors duration-300 ${activeTab === index
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <h1 className='lg:-ml-[28rem] -ml-[14rem] font-bold lg:text-base text-sm'>
                        Course {tabs[activeTab]}
                    </h1>
                    <div className="lg:w-[37.5rem] w-[23rem] p-2 bg-white">
                        {activeTab === 0 && <div className='text-xs '>
                            <p>{selectedCourse.overview}</p>
                        </div>}
                        {activeTab === 1 && <div className='text-xs '>
                            <p>{selectedCourse.curriculum}</p>
                        </div>}
                    </div>
                    <div
                        style={{ backgroundColor: "rgba(255, 197, 0, 0.1)" }}
                        className='lg:w-[36rem] w-[23rem] p-4 mt-4'
                    >
                        <h1 className="font-bold text-sm">What You Will Learn</h1>
                        <div className='mt-4 grid grid-cols-2 gap-2'>
                            {selectedCourse.learn.map((item, index) => (
                                <div key={index} className='flex items-center gap-2'>
                                    <IoMdCheckboxOutline />
                                    <p className='max-w-[10rem] text-xs'>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <h1 className="font-bold text-base lg:-ml-[28rem] -ml-[14rem] lg:mt-8 mt-4 lg:text-sm">Basic Requirements</h1>
                    <div className='grid grid-cols-2 gap-2 justify-between lg:w-[36rem] w-[23rem] p-2'>
                        {selectedCourse.requirements.map((item, index) => (
                            <div key={index} className='flex items-center gap-2'>
                                <p className='text-primary'>{item.icon}</p>
                                <p className='lg:text-sm text-xs'>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoursePage;
