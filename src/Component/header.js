import React from "react";
import"./header.css";

function Header(){
    return(
    <div className="main-container">  
        {/*  lower left image */ }
        <div className="bottom-container">    
        </div>
        {/*Advertisement */}
        <div className="title1-container">
        <h3>The best place to explore and buy plants online for 2022.</h3>
        </div>
        <div className="title-container">
        {/*Advertisement */}
         <h1>House Plants delivered directly to your house</h1>
        </div>
        {/*upper right image */}
        <div className="right-container">
        </div>
          {/*Advertisement */}
        <div className="title2-container">
        <h3>Refresh your home with new vibrant  and various plants this year!</h3>
        </div>
    </div>
    )
};

export default Header;