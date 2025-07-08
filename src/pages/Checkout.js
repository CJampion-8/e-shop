import { Link } from 'react-router-dom';

export default function Checkout() {
    return (
        <div className="cart-content">
            <h1>Checkout</h1>
            <p>Enter checkout information here</p>

            <Link to="/thank-you" className="submit-order-button">
                Submit Order
            </Link>
        </div>
    )
}