import React from 'react';
import { IoPeopleOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { url } from "../../components/utils"

export const CourseDetails = ({ imageSrc, title, mode, duration, venue }) => {

    return (
        <div className=" bg-white overflow-hidden font-quicksand lg:mt-0 mt-8 lg:w-full w-[95%] lg:pr-0 pr-2">
            {/* <img className="lg:pr-0 lg:pl-0 pl-4 pr-4 w-full" src={imageSrc} alt={title} /> */}

            <div className="grid shadow-lg border-gray-200 border-[1px] w-full lg:-pr-12 rounded-md xl:pl-12 pb-12 lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 xl:items-center xl:justify-between">
                {/* Left Column */}
                <div className="lg:col-span-1 lg:pl-12 ">
                    <h1 className="font-bold px-4 mt-4 text-xl mb-2">{title}</h1>
                    <div className='flex items-center gap-16 px-4 text-xs mt-4'>
                        <p className='flex items-center gap-2 '>
                            <IoPeopleOutline className='text-primary' />
                            <span>
                                Course Mode
                            </span>
                        </p>
                        <span>
                            {mode}
                        </span>
                    </div>
                    <div className='flex items-center gap-12 px-4 text-xs mt-4'>
                        <p className='flex items-center gap-2 '>
                            <CiClock2 className='text-primary' />
                            <span>
                                Course Duration
                            </span>
                        </p>
                        <span>
                            {duration}
                        </span>
                    </div>
                    <div className='flex items-center gap-[6.5rem] px-4 text-xs mt-4'>
                        <p className='flex items-center gap-2 '>
                            <CiLocationOn className='text-primary' />
                            <span>
                                Venue
                            </span>
                        </p>
                        <span>
                            {venue}
                        </span>
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-1 lg:pl-32 lg: pl-4 lg:mt-0 mt-2 xl:text-center ">
                    <Link to={url}>
                        <button className="bg-primary xl:whitespace-nowrap oneth text-white rounded-sm text-xs py-2 px-12 mt-4">
                            Enroll for Free
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};


