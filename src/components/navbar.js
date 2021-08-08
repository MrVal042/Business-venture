import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/images/bv_logo.jpg'


export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <section className='navbar flex'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <nav>
          <div>
            <button
              className='menuBtn'
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
            </button>
          </div>
          <ul className={isNavOpen ? 'navUl' : 'hidden'}>
            <li>
              <Link activeClass='active' to='home' spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to='investment' spy={true} smooth={true}>
                Investment
              </Link>
            </li>
            <li>
              <Link to='consultancy' spy={true} smooth={true}>
                Consultancy
              </Link>
            </li>
            <li className='longNav'>
              <Link to='poketMoni' spy={true} smooth={true}>
                Poket Moni
              </Link>
            </li>
            <li>
              <Link to='education' spy={true} smooth={true}>
                Education
              </Link>
            </li>
            <li className='longNav1'>
              <Link to='businessSupport' spy={true} smooth={true}>
                Business Support
              </Link>
            </li>
          </ul>
        </nav>
    </section>
  )
}

