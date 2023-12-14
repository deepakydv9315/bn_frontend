import React, { useState, useEffect } from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setCartOpen } from "../../Redux/slices/appConfigSlice";
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
      {products &&
        products.map((product, index) => {
          return (
            <div key={index} className="product-card">
              <div className="badge">
                <span className="badge_top">50%</span>
                <span className="badge_btm">OFF</span>
              </div>
              <div className="product-card-img">
                <img
                  src={
                    product.productDetails[0].images.length > 0
                      ? product.productDetails[0].images[0].url
                      : "https://squatdeadlift.com/wp-content/uploads/2021/04/71uwfbcAkYL._AC_SX679_.jpg"
                  }
                  alt={product.name}
                  onClick={handleImageClick.bind(this, product._id)}
                />
              </div>
              <div className="product-card-details">
                {/* <p className="product-card-name">{product.name}</p>
            <p className="product-card-title">{product.title}</p> */}
                <p className="product-card-name">{product.name}</p>
                <p className="product-card-title">
                  2kg {product?.productFlavour}
                </p>
                <div className="space">
                  <p className="product-card-price">
                    ₹ {product.productDetails[0].price}
                  </p>
                  <p className="d-price">
                    {`₹ ${product.productDetails[0].mrPrice}`}
                  </p>
                </div>
                <div className="card-btns">
                  <button
                    onClick={handleImageClick.bind(this, product._id)}
                    className="he"
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Card;
