function itemCard( {item } ) {
    return (
        // Item Image
        <div className="item-card">
            <a href={item.link} rel="noreferrer" className="item-image-link">
                <img src={item.image} alt={item.title} className={"item-image"} />
            </a>
            
        {/* Product Information */}
            <div className="item-info">
                <div className="title-container">
                    <a href={item.link} rel="noreferrer" className="item-title">{item.title}</a>
                </div>
                <p className="item-price">${item.price.toFixed(2)}</p>
                <p className="item-description">{item.description}</p>
                <p className="item-category">Category: {item.category}</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    )
}

export default itemCard;