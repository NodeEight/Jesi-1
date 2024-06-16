import React from 'react';
import LandingImage from "../assets/landing.png"

const LandingPage = () => {
    return (
        <div id='home' className="relative h-screen grid lg:grid-cols-2 lg:pl-12 lg:pr-12 pl-8 pr-8">

            <div className="rightSection lg:mt-[1rem] xl:-mt-[5rem] mt-[7rem]">
                <h1 className='md:text-5xl lg:text-5xl text-2xl font-bold xl:mb-12 lg:mt-16  font-quicksand'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p className='md:text-xs xl:text-lg text-sm font-quicksand mt-4 lg:mt-0 lg:pr-0 pr-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos saepe porro amet officiis fuga? Itaque voluptatum tempore aut.
                    Suscipit dignissimos repellat repudiandae magni sunt maxime totam
                    quis distinctio.
                </p>
                <button className='lg:mt-8 mt-4 lg:text-base text-sm  bg-primary w-32 text-center lg:p-3 p-2 rounded-md text-white font-quicksand'>
                    Learn More
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
