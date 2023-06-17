import React, { useEffect, useState } from 'react';
import './SpotlightMask.css';
import RegisterInterest from "../../register-interest/RegisterInterest";
import {registerInterest} from "../../../cloud-infrastructure/firebase";

const SpotlightMask = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [coordinates, setCoordinates] = useState({ x: '80%', y: '20%' });
    const [buttonAnimation, setButtonAnimation] = useState(false);
    const [email, setEmail] = useState("");

    const updateCoordinates = (event) => {
        const x = Math.round((event.clientX / window.innerWidth) * 100);
        const y = Math.round((event.clientY / window.innerHeight) * 100);
        setCoordinates({ x: `${x}%`, y: `${y}%` });
    };

    const handleClick = () => {
        setButtonAnimation(true);
        registerInterest(email);
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
        setEmail(event.target.value)
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
        <div style={{position: 'relative', zIndex: 0}}>
            <section className={"behind-div"} hidden={isOpen}>
                <RegisterInterest
                    isPrimary={true}
                    handleInputChange={handleInputChange}
                    handleClick={handleClick}
                    email={email}
                    continueButton={<span className={`hover-btn ${buttonAnimation ? 'animate' : ''} ${isOpen ? 'open' : 'closed '}`}>
                    <svg viewBox="0 0 62 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M61.0607 13.0607C61.6465 12.4749 61.6465 11.5251 61.0607 10.9393L51.5147 1.3934C50.9289 0.807612 49.9792 0.807612 49.3934 1.3934C48.8076 1.97918 48.8076 2.92893 49.3934 3.51472L57.8787 12L49.3934 20.4853C48.8076 21.0711 48.8076 22.0208 49.3934 22.6066C49.9792 23.1924 50.9289 23.1924 51.5147 22.6066L61.0607 13.0607ZM0 13.5H60V10.5H0V13.5Z" />
                    </svg>
                </span>}
                />
            </section>
            <section
                className={`overlay ${isOpen ? 'is-open' : ''}`}
                style={{ '--x': coordinates.x, '--y': coordinates.y}}
            >
                {!isOpen ?
                    <RegisterInterest isPrimary={false} handleInputChange={handleInputChange}  handleClick={handleClick} email={email} continueButton={<span className="hover-btn2 ">
                  <svg viewBox="0 0 62 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                        <path fill="black" d="M61.0607 13.0607C61.6465 12.4749 61.6465 11.5251 61.0607 10.9393L51.5147 1.3934C50.9289 0.807612 49.9792 0.807612 49.3934 1.3934C48.8076 1.97918 48.8076 2.92893 49.3934 3.51472L57.8787 12L49.3934 20.4853C48.8076 21.0711 48.8076 22.0208 49.3934 22.6066C49.9792 23.1924 50.9289 23.1924 51.5147 22.6066L61.0607 13.0607ZM0 13.5H60V10.5H0V13.5Z" />
                    </svg>
                </span>}/> :
                    <>
                        <div className={"thank-you-div"}>
                            <h1 className={"thank-you-title"}>Thank you!</h1>

                            <b className={"thank-you-body"}>
                                {email}
                            </b>

                            <p className={"thank-you-body"}>
                                Well done on taking the initiative and registering to conventa.
                            </p>

                            <p className={"thank-you-body"}>
                                We promise to teach you the lessons required to improve your personal and
                                professional life.
                            </p>

                            <p className={"thank-you-body"}>
                                When we're ready to help - we'll email you
                            </p>
                        </div>
                    </>
                }
            </section>
        </div>
    );
};

export default SpotlightMask;
