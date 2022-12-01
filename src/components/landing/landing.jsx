import React from "react";
import "./landing.css";
import RainbowText from "../rainbow-text/rainbow-text";
import CourseCard from "../course-card/course-card";
import FormLocal from "../form/form";

function Landing() {
    return (
        window.innerWidth < 650 ?
            /* Mobile */
            <>
                <RainbowText />
                <CourseCard />
                <FormLocal />
            </>
            :
            /* Desktop */
            <>
                <RainbowText />
                <CourseCard />
                <FormLocal />
            </>
    );
}

export default Landing;