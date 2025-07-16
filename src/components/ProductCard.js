function productCard( {product} ) {
    return (
        // product Image
        <div className="product-card">
            <a href={product.link} rel="noreferrer" className="product-image-link">
                <img src={product.image} alt={product.title} className={"product-image"} />
            </a>
            
        {/* Product Information */}
            <div className="product-info">
                <p className="product-title">{product.title}</p>
                <p className="product-price"><strong>$</strong>{product.price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default productCard;