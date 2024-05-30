import React from 'react';
import { CiClock1 } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { RiMessage2Line } from "react-icons/ri";

export const BlogPosts = ({ posts }) => {
    return (
        <div className="mx-auto mt-8 grid font-quicksand pb-4 grid-cols-1 gap-x-8 lg:gap-y-10 gap-y-12 lg:p-0 p-6  lg:grid-cols-1">
            {posts.map((post) => (
                <article key={post.id} className="flex pb-4 flex-col items-center justify-between border border-gray-200">
                    <div className="relative w-full lg:w-[36rem] lg:h-[25rem] h-[12rem]">
                        <img
                            src={post.imageUrl}
                            alt=""
                            className="absolute inset-0 h-full w-full rounded-sm bg-gray-50 object-cover"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-50/10" />
                    </div>
                    <div className="max-w-xl">
                        <div className="mt-4 flex pl-[1rem] mb-3 gap-x-4 text-xs">
                            <a
                                href={post.category.href}
                                className="relative z-10 rounded-sm bg-primary text-white px-8 py-2 font-medium "
                            >
                                {post.category.title}
                            </a>
                        </div>
                        <div className="group relative  pl-[1rem]">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600" >
                                <a href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </a>
                            </h3>
                            <p className="mt-4 line-clamp-3 lg:text-sm text-xs pr-4 lg:p-0 leading-6 text-gray-600">{post.description}</p>
                        </div>
                        <div className="relative mt-4 lg:text-sm text-xs flex items-center gap-x-4 pl-[1rem]">
                            <p className="text-gray-600 flex items-center gap-2">
                                <IoCalendarClearOutline className='text-primary' />
                                {post.publishedDate}
                            </p>

                            <p className="text-gray-600 flex items-center gap-2">
                                <CiClock1 className='text-primary' />
                                {post.time}
                            </p>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export const BlogRead = ({ posts }) => {
    return (
        <div className="mx-auto mt-8 grid  font-quicksand pb-4 grid-cols-1 gap-x-8 lg:gap-y-10 gap-y-12 lg:p-0 p-6  lg:grid-cols-1">
            {posts.map((post) => (
                <article key={post.id} className="flex pb-4 flex-col  items-center justify-between border border-gray-200">
                    <div className="relative w-full lg:w-[36rem] lg:h-[25rem] h-[12rem]">
                        <img
                            src={post.imageUrl}
                            alt=""
                            className="absolute inset-0 h-full w-full rounded-sm bg-gray-50 object-cover"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-50/10" />
                    </div>
                    <div className="relative mt-4 lg:text-sm text-xs justify-between grid grid-cols-2 lg:grid-cols-4 w-full gap-x-4 lg:pl-5 pl-8 lg:pr-5 lg:gap-1 gap-3">
                        <p className="text-gray-600 flex items-center gap-2">
                            <GoPerson className='text-primary' />
                            {post.author}
                        </p>

                        <p className="text-gray-600 flex items-center gap-2">
                            <IoCalendarClearOutline className='text-primary' />
                            {post.publishedDate}
                        </p>
                        <p className="text-gray-600 flex items-center gap-2">
                            <CiClock1 className='text-primary' />
                            {post.time}
                        </p>
                        <p className="text-gray-600 flex items-center gap-2">
                            <RiMessage2Line className='text-primary' />
                            {post.comment}
                        </p>
                    </div>
                    <div className="max-w-xl">
                        <div className="group relative  pl-[1rem]">
                            <h3 className="mt-6 lg:max-w-[30rem] text-lg font-bold leading-6 text-gray-900 group-hover:text-gray-600" >
                                <a href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </a>
                            </h3>
                            <p className="mt-4 min-h-[35rem] line-clamp-3 lg:pb-32 lg:text-sm text-xs pr-4 lg:p-0 leading-6 text-gray-600">{post.description}</p>
                        </div>

                    </div>
                </article>
            ))}
        </div>
    );
};

export const BlogPostsPreviews = ({ posts }) => {
    return (
        <div className="mx-auto mt-8 grid font-quicksand pb-4 grid-cols-1 gap-x-8 gap-y-10  lg:grid-cols-1">
            {posts.map((post) => (
                <article key={post.id} className="flex pb-4 flex-col items-center justify-between border border-gray-300">
                    <div className="relative w-full lg:w-[36rem] lg:h-[25rem]">
                        <img
                            src={post.imageUrl}
                            alt=""
                            className="absolute inset-0 h-full w-full rounded-sm bg-gray-50 object-cover"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-50/10" />
                    </div>
                    <div className="max-w-xl">
                        <div className="mt-4 flex pl-[1rem] mb-3 gap-x-4 text-xs">
                            <a
                                href={post.category.href}
                                className="relative z-10 rounded-sm bg-primary text-white px-8 py-2 font-medium "
                            >
                                {post.category.title}
                            </a>
                        </div>
                        <div className="group relative  pl-[1rem]">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600" >
                                <a href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </a>
                            </h3>
                            <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                        </div>
                        <div className="relative mt-4 text-sm flex items-center gap-x-4 pl-[1rem]">
                            <p className="text-gray-600 flex items-center gap-2">
                                <IoCalendarClearOutline className='text-primary' />
                                {post.publishedDate}
                            </p>

                            <p className="text-gray-600 flex items-center gap-2">
                                <CiClock1 className='text-primary' />
                                {post.time}
                            </p>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export const CategoryItem = ({ category, isExpanded, toggleExpand }) => {
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

export const RelatedArticles = ({ image, description, btn }) => {
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