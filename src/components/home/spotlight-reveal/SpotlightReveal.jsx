import React from "react";
import './SpotlightReveal.css';

const SpotlightReveal = ({ defaultChildren, hiddenChildren }) => {
    return (
        <div className="reveal-wrapper">
            <div className="default-content">{defaultChildren}</div>
            <div className="hidden-content">{hiddenChildren}</div>
        </div>
    );
};

export default SpotlightReveal;
