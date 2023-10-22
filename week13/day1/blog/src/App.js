import logo from './logo.svg';
import './App.css';
import Car from "./components/Car"
import CarAlso from "./components/CarAlso"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Car />
          <CarAlso />
        </a>
      </header>
    </div>
  );
}

export default App;
