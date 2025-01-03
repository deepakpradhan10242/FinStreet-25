import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import club_logo from "../assets/finance club white logo.png";
import bitmlogo from "../assets/bitmlogo.png";
import iiclogo from "../assets/iic.png";

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const typingText = "Welcome to FINSTREET'25";
    const typingSpeed = 100;
    const delayAfterTyping = 2000;
    const delayBeforeDeleting = 1000;

    useEffect(() => {
        let timeoutId;
        
        const typeEffect = () => {
            setTypedText(current => {
                if (!isDeleting && current === typingText) {
                    timeoutId = setTimeout(() => setIsDeleting(true), delayAfterTyping);
                    return current;
                }
                
                if (isDeleting && current === '') {
                    timeoutId = setTimeout(() => setIsDeleting(false), delayBeforeDeleting);
                    return current;
                }

                if (isDeleting) {
                    return current.slice(0, -1);
                }
                
                return typingText.slice(0, current.length + 1);
            });
        };

        timeoutId = setTimeout(typeEffect, typingSpeed);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [typedText, isDeleting]);

    return (
        <div id="home" className="mt-24 px-8">
            {/* Finstreet Logo and Text */}
            <div className="flex justify-center items-center gap-6">
                <div className="flex items-center">
                    <Link to={"https://financeclubbitm.in/"} target="_blank" rel="noopener noreferrer">
                        <img
                        src={club_logo}
                        alt="Finance Club logo"
                        className="w-25 h-20"
                        />
                    </Link>
                </div>

                <div className="flex items-center">
                    <img src={bitmlogo} alt="BIT Mesra Logo" className="w-25 h-20  mx-auto" />
                </div>

                <div className="flex items-center">
                    <img src={iiclogo} alt="IIC Logo" className="w-25 h-20  mx-auto" />
                </div>
            </div>



            {/* Centered Typing Text Section */}
            <div className="text-center mt-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-yellow-400 font-bold street-font py-16">
                    <span id="typing-text">{typedText}</span>
                    <span className="animate-blink">|</span>
                </h2>
            </div>

            {/* Buttons Section */}
            <div className="buttons1 mt-14 text-center">
                {/* Text Content */}
                <p className="content1 text-base lg:text-lg text-white font-bold">
                    Embark on a financial odyssey at Finstreet. Explore investment insights, market trends, and
                    innovative finance. Elevate your financial know-how – join the adventure! 🚀💰
                </p>

                {/* Buttons */}
                <div className="innerBtn flex justify-center gap-6 mt-6">
                    <Link to="/events" className="register1 font-semibold bg-yellow-500 text-black py-2 px-4 lg:py-3 lg:px-6 rounded-lg hover:bg-yellow-400 transition">
                        Register Events
                    </Link>
                    <Link to="/schedule" className="knowmore1 font-semibold border-2 border-yellow-500 text-white py-2 px-4 lg:py-3 lg:px-6 rounded-lg hover:bg-yellow-500 hover:text-black transition">
                        Calendar
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
