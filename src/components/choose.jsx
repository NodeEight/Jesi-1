import React from 'react'
import Choose from "../assets/choose.jpg"
import { GoDotFill } from "react-icons/go";
import { FaCircleCheck } from "react-icons/fa6";
import { choose, choosedetails } from './utils';

const WhyChooseUs = () => {
  return (
    <section className='relative xl:h-screen lg:h-screen xl:pr-32 xl:pl-32 xl:mt-12 h-full w-full font-quicksand gap-2 bg-white grid lg:grid-cols-2 grid-cols-1 lg:pb-48 pb-48 pl-6 pr-6 pt-14'>
      <div >
        <h1 className="max-w-[10rem] -mt-6 font-bold lg:text-lg text-sm">Why Jesi</h1>
        <p className='lg:mt-14 mt-8 font-bold lg:text-4xl text-2xl'>Grow Your Skills, Define Your Bright Future</p>
        <p className='lg:mt-8 mt-2  lg:text-md text-xs about'>
          At Jesi, we empower you to build your confidence through comprehensive technical
          and soft skill development in an inclusive and supportive learning community. Our
          mission is to equip you for a future of boundless opportunities in the dynamic tech
          industry, where you can thrive and achieve remarkable success.
        </p>
        <div className='xl:mt-5 lg:text-md text-xs about flex flex-col gap-4'>
          {choose.map((item, index) => {
            return (
              <div key={index} className='flex items-center gap-4 xl:mt-0 mt-4'>
                <FaCircleCheck className='text-primary xl:w-6 w-12' />
                <div className=''>
                  <p className='font-bold whitespace-nowrap'>
                    {item.title} :
                  </p>
                  <p >
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className='lg:flex lg:justify-between mt-10 '>
        <div className=''>
          {choosedetails.map((item, index) => (
            <div key={index} className="m-12">
              <p style={{ backgroundColor: item.color, marginLeft: item.size }} className="text-white -pl-6 flex text-xs items-center  p-2 font-quicksand lg:text-base md:text-sm whitespace-nowrap w-[9rem] rounded-sm">
                <GoDotFill />
                <span className="text-xs"> {item.name}</span>
              </p>
            </div>
          ))}
        </div>
        <img
          className='rounded-lg max-w-[80%] max-h-[80%] object-contain'
          src={Choose}
        />
      </div>
    </section>
  )
}

export default WhyChooseUs

