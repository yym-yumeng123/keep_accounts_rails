import React from "react"
import './Header.scss'
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <header>
      <img className='logo' src={logo} alt='' />
      <p>旺财记账</p>
    </header>
  )
}

export default Header
