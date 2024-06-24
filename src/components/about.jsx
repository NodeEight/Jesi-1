import React from 'react';
import { BiTargetLock } from "react-icons/bi";
import About1 from "../assets/vision1.jpg";
import About2 from "../assets/vision2.jpg";


const About = () => {
    return (
        <div id='about' className="relative w-full xl:h-screen lg:h-screen h-full lg:grid  grid lg:grid-cols-2 pl-12 pr-12 pt-12 lg:pb-0 pb-14 ">
            <div className="bg-green_bg opacity-10 absolute inset-0 z-0"></div>
            {/* Left section */}
            <div className="relative z-10">
                <h1 className="text-gray-900 relative z-10 mt-6 font-bold  text-sm font-quicksand">ABOUT SKILLSLIFT</h1>
                <p className='lg:mt-12 mt-3 font-bold font-quicksand lg:text-4xl text-2xl '>The Place where dreams are Achieved</p>
                <p className='lg:mt-12 mt-2 mb-6 font-quicksand lg:text-md text-sm font-medium about'>
                    Welcome to Jesi, the gateway to your Tech dreams. We are committed to making your aspirations
                    in the world of technology come true. Our well crafted curriculum, developed in collaboration
                    with industry experts, equips you with the latest and sought-after skills that perfectly match
                    industry demands.
                </p>
                <p className='lg:mt-8 mt-2 mb-6 font-quicksand lg:text-md xl:text-md text-sm about font-medium'>
                    Our goal is to build your confidence with technical and soft skills to land a rewarding
                    job within a year of completing our program. If you're eager to kickstart your Tech journey
                    and transform your dreams into reality, look no further. Join Jesi today and let's make your
                    Tech Dreams a remarkable success story.
                </p>
                <div className='aboutUs'>
                    <div className='main2 mt-6'>
                        <BiTargetLock className="icon" />
                        <div className=''>
                            <h1 className='font-quicksand font-bold lg:text-2xl text-xl  mb-2 -mt-2'>Our Vision</h1>
                            <p className='font-quicksand lg:text-md text-sm about'>
                                Jesi is on a remarkable journey to become the leading provider
                                of ethical and ambitious talents that are shaping Africa's digital
                                economy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="items-center lg:p-12 xl:p-12 grid lg:-mt-16 lg:grid-cols-1 relative z-10 ">
                {imgs.map((item, index) => (
                    <div key={index} className="p-3 h-full w-full flex items-center justify-center ">
                        <img
                            alt='Image'
                            src={item.ImgSRC}
                            className="rounded-lg object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;


export const imgs = [
    {
        id: 1,
        ImgSRC: About1,
    },
    {
        id: 2,
        ImgSRC: About2,
    },

]