import React from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'

import './Header.css'

const Header = () => {

    return (
        <div className="py-7">
            <Disclosure as="nav" className="bg-white-300">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuAlt1Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-end md:justify-center sm:items-stretch sm:justify-start">
                                    <div>
                                        <img src="https://i.ibb.co/gPZ4FJN/Group-8.png" alt="" />
                                    </div>
                                    <div className="hidden sm:block sm:mx-auto">
                                        <div className="flex space-x-4 text-white font-medium menubar">
                                            <a href="#about">About</a>
                                            <a href="#pricing">Pricing</a>
                                            <a href="#testimonials">Testimonials</a>
                                            <a href="#contact">Contact</a>
                                        </div>
                                    </div>
                                    <div className="hidden signUp-btn">
                                        <button className="text-blue-500 font-bold mr-5">Sign In</button>
                                        <button className="link-btn hover:bg-blue-800 text-white py-2 px-5 rounded mr-5">Sign up</button>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>


                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (

                                                        <div

                                                            className={(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >

                                                        </div>
                                                    )}
                                                </Menu.Item>

                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <div className="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    <a href="#about">About</a>
                                </div>
                                <div className="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    <a href="#pricing">Pricing</a>
                                </div>
                                <div className="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    <a href="#testimonials">Testimonials</a>
                                </div>
                                <div className="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    <a href="#contact">Contact</a>
                                </div>
                                <div className="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    <a href="#">Sign In</a>
                                </div>
                                <div className="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    <a href="#">Sign Up</a>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default Header;