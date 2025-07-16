export default function Header({ loggedIn, setToken, setLoggedin, username, setUsername, setCartQuantity }) {

    const handleLogout = () => {
        setToken(""); // Clear token and username on logout
        setUsername("");
        setLoggedin(false);
        localStorage.removeItem("userToken");
        localStorage.removeItem("username");
        window.location.href = "/"; // Refresh and redirect back to home page
    }

    return (
        <header>
            <div className="header-content">
                <a href="/"><h2>Marketplace</h2></a>
                <div className="welcome">
                    {loggedIn ? <p>Welcome, {username}!</p> : null}
                </div>
                
                <div className="cart">
                    <a href="/cart" className="cart-link">
                        <img src="" alt="Cart Icon" className="cart-icon" />
                        <span className="cart-count">0</span>
                    </a>
                </div>
                <div className="logInOut">
                    {loggedIn ? (
                        <button onClick={handleLogout} className="login-link">Log Out</button>
                    ) : (
                    <a href="/login" className="login-link">Log In</a>
                )}
                </div>
            </div>
        </header>
    )
}