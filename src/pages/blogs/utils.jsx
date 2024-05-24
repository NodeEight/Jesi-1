import React from 'react';
import { CiClock1 } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";

export const BlogPosts = ({ posts }) => {
    return (
        <div className="mx-auto mt-8 grid font-quicksand pb-4 grid-cols-1 gap-x-8 lg:gap-y-10 gap-y-12 lg:p-0 p-6  lg:grid-cols-1">
            {posts.map((post) => (
                <article key={post.id} className="flex pb-4 flex-col items-center justify-between border border-gray-300">
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
