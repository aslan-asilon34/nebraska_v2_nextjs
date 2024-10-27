// components/Layout.tsx
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="bg-gray-100 font-family-karla flex">
            <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
                <div className="p-6">
                    <a href="/" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
                    <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                        <i className="fas fa-plus mr-3"></i> New Report
                    </button>
                </div>
                <nav className="text-white text-base font-semibold pt-3">
                    <a href="/" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                        <i className="fas fa-tachometer-alt mr-3"></i>
                        Dashboard
                    </a>
                    <a href="/blank" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                        <i className="fas fa-sticky-note mr-3"></i>
                        Blank Page
                    </a>
                    {/* Add other nav items here */}
                </nav>
                <a href="#" className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
                    <i className="fas fa-arrow-circle-up mr-3"></i>
                    Upgrade to Pro!
                </a>
            </aside>

            <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
                <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
                    <div className="w-1/2"></div>
                    {/* User Profile Button */}
                </header>

                <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        {children}
                    </main>
                    <footer className="w-full bg-white text-right p-4">
                        Built by <a target="_blank" href="https://davidgrzyb.com" className="underline">David Grzyb</a>.
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Layout;
