import React from "react"
import MKT1 from "../assets/mkt1.png"
import DTS from "../assets/data.png"
import UIUX from "../assets/uiux.png"
import { Blogs } from "./utils"

const Blog = ({ handleButtonClick }) => {

    const data = [
        {
            id: 1,
            imageSrc: MKT1,
            title: "Event's Name",
            description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi itaque blanditiis voluptas accusamus quia qui laborum facilis, deserunt ipsa nulla soluta maxime dolore inventore.",
            date: "Date",
            author: "Admin",
            btn: "Read more",

        },
        {
            id: 2,
            imageSrc: DTS,
            title: "Event's Name",
            description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi itaque blanditiis voluptas accusamus quia qui laborum facilis, deserunt ipsa nulla soluta maxime dolore inventore.",
            date: "Date",
            author: "Admin",
            btn: "Read more",

        },
        {
            id: 3,
            imageSrc: UIUX,
            title: "Event's Name",
            description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi itaque blanditiis voluptas accusamus quia qui laborum facilis, deserunt ipsa nulla soluta maxime dolore inventore.",
            date: "Date",
            author: "Admin",
            btn: "Read more",
        },
    ]


    return (
        <div id="blogs" className="relative pl-12 pr-12 courseMain pb-12">
            <p className="font-quicksand mt-8 text-center font-bold lg:text-lg text-sm">
                BLOGS & ARTICLES
            </p>
            <h1
                className="font-bold mt-5 text-center mt-6 text-5xl font-quicksand mobile-font-size "
            >
                Our Latest Blogs
            </h1>
            <div className="flex lg:justify-end lg:-mt-14 lg:pr-[12rem] justify-center mt-10">
                <button onClick={handleButtonClick} className='w-[15rem] p-3 rounded-md text-white font-quicksand text-center whitespace-nowrap bg-primary '>
                    All Blogs
                </button>
            </div>

            <div className="flex z-10 flex-wrap lg:mt-24 mt-6 lg:m-24 gap-8 grid lg:grid-cols-3">
                {data.map((item) => (
                    <Blogs key={item.id} {...item} handleButtonClick={handleButtonClick} />
                ))}
            </div>
        </div>
    )
}

export default Blog
