import React, { useState, useEffect } from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setCartOpen } from "../../Redux/slices/appConfigSlice";
// import { AiOutlineHeart, AiFillCheckCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function Card({ products }) {
  const navigate = useNavigate();

  const handleImageClick = (_id) => {
    navigate(`/productdetails/${_id}`);
  };

  const disCountPrice = (price) => {
    // i have to calculate the discount price
    let disPrice = price - (price * 50) / 100;
    return disPrice;
  };

  return (
    <div className="Cards">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-card-img">
            <div className="badge">50% OFF</div>
            <img
              src={product.images[0].url}
              alt={product.name}
              onClick={handleImageClick.bind(this, product._id)}
            />
          </div>
          <div className="product-card-details">
            {/* <p className="product-card-name">{product.name}</p>
            <p className="product-card-title">{product.title}</p> */}
            <p className="product-card-name">{product.name}</p>
            <p className="product-card-title">2kg {product?.flavour}</p>
            <div className="space">
              <p className="product-card-price">
                ₹
                {Math.max(
                  ...product.weightPrice.map((item) => parseInt(item.price))
                )}
              </p>
              <p className="d-price">
                {`₹ ${disCountPrice(
                  Math.max(
                    ...product.weightPrice.map((item) => parseInt(item.price))
                  )
                )}`}
              </p>
            </div>
            <div className="card-btns">
              <button
                onClick={handleImageClick.bind(this, product._id)}
                className="he"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
