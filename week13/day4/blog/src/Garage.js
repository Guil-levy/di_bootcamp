import React from 'react';

const Garage = (props) =>{
    const { size } = props;
    return (
        <div>
          <p>Who lives in my {size} Garage?</p>
        </div>
      );
    };


export default Garage;