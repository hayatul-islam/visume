import React, { useEffect, useState } from 'react';
import './GetStarted.css';

const GetStarted = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="py-5 get-started">
            <p className="small-text-blue">Simple steps to glory</p>
            <h1 className="text-4xl text-blue-800 font-bold mt-3">How to get started?</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="py-8">
                    <div className=" getStarted-img">
                        <img src="https://i.ibb.co/SKFtf2m/Group-9.png" alt="" />
                        <div className="flex border shadow p-2 bg-white rounded-md best-decision">
                            <div className="bg-red-400 rounded-md py-2 px-3 mr-3">
                                <i className="far fa-check-circle text-2xl text-white"></i>
                            </div>
                            <div>
                                <h4 className="text-lg text-blue-800 font-bold">The best decision</h4>
                                <p>June 2021 - 128 signups</p>
                            </div>
                        </div>
                        <div className="content-writer py-4 px-2 shadow-lg rounded-lg bg-white">
                            <div>
                                <img src="https://i.ibb.co/kmB30FP/Ellipse-2.png" alt="" />
                                <h3 className="text-lg text-blue-800 font-bold mt-3">Michael Yen</h3>
                                <p className="p-0">Content Writer</p>
                            </div>
                            <div className="mt-2">
                                <span className="mr-2 font-bold">5.0</span>
                                <i className="fas fa-star mr-2"></i>
                                <i className="fas fa-star mr-2"></i>
                                <i className="fas fa-star mr-2"></i>
                                <i className="fas fa-star mr-2"></i>
                                <i className="fas fa-star mr-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            services.map(service => <div key={service?.id}>
                                <div className="service shadow-xl m-3 px-5 bg-white round-lg">
                                    <div className="pt-5">
                                        <img src={service?.image} alt="" />
                                    </div>
                                    <h3 className="text-lg text-blue-800 font-bold pt-5 pb-2">{service?.title}</h3>
                                    <p>{service?.description}</p>
                                    <span className="service-id">{service?.id}</span>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;