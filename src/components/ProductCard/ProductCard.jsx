import "./ProductCard.css";

function ProductCard({ product, onOrder }) {
  return (
    <article className={`product-card ${product.type}`}>

      <div className="product-image">
        <img
          src={product.image}
          alt={product.title}
        />

        <span className="product-tag">
          {product.tag}
        </span>
      </div>

      <div className="product-content">

        <p className="product-label">
          GANPATI SPECIAL
        </p>

        <h3>{product.title}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-items">
          {product.items.map((item, index) => (
            <div className="product-item" key={index}>
              <span className="item-check">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="product-bottom">

          <div className="product-price">
            <span className="price-label">
              {product.priceLabel}
            </span>

            <strong>
              {product.price}
            </strong>
          </div>

          <button
            className="product-order-btn"
            onClick={() => onOrder(product)}
          >
            {product.buttonText}
            <span>↗</span>
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;