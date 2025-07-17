import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './style.css';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import Cart from './pages/Cart.js';
import Checkout from './pages/Checkout.js';
import ThankYou from './pages/ThankYou.js';
import Login from './pages/Login.js';
import CreateAccount from './pages/CreateAccount.js';
import ProductDetails from './pages/DetailsPage.js';

export default function App() {
    const [token, setToken] = useState("");
    const [loggedIn, setLoggedin] = useState(false);
    const [username, setUsername] = useState("");

    // Is user logged in?
    useEffect(() => {
        const savedToken = localStorage.getItem("userToken");
        const savedUsername = localStorage.getItem("username");
        if (savedToken) {
            setToken(savedToken);
            setLoggedin(true);
            setUsername(savedUsername);
        }
    }, []);

    // Update loggedIn on token change
    useEffect(() => {
        setLoggedin(!!token);
    }, [token]);

    return (
        <>
            <Header 
                loggedIn={loggedIn} 
                setLoggedin={setLoggedin} 
                setToken={setToken}
                username={username}
                setUsername={setUsername} 
            />
            
            <div className="container-wrapper">
                <div className="container">
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/details/:productId" element={<ProductDetails />} />
                            <Route path="/login" 
                                element={loggedIn ? <Navigate to="/" replace /> : 
                                <Login 
                                    token={token} 
                                    setToken={setToken} 
                                    setUsername={setUsername}
                                /> 
                                } 
                            />
                            <Route path="/create-account" element={<CreateAccount />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/thank-you" element={<ThankYou />} />
                        </Routes>
                    </div>
                </div>
            </div>

            <a href="https://cjampion-8.github.io/project_portfolio" target="_blank" rel="noopener noreferrer" className="portfolioRedirect">
                Check out my other projects!
            </a>
        </>
    )
}