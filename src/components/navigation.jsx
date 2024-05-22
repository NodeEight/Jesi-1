import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { TextInput, Group, Box } from "@mantine/core";
import { useState } from "react";
import NotificationModal from "./modal"
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

const initialFormState = {
    fullname: "",
    phone_number: "",
    location: "",
    farm_type: "",
    type_of_service: "",
};

const Navigation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({ title: '', description: '', status: 'success' });
    const closeModal = () => setIsModalOpen(false);
    const [formData, setFormData] = useState(initialFormState);
    const [loading, setLoading] = useState(false);
    const [opened, { open, close }] = useDisclosure(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormReset = () => {
        setFormData({
            fullname: "",
            phone_number: "",
            location: "",
            farm_type: "",
            type_of_service: "",
        });
    };

    const validateForm = () => {
        return Object.values(formData).every(x => x !== "");
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) {
            setModalData({ title: 'Error', description: 'Please fill in all required fields.', status: 'error' });
            setIsModalOpen(true);
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('https://v1.nocodeapi.com/kabandakpantimichael/google_sheets/kARzyuYIpHdwqMct?tabId=Signup', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([[
                    new Date().toLocaleString(),
                    formData.fullname,
                    formData.phone_number,
                    formData.location,
                    formData.farm_type,
                    formData.type_of_service
                ]])
            });

            if (!response.ok) throw new Error('Failed to submit form');
            handleFormReset();
            setModalData({ title: 'Success', description: 'Your information has been submitted successfully.', status: 'success' });
            setIsModalOpen(true);
        } catch (error) {
            setModalData({ title: 'Error', description: error.toString(), status: 'error' });
            setIsModalOpen(true);
        }

        setLoading(false);
        close();
    };

    const handleSignUpClick = () => {
        scrollTo('home');
        open();
    };

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

                                    <img
                                        className="h-14 w-16 w-auto"
                                        src={Logo}
                                        alt="Logo"
                                    />
                                </a>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 text-gray-900">
                                <div className="flex items-center gap-12">
                                    <div className="hide sm:ml-6 sm:block">
                                        <div className="flex space-x-8">
                                            <button onClick={() => scrollTo('home')} className=" font-quicksand">Home</button>
                                            <button onClick={() => scrollTo('courses')} className=" font-quicksand">Courses</button>
                                            <button onClick={() => scrollTo('blogs')} className=" font-quicksand">Blogs</button>
                                            <button onClick={() => scrollTo('contact')} className=" font-quicksand">Contact</button>
                                            <form >
                                                <Modal
                                                    opened={opened}
                                                    onClose={close}
                                                    style={{}}
                                                    title="Register Now"
                                                    centered
                                                    styles={{
                                                        title: {
                                                            color: "black",
                                                            fontWeight: "900",
                                                            fontFamily: "Quicksand",
                                                        },
                                                    }}
                                                >
                                                    <Box mx="auto" sx={{ maxWidth: 320 }}>
                                                        {Object.entries(formData).map(([key, value]) => (
                                                            <TextInput
                                                                required
                                                                key={key}
                                                                label={key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}
                                                                name={key}
                                                                value={value}
                                                                onChange={handleInputChange}
                                                                mt="sm"
                                                                className="font-quicksand"
                                                            />
                                                        ))}
                                                        <Group mt="lg" position="right" >
                                                            <button onClick={handleFormReset} className="text-white font-quicksand text-sm rounded-sm bg-red-500 pl-4 pr-4 pt-2 pb-2">Cancel</button>
                                                            <button type="submit" onClick={handleFormSubmit} className="text-white  font-quicksand text-sm bg-green-500 rounded-sm  pl-4 pr-4 pt-2 pb-2">Submit</button>
                                                        </Group>
                                                    </Box>
                                                </Modal>
                                            </form>
                                            <button onClick={handleSignUpClick} className="text-center text-base lg:text-sm text-white bg-primary pl-4 pr-4 pt-2 pb-2 rounded-md font-quicksand"> My Classroom</button>
                                        </div>
                                    </div>
                                    <NotificationModal
                                        isOpen={isModalOpen}
                                        setIsOpen={setIsModalOpen}
                                        title={modalData.title}
                                        description={modalData.description}
                                        status={modalData.status || 'success'}
                                        onClose={closeModal}
                                    />
                                </div>
                            </div>
                        </div>


                    </div>

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
                                className="block pl-3 pr-3 ml-4 font-quicksand text-sm text-center text-base text-white bg-primary py-2 rounded-md text-white hover:bg-gray-500"
                            >
                                My Classroom
                            </button>

                            <NotificationModal
                                isOpen={isModalOpen}
                                setIsOpen={setIsModalOpen}
                                title={modalData.title}
                                description={modalData.description}
                                status={modalData.status || 'success'}
                                onClose={closeModal}
                            />
                        </div>

                    </Disclosure.Panel>

                </>
            )}
        </Disclosure>
    );
}

export default Navigation;