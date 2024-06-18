import React from "react";
import PARTNER1 from "../assets/part1.png";
import PARTNER2 from "../assets/part2.png";

const Join = () => {
  const partners = [
    {
      id: 1,
      name: "botnar",
      avatar: PARTNER1
    }, {
      id: 2,
      name: "node8",
      avatar: PARTNER2
    }
  ]

  return (
    <div className="relative pl-6 pr-6 lg:pb-32 pb-24 courseMain font-quicksand">
      <div className="opacity-10 absolute inset-0 z-0 background"></div>
      <div className="z-10 bg-white shadow-2xl -mt-[6rem] h-[13rem] flex flex-col justify-center items-center">
        <h1 className="font-bold lg:text-5xl text-3xl mt-4">Our Partners</h1>
        <div className="mt-4 flex gap-8">
          {partners.map((item, index) => {
            return (
              <div key={index} className="flex items-center justify-center gap-8">
                <img src={item.avatar} alt={item.name} className="lg:w-24 w-16" />
              </div>
            )
          })}
        </div>
      </div>
      <div className="mt-8 ">
        <p className="text-sm partners about">
          Jesi proudly partners with the Botnar Foundation for the Young and Safe City initiative,
          alongside Node Eight. This collaboration offers fully sponsored scholarships to tech
          enthusiasts, aligning with Jesi's goal of providing quality tech education in Africa.
          The Botnar Foundation's commitment to empowering youth and creating safe urban environments
          aligns with Jesi's mission. Joining forces, they aim to shape Africa's tech talent future,
          inviting partners to collaborate and make a positive impact. Contact them to explore collaboration
          and create a brighter future for African youth through education and innovation.
        </p>
        <div className="mt-12 flex items-center justify-center">
          <button className=" bg-primary pl-8 pr-8 pt-3 pb-3 text-xs text-white rounded-sm">
            Become a partner
          </button>
        </div>
      </div>
    </div>
  )
}

export default Join

