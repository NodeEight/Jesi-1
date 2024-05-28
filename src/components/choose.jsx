import React from 'react'
import Choose from "../assets/choose.png"
import { GoDotFill } from "react-icons/go";

const WhyChooseUs = () => {
  return (
    <section className="relative w-full bg-white lg:h-screen h-full grid lg:pb-0 pb-14 lg:grid-cols-2 pl-12 pr-12 pt-12">
      <div className='mt-12'>
        <h1 className="font-quicksand max-w-[10rem] -mt-6 font-bold lg:text-lg text-sm">WHY CHOOSE SKILLSLIFT</h1>
        <p className='lg:mt-24 mt-8 font-bold font-quicksand lg:text-5xl text-2xl'>Grow Your Skills, Define Your Bright Future</p>
        <p className='lg:mt-8 mt-2 font-quicksand lg:text-md text-xs '>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus sequi quasi magni laboriosam est deleniti amet
          saepe beatae itaque, autem sint quidem sunt minima. Dolorum labore
          fuga repellendus consectetur ad voluptates architecto earum sint vel
          magni, tenetur, facilis fugiat suscipit temporibus voluptate nobis
          recusandae repudiandae cum perspiciatis incidunt. Corrupti fugit sed sunt?
        </p>
        <button className='bg-primary p-3 lg:text-base text-xs lg:mt-12 mt-8 lg:mb-0 mb-12 text-white font-quicksand rounded-md pl-6 pr-6'>
          Choose A Career
        </button>
      </div>

      <div className='chooseUs'>
        <div>
          {details.map((item, index) => (
            <div key={index} className="m-12">
              <p style={{ backgroundColor: item.color, marginLeft: item.size }} className="text-white pl-4 flex items-center gap-2 p-2 font-quicksand lg:text-base text-xs whitespace-nowrap w-[13rem] rounded-sm">
                <GoDotFill />
                {item.name} </p>
            </div>
          ))}
        </div>
        <img
          src={Choose}
          className='Image'
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