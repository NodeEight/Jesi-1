import React from 'react'
import Header from './Header'
import Main from "./Main"
import PaginatedBlogs from './PaginatedBlogs'

const Blogs = () => {
    return (
        <div>
            <Header />
            <Main />
            <PaginatedBlogs />
        </div>
    )
}

export default Blogs