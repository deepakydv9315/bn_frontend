import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import "./createcategory.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import swal2 from "sweetalert2";
import Button from "@mui/material/Button";
import Sidebar from "../Sidebar/Sidebar";
import { createCoupon, setStatusResponse } from "../../../Redux/slices/utilsSlice";

// import { createPincode, setStatus } from "../../app/slices/utils";

function CreateCoupon() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [couponNumber, setCouponNumber] = useState("");
  const [discount, setDiscount] = useState(0);

  const { success, error } = useSelector((state) => state.utils);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(createCoupon({ couponNumber, discount }));
  };

  useEffect(() => {
    if (success) {
      swal2.fire({
        title: "Coupon Created Succesfully",
        icon: "success",
      });
      dispatch(setStatusResponse(false));
      navigate("/admin");
    } else if (error) {
      swal2.fire({
        title: "Coupon Didn't Created Succesfully",
        icon: "error",
        text: error,
      });
      dispatch(setStatusResponse(false));
    }
  }, [dispatch, success, error]);

  return (
    <Fragment>
      <div className="dashboard">
        <Sidebar />
        <section id="add_product_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="add_product_wrapper">
                  <h4>Add Coupon</h4>
                  <form
                    className="add_product_form"
                    onSubmit={handleSubmitForm}
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="fotm-group">
                          <label htmlFor="product_price">
                            Coupon Code <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product_price"
                            className="form-control"
                            placeholder="Coupon Code"
                            required
                            onChange={(e) => setCouponNumber(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="fotm-group">
                          <label htmlFor="product_price">
                            Discount <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            id="product_price"
                            className="form-control"
                            placeholder="Discount In Percentage Only"
                            required
                            onChange={(e) => setDiscount(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="btn_right_table">
                          <button
                            className="theme-btn-one bg-black btn_sm"
                            type="submit"
                          >
                            Add Coupon
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default CreateCoupon;
