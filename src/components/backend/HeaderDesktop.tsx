// app/about/page.tsx
import { useEffect, useState } from 'react';

export default function HeaderDesktop() {

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
      <div>
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
      </div>
    );
  }
  