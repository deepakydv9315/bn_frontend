import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import CartItem from "../CartItem/CartItem.js";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { setCartOpen } from "../../Redux/slices/appConfigSlice";


function Cart() {
  const dispatch = useDispatch();
  const { isCartOpen } = useSelector((state) => state.app);
  const { carts } = useSelector((state) => state.products);
  const { addresses, isAuthenticated } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const cartTotal = () => {
    return carts?.reduce(function (total, item) {
      return total + (item.quantity || 1) * item.price;
    }, 0);
  };

  // CLOSE CART
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const cartElement = document.querySelector(".Cart");
      if (cartElement && !cartElement.contains(event.target)) {
        dispatch(setCartOpen(false));
      }
    };

    const handlePageUnload = () => {
      dispatch(setCartOpen(false));
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("beforeunload", handlePageUnload);
  }, []);

  const checkoutHandler = () => {
    if (isAuthenticated) {
      dispatch(setCartOpen(false));
      navigate("/checkout");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You Need To Login To Proceed Further",
      });
      dispatch(setCartOpen(false));
      navigate("/auth");
    }
  };

  const handleClearCart = () => {
    dispatch({
      type: "ProductSlice/clearCart",
    });
  };

  return (
    <>
      <div className={`Cart flex_center ${isCartOpen ? "active" : ""}`}>
        <div className="top__cart-section">
          <h5></h5>
          <RxCross1 onClick={() => dispatch(setCartOpen(false))} />
        </div>

        <div className="cart__del-info">
          <div className="left__info">
            <div className="title">My <span>Cart</span></div>
            <p className="p-text">{carts.length} Items</p>
          </div>

          <div className="right__opt">
            
            <button
              onClick={() => handleClearCart()}
              className="theme-btn-one btn-black-overlay btn_sm"
            >
              Clear Cart
            </button>
          </div>
        </div>

        <div className="item__container">
          {carts.map((product, index) => (
            <CartItem
              id={product._id}
              name={product.name}
              imgUrl={product.images[0].url}
              price={product.price}
              quantity={product.quantity}
              weight={product.weight}
            />
          ))}
        </div>

        <div onClick={checkoutHandler} className="place__order">
          <h5>
            {carts.length} Items . {cartTotal()}
          </h5>
          <h5>CheckOut</h5>
        </div>
      </div>
    </>
  );
}

export default Cart;