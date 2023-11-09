import './App.css';
import Action from "./Components/Action"
import Display from './Components/Display'
import AddOne from './Components/AddOne'
import ShowCounter from './Components/ShowCounter'


import { useState } from 'react';
const [ count, setCount] = useState(0)
function App() {
  const [num1, setNum1] = useState('');
  return (
    <div className="App">
      <Action />
      <Display count={count}/>
    </div>
  );
}

export default App;
