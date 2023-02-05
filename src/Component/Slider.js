import React, { useState } from 'react';
import Feed1 from "./Test Assets//Photos/Feed 1.png";
import Feed2 from "./Test Assets/Photos/Feed 2.png";
import Feed3 from "./Test Assets/Photos/Feed 3.png";
import Feed4 from "./Test Assets/Photos/Feed 4.png";
import {ArrowLeft2,ArrowRight2} from "iconsax-react";


const Slider = () => {
  /* variable responsable for the transition of images */
  const [scrollX, setScrollX] = useState(0);
  /*table of images */
 const images = [
    Feed1,
    Feed2,
    Feed3,
    Feed4,
    
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
    /*start of the instagram feed */
    <div className='slider-container '>
       <div className='desc-container'>
            <h1>Instagram feed</h1>
            <h4>Connect with us on social and share your plants with #cloreshouse</h4>
            
        </div>
        {/*size based on the number of pictures*/}
      <div className='slider-images-container'
        style={{
          width: `${images.length*410}px`,
          transform: `translateX(${scrollX}px)`
        }}
      >
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

export default Slider;