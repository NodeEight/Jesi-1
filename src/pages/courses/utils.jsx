import React from 'react';
import { IoPeopleOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";


export const Blogs = ({ imageSrc, title, name, instructor, courseMode, btn, mode, tag, courseDuration, duration, venue, location }) => {
    return (
        <div className="max-w-lg h-[33rem] bg-white rounded-md overflow-hidden shadow-xl mt-4">
            <img className="w-full" src={imageSrc} alt={title} />
            <h1 className=' px-4 py-4 font-quicksand font-medium text-xs '>{tag}</h1>
            <div className='px-4'>
                <button
                    className=" w-[20rem] cursor-pointer lg:text-sm text-xs bg-primary text-white font-quicksand text-center rounded-md p-2 text-md">
                    {btn}
                </button>
            </div>
            <div className="px-6 text-center py-4 ">
                <div className="font-bold  lg:text-2xl text-xl mb-2 font-quicksand">{title}</div>
            </div>
            <div className='flex flex-col text-sm align-center gap-4  justify-center pl-5 pr-5 '>
                <div className="flex text-xs font-quicksand  justify-between align-center gap-28">
                    <p className='flex  items-center gap-2'>
                        <GoPerson className="lg:text-xl text-lg text-primary" />
                        {instructor}
                    </p>
                    <p>
                        {name}
                    </p>
                </div>

                <div className="text-xs flex font-quicksand justify-between align-center gap-28">
                    <p className='flex items-center gap-2'>
                        <IoPeopleOutline className="lg:text-xl text-lg text-primary" />
                        {courseMode}
                    </p>
                    <p>
                        {mode}
                    </p>
                </div>

                <div className=" text-xs flex font-quicksand justify-between align-center gap-28">
                    <p className='flex items-center gap-2'>
                        <CiClock2 className="lg:text-xl text-lg text-primary" />
                        {courseDuration}
                    </p>
                    <p>
                        {duration}
                    </p>
                </div>

                <div className=" text-xs flex font-quicksand justify-between align-center gap-28">
                    <p className='flex items-center gap-2'>
                        <CiLocationOn className="lg:text-xl text-lg text-primary" />
                        {venue}
                    </p>
                    <p>
                        {location}
                    </p>
                </div>
            </div>
        </div>
    );
};


export const CourseDetails = ({ imageSrc, Pers, title, role, instructor, update, date, course, }) => {
    return (
        <div className=" bg-white overflow-hidden font-quicksand lg:mt-0  mt-8">
            <img className="lg:pr-0 lg:pl-0 pl-4 pr-4" src={imageSrc} alt={title} />
            <div className=' px-4 mt-6'>
                <button
                    className=" w-[10rem] cursor-pointer text-xs bg-primary text-white font-quicksand text-center rounded-sm p-2 text-md">
                    {course}
                </button>
            </div>
            <h1 className="font-bold px-4 mt-4 text-xl mb-2 ">{title}</h1>

            <div className='flex px-4 mt-4 text-sm align-center gap-2 '>
                <img className="" src={Pers} alt={title} />
                <p className=" text-xs flex items-center lg:gap-2 gap-1 whitespace-nowrap">
                    <span className='font-semibold'> {role}: </span>
                    <span > {instructor}</span>
                </p>

                <p className=" text-xs flex items-center whitespace-nowrap lg:gap-2 gap-1  lg:pl-32">
                    <span className='font-semibold'> {update}: </span>
                    <span> {date}</span>
                </p>
            </div>


        </div>
    );
};


