import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BlogPosts } from './utils';
import Image1 from "../../assets/dig.png";
import Image2 from "../../assets/data.png";
import Image3 from "../../assets/mkt1.png";

const CategoryItem = ({ category, isExpanded, toggleExpand }) => {
    return (
        <div className="flex flex-col">
            <div
                key={category.id}
                className="flex items-center pb-3"
                onClick={() => toggleExpand(category.id)}
            >
                <div className="flex items-center justify-between w-full bg-gray-200 px-4 py-2 rounded">
                    <div className="flex items-center gap-4 lg:text-sm text-xs">
                        <p>{category.name}</p>
                        <p>{category.count}</p>
                    </div>
                    <div className="cursor-pointer">
                        {isExpanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                    </div>
                </div>
            </div>
            {isExpanded && (
                <div className="pl-8 pr-3 pb-3 lg:text-base text-xs">
                    {category.children.map((child, index) => (
                        <p key={index}>{child}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

const RelatedArticles = ({ image, description, btn }) => {
    return (
        <div className='flex flex-col font-quicksand mt-4'>
            <div className='flex items-center gap-4'>
                <img src={image} alt="" className='object-cover w-32 h-28 rounded-lg' />
                <div>
                    <p className='max-w-[22rem] lg:text-sm text-xs'>{description}</p>
                    <p className='text-primary font-medium mt-2 lg:text-sm text-xs'>{btn}</p>
                </div>
            </div>
        </div>
    )
}

const Blogs = () => {
    const [expandedCategory, setExpandedCategory] = useState(null);

    const toggleExpand = (categoryId) => {
        setExpandedCategory((prevExpandedCategory) =>
            prevExpandedCategory === categoryId ? null : categoryId
        );
    };

    const categories = [
        { id: 1, name: "Data Science", count: "(3)", children: ["Child 1", "Child 2",] },
        { id: 2, name: "Digital Marketing", count: "(3)", children: ["Child 4", "Child 5"] },
        { id: 3, name: "UI/UX Design", count: "(3)", children: ["Child 6", "Child 7", "Child 8",] },
        { id: 4, name: "Web Development", count: "(3)", children: ["Child 10", "Child 11"] },
        { id: 5, name: "Technologies", count: "(3)", children: ["Child 12", "Child 13",] },
        { id: 6, name: "Entrepreneurship", count: "(3)", children: ["Child 15", "Child 16",] },
        { id: 7, name: "Startups", count: "(3)", children: ["Child 19", "Child 20"] },
        { id: 8, name: "Employability", count: "(3)", children: ["Child 21", "Child 22",] }
    ];

    const relatedArticles = [
        {
            id: 1,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non harum minus laudantium, asperiores expedita voluptate reiciendis.",
            btn: "Read More",
            image: Image1,
        },
        {
            id: 2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non harum minus laudantium, asperiores expedita voluptate reiciendis.",
            btn: "Read More",
            image: Image2,
        },
        {
            id: 3,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non harum minus laudantium, asperiores expedita voluptate reiciendis.",
            btn: "Read More",
            image: Image3,
        },
        {
            id: 4,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non harum minus laudantium, asperiores expedita voluptate reiciendis.",
            btn: "Read More",
            image: Image3,
        },
    ]

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
        {
            id: 2,
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
        <div id='home' className="relative h-full grid lg:grid-cols-2 lg:pb-12 pb-2" style={{ backgroundColor: "rgba(0, 128, 128, 0.1)" }} >
            <div className="flex items-center justify-center  ">
                <BlogPosts posts={posts} />
            </div>
            <div className="flex items-center justify-center">
                <div className='lg:p-0 p-3'>
                    <form className='flex items-center' >
                        <input className='p-3 rounded-sm lg:text-sm text-xs text-white rounded-md focus:outline-none font-quicksand lg:w-[30rem] lg:w-[19rem] w-[20rem]' placeholder='Search keyword......' type='email' required name='email' />
                        <button type='submit' className='flex items-center justify-center bg-primary lg:p-4 p-3 font-quicksand text-white' >
                            <IoSearchOutline />
                        </button>
                    </form>
                    <div className='bg-white mt-4 flex flex-col font-quicksand'>
                        <h1 className='font-bold items-center justify-center flex text-xl mt-2 mb-4'>Categories</h1>
                        <div className="pl-3 pr-3 pb-6 cursor-pointer">
                            {categories.map((category) => (
                                <CategoryItem
                                    key={category.id}
                                    category={category}
                                    isExpanded={expandedCategory === category.id}
                                    toggleExpand={toggleExpand}
                                />
                            ))}
                        </div>
                    </div>

                    <div className='bg-white mt-16 flex flex-col font-quicksand'>
                        <h1 className='font-bold items-center justify-center flex text-xl mt-2 mb-4'>Categories</h1>
                        <div className="pl-3 pr-3 pb-6">
                            {relatedArticles.map((item) => (
                                <RelatedArticles
                                    key={item.id}
                                    image={item.image}
                                    description={item.description}
                                    btn={item.btn}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs