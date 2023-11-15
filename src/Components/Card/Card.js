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
  // const dispatch = useDispatch();

  // const { product, productDefaultPrice } = useSelector((state) => {
  //   console.log("Data inside Satate : ", state);
  //   return state.products;
  // });
  // // const [price, setPrice] = useState("");
  // const [weight, setWeight] = useState("");

  // const addToCart = () => {
  //   console.log("Price : ", price, typeof price);
  //   if (typeof price === "string" && parseInt(price) > 0) {
  //     dispatch({
  //       type: "ProductSlice/addToCart",
  //       payload: { id: product._id, price, weight, quantity },
  //     });
  //     setIsAddedOnCart(true);
  //   } else {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "Please select a Weight And Flavour",
  //     });
  //   }
  // };

  // const handleGoToCart = () => {
  //   dispatch(setCartOpen(true));
  // };

  // const [isAddedOnCart, setIsAddedOnCart] = useState(false);
  const navigate = useNavigate();

  const handleImageClick = (_id) => {
    navigate(`/productdetails/${_id}`);
  };

  const PriceAndDiscount = (product) => {
    console.log(product);
    console.log(product.weightPrice);
    const maxPrice = Math.max(
      ...product.weightPrice.map((item) => parseInt(item.price))
    );

    const discountPrice = (maxPrice - 0.6 * maxPrice).toFixed(2);

    return { maxPrice, discountPrice };
  };

  return (
    <div className="Card">
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
            <div className="space">
              <p className="product-card-price">
                {`₹ ${PriceAndDiscount(product).discountPrice} (60% Off)`}
              </p>
              <button
                onClick={handleImageClick.bind(this, product._id)}
                className="he"
              >
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
