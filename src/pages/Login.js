import { useState } from 'react';
import axios from 'axios';

// Test login: mor_2314 : 83r5^_

export default function Login({token, setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const loginHandler = () => {

        // Clear previous inputs and values.
        setUsername("");
        setPassword("");
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
            localStorage.setItem("userToken", response.data.token);
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
                    onChange={(e) => setUsername(e.target.value)}
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
            </div>
        </div>
    )
}