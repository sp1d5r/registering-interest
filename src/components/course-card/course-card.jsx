import React from "react";
import "./course-card.css";
import {Card, CardImg} from "react-bootstrap";

function CourseCard() {
    return (
        <>
        <Card className={"course-card"}>
            <img className={"course-img"} alt={"Course Image"} src={require("../../assets/dark-psychology.png")} />
            <div className={"course-info"}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text >
                    A breif introduction to evil. Proceed with caution.
                </Card.Text>
                <Card.Text className="mb-2 text-muted card-text">1x Access Token</Card.Text>
            </div>
        </Card>
        </>
    )
}

export default CourseCard;