export default function productCard( {product} ) {
    return (
        // product Image
        <div className="product-card">
                <img src={product.image} alt={product.title} className={"product-image"} />
            
        {/* Product Information */}
            <div className="product-info">
                <p className="product-title">{product.title}</p>
                <p className="product-price"><strong>$</strong>{product.price.toFixed(2)}</p>
            </div>
        </div>
    )
}