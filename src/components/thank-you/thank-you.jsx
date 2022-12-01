import React from "react";
import './thank-you.css';

function ThankYou() {
    return (
        <div className={"thank-you-page"}>
            <div>
                <h1>Thank You!</h1>
                <p>We'll send you an email confirming your place!</p>
                <img alt={"Thank you so much!"} src={require("../../assets/thank-you.png")} className={"thank-you-image"}/>
            </div>
        </div>
    )
}

export default ThankYou;