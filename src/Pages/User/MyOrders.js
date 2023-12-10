import React, { Fragment, useState } from "react";
import "./MyOrder.scss";
import SideBar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";

const ProductList = ({ history }) => {

  let carts = useSelector((state) => state.products.carts);

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">My Orders</h1>
          <div className="order-section">
            <hr />
            <div className="order-list">
              {carts.map((data) => (
                <div key={data.id} className="order-item">
                  <div className="order-details">
                    <div className="order-info">
                      <p>Order Placed: {data.datePlaced}{" "}{"|"}</p>
                      <p>Total Price:  ₹{data.price} X ({data.quantity || 1}) ={" "}
                        {data.price * (data.quantity || 1)}
                        {" "}{"|"}</p>
                      <p>ORDER ID: {data.id}</p>
                    </div>
                    <div className="order-status">
                      <p>Status: {data.status}</p>
                    </div>
                  </div>
                  <div className="product">
                    <div className="product-details">
                      <div className="productname">
                        <p className="head-blog">{data.name}{" "}{data.quantity || 1}</p>
                      </div>
                    </div>
                    <div className="order-actions">
                      <button>View Invoice</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment >
  );
};

export default ProductList;
