import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css';


const Testimonials = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
    };

    return (
        <div className="slider">
            <div className="pb-5">
                <p className="small-text-blue">Social</p>
                <h4 className="text-4xl text-blue-800 font-bold mt-3">What do our customers say?</h4>
            </div>
            <Slider className="" {...settings}>

                <div className="focus:outline-none shadow-lg rounded-lg mt-3 px-5">
                    <div className="py-6 mt-5 slider-container">
                        <div>
                            <img className="slider-img" src="https://i.ibb.co/SKFtf2m/Group-9.png" alt="" />
                        </div>
                        <div className="flex items-center">
                            <div>
                                <p>“With the traditional resumes I used to apply for jobs and would get only a few calls. But after creating a video resume, I’ve got 9/10 calls. And I love the simplicity of the video creation process being a non techie.”</p>
                                <h3 className="text-xl text-blue-800 font-bold mt-4">Linda Jermy</h3>
                                <p>Commerce Student</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="focus:outline-none shadow-lg rounded-lg mt-3 px-5">
                    <div className="py-6 mt-5 slider-container">
                        <div>
                            <img className="slider-img" src="https://i.ibb.co/JzKfZ7N/Group-18.png" alt="" />
                        </div>
                        <div className="flex items-center">
                            <div>
                                <p>“With the traditional resumes I used to apply for jobs and would get only a few calls. But after creating a video resume, I’ve got 9/10 calls. And I love the simplicity of the video creation process being a non techie.”</p>
                                <h3 className="text-xl text-blue-800 font-bold mt-4">Linda Jermy</h3>
                                <p>Commerce Student</p>
                            </div>
                        </div>
                    </div>

                </div>

            </Slider>

        </div>
    );
};

export default Testimonials;