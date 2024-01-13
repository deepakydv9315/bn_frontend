import React, { useState, useEffect } from "react";
import { validateCoupon } from "../../Redux/slices/orderSlice";
import { placeOrder } from "../../Redux/slices/orderSlice";
import "./Ship.scss";
import "./address.css";
import "./Shipping.css";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../Redux/slices/user";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Ship = () => {
  let carts = useSelector((state) => state.products.carts);
  const [coupon, setCoupon] = React.useState("");
  const { user } = useSelector((state) => state.user);
  const [selectAddress, setSelectAddress] = React.useState(0);
  const [isApplied, setApplied] = React.useState(null);
  const [isAddressSaved, setAddressSaved] = useState(false);
  const [couponDetail, setCouponDetail] = React.useState({
    code: "",
    minRate: 0,
    percent: 0
  });

  // Instead of maintaining a separate 'order' state, we use 'billingInfo' directly
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "India",
    notes: "",
    orderDetails: {
      products: [],
      total: 0,
    },
  });

  const dispatch = useDispatch();

  const cartTotal = () => {
    return carts?.reduce(function (total, item) {
      const itemTotal = (item.productDefaultPrice.quantity || 1) * item.productDefaultPrice.price;
      return total + itemTotal;
    }, 0)?.toFixed(1);
  };

  const handleChange = (e) => {
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
  };

  const handleOptionChange = (e) => {
    setSelectAddress(parseInt(e.target.value));
    if (parseInt(e.target.value) === 0) {
      let newOrder = JSON.parse(JSON.stringify(billingInfo));
      newOrder.name = "";
      newOrder.email = "";
      newOrder.phone = "";
      newOrder.mobile = "";
      newOrder.address = "";
      newOrder.country = "";
      newOrder.city = "";
      newOrder.state = "";
      newOrder.pincode = "";
      setBillingInfo(newOrder);
    } else {
      let newOrder = JSON.parse(JSON.stringify(billingInfo));
      newOrder.name = user?.shippingAddress[e.target.value - 1]?.name;
      newOrder.email = user?.shippingAddress[e.target.value - 1]?.email;
      newOrder.phone = user?.shippingAddress[e.target.value - 1]?.phone;
      newOrder.mobile = user?.shippingAddress[e.target.value - 1]?.mobile;
      newOrder.city = user?.shippingAddress[e.target.value - 1]?.city;
      newOrder.state = user?.shippingAddress[e.target.value - 1]?.state;
      newOrder.address = user?.shippingAddress[e.target.value - 1]?.address;
      newOrder.country = user?.shippingAddress[e.target.value - 1]?.country;
      newOrder.pincode = user?.shippingAddress[e.target.value - 1]?.pincode;
      setBillingInfo(newOrder);
    }
    console.log("order : ", billingInfo);
    console.log(selectAddress);
  };

  const handleSaveAddress = async (e) => {
    try {
      e.preventDefault();
      let userProfile = { ...user };
      userProfile.shippingAddress = [
        ...userProfile.shippingAddress,
        {
          name: billingInfo.name,
          email: billingInfo.email,
          phone: billingInfo.phone,
          mobile: billingInfo.phone,
          address: billingInfo.address,
          city: billingInfo.city,
          state: billingInfo.state,
          pincode: billingInfo.pincode,
          country: "India",
        },
      ];

      // Dispatch the updateUser action with the updated user profile
      await dispatch(updateUser(userProfile));

      setAddressSaved(true);

      toast.success('successfully added', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChangeCoupon = (e) => {
    setCoupon(e.target.value);
  };

  const HandleCoupon = async () => {
    try {
      const responseData = await dispatch(validateCoupon(coupon));

      if (responseData.payload.status === "error") {
        setApplied(false);
      } else {
        const { result } = responseData.payload;

        if (result) {
          const { couponNumber, applyRate, discount } = result;

          setCouponDetail((prevState) => ({
            ...prevState,
            code: couponNumber,
            minRate: applyRate,
            percent: discount,
          }));

          setApplied(cartTotal() >= couponDetail.percent ? true : false);
        } else {
          setCouponDetail((prevState) => ({
            ...prevState,
            code: "DefaultCouponCode",
            minRate: 0,
            percent: 0,
          }));

          // Optionally, you can show an error message to the user
          toast.error('Coupon details not found. Please try again.', {
            position: toast.POSITION.TOP_RIGHT,
          });

          // You can also update the 'applied' state accordingly, depending on your logic
          setApplied(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const applyDiscount = (subtotal) => {
    
    if (cartTotal() >= couponDetail.minRate) {
      const discountAmount = (subtotal * couponDetail.percent) / 100;
      return subtotal - discountAmount;
    } else {
      return subtotal;
    }
  };

  const handleShippingSubmit = async (e) => {
    try {
      e.preventDefault();

      const orderData = {
        ...billingInfo,
        total: applyDiscount(cartTotal()),
        coupon: couponDetail.code,
        discount: couponDetail.percent,
        products: carts,
        orderID: `BN-${Date.now()}`,
      };

      const responseData = await dispatch(placeOrder(orderData));

      if (responseData.payload.status === "error") {
        alert(responseData.payload.message);
      } else {
        setTimeout(() => {
          window.open(
            responseData.payload.data.instrumentResponse.redirectInfo.url,
            "_self"
          );
        }, 3000);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePlaceOrder = () => {
    // Show toast notification
    toast.success('Please Wait ! Redirecting to payment!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <section className="bn-sec checkout-wrapper">

        <div className="ship-address">
          <h5 className="ship-tittle">Ship to</h5>
          <form
            className="ship-form"
            onSubmit={(e) => handleShippingSubmit(e)}
          >
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="form-group">
                <label htmlFor="fname">Select from your saved addresses</label>
                <br />
                <select
                  className="dropdown"
                  name="shippingAddress"
                  value={selectAddress}
                  onChange={(e) => handleOptionChange(e)}
                >
                  <option key={0} value={0}>
                    Add New Address
                  </option>
                  {user &&
                    user?.shippingAddress &&
                    user?.shippingAddress?.map((item, index) => (
                      <option
                        key={index + 1}
                        value={index + 1}
                        className="selectedaddress"
                      >
                        {`${item.name}, ${item.address}, ${item.city}, ${item.state} - ${item.pincode}`}
                      </option>
                    ))}
                </select>

              </div>
            </div>

            <div className="input-group">
              <div className="input-label">Full Name*</div>
              <input
                type="text"
                name="name"
                value={billingInfo?.name.length > 0 ? billingInfo?.name : ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <div className="input-label">Phone Number*</div>
              <input
                type="text"
                name="phone"
                value={billingInfo?.phone.length > 0 ? billingInfo?.phone : ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <div className="input-label">Email*</div>
              <input
                type="text"
                name="email"
                value={billingInfo?.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <div className="input-label">Street Address*</div>
              <input
                type="text"
                name="address"
                value={billingInfo.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group ig">
              <div className="ig-1">
                <div className="input-label">State*</div>
                <input
                  type="text"
                  name="state"
                  value={billingInfo?.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ig-1">
                <div className="input-label">Pincode Code*</div>
                <input
                  type="text"
                  name="pincode"
                  value={billingInfo?.pincode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-group ig">
              <div className="ig-1">
                <div className="input-label">City*</div>
                <input
                  type="text"
                  name="city"
                  value={billingInfo?.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ig-1">
                <div className="input-label">Country*</div>
                <input type="text" value="India" required disabled />
              </div>
            </div>
            {/* <div className="input-group checkbox">
              <input type="checkbox" />
              <div>Save my Address</div>
            </div>
            <input type="submit" value={"Place Order"} className="ship-btn" /> */}

            {/* {isAddressSaved ? ( */}
            {(isAddressSaved && selectAddress !== 0) || selectAddress !== 0 || isAddressSaved ? (
              <>
                <button
                  style={{
                    textAlign: "center",
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  type="submit"
                  className="theme-btn-one btn-black-overlay btn_sm"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light" />
              </>
            ) : (
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    required=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                    onClick={(e) => handleSaveAddress(e)}
                  >
                    Save this information for next time
                  </label>
                </div>
                <br></br>
                <>
                  <button
                    style={{
                      textAlign: "center",
                      backgroundColor: "#000",
                      color: "#fff",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                    type="submit"
                    className="theme-btn-one btn-black-overlay btn_sm"
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </button>
                  <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />
                </>
                {/* <button
                  style={{ textAlign: "center" }}
                  onClick={(e) => handleSaveAddress(e)}
                  className="theme-btn-one btn-black-overlay btn_sm"
                >
                  Save Now
                </button>
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
                  closeButton={false} /> */}
              </div>
            )}

          </form>

        </div >
        <div className="ship-detail">
          <div className="ship-orders">
            <div className="order_review box-shadow bg-white">
              <div className="check-heading">
                <h3>Your Orders</h3>
              </div>
              {carts.length > 0 ? (
                <div className="form-group">
                  <label htmlFor="fname" style={{ marginTop: "20px" }}>
                    Coupon Code :
                  </label>
                  {isApplied === true
                    ? "Coupon Code Applied"
                    : isApplied === false
                      ? "Invalid Coupon Code"
                      : ""}
                  <input
                    type="text"
                    required={true}
                    className="form-control"
                    id="coupon"
                    placeholder="Enter Coupon Code"
                    name="coupon"
                    onChange={handleChangeCoupon}
                  />
                  <button
                    type="submit"
                    style={{ marginTop: "10px" }}
                    onClick={(e) => {
                      HandleCoupon(e);
                    }}
                    className="theme-btn-one btn-black-overlay btn_sm"
                  >
                    Validate
                  </button>
                </div>
              ) : null}

              <div className="table-responsive order_table">
                <table className="table">
                  <thead>
                    <tr>
                      <th style={{ color: "black" }}>Product</th>
                      <th style={{ color: "black" }}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((data) => (
                      <tr>
                        <td>
                          {data.name}
                          <span className="product-qty">
                            ({data.productDefaultPrice.quantity || 1})
                          </span>
                        </td>
                        <td>
                          ₹{data.productDefaultPrice.price} X (
                          {data.productDefaultPrice.quantity || 1}) ={" "}
                          {data.productDefaultPrice.price *
                            (data.productDefaultPrice.quantity || 1)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>SubTotal</th>
                      <td className="product-subtotal">₹{cartTotal()}0</td>
                    </tr>
                    <tr>
                      <th>Discount</th>
                      <td>
                        ₹
                        {couponDetail.percent > 0 &&
                          cartTotal() >= couponDetail.minRate
                          ? (cartTotal() * couponDetail.percent) / 100
                          : 0}

                      </td>
                    </tr>
                    <tr>
                      <th>Shipping</th>
                      <td>Free Shipping</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td className="product-subtotal">
                        ₹{applyDiscount(cartTotal())}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default Ship;
