import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <div id="pricing" className="px-8 pt-10 mt-10">
            <div>
                <p className="small-text-blue">Pricing</p>
                <h3 className="text-4xl text-blue-800 font-bold mt-3">How much to pay?</h3>
                <p className="mt-3">You can choose the most app pricing option for your needs.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="single-box py-5 shadow px-4 text-center mt-6">
                    <div className="pt-3">
                        <h3 className="text-2xl text-blue-800 font-bold">Basic</h3>
                        <h2 className="text-4xl mt-3 small-text-blue">$8</h2>
                        <p className="pb-5">per project</p>
                    </div>
                    <hr className="mt-4" />
                    <div className='flex justify-center mt-5'>
                        <div>
                            <div className="flex items-center mt-3">
                                <img className="w-5 h-5 mr-3" src="https://i.ibb.co/TkTy3cy/check-circle.png" alt="" />
                                <span>20 themes</span>
                            </div>
                            <div className="flex items-center mt-3">
                                <img className="w-5 h-5 mr-3" src="https://i.ibb.co/TkTy3cy/check-circle.png" alt="" />
                                <span>60 music files</span>
                            </div>
                            <div className="flex items-center mt-3">
                                <img className="w-5 h-5 mr-3" src="https://i.ibb.co/TkTy3cy/check-circle.png" alt="" />
                                <span>80 audio effects</span>
                            </div>
                            <div className="flex items-center mt-3">
                                <img className="w-5 h-5 mr-3" src="https://i.ibb.co/TkTy3cy/check-circle.png" alt="" />
                                <span>8 language support </span>
                            </div>
                            <div className="flex items-center mt-3">
                                <img className="w-5 h-5 mr-3" src="https://i.ibb.co/TkTy3cy/check-circle.png" alt="" />
                                <span>Email Support </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 py-3">
                        <button className="pricing-btn py-3 px-8 rounded mr-5">Get Started</button>
                    </div>
                </div>

                <div className="single-box py-5 shadow px-4 text-center mt-6">
                    <div className="pt-3">
                        <h3 className="text-2xl text-blue-800 font-bold">All Rounder</h3>
                        <h2 className="text-4xl mt-3 small-text-blue">$12</h2>
                        <p className="pb-5">per project</p>
                    </div>
                    <hr className="mt-4" />
                    <div className='flex justify-center mt-5'>
                        <div>
                            <div className="flex items-center mt-3">
                                <img className="w-5 h-5 mr-3" src="https://i.ibb.co/TkTy3cy/check-circle.png" alt="" />
                                <span>150 themes</span>
                            </div>
                            <div className="flex items-center mt-3">
                                <img className="w-5 h-5 mr-3" src="https://i.ibb.co/TkTy3cy/check-circle.png" alt="" />
                                <span>320 music files</span>
                            </div>
                            <div className="flex items-center mt-3">
                                <img className="w-5 h-5 mr-3" src="https://i.ibb.co/TkTy3cy/check-circle.png" alt="" />
                                <span>500 audio effects</span>
                            </div>
                            <div className="flex items-center mt-3">
                                <img className="w-5 h-5 mr-3" src="https://i.ibb.co/TkTy3cy/check-circle.png" alt="" />
                                <span>80+ language support </span>
                            </div>
                            <div className="flex items-center mt-3">
                                <img className="w-5 h-5 mr-3" src="https://i.ibb.co/TkTy3cy/check-circle.png" alt="" />
                                <span>24/7 Support </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 py-3">
                        <button className="pricing-btn py-3 px-8 rounded mr-5">Get Started</button>
                    </div>
                </div>
                <div className=" single-box py-5 shadow px-4 text-center mt-6">
                    <div className="pt-3">
                        <h3 className="text-2xl text-blue-800 font-bold">Super Hero</h3>
                        <p className="mt-6 px-3 mb-7 text-lg">Get in touch with us to discuss on your requirements and pricing.</p>
                    </div>
                    <hr className="mt-4" />
                    <div className='flex justify-center mt-5'>
                        <div>
                            <div className="flex items-center mt-3">
                                <img className="w-5 h-5 mr-3" src="https://i.ibb.co/TkTy3cy/check-circle.png" alt="" />
                                <span>Everything From All Rounder</span>
                            </div>
                            <div className="flex items-center mt-3">
                                <img className="w-5 h-5 mr-3" src="https://i.ibb.co/TkTy3cy/check-circle.png" alt="" />
                                <span>24/7 Priority Support</span>
                            </div>
                            <div className="flex items-center mt-3">
                                <img className="w-5 h-5 mr-3" src="https://i.ibb.co/TkTy3cy/check-circle.png" alt="" />
                                <span>9+ language Support</span>
                            </div>
                            <div className="flex items-center mt-3">
                                <img className="w-5 h-5 mr-3" src="https://i.ibb.co/TkTy3cy/check-circle.png" alt="" />
                                <span>Email Support</span>
                            </div>
                            <div className="flex items-center mt-3">
                                <img className="w-5 h-5 mr-3" src="https://i.ibb.co/TkTy3cy/check-circle.png" alt="" />
                                <span>And many more..</span>
                            </div>

                        </div>
                    </div>
                    <div className="mt-6 py-3">
                        <button className="pricing-btn py-3 px-8 rounded mr-5">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;