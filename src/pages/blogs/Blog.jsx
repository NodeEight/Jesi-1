import React, { useEffect } from "react";
import Header from "./Header";
import MainBody from "./Main";

const Main = ({ selectedBlog }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Header />
            <MainBody selectedBlog={selectedBlog} />
        </div>
    )
}
export default Main