import React from "react";
import MKT1 from "../assets/mkt1.png";
import DTS from "../assets/data.png";
import UIUX from "../assets/uiux.png";
import { Events } from "./utils";

const Join = () => {
  const data = [
    {
      id: 1,
      imageSrc: MKT1,
      title: "Event's Name",
      date: "Event's Date",
      location: "Event's Location",
      btn: "Apply",
    },
    {
      id: 2,
      imageSrc: DTS,
      title: "Event's Name",
      date: "Event's Date",
      location: "Event's Location",
      btn: "Apply",
    },
    {
      id: 3,
      imageSrc: UIUX,
      title: "Event's Name",
      date: "Event's Date",
      location: "Event's Location",
      btn: "Apply",
    },
  ]

  return (
    <div className="relative pl-12 pr-12 courseMain pb-12">
      <div className="opacity-10 absolute inset-0 z-0 background"></div>
      <p className="font-quicksand mt-8 text-center font-bold lg:text-lg">
        JOIN US
      </p>
      <h1
        className="font-bold mt-5 text-center mt-6 text-5xl font-quicksand mobile-font-size "
      >
        UPCOMING EVENTS
      </h1>

      <div className="flex z-10 flex-wrap mt-24 lg:m-24 gap-8 grid lg:grid-cols-3">
        {data.map((item) => (
          <Events key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Join
