import React from "react";
import Logo from "../images/Logo.png";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="navbar">
          <img src={Logo} alt="" className="nav-img" />
          <h4 className="info">React Course - Project 3</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
