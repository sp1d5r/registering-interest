import React from "react";
import "./register-interest.css";
import RainbowText from "../rainbow-text/rainbow-text";
import CourseCard from "../course-card/course-card";
import FormLocal from "../form/form";

function RegisterInterest({image, title, description}) {
    return (
        <>
            <RainbowText />
            <CourseCard image={image} title={title} description={description}/>
            <FormLocal />
        </>
    );
}

export default RegisterInterest;