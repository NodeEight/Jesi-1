import React from 'react'
import Choose from "../assets/choose.png"
import { GoDotFill } from "react-icons/go";

const WhyChooseUs = () => {
  return (
    <section className='relative w-full h-full gap-2 bg-white grid lg:grid-cols-2 lg:pb-48 pb-48 pl-8 pr-12 pt-14'>
      <div >
        <h1 className="font-quicksand max-w-[10rem] -mt-6 font-bold lg:text-lg text-sm">WHY CHOOSE SKILLSLIFT</h1>
        <p className='lg:mt-14 mt-8 font-bold font-quicksand lg:text-4xl text-2xl'>Grow Your Skills, Define Your Bright Future</p>
        <p className='lg:mt-8 mt-2 font-quicksand lg:text-md text-xs '>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus sequi quasi magni laboriosam est deleniti amet
          saepe beatae itaque, autem sint quidem sunt minima. Dolorum labore
          fuga repellendus consectetur ad voluptates architecto earum sint vel
          magni, tenetur, facilis fugiat suscipit temporibus voluptate nobis
          recusandae repudiandae cum perspiciatis incidunt. Corrupti fugit sed sunt?
        </p>
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
        // className='md:w-[40rem]'
        />
      </div>
    </section>
  )
}

export default WhyChooseUs

export const details = [
  {
    id: 1,
    name: "Get 100% Scholarship",
    color: "#FFC500"
  },
  {
    id: 2,
    name: "Employability",
    color: "#003366",
    size: "16px",
  },
  {
    id: 3,
    name: "Learn Anything",
    color: "#008080"
  }
]