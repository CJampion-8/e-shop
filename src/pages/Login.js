import { useState } from 'react';
import axios from 'axios';

// Test login: mor_2314 : 83r5^_

export default function Login({token, setToken, setUsername}) {
    const [username, setLocalUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const loginHandler = () => {
        setPassword(""); // Clear previous inputs and values.
        setError("");

        axios({
            url: "https://fakestoreapi.com/auth/login",
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response=>{
            console.log(response.data.token);
            setToken(response.data.token);
            localStorage.setItem("userToken", response.data.token); // Save token and username to localStorage
            localStorage.setItem("username", username);
            setUsername(username); // Pass username to App.js
        }).catch(error=>{
            console.log(error);
            setError(error.response?.data || error.message || "Login failed");
        })
    }

    return (
        <div className="login-content">
            <div className="login-inputs">
                <h1>Login</h1>
                <input 
                    type="text" 
                    placeholder="Username" 
                    className="login-input" 
                    value={username}
                    onChange={(e) => setLocalUsername(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="password-input" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <small>{error}</small>}

                <button className="login-button"
                onClick={() => {
                    if (username && password){
                        loginHandler();
                    } else {
                        setError("Please enter a username and password");
                    }
                    }}
                    >
                        Log In
                    </button>
                
                <a href="/create-account" className="create-account-link">
                    Don't have an account? Sign up here
                </a>
                
            </div>
        </div>
    )
}