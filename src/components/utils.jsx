import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import MKT1 from "../assets/mkt1.png"
import DTS from "../assets/data.png";
import { BsLaptop, BsEmojiSmile } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
import { PiSmileyLight } from "react-icons/pi";

export const Card = ({ imageSrc, title, description, btn, handleCourseClick }) => {
    return (
        <div className="max-w-sm rounded-md overflow-hidden shadow-xl mt-4">
            <img className="w-full" src={imageSrc} alt={title} />                                
            <div className="px-6 py-4 ">                                                                                                                                                                                                                
                <div className="font-bold text-xl whitespace-nowrap lg:mb-4 mb-2 font-quicksand">{title}</div>
                <p className="text-gray-700  text-xs font-quicksand text-md ">{description}</p>
            </div>

            <div className='flex items-center gap-2 px-6 py-4  mb-4'>
                <button onClick={handleCourseClick} className="font-quicksand text-xs text-primary">{btn}</button>
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


export const Blogs = ({ imageSrc, title, date, author, description, btn, handleBlogDetails }) => {
    return (
        <div className="max-w-sm bg-white rounded-md overflow-hidden shadow-xl mt-4">
            <img className="w-full" src={imageSrc} alt={title} />
            <div className="px-6 text-center py-4 ">
                <div className="font-bold lg:text-xl text-xl mb-2 font-quicksand">{title}</div>
            </div>
            <div className='flex text-xs items-center align-center gap-12 justify-center'>
                <p className="flex font-quicksand items-center  align-center gap-2">
                    <GoPerson className="lg:text-xl text-lg text-primary" />
                    {author}
                </p>
                <p className="flex  text-xs font-quicksand items-center  align-center gap-2">
                    <CiClock1 className="lg:text-xl text-lg text-primary" />
                    {date}
                </p>

            </div>
            <p className='font-quicksand text-xs  pl-4 mt-4'>
                {description}
            </p>
            <div className=' px-4 py-4'>
                <button onClick={handleBlogDetails}
                    className=" cursor-pointer text-primary font-quicksand text-left rounded-md p-2 text-xs ">
                    {btn}
                </button>
            </div>
        </div>
    );
};

export const url = "https://forms.office.com/Pages/ShareFormPage.aspx?id=NnvSMTIcpUSD0CSX4NwgAPZNElDoFAJCuXttKwYEy1hURUNaRE9RQ1dDQTFCNzczVVBZVjBHOTlXSS4u&sharetoken=zNOmVVXfRAWP1uqGSxgK"


export const courses = [
    {
        id: 1,
        name: "Digital Marketer"
    },
    {
        id: 2,
        name: "Software Developer"
    },
    {
        id: 3,
        name: "Product Designer"
    },
]


export const data = [
    {
        id: 1,
        title: "Hands-On Training",
        desc: "Gain practical experience through project-based learning."
    }
    , {
        id: 2,
        title: "Supportive Community",
        desc: "Join a thriving tech community of learners and mentors."
    },
    {
        id: 3,
        title: "Internship Opportunities",
        desc: "Access valuable internship experiences."
    },
    {
        id: 4,
        title: "Develop Soft Skills",
        desc: "Mater essential communication, ethics, and teamwork abilities."
    }

]


export const coursesPreview = [
    {
        id: 1,
        imageSrc: MKT1,
        title: "Digital Marketing",
        description: "Learn how to effectively promote brands, products, and services through various digital channels and strategies.",
        btn: "View detail",
        overview: "A brief overview of Digital Marketing course...",
        curriculum: "The curriculum of Digital Marketing course includes...",
        learn: [
            "Digital marketing basics",
            "SEO and SEM strategies",
            "Content marketing",
            "Social media marketing",
            "Email marketing",
            "Analytics and reporting"
        ],
        requirements: [
            { icon: <BsLaptop />, text: "Laptop / Mobile Phone" },
            { icon: <SlNotebook />, text: "Notebook & Pen" },
            { icon: <PiSmileyLight />, text: "Be motivated" },
            { icon: <BsEmojiSmile />, text: "Be Determined" }
        ],
        mode: "In Person",
        duration: "6 months",
        venue: "Node Eight"
    },
    {
        id: 2,
        imageSrc: DTS,
        title: "Product Design",
        description: "Master the art of designing user-friendly and visually appealing products that meet customer needs and market demands.",
        btn: "View detail",
        overview: "A brief overview of Product Design course...",
        curriculum: "The curriculum of Product Design course includes...",
        learn: [
            "Design thinking principles",
            "User research and personas",
            "Wireframing and prototyping",
            "UI/UX design",
            "Visual design",
            "Design tools and software"
        ],
        requirements: [
            { icon: <BsLaptop />, text: "Laptop / Mobile Phone" },
            { icon: <SlNotebook />, text: "Notebook & Pen" },
            { icon: <PiSmileyLight />, text: "Be motivated" },
            { icon: <BsEmojiSmile />, text: "Be Determined" }
        ],
        mode: "In Person",
        duration: "6 months",
        venue: "Node Eight"
    },
    {
        id: 4,
        imageSrc: MKT1,
        title: "Software Development",
        description: "Gain the skills to develop robust software applications, from initial concept through to final deployment.",
        btn: "View detail",
        overview: "A brief overview of Software Development course...",
        curriculum: "The curriculum of Software Development course includes...",
        learn: [
            "Programming fundamentals",
            "Software development lifecycle",
            "Frontend and backend development",
            "Database management",
            "Version control systems",
            "Deployment and maintenance"
        ],
        requirements: [
            { icon: <BsLaptop />, text: "Laptop / Mobile Phone" },
            { icon: <SlNotebook />, text: "Notebook & Pen" },
            { icon: <PiSmileyLight />, text: "Be motivated" },
            { icon: <BsEmojiSmile />, text: "Be Determined" }
        ],
        mode: "In Person",
        duration: "6 months",
        venue: "Node Eight"
    }
];