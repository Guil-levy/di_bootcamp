import React, { useState } from 'react';

function Calculator () {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
 
    const handleAddition = () => {
        const sum = (num1) + (num2);
        setResult(`Result: ${sum}`);
      };
    
    return(
        <div>
            <h3> Adding 2 numbers </h3>
            <input
            type="number"
            placeholder="First number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <input
            type="number"
            placeholder="Second number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
          <br/>
          <button onClick={handleAddition}>Add Them</button>
          <div>{result}</div>
        </div>
    )
}
export default Calculator;