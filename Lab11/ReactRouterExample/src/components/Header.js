import {Link, NavLink } from 'react-router-dom'

import Logo from '../assets/logo.png'

export const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        <img src={Logo} alt='Logo'></img>
      </a>
      <nav className='navigation'>
        <NavLink className='link' to='/'>Home</NavLink>
        <NavLink className='link' to='/product'>Product</NavLink>
        <NavLink className='link' to='/contact'>Contact</NavLink>
      </nav>
    </header>
  )
}


