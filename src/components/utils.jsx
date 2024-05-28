import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { GoPerson } from "react-icons/go";

export const Card = ({ imageSrc, title, description, btn, handleCourseClick }) => {
    return (
        <div className="max-w-sm rounded-md overflow-hidden shadow-xl mt-4">
            <img className="w-full" src={imageSrc} alt={title} />
            <div className="px-6 py-4 mb-8">
                <div className="font-bold lg:text-2xl text-xl mb-2 font-quicksand">{title}</div>
                <p className="text-gray-700 lg:text-base text-xs font-quicksand text-md">{description}</p>
            </div>

            <div className='flex items-center gap-2 px-6 py-4 -mt-6 mb-4'>
                <button onClick={handleCourseClick} className="font-quicksand lg:text-base text-xs text-primary">{btn}</button>
                <BsArrowRight className='text-primary' />
            </div>
        </div>
    );
};


export const Events = ({ imageSrc, title, date, location, btn }) => {
    return (
        <div className="max-w-sm bg-white rounded-md overflow-hidden shadow-xl mt-4">
            <img className="w-full" src={imageSrc} alt={title} />
            <div className="px-6 text-center py-4 ">
                <div className="font-bold  lg:text-2xl text-xl mb-2 font-quicksand">{title}</div>
            </div>
            <p className="flex lg:text-base text-xs font-quicksand items-center pl-12 align-center gap-6">
                <CiCalendarDate className="lg:text-xl text-lg text-primary" />
                {date}
            </p>
            <p className="flex lg:text-base text-xs font-quicksand items-center pl-12 mt-4 align-center gap-6">
                <CiLocationOn className="lg:text-xl text-lg  text-primary" />
                {location}
            </p>

            <div className='flex items-center gap-2 px-6 py-4 text-center justify-center mb-4'>
                <button className=" lg:text-base text-xs  cursor-pointer hover:bg-primary hover:text-white hover:border-primary font-quicksand border border-gray-600 border-t-2 pl-24 pr-24 text-center rounded-md p-2 text-md text-primary">
                    {btn}
                </button>
            </div>
        </div>
    );
};


export const Blogs = ({ imageSrc, title, date, author, description, btn, handleButtonClick }) => {
    return (
        <div className="max-w-sm bg-white rounded-md overflow-hidden shadow-xl mt-4">
            <img className="w-full" src={imageSrc} alt={title} />
            <div className="px-6 text-center py-4 ">
                <div className="font-bold lg:text-2xl text-xl mb-2 font-quicksand">{title}</div>
            </div>
            <div className='flex lg:text-base text-xs items-center align-center gap-12 justify-center'>
                <p className="flex font-quicksand items-center  align-center gap-2">
                    <GoPerson className="lg:text-xl text-lg text-primary" />
                    {author}
                </p>
                <p className="flex lg:text-base text-xs font-quicksand items-center  align-center gap-2">
                    <CiClock1 className="lg:text-xl text-lg text-primary" />
                    {date}
                </p>

            </div>
            <p className='font-quicksand lg:text-sm text-xs  pl-4 mt-4'>
                {description}
            </p>
            <div className=' px-4 py-4'>
                <button onClick={handleButtonClick}
                    className=" cursor-pointer text-primary font-quicksand text-left rounded-md p-2 lg:text-md text-xs ">
                    {btn}
                </button>
            </div>
        </div>
    );
};
