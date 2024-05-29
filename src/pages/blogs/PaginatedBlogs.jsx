import React from 'react'
import { BlogPosts } from './utils';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const PaginatedBlogs = () => {

    const posts = [
        {
            id: 1,
            title: 'Boost your conversion rate',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { title: 'Marketing', href: '#' },
            publishedDate: "Published Date",
            time: "3 Min Read"
        },
    ];

    return (
        <div id="contact" className="relative w-full lg:pb-16 pb-12 bg-white grid lg:grid-cols-2 font-quicksand " >
            <div className="flex flex-col items-center justify-center  ">
                <BlogPosts posts={posts} />
                <div className='mt-6 flex items-center gap-6'>
                    <button className='bg-gray-300 text-gray-600 w-12 h-10 text-center flex items-center justify-center rounded-md'>
                        <MdKeyboardDoubleArrowLeft />
                    </button>
                    <p className='bg-primary w-12 h-10 text-center flex items-center justify-center text-white rounded-md'>
                        1
                    </p>
                    <p className='bg-gray-300 w-12 h-10 text-center flex items-center justify-center rounded-md'>
                        2
                    </p>
                    <button className='bg-gray-300 text-gray-600 w-12 h-10 text-center flex items-center justify-center rounded-md'>
                        <MdKeyboardDoubleArrowRight />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default PaginatedBlogs