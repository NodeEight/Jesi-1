import React, { useEffect } from "react";
import MainBody from "./Main";

const Main = ({ selectedBlog }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <MainBody selectedBlog={selectedBlog} />
        </div>
    )
}
export default Main