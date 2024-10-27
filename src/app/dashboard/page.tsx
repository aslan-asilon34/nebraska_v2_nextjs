"use client";

import '@/app/styles/globals_admin.css';
import Navbar from '@/components/backend/HeaderDesktop';
import { useEffect, useState } from 'react';

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        // Load Alpine.js if not already available
        if (typeof window !== 'undefined' && !window.Alpine) {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js';
          script.async = true;
          document.body.appendChild(script);
        }
      }, []);


      const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
      };
    
      const closeDropdown = () => {
        setIsOpen(false);
      };

      const toggleNav = () => {
        setIsOpen((prev) => !prev);
      };

    return (
      <div className="flex">

            <Navbar/>

            {/* Header and content  */}
            <div className="relative w-full flex flex-col h-screen overflow-y-hidden">

                {/* <!-- Desktop Header --> */}
                <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
                    <div className="w-1/2"></div>
                    <div className="relative w-1/2 flex justify-end">
                    <button
                        onClick={toggleDropdown}
                        aria-expanded={isOpen}
                        className="relative z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
                    >
                        <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" alt="User Avatar" />
                    </button>
                    {isOpen && (
                        <>
                        <button
                            onClick={closeDropdown}
                            className="h-full w-full fixed inset-0 cursor-default"
                            aria-hidden="true"
                        ></button>
                        <div
                            className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16"
                        >
                            <a href="#" className="block px-4 py-2 account-link hover:text-white">Account</a>
                            <a href="#" className="block px-4 py-2 account-link hover:text-white">Support</a>
                            <a href="#" className="block px-4 py-2 account-link hover:text-white">Sign Out</a>
                        </div>
                        </>
                    )}
                    </div>
                </header>

                <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
                    <div className="flex items-center justify-between">
                    <a href="/" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
                    <button onClick={toggleNav} className="text-white text-3xl focus:outline-none">
                        {!isOpen ? (
                        <i className="fas fa-bars"></i>
                        ) : (
                        <i className="fas fa-times"></i>
                        )}
                    </button>
                    </div>

                    {/* Dropdown Nav */}
                    <nav className={`flex flex-col pt-4 ${isOpen ? 'flex' : 'hidden'}`}>
                    <a href="/" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <i className="fas fa-tachometer-alt mr-3"></i>
                        Dashboard
                    </a>
                    <a href="/blank" className="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
                        <i className="fas fa-sticky-note mr-3"></i>
                        Blank Page
                    </a>
                    <a href="/tables" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <i className="fas fa-table mr-3"></i>
                        Tables
                    </a>
                    <a href="/forms" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <i className="fas fa-align-left mr-3"></i>
                        Forms
                    </a>
                    <a href="/tabs" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <i className="fas fa-tablet-alt mr-3"></i>
                        Tabbed Content
                    </a>
                    <a href="/calendar" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <i className="fas fa-calendar mr-3"></i>
                        Calendar
                    </a>
                    <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <i className="fas fa-cogs mr-3"></i>
                        Support
                    </a>
                    <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <i className="fas fa-user mr-3"></i>
                        My Account
                    </a>
                    <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <i className="fas fa-sign-out-alt mr-3"></i>
                        Sign Out
                    </a>
                    <button className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                        <i className="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
                    </button>
                    </nav>
                </header>

            
                <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <h1 className="text-3xl text-white pb-6">Dashboard Page</h1>

                        {/* <!-- Content goes here! 😁 --> */}
                    </main>
            
                    <footer className="w-full bg-white text-right p-4">
                        Built by <a target="_blank" href="https://davidgrzyb.com" className="underline">David Grzyb</a>.
                    </footer>
                </div>
            </div>

      </div>
  );

}

