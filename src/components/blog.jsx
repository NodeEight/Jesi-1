import React from "react"
import { Blogs, blogPreview } from "./utils"

const Blog = ({ handleBlogClick }) => {
    return (
        <div id="blogs" className="relative  xl:h-screen lg:h-screen h-full pl-12 pr-12 courseMain pb-12">
            <p className="font-quicksand mt-8 text-center font-bold lg:text-md text-sm">
                BLOGS & ARTICLES
            </p>
            <h1 className="font-bold text-center mt-6 text-4xl font-quicksand mobile-font-size ">
                Our Latest Blogs
            </h1>
            <div className=" z-10 flex-wrap lg:mt-12 mt-6 gap-8 grid  justify-center items-center">
                {blogPreview.map((item) => (
                    <Blogs key={item.id} {...item} handleBlogClick={() => handleBlogClick(item)} />
                ))}
            </div>
        </div>
    )
}

export default Blog
