import React, { useState, useRef, useEffect } from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const Topbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="flex py-3 bg-white mx-auto w-full max-w-7xl sticky top-0 z-20">
      <div className="flex items-center justify-between w-full px-[60px]">
        <h1 className="text-white font-semibold text-md bg-[#5856d6] px-1 py-[2px] rounded-md">
          Freemium
        </h1>

        <div className="flex items-center space-x-4 relative">
          <div className="text-sm text-gray-600">
            <p className="font-medium">Free Plan</p>
            <p className="text-xs text-gray-400">0 credits used</p>
          </div>

          <button className="relative text-gray-600 hover:text-blue-600">
            <FaBell size={18} />
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* Account Dropdown Button */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-sm px-3 py-1 rounded-full"
            >
              <span className="bg-blue-600 text-white text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full">
                PA
              </span>
              <span className="text-gray-700 font-medium">Personal account</span>
              <MdKeyboardArrowDown className="text-gray-500" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-xl border border-gray-100 z-50 p-4">
                <div className="text-sm">
                  <p className="text-gray-700 font-medium">t...e@gmail.com</p>
                  <a href="#" className="text-blue-600 hover:underline text-sm">Personal settings</a>
                </div>

                <hr className="my-2" />

                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-1">Accounts</p>
                  <div className="flex items-center justify-between hover:bg-gray-100 px-2 py-1 rounded">
                    <div className="flex items-center space-x-2">
                      <span className="bg-blue-600 text-white text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full">PA</span>
                      <span className="text-sm text-gray-700">Personal account</span>
                    </div>
                    <span className="text-blue-600 text-lg">✔</span>
                  </div>
                </div>

                <div className="mt-2">
                  <button className="text-blue-600 text-sm hover:underline px-2 py-1 flex items-center space-x-1">
                    <span>＋</span>
                    <span>Create team</span>
                  </button>
                </div>

                <hr className="my-2" />

                <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-red-500 px-2">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7" />
                  </svg>
                  <span>Sign out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
