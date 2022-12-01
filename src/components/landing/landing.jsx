import React from "react";
import "./landing.css";
import RainbowText from "../rainbow-text/rainbow-text";
import CourseCard from "../course-card/course-card";

function Landing() {
    return (
        window.innerWidth < 650 ?
            /* Mobile */
            <>
                <RainbowText />
                <CourseCard />
            </>
            :
            /* Desktop */
            <></>
    );
}

export default Landing;