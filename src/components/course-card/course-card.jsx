import React from "react";
import "./course-card.css";
import {Card} from "react-bootstrap";

function CourseCard({title, image, description}) {
    return (
        <>
        <Card className={"course-card"}>
            <img className={"course-img"} alt={"Course Image"} src={image} />
            <div className={"course-info"}>
                <Card.Title>{title}</Card.Title>
                <Card.Text >
                    {description}
                </Card.Text>
                <Card.Text className="mb-2 text-muted card-text">1x Access Token</Card.Text>
            </div>
        </Card>
        </>
    )
}

export default CourseCard;