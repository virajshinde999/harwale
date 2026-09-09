import { useState } from "react";

import "./Products.css";
import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import OrderForm from "../OrderForm/OrderForm";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOrder = (product) => {
    setSelectedProduct(product);
  };

  const closeOrderForm = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="products-section" id="haar">

      <div className="products-container">

        <div className="products-heading">

          <div>
            <p className="section-label">
              GANPATI 2026
            </p>

            <h2>
              Fresh Offerings
              <span> For Bappa.</span>
            </h2>
          </div>

          <p className="products-intro">
            Haar, durva aur fresh puja flowers —
            Bappa ki seva ke liye sab kuch ek jagah.
          </p>

        </div>

        <div className="products-grid">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOrder={handleOrder}
            />
          ))}

        </div>

      </div>

      {/* ONE Order Form only */}
      {selectedProduct && (
        <OrderForm
          product={selectedProduct}
          onClose={closeOrderForm}
        />
      )}

    </section>
  );
}

export default Products;