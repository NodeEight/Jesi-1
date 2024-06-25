import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { BsLaptop, BsEmojiSmile } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
import { PiSmileyLight } from "react-icons/pi";
import PARTNER1 from "../assets/part1.png";
import PARTNER2 from "../assets/part2.png";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
    FaTiktok
} from "react-icons/fa6";
import DigiPDF from "../assets/digital_marketing.pdf";
import Software from "../assets/software_development.pdf";
import ProductDesign from "../assets/product_design.pdf";
import DigitalCourse from "../assets/digicourse.jpg";
import ProductCourse from "../assets/productcourse.jpg";
import SoftCourse from "../assets/softcourse.jpg";
import BlogHead1 from "../assets/blog2.jpg";
import BlogHead2 from "../assets/coursedetailhead.jpg";
import blog_preview from "../assets/vision2.jpg"


export const Card = ({ imageSrc, title, description, btn, handleCourseClick }) => {
    return (
        <div className="max-w-sm rounded-md overflow-hidden shadow-xl mt-4">
            <img className="w-full" src={imageSrc} alt={title} />
            <div className="px-6 py-4 ">
                <div className="font-bold text-xl whitespace-nowrap lg:mb-4 mb-2 font-quicksand">{title}</div>
                <p className="text-gray-700  lg:text-md xl:text-md text-sm font-quicksand text-md ">{description}</p>
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


export const Blogs = ({ blog_preview, title, date, author, description, btn, handleBlogClick }) => {
    return (
        <div className="max-w-sm bg-white rounded-md overflow-hidden shadow-xl mt-4">
            <img className="w-full h-full" src={blog_preview} alt={title} />
            <div className="px-6 text-center py-4 ">
                <div className="font-bold lg:text-lg text-lg mb-2 font-quicksand">{title}</div>
            </div>
            <div className='flex text-xs items-center align-center gap-12 justify-center'>
                <p className="flex font-quicksand items-center  align-center gap-2">
                    <GoPerson className="lg:text-md xl:text-md text-sm  text-primary" />
                    {author}
                </p>
                <p className="flex  text-xs font-quicksand items-center  align-center gap-2">
                    <CiClock1 className="lg:text-md xl:text-md text-smtext-lg text-primary" />
                    {date}
                </p>

            </div>
            <p className='font-quicksand lg:text-md xl:text-md text-xs pl-6 pr-6 mt-4'>
                {description}
            </p>
            <div className=' px-4 py-4'>
                <button onClick={handleBlogClick}
                    className=" cursor-pointer ctaaaa text-primary font-quicksand text-left rounded-md p-2 text-xs ">
                    {btn}
                </button>
            </div>
        </div>
    );
};

export const url = "https://forms.office.com/Pages/ResponsePage.aspx?id=NnvSMTIcpUSD0CSX4NwgAPZNElDoFAJCuXttKwYEy1hURUNaRE9RQ1dDQTFCNzczVVBZVjBHOTlXSS4u"

export const partnerurl = "https://forms.office.com/pages/responsepage.aspx?id=NnvSMTIcpUSD0CSX4NwgALr9T8OjcKxEtcLTpO3cQBtUODFLR0hOR1dGV1pHREg0VFY5UDZQVFZSUS4u"


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
        desc: "Master essential communication, ethics, and teamwork abilities."
    }

]


export const coursesPreview = [
    {
        id: 1,
        imageSrc: DigitalCourse,
        title: "Digital Marketing",
        description: "Learn how to effectively promote brands, products, and services through various digital channels and strategies.",
        btn: "View details",
        overview: "You will learn to target audiences effectively, analyze user behavior, and optimize strategies for business success in the digital age. Throughout the course, students will develop critical thinking, creativity, and problem-solving abilities to adapt to the rapidly changing digital landscape and drive business success in the digital age",
        curriculum: [
            "Fundamentals of Digital Marketing and Customer Experience",
            "Digital Media Writing and Email Marketing",
            "Graphic Design Essentials (Canva, Photoshop, Illustrator)",
            "Video Production and Editing (Wondershare Filmora, Adobe Premiere Pro)",
            "Digital Analytics, SEO, and SEM",
            "Branding and Digital Marketing Portfolio Development"
        ],
        learn: [
            "Marketing fundamentals and customer experience mapping",
            "Content creation for various digital platforms",
            "Graphic design and branding principles",
            "Video production and editing techniques",
            "Digital analytics, SEO, and SEM strategies",
            "Building a professional digital marketing portfolio"
        ],
        requirements: [
            { icon: <BsLaptop />, text: "Laptop / Mobile Phone" },
            { icon: <SlNotebook />, text: "Notebook & Pen" },
            { icon: <PiSmileyLight />, text: "Be motivated" },
            { icon: <BsEmojiSmile />, text: "Be Determined" }
        ],
        mode: "In Person",
        duration: "6 months",
        venue: "Node Eight",
        curriculumPdf: DigiPDF
    },
    {
        id: 2,
        imageSrc: ProductCourse,
        title: "Product Design",
        description: "Master the art of designing user-friendly and visually appealing products that meet customer needs and market demands.",
        btn: "View details",
        overview: "You will learn how to conceptualize and create innovative and user centric digital products.. On the UI/UX course, students learn user research, wireframing, prototyping, visual design, and problem-solving. You will create seamless interfaces, empathize with users, and drive business success with user-centric designs across platforms and industries.",
        curriculum: [
            "Introduction to Product Design",
            "Design Thinking and Problem-Solving",
            "User Research and Analysis",
            "Sketching and Ideation Techniques",
            "Wireframing and Prototyping",
            "User Interface (UI) Design",
        ],
        learn: [
            "Understanding to UI/UX",
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
        venue: "Node Eight",
        curriculumPdf: ProductDesign
    },
    {
        id: 4,
        imageSrc: SoftCourse,
        title: "Software Development",
        description: "Gain the skills to develop robust software applications, from initial concept through to final deployment.",
        btn: "View details",
        overview: " In the course, you will learn front-end technologies (HTML, CSS, JavaScript), back-end technologies (Python), database management, server deployment, frameworks, API integration, software architecture, security, testing, and debugging, making you proficient in creating versatile and efficient web applications.",
        curriculum: [
            "Programming Fundamentals",
            "Data Structures and Algorithms",
            "Object-Oriented Programming",
            "Front-End Development (HTML, CSS, JavaScript)",
            "Back-End Development (Node.js, Python, or Java)",
            "Version Control with Git",
        ],
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
        venue: "Node Eight",
        curriculumPdf: Software
    }
];


export const blogPreview = [
    {
        id: 1,
        blog_preview: blog_preview,
        imageSrc1: BlogHead1,
        title: "Jesi Young and Safe Scholarship 2024/2025",
        description: "Start your career in Tech: Apply for the Jesi Young and Safe Scholarship 2024/2025.",
        date: "24/06/2024",
        author: "Node Eight",
        btn: "Read more",
        firstwriteup: [
            "Are you a recent graduate, a final-year student awaiting NSS or a passionate individual looking to kickstart a successful career in the tech industry?",
            "We are thrilled to introduce the Jesi Young and Safe Scholarship 2024/2025, the second cohort of this transformative initiative. This immersive journey is designed to equip recent graduates, final-year students due for national service, and passionate individuals based in Ho, Ghana with comprehensive technical and soft skill development in the field of technology.",
            "The program aims to empower you to pursue careers as software developer, product designer, or digital marketers within 6 to 12 months.",
        ],
        intercept: "The Jesi Young and Safe Scholarship 2024/2025, an initiative under the Young and Safe Project in Ho, funded by Fondation Botnar.  Let's dive in!",
        secondwriteup: [
            "Jesi provides hands-on training through project-based learning, fosters a supportive tech community, offers internship opportunities, and emphasizes the development of essential soft skills like communication, ethics, and teamwork.",
            "The Jesi Scholarship spans two transformative phases. In the first six months, accepted candidates will engage in intensive training and mentorship. Get ready to become a tech pro with valuable skills that will set you apart! And guess what? The excitement does not end there! The next six months involve an internship where you will gain real-world practical skills that position you for your dream job. We will guide you towards your desired career. Prepare to soar in your tech career!",
        ],

        imageSrc2: BlogHead2,
        interceptTitle: "Start Your Career in Tech with These Awesome Areas of Expertise",
        courses: [
            "Software Development ",
            "Product Design (UI/UX)",
            "Digital Marketing"
        ],
        cta1: "Are you in? Check Out the Cool Requirements to Join",
        ctabtn: "We strongly believe in offering equal opportunities to all, irrespective of gender or educational background. The following eligibility criteria apply:",
        cta1collection: [
            "Graduating students due for national service, recent graduates, and passionate individuals are welcome to apply.",
            "Applicants should be based in Ho or willing to relocate there for the duration of the Jesi scholarship.",
            "Candidates must be willing to dedicate at least 5 hours per day to the training sessions.",
            "•	A strong passion for the tech industry is a prerequisite for all applicants."
        ],
        cta2: "Program benefits:",
        cta2description: "By joining our Jesi, you gain access to a host of benefits that will accelerate your journey toward a fulfilling tech career:",
        cta2collection: [
            "Scholarships: Jesi offers fully funded scholarships to ensure that cost is never a barrier to learning.",
            "Hands-On Practical Experience: Gain valuable hands-on experience through projects and exercises, preparing you to face real-world tech challenges with confidence.",
            "Job Connections: Our commitment does not end with skills development. We help you connect with digital companies, increasing your chances of landing rewarding tech jobs.",
            "Community for Lifelong Learning Partner: Jesi is your lifelong companion in your journey as a tech bro/sis. We provide continuous support and opportunities for continuous growth.",
        ],
        cta3: "Why Jesi?",
        cta3description: "At Jesi, we empower you to build your confidence through comprehensive technical and soft skill development in an inclusive and supportive learning community. Our mission is to equip you for a future of boundless opportunities in the dynamic tech industry, where you can thrive and achieve remarkable success.",
        cta4: "Are you ready to start your career in Tech?",
        cta5: "The deadline for applications is July 26, 2024.",
        cta6:"Apply here"
    },
]

export const choose = [
    {
        id: 1,
        title: "Scholarships",
        desc: "Jesi offers fully funded scholarships to ensure that cost is never a barrier to learning. We believe that education should be accessible to everyone."
    }
    , {
        id: 2,
        title: "Hands-On Practical Experience",
        desc: "Valuable hands-on experience through projects and exercises, preparing you to face real-world tech challenges with confidence.    "
    },
    {
        id: 3,
        title: "Job Connections",
        desc: "Our commitment doesn't end with skills development. We help you connect with digital companies, increasing your chances of landing rewarding tech jobs."
    },
    {
        id: 4,
        title: "Community for Lifelong Learning Partner",
        desc: "Jesi is your lifelong companion in your journey as a tech bro/sis. We provide continuous support and opportunities for continuous growth."
    }

]

export const choosedetails = [
    { id: 1, name: "Get 100% Scholarship", color: "#FFC500" },
    { id: 2, name: "Employability", color: "#003366", size: "16px" },
    { id: 3, name: "Learn Anything", color: "#008080" }

];

export const legal = [
    {
        id: 1,
        name: "Terms of Use",
        ids: "about"
    },
    {
        id: 2,
        name: "Privacy Policy",
        ids: "about"

    },
    {
        id: 3,
        name: "Courses",
        ids: "courses",
    },

    {
        id: 6,
        name: "Blogs & Articles",
        ids: "courses",
    }
]

export const links = [
    {
        id: 1,
        name: "Home",
        ids: "home",
    },
    {
        id: 2,
        name: "About Us",
        ids: "about",

    },
    {
        id: 3,
        name: "Courses",
        ids: "courses",
    },
    {
        id: 6,
        name: "Blogs & Articles",
        ids: "blogs"
    }
]

export const socialmedia = [
    { icon: FaFacebookF, link: "https://www.facebook.com/share/tCS4tBTUEbow9LgZ/?mibextid=LQQJ4d" },
    { icon: FaInstagram, link: "https://www.instagram.com/use_jesi?igsh=MWNoaTVla203ejgxdg==" },
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/usejesiii" },
    { icon: FaXTwitter, link: "https://x.com/use_jesi?s=21" },
    { icon: FaTiktok, link: "https://www.tiktok.com/@usejesii" },

];

export const partners = [
    {
        id: 1,
        name: "botnar",
        avatar: PARTNER1
    }, {
        id: 2,
        name: "node8",
        avatar: PARTNER2
    }
]
