import React from "react";
import CourseCard from "../../course-card/course-card";
import {Link} from "react-router-dom";
import "./course-card.css";

function CourseCardLink({ course }) {
    return (
        <Link to={course.route} className={"padding-card"}>
            <CourseCard
                title={course.title}
                image={course.image}
                description={course.description}
            />
        </Link>
    )
}

export default CourseCardLink;