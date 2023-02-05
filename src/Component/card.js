import React from "react";
import "./card.css";
import logoMark from "./Test Assets/Logos/logoMark.png";

function Card () {

    return(
        /*website description*/
        <div className="container">
            <img alt="logo" className="img" src={logoMark}/>
            <div className="description-container">
                <h1 className="h1">Welcome to Clores!</h1>
                <p>
                    We are a group of friends that all had a passion for nature and the outdoors. 
                    Turns out, having a home filled with plants was something we continued to have in common. 
                    We found it difficult to find a place online to purchase houseplants that was easy to navigate 
                    and wasn’t just geared to wholesale.So, in 2020, we decided to launch to be the ultimate destination 
                    for everything houseplants.Please enjoy exploring Clores.
                </p>
            </div>
        </div>
    )
}

export default Card;