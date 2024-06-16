import React from 'react';
import { RiLightbulbFlashLine } from "react-icons/ri";
import { BiTargetLock } from "react-icons/bi";
import About1 from "../assets/abt1.png";
import About2 from "../assets/abt2.png";

const About = () => {
    return (
        <div className="relative w-full h-full lg:grid grid lg:grid-cols-2 pl-12 pr-12 pt-12 lg:pb-0 pb-14 ">
            <div className="bg-green_bg opacity-10 absolute inset-0 z-0"></div>
            {/* Left section */}
            <div className="relative z-10">
                <h1 className="text-gray-900 relative z-10 mt-6 font-bold lg:text-lg text-sm font-quicksand">ABOUT SKILLSLIFT</h1>
                <p className='lg:mt-24 mt-8 font-bold font-quicksand lg:text-5xl text-2xl '>The Place where dreams are Achieved</p>
                <p className='lg:mt-12 mt-2 font-quicksand lg:text-md text-sm font-medium'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid mollitia
                    quaerat iure minus. Ratione id porro reprehenderit, nisi, assumenda ipsum consequatur laboriosam
                    distinctio corporis voluptatibus doloremque ducimus minima placeat repellat numquam quis!
                </p>
                <div className='aboutUs'>
                    <div className='main1'>
                        <RiLightbulbFlashLine className="icon" />
                        <div className=''>
                            <h1 className='font-quicksand font-bold lg:text-2xl text-xl mb-2 -mt-2'>Our Mission</h1>
                            <p className='font-quicksand lg:text-md text-sm'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Delectus, hic. Non sit quidem, praesentium rerum illum vitae quisquam?
                            </p>
                        </div>
                    </div>
                    <div className='main2 mt-6'>
                        <BiTargetLock className="icon" />
                        <div className=''>
                            <h1 className='font-quicksand font-bold lg:text-2xl text-xl  mb-2 -mt-2'>Our Vision</h1>
                            <p className='font-quicksand lg:text-md text-sm'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Delectus, hic. Non sit quidem, praesentium rerum illum vitae quisquam?
                            </p>
                        </div>
                    </div>
                </div>
                <button className='lg:mt-[3rem] mt-5 lg:mb-0 mb-4 lg:ml-0 ml-14 lg:text-md text-sm rounded-md text-white font-quicksand bg-primary lg:p-3 p-2'>
                    Read More About Us
                </button>
            </div>

            {/* Right */}
            <div className="items-center justify-center relative z-10 lg:mt-0 mt-4 md:pb-[4rem]">
                <img src={About1} className='lg:mt-12 lg:ml-[10rem] ml-10 ' />
                <img src={About2} className='lg:ml-[3rem] lg:mt-2 mt-1' />
            </div>
        </div>
    );
};

export default About;
