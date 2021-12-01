import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer pt-7 pb-3 px-7">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div>
                    <img className="mb-7" src="https://i.ibb.co/683FPpm/Group-8-2.png" alt="" />
                    <span>2238 Partha Elen Street,</span><br />
                    <span>New Jersey,</span><br />
                    <span>USA, 3322145698</span>
                    <div className="social pt-6">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                </div>
                <div>
                    <h3>Useful Links</h3>
                    <p>Payment & Tax</p>
                    <p>Terms of Service</p>
                    <p>Your Account</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <h3>Our Company</h3>
                    <p>About us</p>
                    <p>Media</p>
                    <p>Blog</p>
                    <p>Contact us</p>
                </div>
                <div>
                    <h3>Subscribe to Newsletter</h3>
                    <input className="mb-3 py-2 px-3 rounded-lg" type="email" placeholder="Email" />
                    <p>help@visume.link</p>
                    <p>396-987 456 885</p>
                </div>
            </div>
            <div className="pt-7 mt-4 text-center">
                <p>© 2021 Visume</p>
            </div>
        </div>
    );
};

export default Footer;