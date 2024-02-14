import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Store from "./pages/Store";
import MyGames from "./pages/MyGames";
import Statistics from "./pages/Statistics";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

  const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user_name, setUsername] = useState('');
  
    // Function to handle login
    const handleLogin = (userData) => {
      setUsername(userData.user_name);
      setIsLoggedIn(true);
    };
  

  return (
    <Router>
      <div>
        <Header isLoggedIn={isLoggedIn} user_name={user_name}/>
        <Routes>
          <Route path='/' element={<Store />} />
          <Route path='/mygames' element={<MyGames />} />
          <Route path='/statistics' element={<Statistics />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/Login' element={<Login onLogin={handleLogin} />}/>
        </Routes>
      </div>
    </Router>
  );
};


export default App;
