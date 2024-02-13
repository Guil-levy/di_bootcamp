// import React, { useState, useEffect } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const MyGames = () => {
//     const [userGames, setUserGames] = useState([]);

//     useEffect(() => {
//         const fetchUserGames = async () => {
//             try {
//                 const response = await fetch('http://localhost:8000/user/games'); // Adjust the endpoint as per your backend
//                 const data = await response.json();
//                 setUserGames(data);
//             } catch (error) {
//                 console.error('Error fetching user games:', error);
//             }
//         };

//         fetchUserGames();
//     }, []);

//     return (
//         <div>
//             <Header />
//             <div className="container">
//                 <h2>My Games</h2>
//                 <div className="row row-cols-1 row-cols-md-2 g-4">
//                     {userGames.map(game => (
//                         <div key={game.id} className="col">
//                             <div className="card mb-3">
//                                 <div className="row g-0">
//                                     <div className="col-md-4">
//                                         <img src={game.photo} className="img-fluid rounded-start" alt={game.name} />
//                                     </div>
//                                     <div className="col-md-8">
//                                         <div className="card-body">
//                                             <h5 className="card-title">{game.name}</h5>
//                                             <p className="card-text" title={game.description}>{game.description}</p>
//                                             <button className="btn btn-primary">${game.price}</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default MyGames;
// ----------------------------
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameCardComponent from '../components/GameCard'; // Import the GameCardComponent

const MyGames = () => {
    const [userGames, setUserGames] = useState([]);

    useEffect(() => {
        const fetchUserGames = async () => {
            try {
                const response = await fetch('http://localhost:8000/UserGames/usergames/'); // Adjust the endpoint as per your backend
                const data = await response.json();
                setUserGames(data);
            } catch (error) {
                console.error('Error fetching user games:', error);
            }
        };

        fetchUserGames();
    }, []);

    return (
        <div>
            <Header />
            <div className="container">
                <h2>My Games</h2>
                <GameCardComponent filteredGames={userGames} /> {/* Use GameCardComponent to display user games */}
            </div>
            <Footer />
        </div>
    );
}

export default MyGames;
