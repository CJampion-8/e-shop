export default function Header() {
    return (
        <header>
            <div className="header-content">
                <a href="/"><h2>E-Shop Title</h2></a>
                <div className="cart">
                    <a href="/cart" className="cart-link">
                        <img src="" alt="Cart Icon" className="cart-icon" />
                        <span className="cart-count">0</span>
                    </a>
                </div>
            </div>
        </header>
    )
}