import ProductCard from '../components/ProductCard';
import { useState, useEffect } from 'react';
import { apiService } from '../data/api.js';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const data = await apiService.getAllProducts();
                setProducts(data);
            } catch (error) {
                setError('Failed to load products');
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchProducts();
    }, []);

    if (loading) {
        return <div className="loading">Loading products...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>
    }
    
    return (
        <>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard
                        key={product.title}
                        product={product}
                    />
                ))}
            </div>
        </>
    )
}