import React, { useState } from "react";

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState("red");
  
    return (
      <div>
        <h1>My Favorite Color is {favoriteColor}</h1>
      </div>
    );
  };
  
  export default Color;
  
  
  
  
  
  