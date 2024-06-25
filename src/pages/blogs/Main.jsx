import React from 'react'
import { Link } from 'react-router-dom';
import { url } from "../../components/utils"
const Main = ({ selectedBlog }) => {

  const highlightText = (text) => {
    const searchText = "Young and Safe Scholarship 2024/2025";
    const parts = text.split(new RegExp(`(${searchText})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === searchText.toLowerCase() ? (
        <span key={index} className="font-bold underline italic cursor-pointer">{part}</span>
      ) : (
        part
      )
    );
  };

  const highlightText2 = (text) => {
    const searchText = "July 26, 2024.";
    const parts = text.split(new RegExp(`(${searchText})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === searchText.toLowerCase() ? (
        <span key={index} className="font-bold   cursor-pointer">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className='lg:h-screen xl:h-full pb-12 w-full font-quicksand bg-white flex flex-col items-center'>
      <div className='flex flex-col'>
        <img
          src={selectedBlog.imageSrc1}
          className='object-contain mt-12 '
        />
        <h1 className="mt-4 font-bold  pl-4 pr-4 xl:text-2xl xl:text-center">
          {selectedBlog.description}
        </h1>
        {selectedBlog.firstwriteup.map((item, index) => {
          return (
            <div key={index} className='mt-7 pl-3 pr-3 xl:pl-[6rem] xl:pr-[6rem] '>
              <p className="lg:text-md xl:text-md text-sm ">
                {item}
              </p>
            </div>
          )
        })}
        <p className="lg:text-md xl:text-md text-sm mt-7 pl-3 pr-3 xl:pl-[6rem] xl:pr-[6rem]">
          {highlightText(selectedBlog.intercept)}
        </p>
        {selectedBlog.secondwriteup.map((item, index) => {
          return (
            <div key={index} className='mt-7 pl-3 pr-3 xl:pl-[6rem] xl:pr-[6rem]'>
              <p className="lg:text-md xl:text-md text-sm ">
                {item}
              </p>
            </div>
          )
        })}
        <img
          src={selectedBlog.imageSrc2}
          className='object-center mt-12 pl-3 pr-3 xl:pl-[6rem] xl:pr-[6rem]'
        />

        <h1 className="mt-6 font-semibold pl-4 pr-4 xl:pl-[6rem] xl:pr-[6rem]">
          {selectedBlog.interceptTitle}
        </h1>

        <ul className='mt-4 pl-8 pr-6 list-disc xl:pl-[7rem] xl:pr-[7rem]'>
          {selectedBlog.courses.map((item, index) => (
            <li key={index} className="lg:text-md xl:text-md text-sm mt-2">
              {item}
            </li>
          ))}
        </ul>
        <p className="lg:text-md xl:text-md text-sm mt-7 pl-3 pr-3 xl:pl-[6rem] xl:pr-[6rem]">
          {selectedBlog.cta1}
        </p>
        <p className="lg:text-md xl:text-md text-sm mt-9 pl-3 pr-3 xl:pl-[6rem] xl:pr-[6rem]">
          {selectedBlog.ctabtn}
        </p>
        <ul className='mt-4 pl-8 pr-6 list-disc xl:pl-[7rem] xl:pr-[7rem]'>
          {selectedBlog.cta1collection.map((item, index) => (
            <li key={index} className="lg:text-md xl:text-md text-sm mt-2">
              {item}
            </li>
          ))}
        </ul>
        <h1 className="mt-8 font-bold pl-4 text-sm pr-4 xl:pl-[6rem] xl:pr-[6rem]">
          {selectedBlog.cta2}
        </h1>
        <p className="lg:text-md xl:text-md text-sm mt-4 pl-3 pr-3 xl:pl-[6rem] xl:pr-[6rem]">
          {selectedBlog.cta2description}
        </p>
        <ul className='mt-4 pl-8 pr-6 list-disc xl:pl-[7rem] xl:pr-[7rem]'>
          {selectedBlog.cta2collection.map((item, index) => (
            <li key={index} className="lg:text-md xl:text-md text-sm mt-2">
              {item}
            </li>
          ))}
        </ul>
        <h1 className="mt-8 font-bold pl-4 text-sm pr-4 xl:pl-[6rem] xl:pr-[6rem]">
          {selectedBlog.cta3}
        </h1>
        <p className="lg:text-md xl:text-md text-sm mt-4 pl-3 pr-3 xl:pl-[6rem] xl:pr-[6rem]">
          {selectedBlog.cta3description}
        </p>
        <p className="lg:text-md xl:text-md text-sm mt-4 pl-3 pr-3 xl:pl-[6rem] xl:pr-[6rem]">
          {selectedBlog.cta4}
        </p>
        <p className="lg:text-md xl:text-md text-sm mt-4 pl-3 pr-3 xl:pl-[6rem] xl:pr-[6rem]">
          {highlightText2(selectedBlog.cta5)}
        </p>
        <Link to={url}>
          <button className="lg:text-md lg:ml-24 ml-4 pt-2 pb-2 pr-4 pl-4 rounded-sm xl:pl-[3rem] bg-primary text-white xl:pr-[3rem] ctaaaa2 mt-8 cursor-pointer font-boldxl:text-md text-sm  ">
            {selectedBlog.cta6}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Main