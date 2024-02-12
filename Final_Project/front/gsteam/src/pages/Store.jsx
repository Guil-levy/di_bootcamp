import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import GameCard from '../components/GameCard';
import Footer from '../components/Footer';


const Store = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <GameCard />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Store;
