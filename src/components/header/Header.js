import React from 'react'
import AuthInfo from '../authInfo/AuthInfo'
import Navigation from '../navigation/Navigation'
import "./header.scss"

const Header = () => {
  return (
    <header className="header">
      <AuthInfo />
      <Navigation />
    </header>
  )
}

export default Header
