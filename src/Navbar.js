import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    console.log(tempBtn );
    const center = (tempBtn.right + tempBtn.left) /2 
    const bottom = tempBtn.bottom - 3

   
    
    
    openSubmenu(page, { center, bottom })
  }

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="strip" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars></FaBars>
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button
              className="link-btn"
              onMouseOver={displaySubmenu}
              onMouseLeave={closeSubmenu}
            >
              Products
            </button>
          </li>
          <li>
            <button
              className="link-btn"
              onMouseOver={displaySubmenu}
              onMouseLeave={closeSubmenu}
            >
              Developers
            </button>
          </li>
          <li>
            <button
              className="link-btn"
              onMouseOver={displaySubmenu}
              onMouseLeave={closeSubmenu}
            >
              Company
            </button>
          </li>
        </ul>
        <button
          className="btn signin-btn"
          onMouseOver={displaySubmenu}
          onMouseLeave={closeSubmenu}
        >
          Sign in
        </button>
      </div>
    </nav>
  )
}

export default Navbar
