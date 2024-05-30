import { GoDot } from "react-icons/go";

const Header = () => {
    const links = [
        {
            id: 1,
            name: "Read"
        },
        {
            id: 2,
            name: "Comment"
        },
        {
            id: 3,
            name: "Share"
        }
    ]

    return (
        <div className="relative w-full py-12 pt-24 h-[40rem] " style={{ backgroundColor: "rgba(255, 197, 0, 0.1)" }}>
            <div className="mx-auto text-center mt-48  items-center justify-center">
                <h2 className="font-quicksand font-bold text-green text-center items-center md:text-5xl text-4xl mt-16">Our Blogs Details</h2>
                <div className="flex justify-center align-center gap-16 mt-8 font-quicksand">
                    {links.map((item, index) => {
                        return (
                            <div key={index} className="flex align-center justify-center items-center lg:gap-2 lg:-ml-0 -ml-4 lg:-mr-0 -mr-4">
                                <GoDot className="h-4 w-4" />
                                <p className="text-xs lg:text-sm">{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Header;