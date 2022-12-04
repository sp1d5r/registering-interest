import React from "react";
import "./home.css";

function Home() {
    return (
        <div className={"home"}>
            <div>
                <h1>How did you get here?</h1>
                <p>Nothing to see here. Run along now...</p>
                <a href={"/courses"}>or persist</a>
            </div>
        </div>
    )
}

export default Home;