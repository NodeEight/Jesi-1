import React from 'react';
import MKT1 from "../assets/mkt1.png"
import DTS from "../assets/data.png";
import UIUX from "../assets/uiux.png";
import DGM from "../assets/dig.png";
import { Card } from './utils';

const Courses = ({ handleCourseClick }) => {

    const data = [
        {
            id: 1,
            imageSrc: MKT1,
            title: "Digital Marketing",
            description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat expedita nam sint!",
            btn: "View detail"
        },
        {
            id: 2,
            imageSrc: DTS,
            title: "Data Science",
            description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat expedita nam sint!",
            btn: "View detail"

        },
        {
            id: 3,
            imageSrc: UIUX,
            title: "UI/UX Design",
            description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat expedita nam sint!",
            btn: "View detail"

        },
        {
            id: 4,
            imageSrc: MKT1,
            title: "Software Engineering",
            description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat expedita nam sint!",
            btn: "View detail"

        },
        {
            id: 5,
            imageSrc: DGM,
            title: "Product Management",
            description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat expedita nam sint!",
            btn: "View detail"

        },
        {
            id: 6,
            imageSrc: MKT1,
            title: "Content Creation",
            description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat expedita nam sint!",
            btn: "View detail"

        },
    ];

    return (
        <div id='courses' className="relative pl-12 pr-12 courseMain pb-12">
            <p className='font-quicksand font-bold lg:text-lg text-sm lg:mt-0 mt-6'>COURSES</p>
            <div className='courseSect'>
                <div className='One'>
                    <h1 className="font-bold lg:text-5xl text-2xl font-quicksand ">Choose Our Top Courses</h1>
                </div>
                <div className="Two lg:mt-0 mt-5">
                    {links.map((item, index) => (
                        <div className='flex font-quicksand' key={index}>
                            <p className='font-medium lg:text-base text-sm cursor-pointer'>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap mt-24 lg:m-24 gap-8 grid lg:grid-cols-3 grid-cols-1">
                {data.map((item) => (
                    <Card key={item.id} {...item} handleCourseClick={handleCourseClick} />
                ))}
            </div>
            <div className="flex lg:justify-end justify-center lg:pr-[12rem] lg:mt-0 mt-7">
                <button onClick={handleCourseClick} className='w-[15rem] p-3 rounded-md text-white lg:text-base text-sm font-quicksand text-center whitespace-nowrap bg-primary '>
                    View All Courses
                </button>
            </div>
        </div>
    );
};

export default Courses;

export const links = [
    {
        id: 1,
        name: "See All",
        href: "#see-all"
    }, {
        id: 2,
        name: "Marketing",
        href: "#marketing"
    },
    {
        id: 3,
        name: "Design",
        href: "#design"
    },
    {
        id: 4,
        name: "Software",
        href: "#design"
    }
];
