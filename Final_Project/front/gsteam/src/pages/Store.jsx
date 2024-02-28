import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import GameCardComponent from "../components/GameCard";
import Footer from "../components/Footer";
import "./store.css";

const Store = ({ isLoggedIn }) => {
  const [filteredGames, setFilteredGames] = useState([]);
  const [userGames, setUserGames] = useState([]); 

  const addToMyGames = (game) => {
    // add the game to MyGames
    console.log("Adding game to MyGames:", game);
    setUserGames([...userGames, game]);
  };
  
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/games/");
        const data = await response.json();
        setFilteredGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);
  return (
    <div>
      <Header />
      <div className='container-fluid'>
        <div className='d-flex justify-content-center align-items-center'>
          <div>
            <Sidebar setFilteredGames={setFilteredGames} />
          </div>
          <div>
            <GameCardComponent
              filteredGames={filteredGames}
              isLoggedIn={isLoggedIn}
              addToMyGames={addToMyGames}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Store;
