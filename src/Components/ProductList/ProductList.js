import React from "react";
import "./ProductList.scss";
import { useNavigate } from "react-router-dom";

function ProductCard({ products }) {
  const navigate = useNavigate();

  const handleImageClick = (_id) => {
    navigate(`/productdetails/${_id}`);
  };

  const PriceAndDiscount = (product) => {
    const maxPrice = Math.max(
      ...product.weightPrice.map((item) => parseInt(item.price))
    );

    const discountPrice = (maxPrice - 0.6 * maxPrice).toFixed(2);

    return { maxPrice, discountPrice };
  };

  console.log("Product Price : ", products[0].weightPrice);
  return (
    <div className="product-cards">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-card-img">
            <img
              src={product.images[0].url}
              alt={product.name}
              onClick={handleImageClick.bind(this, product._id)}
            />
          </div>
          <div className="product-card-details">
            <p className="product-card-name">{product.name}</p>
            <p className="product-card-title">{product.title}</p>
            <p className="product-card-price">
              <span style={{ textDecoration: "line-through" }}>
                {`₹${PriceAndDiscount(product).maxPrice}`}
              </span>
              <span className="product-card-discount">
                {` ₹${PriceAndDiscount(product).discountPrice} (60% Off)`}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
