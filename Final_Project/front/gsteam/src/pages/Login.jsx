import React, { useState } from 'react'; 
import Header from '../components/Header'; 
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const handleLogin = (userData) => {
        if (userData && userData.user_name) {
            const { user_name } = userData;
            console.log('Logged in successfully');
            setLoggedInUser(user_name);
        } else {
            console.error('Error logging in: User data is missing or incomplete');
        }
    };
    return (
        <div>
            <Header user_name={loggedInUser} />
            <LoginForm onLogin={handleLogin}/>
            <Footer />
        </div>
    );
}

export default Login;