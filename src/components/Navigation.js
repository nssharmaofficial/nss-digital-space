import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/logo.png'
import moon from '../assets/moon.png'

const mainNavItems = [
  { url: '/notes', label: 'Notes' },
  { url: '/blog', label: 'Articles' },
  { url: '/projects', label: 'Projects' },
  { url: '/me', label: 'About Me' },
]

export const Navigation = ({ onUpdateTheme }) => {
  return (
    <section className="navigation">
      <div className="container">
        <Link to="/" className="item brand">
          <img src={logo} className="logo" alt="Home" />
          <span>Home</span>
        </Link>
        <nav>
          {mainNavItems.map((item) => (
            <div className="nav-item-outer" key={item.url}>
              <Link
                to={item.url}
                key={item.label}
                activeClassName="active"
                className="item"
              >
                <span>{item.label}</span>
              </Link>
            </div>
          ))}

          <div className="theme-toggle">
            <button onClick={onUpdateTheme}>
              <img src={moon} alt="Theme" />
            </button>
          </div>
        </nav>
      </div>
    </section>
  )
}