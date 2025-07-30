import React from 'react'
import { FaChartBar, FaCreditCard, FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


const navItems = [
  { name: 'Home', icon: <FaHome />, path: '/' },
  { name: 'Projects', icon: <FaChartBar />, path: '/projects' },
  { name: 'Billing', icon: <FaCreditCard />, path: '/billing' },
]

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r h-screen fixed left-0 top-0 overflow-y-auto shadow-sm ">
      <div className="p-6 font-bold text-xl text-blue-600">web3 API</div>
      <nav className="space-y-1 px-4">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg font-medium hover:bg-blue-50 transition ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
              }`}>
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
