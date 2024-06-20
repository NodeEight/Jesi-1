import React from "react"
import MKT1 from "../assets/mkt1.png"
import { Blogs } from "./utils"

const Blog = () => {

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
    ]

    return (
        <div id="blogs" className="relative  xl:h-screen lg:h-screen h-full pl-12 pr-12 courseMain pb-12">
            <p className="font-quicksand mt-8 text-center font-bold lg:text-md text-sm">
                BLOGS & ARTICLES
            </p>
            <h1 className="font-bold text-center mt-6 text-4xl font-quicksand mobile-font-size ">
                Our Latest Blogs
            </h1>
            <div className=" z-10 flex-wrap lg:mt-12 mt-6 gap-8 grid  justify-center items-center">
                {data.map((item) => (
                    <Blogs key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Blog
