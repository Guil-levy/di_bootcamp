import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Store from "./pages/Store";
import MyGames from "./pages/MyGames";
import Statistics from "./pages/Statistics";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Store />} />
          <Route path='/mygames' element={<MyGames />} />
          <Route path='/statistics' element={<Statistics />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
