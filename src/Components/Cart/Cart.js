import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import CartItem from "../CartItem/CartItem.js";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { setCartOpen } from "../../Redux/slices/appConfigSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const dispatch = useDispatch();
  const { isCartOpen } = useSelector((state) => state.app);
  const { carts } = useSelector((state) => state.products);
  const { addresses, isAuthenticated } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const cartTotal = () => {
    return carts?.reduce(function (total, item) {
      return (
        total +
        (item.productDefaultPrice.quantity || 1) *
        item.productDefaultPrice.price
      );
    }, 0);
  };

  // On Load Add Product In Cart From Local Storage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems"));
    if (cart) {
      dispatch({
        type: "ProductSlice/setCart",
        payload: cart,
      });
    }
  }, [dispatch]);

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
  }, [dispatch]);

  const checkoutHandler = () => {
    console.log("[isAuthenticated] => ", isAuthenticated);
    if (isAuthenticated) {
      dispatch(setCartOpen(false));
      navigate("/checkout");
    } else {
      toast.error("You Need To Login To Proceed Further", { position: "top-right" });
      dispatch(setCartOpen(false));
      navigate("/login");
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
            <div className="title">
              My<span style={{ marginLeft: "10px" }}>Cart</span>
            </div>
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
              key={index}
              id={product._id}
              name={product.name}
              imgUrl={
                product.productDetails.find(
                  (item) => item.sku === product.productDefaultPrice.sku
                )?.images[0].url || ""
              }
              price={product.productDefaultPrice.price}
              quantity={product.productDefaultPrice.quantity}
              sku={product.productDefaultPrice.sku}
              weight={product.productDefaultPrice.weight}
            />
          ))}
        </div>

        <div onClick={checkoutHandler} className="place__order">
          <h5>
            {carts.length} Items . {cartTotal()}
          </h5>
          <div>
            <h5 >CheckOut</h5>
            <ToastContainer
              position="top-right"
              autoClose={5000}
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
    </>
  );
}

export default Cart;
