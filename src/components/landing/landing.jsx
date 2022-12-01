import React from "react";
import "./landing.css";

function Landing() {
    return (
        window.innerWidth < 650 ?
            /* Mobile */
            <>
            </>
            :
            /* Desktop */
            <></>
    );
}

export default Landing;