import React from "react";
import "./CarItem.scss";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";

function CartItem({ name, imgUrl, quantity, sku, price, id, weight }) {
  const dispatch = useDispatch();

  const updateCart = (id, sign) => {
    dispatch({
      type: "ProductSlice/updateCart",
      payload: { val: Number(quantity) + (sign === "+" ? 1 : -1), sku, id },
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
            <h5>₹{price * quantity || 1}</h5>

            <div className="function">
              <span onClick={() => updateCart(id, "-")}>-</span>
              <span>{quantity}</span>
              <span onClick={() => updateCart(id, "+")}>+</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
