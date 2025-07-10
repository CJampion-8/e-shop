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
                {/* <p className="product-description">{product.description}</p> */}
                {/* <p className="product-category">Category: {product.category}</p> */}
                {/* <button className="add-to-cart">Add to Cart</button> */}
            </div>
        </div>
    )
}

export default productCard;