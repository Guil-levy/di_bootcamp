import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Exercice1 from './Exercice1';
import Exercice2 from './Exercice2';
import UserFavoriteAnimals from './UserFavoriteAnimals';
// const favoriteAnimals = ['Mangoost', 'Cat', 'Kangourous', 'Lion'];
import Exercice from './Exercice3';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Exercice1 /> */}
    {/* <Exercice2 />
    <UserFavoriteAnimals favAnimals={favoriteAnimals}/> */}
    <Exercice />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
