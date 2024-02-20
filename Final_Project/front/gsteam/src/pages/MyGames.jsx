// import React, { useState, useEffect } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import GameCardComponent from '../components/GameCard'; // Import the GameCardComponent

// const MyGames = (isLoggedIn={isLoggedIn}) => {
//     const [userGames, setUserGames] = useState([]);

//     useEffect(() => {
//         const fetchUserGames = async () => {
//             try {
//                 const response = await fetch('http://localhost:8000/UserGames/usergames/'); // Adjust the endpoint as per your backend
//                 const data = await response.json();
//                 setUserGames(data);
//             } catch (error) {
//                 console.error('Error fetching user games:', error);
//             }
//         };

//         fetchUserGames();
//     }, []);
//     const addToMyGames = async (game) => {
//         try {
//             const response = await fetch('http://localhost:8000/UserGames/purchase/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ game_id: game.id }), // Assuming your backend expects a game_id to associate the game with the user
//             });
//             if (response.ok) {
//                 // Update the userGames state with the new game
//                 setUserGames([...userGames, game]);
//             } else {
//                 console.error('Failed to add game to MyGames:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Error adding game to MyGames:', error);
//         }
//     };
    
//     return (
//         <div>
//             <Header />
//             <div className="container">
//                 <h2>My Games</h2>
//                 <GameCardComponent filteredGames={userGames} addToMyGames={addToMyGames}/> {/* Use GameCardComponent to display user games */}
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default MyGames;
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameCardComponent from '../components/GameCard'; // Import the GameCardComponent

const MyGames = () => {
    const [userGames, setUserGames] = useState([]);

    const fetchUserGames = async () => {
        try {
            const response = await fetch('http://localhost:8000/UserGames/usergames/');
            const data = await response.json();
            setUserGames(data);
        } catch (error) {
            console.error('Error fetching user games:', error);
        }
    };

    useEffect(() => {
        fetchUserGames();
    }, []);

    const addToMyGames = async (game) => {
        try {
            console.log("adding game", game)
            const response = await fetch('http://localhost:8000/UserGames/purchase/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ game_id: game.id }),
            });
            if (response.ok) {
                setUserGames([...userGames, game]);
            } else {
                console.error('Failed to add game to MyGames:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding game to MyGames:', error);
        }
    };

    return (
        <div>
            <Header />
            <div className="container">
                <h2>My Games</h2>
                <GameCardComponent filteredGames={userGames} addToMyGames={addToMyGames}/>
            </div>
            <Footer />
        </div>
    );
}

export default MyGames;
