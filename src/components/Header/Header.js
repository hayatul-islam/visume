import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="container mx-auto">
            <nav className="flex items-center justify-between flex-wrap bg-white  p-6">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <img src="https://i.ibb.co/xMQt8hj/Group-8.png" alt="" />
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black mr-4">
                            Home
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black mr-4">
                            Examples
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black">
                            Blog
                        </a>
                    </div>
                    <div>
                        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded bg-black text-light border-white hover:border-transparent hover:text-light hover:bg-black mt-4 lg:mt-0">Download</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;