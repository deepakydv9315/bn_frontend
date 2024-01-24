import React, { Fragment, useState, useEffect } from "react";
import "./MyOrder.scss";
import SideBar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { getUserOrders } from "../../Redux/slices/user";

const ProductList = ({ history }) => {
  const [MyOrders, setMyOrders] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetching = async () => {
      const orders = await dispatch(getUserOrders());
      setMyOrders(orders.payload.result);
    };
    fetching();
  }, []);

  console.log(MyOrders);

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">My Orders</h1>
          <div className="order-section">
            <hr />
            <div className="order-list">
              {MyOrders.map((data) => (
                <div key={data.id} className="order-item">
                  <div className="order-details">
                    <div className="order-info">
                      <p>ORDER ID: {data.orderId}</p>
                    </div>
                    <div className="order-status">
                      <p>
                        Total Price: ₹{data.totalPrice}
                      </p>
                    </div>
                  </div>
                  <div className="product">
                    <div className="product-details">
                      <div className="productname">
                        <p className="head-blog">
                          {data.name} {data.quantity || 1}
                        </p>
                      </div>
                    </div>
                    <div className="order-actions">
                      {/* <button>View Invoice</button> */}
                    </div>
                    <div className="order-actions">
                      <a
                        href={`https://shiprocket.co/tracking/order/${data.orderId}?company_id=3946029`}
                        target="_blank"
                      >
                        <button>Track Order</button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
