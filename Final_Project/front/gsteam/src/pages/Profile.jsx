import React, { useState, useEffect } from 'react';

const Profil = (isLoggedIn={isLoggedIn}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:8000/user/');
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <div>
            <h1>User Profile</h1>
            {user && (
                <div>
                    <p>Email: {user.email}</p>
                    <p>Name: {user.name}</p>
                    <p>Username: {user.user_name}</p>
                    <p>Date Joined: {user.date_joined}</p>
                    <p>Last Login: {user.last_login}</p>
                </div>
            )}
        </div>
    );
}

export default Profil;
