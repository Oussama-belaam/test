import React from "react";
import "./footer.css";
import { ArrowSquareRight } from "iconsax-react";
import logoWhite from "./Test Assets/Logos/Logo White.svg";
function Footer() {
  return (
<div className="footer-container">
    <div className="footer">
        {/* website description*/}
            <div className="footer-email-form">
                <img className="img1" alt="logo" src={logoWhite}/>
                <p >We’re your online houseplant destination.<br/>
                   We offer a wide range of houseplants and<br/>
                   accessories shipped directly from our <br/>
                   green-house to yours!</p>
                   {/*newsletter section*/}
                <h4>Exclusive offers & first access to products</h4>
                <input type="email" placeholder="Email" id="footer-email"/>
                <button id="footer-email-btn">{">"}</button>
                
            </div>
            {/* About us section*/}
            <div className="footer-heading footer-1">
                <h2>About Us</h2>
                <a href="#">Team</a>
                <a href="#">Carrers</a>
                <a href="#">Digital Accessibility</a>
                <a href="#">Brand Protection</a>
                <a href="#">FAQ</a>
            </div>
            {/*Stores locations in the usa */}
            <div className="footer-heading footer-2">
                <h2>Stores</h2>
                <a href="#">California</a>
                <a href="#">New York</a>
                <a href="#">Los Angeles</a>
            </div>
            {/*social media accounts*/}
            <div className="footer-heading footer-3">
                <h2>Follow us</h2>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Pinterest</a>
                <a href="#">Youtube</a>
            </div>
            {/*company pilitics */}
            <div className="footer-heading footer-4">
                <h2>Our Politics</h2>
                <a href="#">Sitemap</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Returns</a>
            </div>
         
    </div>
</div>
  );
}

export default Footer;