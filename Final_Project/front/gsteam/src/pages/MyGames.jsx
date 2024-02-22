import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/mygames.css";

const MyGames = ({ isLoggedIn }) => {
  const [purchasedGames, setPurchasedGames] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isLoggedIn) {
          setFilteredGames([]);
          setIsLoading(false);
        } else {
          const csrftoken = getCookie("csrftoken");

          const [purchasedResponse, allGamesResponse] = await Promise.all([
            fetch("http://localhost:8000/UserGames/purchase/", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrftoken,
              },
              credentials: "include",
            }),
            fetch("http://127.0.0.1:8000/games/"),
          ]);
    
          if (!purchasedResponse.ok || !allGamesResponse.ok) {
            throw new Error(`Failed to fetch data.`);
          }
    
          const purchasedData = await purchasedResponse.json();
          const allGamesData = await allGamesResponse.json();
          console.log("Fetched purchased games:", purchasedData);
          console.log("Fetched all games:", allGamesData);
    
          const purchasedGameIds = purchasedData.map((entry) => entry.game);
          console.log("AYAL2", purchasedGameIds);

          const filtered = allGamesData.filter((game) => {
            console.log("THE GAME", game);
            return purchasedGameIds.includes(game.game_id);
          });          
          
          setPurchasedGames(purchasedGameIds);
          setAllGames(allGamesData);
          setFilteredGames(filtered);
          setIsLoading(false);
          
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isLoggedIn]);

  console.log("filteredGames AYAL", filteredGames);

  return (
    <div>
      <Header />
      <div className='container'>
        <h2>My Games</h2>
        <ul>
          {filteredGames.map((game) => (
            <li className='list' key={game.id}>
              <img className='image' src={game.picture_url} alt={game.name} />
              <span className='infos'>{game.name}</span>
              <button className='play'>Play</button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default MyGames;


// ---------------------------
// import React, { useState, useEffect } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import "../components/mygames.css";
// const MyGames = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [purchasedGames, setPurchasedGames] = useState([]);

//   useEffect(() => {
//     // Check if user is logged in
//     const storedUserName = localStorage.getItem("user_name");
//     setIsLoggedIn(storedUserName ? true : false);

//     if (storedUserName) {
//       // Fetch purchased games only if user is logged in
//       fetchPurchasedGames();
//     }
//     const fetchPurchasedGames = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:8000/games/");
//         const data = await response.json();
//         setPurchasedGames(data);
//       } catch (error) {
//         console.error("Error fetching purchased games:", error);
//       }
//     };

//     fetchPurchasedGames();
//   }, []);

//   return (
//     <div>
//       <Header />
//       <div className='container'>
//         <h2>My Games</h2>
//         <ul>
//           {purchasedGames.map((game) => (
//             <ul className='list' key={game.id}>
//               <img className='image' src={game.picture_url} alt={game.name} />
//               <span className='infos'>{game.name}</span>
//               <button className='play'>Play</button>
//             </ul>
//           ))}
//         </ul>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MyGames;
// ----------------------
// import React, { useState, useEffect } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import "../components/mygames.css";

// const MyGames = ({ isLoggedIn }) => {
//   const [purchasedGames, setPurchasedGames] = useState([]);
//   const [allGames, setAllGames] = useState([]);
//   const [filteredGames, setFilteredGames] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   function getCookie(name) {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(";").shift();
//   }

//   useEffect(() => {
//     const fetchPurchasedGames = async () => {
//       try {
//         if (!isLoggedIn) return;
//         const csrftoken = getCookie("csrftoken");
//         const response = await fetch(
//           "http://localhost:8000/UserGames/purchase/",
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               "X-CSRFToken": csrftoken,
//             },
//             credentials: "include",
//           }
//         );
//         if (!response.ok) {
//           throw new Error(
//             `Failed to fetch purchased games. Status: ${response.status}`
//           );
//         }
//         const data = await response.json();
//         console.log("Fetched purchased gamesGGGGGG:", data);
//         const gameIds = data.map((entry) => entry.game);
//         setPurchasedGames(gameIds);
//       } catch (error) {
//         console.error("Error fetching purchased games:", error);
//       }
//     };

//     const fetchAllGames = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:8000/games/");

//         if (!response.ok) {
//           throw new Error(
//             `Failed to fetch all games. Status: ${response.status}`
//           );
//         }
//         const data = await response.json();
//         console.log("Fetched all games:", data);
//         setAllGames(data);
//       } catch (error) {
//         console.error("Error fetching all games:", error);
//       }
//     };

//     const fetchData = async () => {
//       try {
//         await Promise.all([fetchPurchasedGames(), fetchAllGames()]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [isLoggedIn]);

//   useEffect(() => {
//     if (!isLoading) {
//       console.log("Filtering games...");
//       const filtered = allGames.filter((game) =>
//         purchasedGames.includes(game.id)
//       );
//       setFilteredGames(filtered);
//     }
//   }, [purchasedGames, allGames, isLoading]);

//   console.log("filteredGames", filteredGames);

//   return (
//     <div>
//       <Header />
//       <div className='container'>
//         <h2>My Games</h2>
//         <ul>
//           {filteredGames.map((game) => (
//             <li className='list' key={game.id}>
//               <img className='image' src={game.picture_url} alt={game.name} />
//               <span className='infos'>{game.name}</span>
//               <button className='play'>Play</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MyGames;
