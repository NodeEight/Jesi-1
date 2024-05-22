import React from 'react'
import { Tabs } from '@mantine/core';
import { CurrentlyLearning } from './utils';
const course = () => {
    return (
        <div id='home' className=" pt-24 h-screen w-full p-24">

            <h1 className='mt-16 mb-14 font-quicksand font-bold text-4xl'>My course</h1>
            <Tabs color="teal" defaultValue="first" >
                <Tabs.List>
                    <Tabs.Tab value="first" color="#FF7900" className="font-quicksand font-medium text-2xl">Currently learning</Tabs.Tab>
                    <Tabs.Tab value="second" color="#FF7900" className="font-quicksand font-medium text-2xl">
                        Completed
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="first" pt="xl">
                    <CurrentlyLearning />
                </Tabs.Panel>

                <Tabs.Panel value="second" pt="xl">
                    Second tab color is blue, it gets this value from props, props have the priority and will
                    override context value
                </Tabs.Panel>
            </Tabs>

        </div>
    )
}

export default course