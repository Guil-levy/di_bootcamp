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
// import React, { useState } from "react";

// const LoginForm = ({ onLogin }) => {
//   const [loginData, setLoginData] = useState({ email: "", password: "" });

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:8000/User/login/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginData),
//         credentials: "include",
//       });
//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         onLogin(data);
//         alert("Login succesfully");
//       } else {
//         alert("Login failed");
//         console.error("Login failed:", data.error);
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLoginSubmit}>
//         <input
//           type='email'
//           name='email'
//           value={loginData.email}
//           onChange={handleLoginChange}
//           placeholder='Email'
//           required
//         />
//         <input
//           type='password'
//           name='password'
//           value={loginData.password}
//           onChange={handleLoginChange}
//           placeholder='Password'
//           required
//         />
//         <button type='submit'>Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
// ---------------------
import React, { useState } from "react";

function getCsrfToken() {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'csrftoken') {
      return decodeURIComponent(value);
    }
  }
  return null;
}
const LoginForm = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ email: "", name: "", user_name: "", password: "" });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/User/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        onLogin(data);
        alert("Login successfully");
      } else {
        alert("Wrong Email or password");
        console.error("Login failed:", data.error);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log("Before the Csrf 1")
      const csrfToken = getCsrfToken();
      console.log("Login data 2:", signupData); 
      const response = await fetch('http://localhost:8000/User/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify(signupData),
        credentials: "include",
      });
      console.log("Login response 3:", response);
      const data = await response.json();
      
      if (response.ok) {
        alert("Signup successfully");
      } else {
        alert("Signup failed");
        console.error("Signup failed:", data.error);
      }
    } catch (error) {
      console.error('Error signing up:', error);
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
      <h2>Create new user</h2>
      <form onSubmit={handleSignupSubmit}>
        <input
          type="email"
          name="email"
          value={signupData.email}
          onChange={handleSignupChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="name"
          value={signupData.name}
          onChange={handleSignupChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="user_name"
          value={signupData.user_name}
          onChange={handleSignupChange}
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          value={signupData.password}
          onChange={handleSignupChange}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default LoginForm;
