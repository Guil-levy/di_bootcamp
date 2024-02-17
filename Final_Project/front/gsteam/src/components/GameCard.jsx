import React, { useState } from "react";
import "./gameCard.css";

const GameCard = ({ game }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [description, setDescription] = useState("");

  const handleMouseEnter = async () => {
    setIsHovered(true);
    try {
      const response = await fetch(`http://127.0.0.1:8000/UserGames/usergames/`);
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
  const handleBuyGame = () => {
    // Send a POST request to the backend to purchase the game
    fetch("http://127.0.0.1:8000/UserGames/usergames/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Include any necessary authentication headers
      },
      body: JSON.stringify({ gameId: game.id }), // Send the game ID to the backend
    })
      .then((response) => {
        if (response.ok) {
          // Game purchased successfully, you can handle this as needed (e.g., show a success message)
        } else {
          // Error purchasing the game, handle this as needed (e.g., show an error message)
          console.error("Error purchasing game:", response.statusText);
        }
      })
      .catch((error) => {
        // Handle any network errors
        console.error("Network error:", error);
      });
  };

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
            <p className="card-text">
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
const GameCardComponent = ({ filteredGames }) => {
  return (
    <div className='GameCardList'>
      {filteredGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameCardComponent;
