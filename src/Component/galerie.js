import React from "react";
import "./galerie.css";


function Galerie(){

    return(
<div className="first-container">
  {/* house plant acessories advertisement */}
  <div className="card-column column-0">
    <div className="card card-img-0">
      <h1>House Plant Accessories</h1>
      <a href="">See more</a>
    </div>
    {/*new plant arrivals advertisement */}
    <div className="card card-img-2">
      <h1>New Arrivals</h1>
      <a href="#">See more</a>
    </div>
  </div>
  {/*Seed packets advertisement */}
  <div className="card-column column-1">
    <div className="card card-img-1">
      <h1>Seed Packets</h1>
      <a href="">See more</a>
    </div>
    {/*shipping advertisement */}
    <div className="card card-img-3">
      <h1>Shipping Info</h1>
      <a href="">See more</a>
    </div>
  </div>
</div>
       
    )
}

export default Galerie;