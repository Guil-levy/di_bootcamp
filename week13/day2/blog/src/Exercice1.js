import './App.css';
const sum = 5+5;
const myelement = <h1>I Love JSX!</h1>;
function Exercice1() {
  return (
    <div className="App">
      {myelement}
      <p> hello world</p>
      <p>"React is {sum} times better with JSX"</p>
    </div>
  );
}

export default Exercice1;
