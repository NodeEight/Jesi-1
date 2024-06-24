import React from 'react';
import Bg from '../../assets/coursedetailhead.jpg';

const Header = () => {
    return (
        <div className="relative w-full py-12 pt-24 h-[30rem] bg-cover bg-center"
            style={{
                backgroundColor: "rgba(255, 197, 0, 0.3)",
                backgroundImage: `url(${Bg})`,
            }}
        >
            <div className="mx-auto text-center mt-24 flex flex-col items-center justify-center z-10">
                <h2 className="font-quicksand font-bold text-green text-center lg:text-5xl text-2xl mt-16">Course Details</h2>
            </div>
        </div>
    );
};

export default Header;
