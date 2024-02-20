// import React, { useState } from 'react';

// const LoginForm = () => {
//     const [loginData, setLoginData] = useState({ email: '', password: '' });
//     const [signupData, setSignupData] = useState({ email: '', name: '', username: '', password: '' });

//     const handleLoginChange = e => {
//         const { name, value } = e.target;
//         setLoginData(prevData => ({ ...prevData, [name]: value }));
//     };

//     const handleSignupChange = e => {
//         const { name, value } = e.target;
//         setSignupData(prevData => ({ ...prevData, [name]: value }));
//     };

//     const handleLoginSubmit = async e => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:8000/User/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(loginData)
//             });
//             const data = await response.json();
//             // Handle login success or failure
//         } catch (error) {
//             console.error('Error logging in:', error);
//         }
//     };

//     const handleSignupSubmit = async e => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:8000/User/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(signupData)
//             });
//             const data = await response.json();
//             // Handle signup success or failure
//         } catch (error) {
//             console.error('Error signing up:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleLoginSubmit}>
//                 <input type="email" name="email" value={loginData.email} onChange={handleLoginChange} placeholder="Email" required />
//                 <input type="password" name="password" value={loginData.password} onChange={handleLoginChange} placeholder="Password" required />
//                 <button type="submit">Login</button>
//             </form>

//             <h2>Create new user</h2>
//             <form onSubmit={handleSignupSubmit}>
//                 <input type="email" name="email" value={signupData.email} onChange={handleSignupChange} placeholder="Email" required />
//                 <input type="text" name="name" value={signupData.name} onChange={handleSignupChange} placeholder="Name" required />
//                 <input type="text" name="username" value={signupData.username} onChange={handleSignupChange} placeholder="Username" required />
//                 <input type="password" name="password" value={signupData.password} onChange={handleSignupChange} placeholder="Password" required />
//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     );
// }

// export default LoginForm;

// -------------------------
import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("BEFORE LOGIN");
      const response = await fetch("http://localhost:8000/User/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
        credentials: "include",
      });
      const data = await response.json();
      console.log("AFTER DATA", data);
      if (response.ok) {
        localStorage.setItem("token", data.token);
        onLogin(data);
      } else {
        console.error("Login failed:", data.error);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <input
          type='email'
          name='email'
          value={loginData.email}
          onChange={handleLoginChange}
          placeholder='Email'
          required
        />
        <input
          type='password'
          name='password'
          value={loginData.password}
          onChange={handleLoginChange}
          placeholder='Password'
          required
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
