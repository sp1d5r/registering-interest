import React from 'react';
import './ScrollingBanner.css'; // Import the CSS file for styling

const ScrollingBanner = () => {
    return (
        <div className="banner">
            <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                <text x="0" y="5" className="scrolling-text">
                    <tspan x="0" y="5">Your scrolling text goes here</tspan>
                    <tspan x="100%" y="5">Your scrolling text goes here</tspan>
                </text>
            </svg>
        </div>
    );
};

export default ScrollingBanner;
