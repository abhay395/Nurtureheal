import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { FaBoxOpen, FaUserCircle } from 'react-icons/fa';
import '../Navbar.css'
import { useUser } from '../hooks/useUser';
import { useLogout } from '../hooks/useAuth';
import toast from 'react-hot-toast';

const BASEURL = import.meta.env.VITE_API_URL;
function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { data: user, isLoading } = useUser();
  const { mutateAsync: logoutUser } = useLogout()
  const logoutHandler = async () => {
    setIsDropdown(false)
    toast.promise(logoutUser(), {
      loading: "Loading...",
      success: "User logout successfully",
      error: "Some thing went wrong"
    })
    navigate('/')
  }
  return (
    <div className=''>
      <nav className="bg-white border-b pb-2 border-gray-200 fixed w-full top-0 font-poppins z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-xl font-bold text-black hover:text-gray-700 transition-colors duration-200">
              <span className="font-extrabold tracking-wide">
                NaturalHeal
              </span>
            </Link>

            {/* Desktop Menu + Search */}
            <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
              <Link
                to="/"
                className={`text-black hover:text-gray-600 transition-colors duration-200 font-semibold ${location.pathname === '/' ? 'text-gray-800 border-b-2 border-black' : ''}`}
              >
                Home
              </Link>
            </div>

            {/* Right side - Auth & Cart */}
            <div className="flex items-center space-x-4">
              {/* User Profile / Login */}
              {user ? (
                <div className="relative dropdown-container">
                  <button>Old History</button>
                </div>
              ) : (
                <button
                  className="px-4 py-2 text-black font-semibold border border-black rounded-lg hover:bg-black hover:text-white transition-all duration-200"
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar