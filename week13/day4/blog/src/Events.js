import React, { useState } from 'react';


const clickMe = () => {
    alert('I was clicked');
  };
  const Event = () =>{ 
    return (
        <div>
          <button onClick={clickMe}>Click Me</button>
        </div>
      );
    };
    //part2
  const InputEvents = () => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        alert('Enter key was pressed!!! :)))))))) Your input is React');
      }
    };
    return (
      <div>
        <input
          type="text"
          placeholder="Press Enter key"
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  };
//part3

const Events = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleState = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <p>The state is {isToggleOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggleState}>Toggle</button>
    </div>
  );
};



export { Event, InputEvents, Events };