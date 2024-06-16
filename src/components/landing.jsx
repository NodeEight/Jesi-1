import React from 'react';
import LandingImage from "../assets/landing.png"

const LandingPage = () => {
    return (
        <div id='home' className="relative pb-2 h-full grid lg:grid-cols-2 items-center justify-center lg:pl-12 lg:pr-12 pl-8 pr-8">

            <div className="rightSection xl:-mt-[5rem] ">
                <h1 className=' lg:text-4xl mb-8 text-2xl font-bold xl:mb-12 lg:mt-16 mt-32 font-quicksand'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p className='md:text-xs xl:text-lg text-sm font-quicksand md:mt-12 lg:mt-0 lg:pr-0 pr-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos saepe porro amet officiis fuga? Itaque voluptatum tempore aut.
                    Suscipit dignissimos repellat repudiandae magni sunt maxime totam
                    quis distinctio.
                </p>
                <button className='lg:mt-8 mt-4 text-xs  bg-primary w-32 text-center lg:p-3 p-2 rounded-md text-white font-quicksand'>
                    Enroll Now
                </button>
            </div>
            <div className="flex items-center justify-center bounce lg:mt-32 mt-8">
                <img
                    src={LandingImage}
                    className='rounded-full md:h-[30rem] md:w-[30rem]'
                />
            </div>
        </div>
    );
}

export default LandingPage;
