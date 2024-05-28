import { Input } from '@mantine/core';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Logo from "../assets/main.png";
import React, { useState } from 'react';

const socialmedia = [
  { icon: FaFacebookF, link: "https://www.facebook.com" },
  { icon: FaInstagram, link: "https://www.instagram.com" },
  { icon: FaLinkedinIn, link: "https://www.linkedin.com" },
  { icon: FaXTwitter, link: "https://www.twitter.com" },
];
const links = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About Us",
  },
  {
    id: 3,
    name: "Courses"
  },
  {
    id: 4,
    name: "Scholarships"
  },
  {
    id: 5,
    name: "Career Path"
  },
  {
    id: 6,
    name: "Blogs & Articles"
  }
]

const legal = [
  {
    id: 1,
    name: "Terms of Use",
  },
  {
    id: 2,
    name: "Privacy Policy",
  },
  {
    id: 3,
    name: "Courses"
  },
  {
    id: 4,
    name: "Scholarships"
  },
  {
    id: 5,
    name: "Career Path"
  },
  {
    id: 6,
    name: "Blogs & Articles"
  }
]

const Footer = () => {
  const [loading, setLoading] = React.useState(false);

  const [newletterInfo, setNewsLetterInfo] = useState({
    email: "",
  });

  const handleInputChange = (event) => {
    console.log("Input changing to:", event.target.value);
    setNewsLetterInfo({ email: event.target.value });
  };



  return (
    <section id="contact" className="relative w-full pb-10" style={{
      backgroundColor: "rgba(0, 128, 128, 0.1)"
    }}>
      <div className="flex flex-col md:flex-row justify-around pt-6 pb-2 w-full">

        <div className="flex flex-col justify-center items-center lg:mt-0 mt-4">
          <img
            src={Logo}
            className="w-18 h-16"
          />
          <p className="font-quicksand text-left mt-10 font-medium mb-4 lg:text-sm text-xs lg:max-w-[30rem] max-w-[23rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a neque. Saepe, molestiae? Modi
            blanditiis adipisci laborum laudantium repellendus natus quis nemo ad tempora asperiores autem,
            maxime reprehenderit, corrupti ex.
          </p>
          <div className="flex items-center gap-1.5 mt-2 justify-center">
            {socialmedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-primary text-white lg:p-1.5 p-1 rounded-sm">
                  <item.icon />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:pl-0 pl-12 justify-center lg:mt-0 mt-4">
          <h1 className="font-quicksand text-left font-bold lg:text-3xl">
            Links
          </h1>
          <div className=" items-center gap-1.5 mt-2 justify-center">
            {links.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-medium lg:p-1.5 p-1 font-quicksand lg:text-sm text-xs">
                  {item.name}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:pl-0 pl-12 justify-center lg:mt-0 mt-4">
          <h1 className="font-quicksand text-left font-bold lg:text-3xl">
            Legal
          </h1>
          <div className=" items-center gap-1.5 mt-2 justify-center">
            {legal.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-medium lg:p-1.5 p-1 font-quicksand lg:text-sm text-xs">
                  {item.name}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center lg:mt-6 lg:-mt-4 mt-6">
          <h1 className="font-quicksand text-left font-bold lg:text-3xl">
            Newsletter
          </h1>
          <p className="lg:max-w-[25rem] max-w-[21rem] font-quicksand mt-3 lg:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni saepe aspernatur.</p>
          <div className="items-center gap-1.5 mt-4 justify-center">
            <form className='flex flex-col' >
              <input
                className='p-3 rounded-sm text-white focus:outline-none  font-quicksand lg:w-[22rem] w-[19rem]'
                placeholder='Email Adress'
                type='email'
                required
                value={newletterInfo.email}
                onChange={handleInputChange}
                name='email'
                style={{ backgroundColor: '#003366', color: 'white' }}
              />
              <button
                type='submit'
                className='lg:w-[22rem] w-[19rem] mt-4 bg-primary p-2 font-quicksand text-white rounded-md'
              >
                {!loading ? (
                  "Submit"
                ) : (
                  "Submitting..."
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
};
export default Footer;