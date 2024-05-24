import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Logo from "../assets/main.png";
import { GoArrowRight } from "react-icons/go";

const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};


const Navigation = ({ isClassroomOpen, toggleClassroom, setActivePage }) => {

    return (
        <Disclosure as="nav" className="fixed shadow-lg w-full z-20 transition-colors duration-300 ease-in-out bg-white">
            {({ open: disclosureOpen }) => (
                <>
                    <div className="mx-auto  px-2 sm:px-6 lg:px-32 pb-4">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button
                                    as="button"
                                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900  hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {disclosureOpen ? (
                                        <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <a href="/" className="flex flex-shrink-0 items-center gap-4">
                                    <img className="h-14 w-16 w-auto" src={Logo} alt="Logo" />
                                </a>
                                {!isClassroomOpen ? null : (
                                    <div className="ml-auto mr-auto">
                                        <div className="flex align-center gap-8">
                                            <button
                                                onClick={() => setActivePage('program')}
                                                className=" font-quicksand"
                                            >
                                                My program
                                            </button>
                                            <button
                                                onClick={() => setActivePage('course')}
                                                className=" font-quicksand"
                                            >
                                                Courses
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 text-gray-900">
                                {!isClassroomOpen ? (
                                    <div className="flex items-center gap-12">
                                        <div className="hide sm:ml-6 sm:block">
                                            <div className="flex space-x-8">
                                                <button
                                                    onClick={() => scrollTo('home')}
                                                    className=" font-quicksand"
                                                >
                                                    Home
                                                </button>
                                                <button
                                                    onClick={() => scrollTo('courses')}
                                                    className=" font-quicksand"
                                                >
                                                    Courses
                                                </button>
                                                <button onClick={() => scrollTo('blogs')} className=" font-quicksand">
                                                    Blogs
                                                </button>
                                                <button
                                                    onClick={() => scrollTo('contact')}
                                                    className=" font-quicksand"
                                                >
                                                    Contact
                                                </button>
                                                <button
                                                    // onClick={toggleClassroom}
                                                    className="text-center text-base lg:text-sm text-white bg-primary pl-4 pr-4 pt-2 pb-2 rounded-md font-quicksand"
                                                >
                                                    My Classroom
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        onClick={toggleClassroom}
                                        className="text-center flex items-center gap-2 text-base lg:text-sm text-white bg-primary pl-8 pr-8 pt-2 pb-2 rounded-md font-quicksand"
                                    >
                                        Back
                                        <GoArrowRight />
                                    </button>
                                )}
                            </div>
                        </div>


                    </div>
                    {!isClassroomOpen && (
                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3  justify-start">
                                <button
                                    onClick={() => scrollTo('home')}
                                    className="block text-center font-quicksand pl-6 pr-6 text-base bg-transparent py-2 rounded-md text-gray-700"
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => scrollTo('courses')}
                                    className="block text-center font-quicksand pl-6 pr-6 text-base bg-transparent py-2 rounded-md text-gray-700 "
                                >
                                    Courses
                                </button>
                                <button
                                    onClick={() => scrollTo('blogs')}
                                    className="block text-center font-quicksand pl-6 pr-6 text-base bg-transparent py-2 rounded-md text-gray-700 "
                                >
                                    Blogs
                                </button>
                                <button
                                    onClick={() => scrollTo('contact')}
                                    className="block text-center  font-quicksand pl-6 pr-6 text-base bg-transparent py-2 rounded-md text-gray-700 "
                                >
                                    Contact
                                </button>

                                <button
                                    onClick={toggleClassroom}
                                    className="block pl-3 pr-3 ml-4 font-quicksand text-sm text-center text-base text-white bg-primary py-2 rounded-md text-white hover:bg-gray-500"
                                >
                                    My Classroom
                                </button>
                            </div>

                        </Disclosure.Panel>
                    )}
                </>
            )}
        </Disclosure>
    );
}

export default Navigation;