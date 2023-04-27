import React from "react";
import "./Footer.css"
import logo from '../assets/White_LOGO.png'

function Footer() {
    return (
    <div className="footer">
      <img src={logo} alt="Logo blanc de kasa " className="logo"/>
      <h3>© 2020 Kasa. All rights reserved</h3>
    </div>
  )
}
export default Footer

