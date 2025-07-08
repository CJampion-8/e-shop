import { Link } from 'react-router-dom';

export default function Cart() {
    return (
        <div className="cart-content">
            <h1>Your Cart</h1>
            <p>Items in your cart will be displayed here.</p>

            <Link to="/checkout" className="checkout-button">
                Checkout
            </Link>
        </div>
    )
}