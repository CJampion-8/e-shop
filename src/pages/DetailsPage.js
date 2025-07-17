import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                console.log('Fetching product ID:', productId); // Debug log
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                
                console.log('Response status:', response.status); // Debug log
                console.log('Response ok:', response.ok); // Debug log
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const text = await response.text(); // Get raw text first
                console.log('Raw response:', text); // Debug log
                
                if (!text) {
                    throw new Error('Empty response');
                }
                
                const data = JSON.parse(text); // Parse manually
                setProduct(data);
                setError(null);
            } catch (error) {
                console.error('Fetch error:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    if (loading) return <div className="loading">Loading product...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (!product) return <div className="error">Product not found</div>;

    return (
        <div className="product-details-container">
            <div className="product-details-title">
                <h2>{product.title}</h2>
            </div>
            <div className="product-details-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details-description">
                <p>{product.description}</p>
            </div>
            <div className="product-details-price">
                <p><strong>$</strong>{product.price.toFixed(2)}</p>
            </div>
        </div>
    );
}