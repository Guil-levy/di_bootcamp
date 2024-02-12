import React, { useState, useEffect } from 'react';

const GameCard = ({ game }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={game.photo} className="img-fluid rounded-start" alt={game.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{game.name}</h5>
                        <p className="card-text" title={game.description}>{game.description}</p>
                        <button className="btn btn-primary">${game.price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const GameCardList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('http://localhost:8000/games');
                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, []);

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {games.map(game => (
                <div key={game.id} className="col">
                    <GameCard game={game} />
                </div>
            ))}
        </div>
    );
}

export default GameCardList;
