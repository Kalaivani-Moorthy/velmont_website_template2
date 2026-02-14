import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo_temple.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = ['Home', 'About', 'Services', 'Events', 'Gallery', 'Donate', 'Contact']

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="VelMont" className="h-12 w-12" />
            <span className="text-2xl font-bold" style={{fontFamily: 'var(--font-serif)', color: 'var(--color-burgundy)'}}>VelMont</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                end={item === 'Home'}
                className={({ isActive }) =>
                  `relative text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-[#8B1538] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-[#D4AF37]'
                      : 'text-[var(--color-charcoal)] hover:text-[#D4AF37]'
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl" style={{color: 'var(--color-burgundy)'}}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                end={item === 'Home'}
                className={({ isActive }) =>
                  `px-6 py-3 transition-colors ${
                    isActive
                      ? 'bg-[#FFF4DD] text-[#8B1538] font-semibold border-l-4 border-[#D4AF37]'
                      : 'hover:bg-gray-50 text-[var(--color-charcoal)]'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
