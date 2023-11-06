import React from "react";
import "./ProductList.scss";
import { useNavigate } from "react-router-dom";

function ProductCard({ products }) {
  const navigate = useNavigate();

  const handleImageClick = (_id) => {
    navigate(`/productdetails/${_id}`);
  };

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
            <p className="product-card-price">₹{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
