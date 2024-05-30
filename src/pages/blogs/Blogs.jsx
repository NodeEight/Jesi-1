import React from 'react'
import Header from './Header'
import Main from "./Main"
import PaginatedBlogs from './PaginatedBlogs'
import Header2 from "./details/Header2"
import Chats from './details/Chats';

const Blogs = ({ showBlogDetails }) => {
    return (
        <div>
            {showBlogDetails ? <Header2 /> : <Header />}
            <Main showBlogDetails={showBlogDetails} />
            {showBlogDetails ? <Chats /> : <PaginatedBlogs />}
        </div>
    )
}

export default Blogs