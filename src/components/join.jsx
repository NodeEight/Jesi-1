import React from "react";
import { partners, partnerurl } from "./utils"
import { Link } from "react-router-dom";

const Join = () => {

  return (
    <div className="relative  pl-6 pr-6 lg:pb-32 pb-24 courseMain font-quicksand">
      <div className="opacity-10 absolute inset-0 z-0 background"></div>
      <div className="z-10 bg-white shadow-xl -mt-[6rem] h-[13rem] flex flex-col justify-center items-center">
        <h1 className="font-bold lg:text-5xl text-3xl mt-4 xl:mt-6">Our Partners</h1>
        <div className="mt-2 flex gap-8">
          {partners.map((item, index) => {
            return (
              <div key={index} className="flex items-center justify-center gap-8">
                <img src={item.avatar} alt={item.name} className="lg:w-[8.4rem] w-[5.5rem]" />
              </div>
            )
          })}
        </div>
      </div>
      <div className="mt-8 z-10">
        <p className="lg:text-md xl:text-md text-sm partners about">
          Jesi proudly partners with the Botnar Foundation for the Young and Safe City initiative,
          alongside Node Eight. This collaboration offers fully sponsored scholarships to tech
          enthusiasts, aligning with Jesi's goal of providing quality tech education in Africa.
          The Botnar Foundation's commitment to empowering youth and creating safe urban environments
          aligns with Jesi's mission. Joining forces, they aim to shape Africa's tech talent future,
          inviting partners to collaborate and make a positive impact. Contact them to explore collaboration
          and create a brighter future for African youth through education and innovation.
        </p>
        <div className="mt-12 flex items-center justify-center hovered">
          <Link to={partnerurl}>
            <button className="bg-primary cursor-pointer pl-8 pr-8 pt-3 pb-3 text-xs text-white rounded-sm">
              Become a partner
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Join

