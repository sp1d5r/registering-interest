import React from "react";
import Spotlight from "./spotlight/Spotlight";
import SpotlightReveal from "./spotlight-reveal/SpotlightReveal";
import SpotlightMask from "./spotlight-mask/SpotlightMask";

const Home = () => {
    return (
        <div className={"home"}>
            <SpotlightMask
                defaultChildren={<p>Default text or component</p>}
                hiddenChildren={<button>Hidden button</button>}
            />
        </div>
    );
};

export default Home;
