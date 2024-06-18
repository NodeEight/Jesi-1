import React from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Textarea } from '@mantine/core';
import { BsFillReplyFill } from "react-icons/bs";
import Chart1 from "../../../assets/chats/1.png";
import Chart2 from "../../../assets/chats/2.png";
import Chart3 from "../../../assets/chats/3.png";


const Chats = () => {

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  const chats = [
    {
      id: 1,
      image: Chart3,
      name: "John Doe",
      position: "",
      date: "10 May, 2023",
      action: "Reply",
      icon: <BsFillReplyFill />,
      message: "In ac egestas diam habitasse curabitur turpis libero enim. Egestas viverra et dolor ac vel ornare non."
    },
    {
      id: 2,
      image: Chart1,
      position: "2rem",
      name: "John Doe",
      date: "10 May, 2023",
      action: "Reply",
      icon: <BsFillReplyFill />,
      message: "In ac egestas diam habitasse curabitur turpis libero enim. Egestas viverra et dolor ac vel ornare non."
    },
    {
      id: 2,
      image: Chart2,
      name: "John Doe",
      position: "",
      date: "10 May, 2023",
      action: "Reply",
      icon: <BsFillReplyFill />,
      message: "In ac egestas diam habitasse curabitur turpis libero enim. Egestas viverra et dolor ac vel ornare non."
    }
  ]

  return (
    <div className="relative lg:-mt-14 w-full lg:pb-16 pb-12 bg-white grid lg:grid-cols-2 font-quicksand " >
      <div className="flex flex-col lg:pl-[12rem]  lg:p-0 p-8 ">
        <h1 className='font-bold lg:text-2xl'>3 Comments</h1>
        <div className=" lg:w-[36rem] flex flex-col items-center lg:gap-2  gap-4 lg:mt-6">
          {chats.map((item, index) => {
            return (
              <div className='w-full lg:pl-4 lg:pr-4 lg:pt-2 lg:pb-2' key={index} style={{ marginLeft: (item.position) }}>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <img src={item.image} />
                    <p className='flex flex-col lg:text-sm text-xs'>
                      <span className='font-bold'>{item.name}</span>
                      <span>{item.date}</span>
                    </p>
                  </div>
                  <div className='bg-yellow-400 text-white w-16 h-7 text-center flex items-center justify-center '>
                    <p>{item.icon}</p>
                    <p className='lg:text-sm text-xs'>{item.action}</p>
                  </div>
                </div>
                <div className='justify-center mt-3 flex lg:text-sm text-xs max-w-[30rem]'>
                  {item.message}
                </div>
              </div>
            )
          })}
        </div>
        <h1 className='font-bold lg:text-2xl lg:mt-8 mt-10'>Leave A Reply</h1>
        <p className='lg:text-sm text-xs mt-2'>Lorem ipsum dolor sit amet consectetur. Blandit nulla orci justo vivamus sed.</p>
        <div className='mt-6 lg:w-[36rem]'>
          <form className='flex flex-col'>
            <div className='flex gap-2 w-full '>
              <TextInput
                placeholder="Name"
                key={form.key('name')}
                {...form.getInputProps('name')}
                className='w-full font-quicksand '
              />
              <TextInput
                placeholder="Email"
                key={form.key('email')}
                {...form.getInputProps('email')}
                className='w-full font-quicksand '
              />
            </div>
            <div className="mt-5">
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here"
                required
                className="p-2 lg:text-sm text-xs w-full font-quicksand border border-gray-200 rounded-md focus:outline-none  bg-transparent"
                min="0"
                rows="4"
              />
            </div>
            <button className='bg-primary w-[20rem] h-10 justify-center mt-3 rounded-sm lg:text-sm text-xs flex items-center text-white'>
              Send Message
            </button>
          </form>

        </div>

      </div>

    </div>
  )
}

export default Chats