import React, { useState, useEffect } from "react";
import "./Card.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCartOpen } from "../../Redux/slices/appConfigSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import VegIcon from '../../Assets/Images/veg.png';

function Card({ products, isShow = true }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddCart = async (_id) => {
    const product = products?.find((product) => product._id === _id);

    if (!product) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Product Not Found",
      });
    } else if (product.productDetails.length === 0) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Product Details Not Found",
      });
    } else {
      await dispatch({
        type: "ProductSlice/addToCart",
        payload: {
          product: product,
          from: "direct",
        },
      });
      dispatch(setCartOpen(true));
    }
  };

  const handleImageClick = (_id) => {
    navigate(`/productdetails/${_id}`);
  };

  return (
    <div className="Cards">
      {products &&
        products.map((product, index) => {
          return (
            <div key={index} className="product-card" >
              <div className="badge">
                <span className="badge_top">
                  {(
                    ((product.productDetails[0].mrPrice -
                      product.productDetails[0].price) /
                      product.productDetails[0].mrPrice) *
                    100
                  ).toFixed(0)}
                  % OFF
                </span>
              </div>
              <div className="product-card-img">
                <img
                  src={
                    product.productDetails[0].images.length > 0 &&
                    product.productDetails[0].images[0].url
                  }
                  alt={product.name}
                  onClick={() => handleImageClick(product._id)}
                />
                {product.productCategory === "Burly Whey" || product.productCategory === "Creatine" ? (
                  <img src={VegIcon} alt="Veg Icon" className="veg-icon" />
                ) : null}
              </div>
              <div className="product-card-details" >
                <p className="product-card-name" onClick={() => handleImageClick(product._id)}>{product.name}</p>
                {isShow ? (
                  <p className="product-card-title" onClick={() => handleImageClick(product._id)}>
                    {product?.productDetails[0].weight} |{" "}
                    {product?.productFlavour}
                  </p>
                ) : null}
                <div className="space" onClick={() => handleImageClick(product._id)}>
                  <p className="product-card-price">
                    ₹{product.productDetails[0].mrPrice}
                  </p>
                  <p className="d-price">
                    {`₹${product.productDetails[0].price}`}
                  </p>
                </div>
                <div className="card-btns">
                  <button
                    onClick={() => handleAddCart(product._id)}
                    className="card-btn"
                  >
                    Add To Cart
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
