import React from 'react'; 
import Header from '../components/Header'; 
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

const Login = ({ isLoggedIn, onLogin }) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [user_name, setUser_name] = useState('');

    // const handleLogin = (userData) => {
    //     if (userData && userData.user_name) {
    //         localStorage.setItem('user_name', userData.user_name); 
    //         setIsLoggedIn(true);
    //         setUser_name(userData.user_name);
    //     } else {
    //         console.error('Error logging in: User data is missing or incomplete');
    //     }
    // };

    return (
        <div>
            <Header isLoggedIn={isLoggedIn} />
            <LoginForm onLogin={onLogin}/>
            <Footer />
        </div>
    );
}

export default Login;
