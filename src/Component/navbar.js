import React from "react";
import "./nav.css";
import {SearchNormal1,ShoppingBag,User} from "iconsax-react";
import logoWhite from "./Test Assets/Logos/Logo White.svg";

function Navbar() {
    return (
      /*Start of navbar*/
      <nav className="navbar">
        <h3><img alt="logo" className="img1" src={logoWhite}/></h3>
        <div className="navbar-links">
          <a href="#">About us</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Shop</a>
        </div>
        <div className="navbar-icons">
        <p><SearchNormal1 color="#d9e3f0" /></p> 
        <p><User color="#d9e3f0"/></p>
        <p><ShoppingBag color="#d9e3f0"/></p>
        </div>
      </nav>
      /*end navbar*/
    );
  }
  
  export default Navbar;