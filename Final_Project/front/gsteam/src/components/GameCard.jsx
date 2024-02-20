import React, { useState } from "react";
import "./gameCard.css";

const GameCard = ({ game, isLoggedIn, addToMyGames }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [description, setDescription] = useState("");

  const handleMouseEnter = async () => {
    setIsHovered(true);
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/UserGames/usergames/`
      );
      const data = await response.json();
      setDescription(data.description);
    } catch (error) {
      console.error("Error fetching game description:", error);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setDescription("");
  };
  const handleBuyGame = async () => {
    if (!isLoggedIn) {
      alert("You need to login to buy this game.");
      return;
    }
    console.log("in GameCard, message for Alex", game);
    try {
      const csrftoken = getCookie('csrftoken');
      // console.log("toKkKen", csrftoken);
      const response = await fetch(
        "http://localhost:8000/UserGames/purchase/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken,
            // Include any necessary authentication headers
          },
          body: JSON.stringify({ game_id: game.game_id }),
          credentials: "include",
        }
      );

      if (response.ok) {
        addToMyGames(game);
        alert("Game added to myGames."); // Add game to MyGames page
      } else {
        console.error("Error purchasing game:", response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  return (
    <div className='row mb-3'>
      <div className='col'>
        <div
          className={`card ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={game.picture_url}
            className='img-fluid rounded-start card-img'
            alt={game.name}
          />
          <h5 className='card-title'>{game.name}</h5>
          {isHovered && (
            <p className='card-text'>
              {game.description || "Loading description..."}
            </p>
          )}
          <p className='card-text'>buy game</p>
          <button className='btn btn-price' onClick={handleBuyGame}>
            ${game.price}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
const GameCardComponent = ({ filteredGames, isLoggedIn, addToMyGames }) => {
  return (
    <div className='GameCardList'>
      {filteredGames.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          isLoggedIn={isLoggedIn}
          addToMyGames={addToMyGames}
        />
      ))}
    </div>
  );
};

export default GameCardComponent;
