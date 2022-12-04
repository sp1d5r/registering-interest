import React from "react";
import "./courses.css";
import course_options from "../../course-click";
import CourseCardLink from "./course-card/course-card";

function Courses() {
    return (
        <div className={"courses-div"}>
            <h1>Courses</h1>
            <p>Click any of these courses to get free access tokens!</p>
            <div className={"courses-grid"}>
                {
                    course_options.map((item) => {
                        return <CourseCardLink
                            course={item}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Courses;