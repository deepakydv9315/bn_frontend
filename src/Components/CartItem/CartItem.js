import React, { useState } from "react";
import "./CarItem.scss";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CartItem({ name, imgUrl, sku, price, id, weight, quantity }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    if ((quantity) >= 3) {
      toast.error("You can only add atmost 3 quantity", { position: "top-right" });
      return null;
    }

    dispatch({
      type: "ProductSlice/updateCart",
      payload: { val: Math.max(1, Number(quantity) + 1), sku, id },
    });
  };

  const updateCart = (sign) => {
    dispatch({
      type: "ProductSlice/updateCart",
      payload: {
        val: Math.max(1, Number(quantity) + (sign === "+" ? 1 : -1)),
        sku,
        id,
      },
    });
  };

  const removeCart = (id) => {
    dispatch({
      type: "ProductSlice/removeCart",
      payload: { id, sku },
    });
  };

  return (
    <>
      <div className="CartItem">
        <div className="Item-img">
          <img src={imgUrl} alt="Cart__item" />
        </div>

        <div className="item__info-fn">
          <h5>
            {name}
            <MdDeleteOutline onClick={() => removeCart(id)} />
          </h5>
          <p className="p-text">{weight}</p>

          <div className="price__functions">
            <h5>₹{Number((price * quantity || 1).toFixed(2))}</h5>

            <div className="function">
              <span onClick={() => updateCart(id)}>-</span>
              <span>{quantity}</span>
              <span onClick={() => addToCart(id)}>+</span>
              <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
