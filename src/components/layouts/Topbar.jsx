import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

export const Topbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white   sticky top-0 z-20">
      <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>

      <div className="flex items-center space-x-4">
        <div className="text-sm text-gray-600">
          <p className="font-medium">Free Plan</p>
          <p className="text-xs text-gray-400">0 credits used</p>
        </div>

        <button className="relative text-gray-600 hover:text-blue-600">
          <FaBell size={18} />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="text-gray-500">
          <FaUserCircle size={28} />
        </div>
      </div>
    </header>
  );
};
