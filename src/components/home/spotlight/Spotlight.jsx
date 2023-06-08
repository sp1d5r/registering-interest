import React, { useState, useEffect } from "react";
import './Spotlight.css';

const Spotlight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Clean up event listener
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="spotlight"
            style={{ transform: `translate(${position.x - 25}px, ${position.y - 25}px)` }}
        />
    );
};

export default Spotlight;
