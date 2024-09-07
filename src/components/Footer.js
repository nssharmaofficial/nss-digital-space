import React from 'react'

import linkedin from '../assets/nav-linkedin.png'
import huggingface from '../assets/nav-huggingface.png'
import github from '../assets/nav-github.png'
import logo from '../assets/logo.png'

const links = [
  { url: 'https://buymeacoffee.com/nssharma', label: 'Donate a Coffee' }
]
const madeWithLinks = [
  { url: 'https://www.linkedin.com/in/nssharmaofficial/', label: 'Linkedin', icon: linkedin },
  { url: 'https://github.com/nssharmaofficial', label: 'GitHub', icon: github },
  { url: 'https://huggingface.co/nssharmaofficial', label: 'HuggingFace', icon: huggingface },
]

export const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <span>
          <img src={logo} className="logo" alt="logo" />
        </span>
        <nav>
          {links.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <nav>
          {madeWithLinks.map((link) => (
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
              className="button small"
            >
              <img src={link.icon} alt={link.label} />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </section>
    </footer>
  )
}
