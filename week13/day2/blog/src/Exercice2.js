import './App.css';
const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };
function Exercice2() {
  return (
    <div >
        <h3>first name : {user.firstName}</h3>
        <h3>last name : {user.lastName}</h3>
    </div>
  );
}

export default Exercice2;