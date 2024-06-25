import React from 'react';
import LandingImage from "../assets/hero.jpg"
import Typed from 'typed.js';
import { useRef, useEffect } from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import { url, courses, data } from "./utils"
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: courses.map(course => course.name),
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        };

        const typed = new Typed(typedRef.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id='home' className="relative pb-2 font-quicksand xl:h-screen lg:h-screen h-full grid lg:grid-cols-2 items-center justify-center lg:pl-12 lg:pr-12 pl-8 pr-8">
            <div className="rightSection 2xl:-mt-[3rem] lg:mt-[4rem] ">
                <h1 className='lg:text-4xl 2xl:text-5xl xl:ml-0 mb-8 text-xl font-bold xl:mb-12 lg:mt-16 mt-32 '>
                    Become a <span ref={typedRef} className='text-primary'></span> <br />in 6 to 12 months
                </h1>
                <p className=' xl:text-lg text-sm lg:text-xs  md:mt-12 -mt-4 lg:mt-0 lg:pr-0 pr-2 about'>
                    Learn in-demand skills and get connected to jobs in tech in 6 to 12 months
                </p>
                <div className='flex flex-col gap-4 mt-3 mb-2'>
                    {data.map((item, index) => {
                        return (
                            <div className='flex items-center gap-2 lg:gap-4' key={index}>
                                <FaCircleCheck className='xl:w-4 lg:-mt-1 -mt-5 xl:h-4 h-3 w-3 text-primary' />
                                <div className='flex gap-2 items-center lg:mt-3'>
                                    <p className='about '>
                                        <span className='font-bold'>
                                            {item.title}:
                                        </span>

                                        <span className='lg:ml-2 ml-1'>
                                            {item.desc}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Link to={url}>
                    <button className='lg:mt-12 mt-4 text-xs bg-primary w-32 text-center lg:p-3 p-2 rounded-sm text-white font-quicksand'>
                        Enroll Now
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center bounce lg:mt-32 mt-8 ">
                <img
                    src={LandingImage}
                    className='rounded-full h-[18rem] w-[18rem] md:h-[30rem] md:w-[30rem] 2xl:h-[35rem] 2xl:w-[35rem] object-cover '
                />
            </div>
        </div>
    );
}

export default LandingPage;
