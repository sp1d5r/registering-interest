import React, {useEffect} from "react";
import "./RegisterInterest.css"

export default function RegisterInterest({isPrimary, handleInputChange, email, continueButton}) {

    return (
        <div className={isPrimary ? "primaryApp" : "secondaryApp"} style={{ backgroundImage: "url(http://localhost:3000/static/media/contour-map.a7c48995b60fd370e8d8.svg)"}}>
        <div className="corner-outline main-div">
            <h1 className={"title"}>Unlock Your Potential. Master Your Mind.</h1>
            <div>
                <p>Everybody knows that one person who effortlessly achieves success</p>
                <p>Don't let them pass you by.</p>
                <p>Learn the secrets to effortless success through our platform.</p>
                <p>Develop charisma, analyze body language, and more.  </p>
            </div>

            <input
                className={"email-input"}
                type="text"
                value={email}
                onChange={handleInputChange}
            />

            <button
                className={"reg-button"}
            >
                Register your Interest
                {continueButton}
            </button>
        </div>
        </div>
    )
}