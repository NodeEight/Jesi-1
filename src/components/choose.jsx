import React from 'react'
import Choose from "../assets/choose.png"
import { GoDotFill } from "react-icons/go";
import { FaCircleCheck } from "react-icons/fa6";

export const data = [
  {
    id: 1,
    title: "Scholarships",
    desc: "Jesi offers fully funded scholarships to ensure that cost is never a barrier to learning. We believe that education should be accessible to everyone." 
  }
  , {
    id: 2,
    title: "Hands-On Practical Experience",
    desc: "Valuable hands-on experience through projects and exercises, preparing you to face real-world tech challenges with confidence.    "
  },
  {
    id: 3,
    title: "Job Connections",
    desc: "Our commitment doesn't end with skills development. We help you connect with digital companies, increasing your chances of landing rewarding tech jobs."
  },
  {
    id: 4,
    title: "Community for Lifelong Learning Partner",
    desc: "Jesi is your lifelong companion in your journey as a tech bro/sis. We provide continuous support and opportunities for continuous growth."
  }

]
export const details = [
  { id: 1, name: "Get 100% Scholarship", color: "#FFC500" },
  { id: 2, name: "Employability", color: "#003366", size: "16px" },
  { id: 3, name: "Learn Anything", color: "#008080" }
];

const WhyChooseUs = () => {
  return (
    <section className='relative xl:h-screen lg:h-screen h-full w-full font-quicksand  gap-2 bg-white grid lg:grid-cols-2 lg:pb-48 pb-48 pl-6 pr-6 pt-14'>
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
          {data.map((item, index) => {
            return (
              <div key={index} className='flex items-center gap-4 xl:mt-0 mt-4'>
                <FaCircleCheck className='text-primary xl:w-6 w-12'/>
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

      <div className='grid lg:grid-cols-2 mt-12'>
        <div>
          {details.map((item, index) => (
            <div key={index} className="m-12">
              <p style={{ backgroundColor: item.color, marginLeft: item.size }} className="text-white -pl-6 flex text-xs items-center  p-2 font-quicksand lg:text-base md:text-sm whitespace-nowrap w-[9rem] rounded-sm">
                <GoDotFill />
                <span className="text-xs"> {item.name}</span>
              </p>
            </div>
          ))}
        </div>
        <img
          src={Choose}
        />
      </div>
    </section>
  )
}

export default WhyChooseUs

