import React, { useState } from 'react';
import Product1 from "./Test Assets//Photos/Product 1.png";
import Product2 from "./Test Assets/Photos/Product 2.png";
import Product3 from "./Test Assets/Photos/Product 3.png";

import {ArrowLeft2,ArrowRight2} from "iconsax-react";
const Features = () => {
 /* variable responsable for the transition of images */
  const [scrollX, setScrollX] = useState(0);
  /*table of images */
  const images = [
    Product1,
    Product2,
    Product3,    
  ];
/*function responsible for moving the images to the right by  */
  const handleRightArrowClick = () => {
    setScrollX(scrollX + 400);
  };
/*function responsible for moving the images to the right by  */
  const handleLeftArrowClick = () => {
    setScrollX(scrollX - 400);
  };

  return (
    /*start of the featured products*/
    <div className='slider-container '>
        <div className='desc-container'>
            <h1>Featured Products</h1>
            <h4>Scroll through our featured and most purchased items</h4>
            <button id='btn-style'>See All</button>
        </div>
        {/*size based on the number of pictures*/}
      <div className='slider-images-container'
        style={{
          width: `${images.length*410}px`,
          transform: `translateX(${scrollX}px)`
        }}>
       {/*the mapping of the images */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Slider "
          className='slider-image'
          />
        ))}
      </div>
      {/*Left arrow */}
      <button
        style={{
          position: "absolute",
          left: "0",
          transform: "translateY(-50%)",
          border: "none",
        }}
        onClick={handleLeftArrowClick}
      >
        <ArrowLeft2 size="32"  color="#555555"  variant="Bold"/>
      </button>
      {/*Right Arrow */}
      <button
        style={{
          position: "absolute",
         
          right: "0",
          transform: "translateY(-50%)",
          border: "none",
        }}
        onClick={handleRightArrowClick}
      >
        <ArrowRight2 size="32"  color="#555555" variant="Bold"/>
      </button>
    </div>
  );
};

export default Features;