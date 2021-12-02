import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="container mx-auto px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex items-center">
                    <div className="resume-info">
                        <p className="small-text-blue">Stand out of the crowd</p>
                        <h1 className="text-3xl md:text-5xl">Create the Next Gen
                            Video Resume</h1>
                        <img src="https://i.ibb.co/KrnPr6N/path2987.png" alt="" />
                        <p className="get-hired">Get hired quickly by giving your resume the
                            video look it deserves.</p>
                        <button className="link-btn hover:bg-blue-800 text-white py-3 px-8 rounded mr-5">Get Started</button>
                        <button className="text-blue-800 font-bold"><i className="far fa-play-circle"></i> Watch Demo</button>
                    </div>
                </div>
                <div className="pt-6">
                    <img src="https://i.ibb.co/bHQfPsp/Group-7.png" alt="" />
                </div>
            </div>

            {/* brand section  */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-10">
                <img src="https://i.ibb.co/dg7qX8n/Black-and-White-Collection-7.png" alt="" />
                <img src="https://i.ibb.co/RbRLqHg/Black-and-White-Collection-12.png" alt="" />
                <img src="https://i.ibb.co/jVW3NS9/Black-and-White-Collection-10.png" alt="" />
                <img src="https://i.ibb.co/yyt2yFd/Black-and-White-Collection-20.png" alt="" />
                <img src="https://i.ibb.co/NVtcxkz/Black-and-White-Collection-17.png" alt="" />
                <img src="https://i.ibb.co/3ByH6YY/Black-and-White-Collection-3.png" alt="" />
            </div>

        </div>
    );
};

export default Resume;