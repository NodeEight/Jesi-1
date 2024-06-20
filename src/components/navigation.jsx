import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/main.png";

const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};

const Navigation = ({ showCourses }) => {

    const handleNavigation = (id) => {
        if (showCourses) {
            window.location.href = "/";
        } else {
            scrollTo(id);
        }
    };

    return (
        <Disclosure as="nav" className="fixed shadow-lg w-full z-20 transition-colors duration-300 ease-in-out bg-white">
            {({ open: disclosureOpen }) => (
                <>
                    <div className="mx-auto px-2 sm:px-6 lg:px-32 pb-4">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button
                                    as="button"
                                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                                    <img className="h-14 w-auto" src={Logo} alt="Logo" />
                                </a>
                            </div>
                            <div className="absolute inset-y-0 text-sm right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 text-gray-900">
                                <div className="flex items-center gap-12">
                                    <div className="hide sm:ml-6 sm:block">
                                        <div className="flex space-x-8">
                                            <button
                                                onClick={() => handleNavigation('home')}
                                                className="font-quicksand"
                                            >
                                                Home
                                            </button>
                                            <button
                                                onClick={() => handleNavigation('courses')}
                                                className="font-quicksand"
                                            >
                                                Courses
                                            </button>
                                            <button
                                                onClick={() => handleNavigation('blogs')}
                                                className="font-quicksand"
                                            >
                                                Blogs
                                            </button>
                                            <button
                                                onClick={() => handleNavigation('contact')}
                                                className="font-quicksand"
                                            >
                                                Contact
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3 text-xs justify-start">
                            <Disclosure.Button
                                as="button"
                                onClick={() => handleNavigation('home')}
                                className="block text-center font-quicksand pl-6 pr-6 bg-transparent py-2 rounded-md text-gray-700"
                            >
                                Home
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="button"
                                onClick={() => handleNavigation('courses')}
                                className="block text-center font-quicksand pl-6 pr-6 bg-transparent py-2 rounded-md text-gray-700"
                            >
                                Courses
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="button"
                                onClick={() => handleNavigation('blogs')}
                                className="block text-center font-quicksand pl-6 pr-6 bg-transparent py-2 rounded-md text-gray-700"
                            >
                                Blogs
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="button"
                                onClick={() => handleNavigation('contact')}
                                className="block text-center font-quicksand pl-6 pr-6 bg-transparent py-2 rounded-md text-gray-700"
                            >
                                Contact
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default Navigation;
