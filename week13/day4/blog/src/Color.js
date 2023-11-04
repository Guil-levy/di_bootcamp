import React, { useState, useEffect  } from "react";

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState("red");
    
    useEffect(() => {
      setFavoriteColor("yellow");
    }, []);
    const clickToChange=()=>{
      setFavoriteColor("blue");
    }

    return (
      <div>
        <h1>My Favorite Color is {favoriteColor}</h1>
        <button onClick={clickToChange}>Click to change color to blue</button>
      </div>
    );
  };
  
  export default Color;
  
  
  
  
  
  