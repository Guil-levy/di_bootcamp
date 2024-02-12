import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chart from 'chart.js/auto';

const Statistiques = () => {
    const [topGames, setTopGames] = useState([]);

    useEffect(() => {
        // Fetch data for top games from your backend
        const fetchTopGames = async () => {
            try {
                // Make API request to get top games data
                // const response = await fetch('http://localhost:8000/top_games');
                // const data = await response.json();
                const data = [
                    { name: 'Game 1', sales: 100 },
                    { name: 'Game 2', sales: 80 },
                    { name: 'Game 3', sales: 60 }
                ];
                setTopGames(data);
            } catch (error) {
                console.error('Error fetching top games:', error);
            }
        };

        fetchTopGames();
    }, []);

    useEffect(() => {
        // Render chart once topGames data is available
        if (topGames.length > 0) {
            renderChart();
        }
    }, [topGames]);

    const renderChart = () => {
        const ctx = document.getElementById('topGamesChart');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: topGames.map(game => game.name),
                datasets: [{
                    label: 'Top Games',
                    data: topGames.map(game => game.sales),
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };

    return (
        <div>
            <Header />
            <div className="container">
                <h2>Statistiques</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Top 3 Games</h3>
                        <canvas id="topGamesChart" width="400" height="300"></canvas>
                    </div>
                    {/* Add another chart for all users' top 3 games */}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Statistiques;
