import React from "react";

const Hero = ({ text , backdrop}) =>
 {
    return(
        <header className="bg-dark text-white p-5 hero container">
         <h1 className='hero-text'>{text}</h1>
         {backdrop &&
         <div className="backdrop"> style={{backgroundImage: `Url(${backdrop})`}}
         </div>
         }
        </header>
    )
 }
 export default Hero;
