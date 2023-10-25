import logo from './logo.svg';
import './App.css';

import Counter from "./components/Counter"
// const actors = [
//   {
//     firstName: "Tom",
//     lastName: "Hanks",
//     image: "https://example.com/tom-hanks.jpg"
//   },
//   {
//     firstName: "Meryl",
//     lastName: "Streep",
//     image: "https://example.com/meryl-streep.jpg"
//   },
//   {
//     firstName: "Brad",
//     lastName: "Pitt",
//     image: "https://example.com/brad-pitt.jpg"
//   }
// ];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
          <Counter />
        
      </header>
    </div>
  );
}

export default App;
