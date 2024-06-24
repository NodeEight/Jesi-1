import Logo from "../assets/main.png";
import React, { useState } from 'react';
import { legal, links, socialmedia } from "./utils"

const Footer = () => {
  const [loading, setLoading] = React.useState(false);

  const [newletterInfo, setNewsLetterInfo] = useState({
    email: "",
  });

  const handleInputChange = (event) => {
    console.log("Input changing to:", event.target.value);
    setNewsLetterInfo({ email: event.target.value });
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };


  return (
    <section id="contact" className="relative w-full h-full pb-10" style={{ backgroundColor: "rgba(0, 128, 128, 0.1)" }}>
      <div className="flex flex-col md:flex-row align-center justify-around lg:pt-[2rem] pb-2 w-full ">
        <div className="flex flex-col justify-center items-center lg:mt-0 mt-4">
          <img
            src={Logo}
            className="w-18 h-16"
          />
          <p className="font-quicksand text-left mt-10 font-medium mb-4 text-xs lg:max-w-[25rem] max-w-[23rem]">
            Learn in-demand skills and get connected to jobs in tech in 6 to 12 months
          </p>
          <div className="flex items-center gap-1.5 mt-2 justify-center">
            {socialmedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-primary text-white lg:p-1.5 p-1 rounded-sm icons">
                  <item.icon />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:pl-0 pl-12 justify-center lg:mt-0 mt-4">
          <h1 className="font-quicksand text-left font-bold lg:text-2xl">
            Links
          </h1>
          <div className=" items-center gap-1.5 mt-2 justify-center">
            {links.map((item, index) => (
              <a key={index} onClick={() => scrollTo(item.ids)} href={`#${item.ids}`}>
                <div className="font-medium lg:p-1.5 p-1 font-quicksand text-xs">{item.name}</div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:pl-0 pl-12 justify-center lg:mt-0 mt-4">
          <h1 className="font-quicksand text-left font-bold lg:text-2xl">
            Legal
          </h1>
          <div className=" items-center gap-1.5 mt-2 justify-center">
            {legal.map((item, index) => (
              <a key={index} onClick={() => scrollTo(item.ids)} href={`#${item.ids}`} >
                <div className="font-medium lg:p-1.5 p-1 font-quicksand text-xs">
                  {item.name}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center lg:mt-6  mt-6">
          <h1 className="font-quicksand text-left font-bold lg:text-2xl">
            Newsletter
          </h1>
          <p className="lg:max-w-[25rem] max-w-[21rem] font-quicksand mt-3 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni saepe aspernatur.</p>
          <div className="items-center gap-1.5 mt-4 justify-center">
            <form className='flex flex-col' >
              <input
                className='p-3 rounded-sm text-white text-xs focus:outline-none  font-quicksand lg:w-[22rem] w-[19rem]'
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
                className='lg:w-[22rem] text-xs w-[19rem] mt-4 bg-primary p-2 font-quicksand text-white rounded-sm'
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