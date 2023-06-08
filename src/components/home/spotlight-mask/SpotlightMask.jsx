import React, { useEffect, useState } from 'react';
import './SpotlightMask.css';

const SpotlightMask = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [coordinates, setCoordinates] = useState({ x: '50%', y: '50%' });
    const [buttonAnimation, setButtonAnimation] = useState(false);
    const [email, setEmail] = useState("");

    const updateCoordinates = (event) => {
        const x = Math.round((event.clientX / window.innerWidth) * 100);
        const y = Math.round((event.clientY / window.innerHeight) * 100);
        setCoordinates({ x: `${x}%`, y: `${y}%` });
    };

    const handleClick = () => {
        setButtonAnimation(true);
        setTimeout(() => setButtonAnimation(false), 1000); // Reset animation after 1 second
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        window.addEventListener('mousemove', updateCoordinates);
        return () => {
            window.removeEventListener('mousemove', updateCoordinates);
        };
    }, []);

    const handleInputChange = (event) => {

    };

    const handleButtonClick = (event) => {
        const email = document.getElementById("emailField").value;
        const emailRegex = /\S+@\S+\.\S+/; // Basic email validation
        if (emailRegex.test(email)) {
            alert("Valid Email Entered");
        } else {
            alert("Invalid Email Entered");
        }
    };

    return (
        <div>
            <section hidden={isOpen}>
                <h1 hidden={isOpen} className={"hidden-content-h2"}>Accelerate your career with Conventa</h1>
                <p hidden={isOpen} className={"main-copy-text"}>
                    Elevate your career and personal business with our innovative blend of psychology and professional development training.
                </p>
                <p hidden={isOpen} className={"main-copy-text"}>
                    At our platform, we empower ambitious individuals with psychological insights that directly enhance career growth and business leadership.
                </p>
                <p hidden={isOpen} className={"main-copy-text"}>
                    Learn, engage, and transform your professional journey with us today.
                </p>
                <div className="email-input-section">
                    <input
                        type="text"
                        id="emailField"
                        name="email"
                        placeholder="Place Mouse over Me..."
                        value={email}
                        onChange={(event) => handleInputChange(event)}
                        style={{border: 'none', borderBottom: '1px solid black'}}
                    />
                </div>
                <div className="email-output-section">
                    <p>Your Email: <span id="outputField"></span></p>
                </div>
                <span className={`hover-btn ${buttonAnimation ? 'animate' : ''}`} onClick={handleClick}>
                    <svg viewBox="0 0 62 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M61.0607 13.0607C61.6465 12.4749 61.6465 11.5251 61.0607 10.9393L51.5147 1.3934C50.9289 0.807612 49.9792 0.807612 49.3934 1.3934C48.8076 1.97918 48.8076 2.92893 49.3934 3.51472L57.8787 12L49.3934 20.4853C48.8076 21.0711 48.8076 22.0208 49.3934 22.6066C49.9792 23.1924 50.9289 23.1924 51.5147 22.6066L61.0607 13.0607ZM0 13.5H60V10.5H0V13.5Z" />
                    </svg>
                </span>
            </section>
            <section
                className={`overlay ${isOpen ? 'is-open' : ''}`}
                style={{ '--x': coordinates.x, '--y': coordinates.y }}
            >
                <h1 hidden={isOpen}>Accelerate your career with Conventa</h1>
                <p hidden={isOpen} className={"main-copy-text"}>
                    Elevate your career and personal business with our innovative blend of psychology and professional development training.
                </p>
                <p hidden={isOpen} className={"main-copy-text"}>
                    At our platform, we empower ambitious individuals with psychological insights that directly enhance career growth and business leadership.
                </p>
                <p hidden={isOpen} className={"main-copy-text"}>
                    Learn, engage, and transform your professional journey with us today.
                </p>
                <div className="email-input-section">
                    <input
                        type="text"
                        id="emailField"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => handleInputChange(event)}
                        style={{border: 'none', borderBottom: '1px solid black'}}
                    />
                </div>
                <div className="email-output-section">
                    <p>Your Email: <span id="outputField"></span></p>
                </div>
                <span className="hover-btn2 " onClick={handleClick}>
                  <svg viewBox="0 0 62 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                        <path fill="black" d="M61.0607 13.0607C61.6465 12.4749 61.6465 11.5251 61.0607 10.9393L51.5147 1.3934C50.9289 0.807612 49.9792 0.807612 49.3934 1.3934C48.8076 1.97918 48.8076 2.92893 49.3934 3.51472L57.8787 12L49.3934 20.4853C48.8076 21.0711 48.8076 22.0208 49.3934 22.6066C49.9792 23.1924 50.9289 23.1924 51.5147 22.6066L61.0607 13.0607ZM0 13.5H60V10.5H0V13.5Z" />
                    </svg>
                </span>
            </section>
        </div>
    );
};

export default SpotlightMask;
