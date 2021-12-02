import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id="about" className="pt-6 mt-5 px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <p className="small-text-blue">We’re on a mission</p>
                <h3 className="text-4xl text-blue-800 font-bold mt-3">About Visume</h3>
                <p className="text-blue-700 font-bold mt-7 mb-5">Trusted by people around <span>38 countries</span></p>
                <p className="mb-4">With the Gen Z going the video way, the future rectruitement is going to be through video resumes. It saves the HR people a ton of time in screening profiles. And it makes it more human to  present themseleves than plain texts for the employees.</p>
                <p className="text-xl">With 20+ years on the video production industry, you’re on the right hands. </p>
                <div className="mt-6">
                    <button className="link-btn hover:bg-blue-800 text-white py-3 px-8 rounded mr-5">Get Started</button>
                    <button className="text-blue-800 font-bold"><i className="far fa-play-circle"></i> Watch Demo</button>
                </div>
            </div>
            <div className="flex justify-center lg:justify-end">
                <div className="about-image">
                    <img src="https://i.ibb.co/JzKfZ7N/Group-18.png" />
                    <div className="danny-mambo shadow py-5 px-2 rounded-lg">
                        <div className="flex justify-center">
                            <img src="https://i.ibb.co/NmDrZvj/Ellipse-2-1.png" />
                        </div>
                        <h3 className="text-lg text-blue-800 font-bold mt-3">Danny Mambo</h3>
                        <p>Founder of Visume</p>
                        <p className="pt-4">“If you can touch someone’s life by contributing to their success, you’re god.”</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;