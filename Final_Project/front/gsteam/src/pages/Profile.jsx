import React, { useState, useEffect } from 'react';
import "./profil.css"

const Profile = () => {
    const [user, setUser] = useState(null);

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    }
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const csrftoken = getCookie("csrftoken");
                if (csrftoken) {
                    const response = await fetch('http://localhost:8000/User/profile/', {
                        headers: {
                            "Authorization": `Bearer ${csrftoken}`,
                            "X-CSRFToken": csrftoken,
                        },
                        credentials: "include",
                    });
                    const userData = await response.json();
                    setUser(userData);
                    console.log("userDATA ???",userData)
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchProfile();
    }, []);
    console.log("User state: AFTER FETCH", user); 
        return (
            <div>
                <h1>Your Profile</h1>
                {user && (
                    <div>
                        <p>Email: {user.email}</p>
                        <p>Name: {user.name}</p>
                        <p>Username: {user.user_name}</p>
                        <p>Last Login: {user.last_login}</p>
                    </div>
                )}
            </div>
        );
    }

export default Profile;

