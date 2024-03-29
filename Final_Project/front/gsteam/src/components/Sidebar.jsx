import React, { useState, useEffect } from "react";
import "./sidebar.css";

const Sidebar = ({ setFilteredGames }) => {
  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/games/");
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  // search input
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);

    const filtered = games.filter((game) =>
      game.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredGames(filtered);
  };

  return (
    <nav className='col-md-3 col-lg-2 d-md-block bg-light sidebar'>
      <div className='position-sticky'>
        <ul className='nav flex-column'>
          <li className='nav-item'>
            <input
              type='text'
              value={searchQuery}
              onChange={handleSearchInputChange}
              className='form-control'
              placeholder='Search games...'
            />
          </li>
          {/* <li className='nav-item'>
            <a className='nav-link' href='#'>
              By Category
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;

// --------------------------
// import React, { useState, useEffect } from "react";
// import "./sidebar.css";

// const Sidebar = ({ setFilteredGames }) => {
//   const [games, setGames] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const fetchGames = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:8000/games/");
//         const data = await response.json();
//         setGames(data);
//       } catch (error) {
//         console.error("Error fetching games:", error);
//       }
//     };

//     const fetchCategories = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:8000/categories/");
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchGames();
//     fetchCategories();
//   }, []);

//   // Function to handle changes to the search input
//   const handleSearchInputChange = (event) => {
//     setSearchQuery(event.target.value);

//     const filtered = games.filter((game) =>
//       game.name.toLowerCase().includes(event.target.value.toLowerCase())
//     );
//     setFilteredGames(filtered);
//   };

//   // Function to filter games by category
//   const handleCategoryClick = (categoryId) => {
//     const filtered = games.filter((game) =>
//       game.categories.includes(categoryId)
//     );
//     setFilteredGames(filtered);
//   };

//   return (
//     <nav className='col-md-3 col-lg-2 d-md-block bg-light sidebar'>
//       <div className='position-sticky'>
//         <ul className='nav flex-column'>
//           <li className='nav-item'>
//             <input
//               type='text'
//               value={searchQuery}
//               onChange={handleSearchInputChange}
//               className='form-control'
//               placeholder='Search games...'
//             />
//           </li>
//           <li className='nav-item'>
//             <span className='nav-link' onClick={() => handleCategoryClick(null)}>
//               All Categories
//             </span>
//           </li>
//           {categories.map((category) => (
//             <li className='nav-item' key={category.id}>
//               <span
//                 className='nav-link'
//                 onClick={() => handleCategoryClick(category.id)}
//               >
//                 {category.name}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Sidebar;
