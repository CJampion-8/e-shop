import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(false);

    return (
        <>
            <h1>Your Cart</h1>

            <div className="cart-content">
                {itemsInCart ?
                    <p>Items</p>
                :
                    <p>There are not items in your cart.</p>}

                <Link to="/checkout" className="checkout-button">
                    Checkout
                </Link>
            </div>
            </>
    )
}