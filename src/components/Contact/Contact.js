import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact" className="pt-10">
            <div className="text-center pb-7 mb-4">
                <p className="small-text-blue">Let’s Talk</p>
                <h3 className="text-4xl text-blue-800 font-bold mt-2">We’re here to help you!</h3>
            </div>
            <div className="contact-form flex justify-center">
                <form className="px-7">
                    <div className="input-field mb-4">
                        <input name="name" className="" placeholder="Name *" required />
                        <input name="email" className="" placeholder="Your Email *" required />
                        <input name="number" className="" placeholder="Your Mobile Number" />
                        <input name="education" className="" placeholder="Education / Profession (optional)" />
                    </div>
                    <div className="">
                        <textarea name="message" className="px-3 pt-2" rows="10" cols="32" placeholder="Message"></textarea>
                    </div>
                    <div className="text-center pt-7 mt-3 pb-2">
                        <input className="link-btn px-7 py-3 rounded-xl text-white" type="submit" value="Let’s Talk" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;