export default function Header({ loggedIn, setToken, setLoggedin }) {

    const handleLogout = () => {
        setToken("");
        setLoggedin(false);
        localStorage.removeItem("userToken");
    }

    return (
        <header>
            <div className="header-content">
                <a href="/"><h2>E-Shop Title</h2></a>
                <div className="welcome">
                    {loggedIn ? <p>"Welcome, customerFName!</p> : null}
                </div>
                
                <div className="cart">
                    <a href="/cart" className="cart-link">
                        <img src="" alt="Cart Icon" className="cart-icon" />
                        <span className="cart-count">0</span>
                    </a>
                </div>
                <div className="logInOut">
                    {loggedIn ? (
                        <button onClick={handleLogout} classname="login-link">Log Out</button>
                    ) : (
                    <a href="/login" className="login-link">Log In</a>
                )}
                </div>
            </div>
        </header>
    )
}