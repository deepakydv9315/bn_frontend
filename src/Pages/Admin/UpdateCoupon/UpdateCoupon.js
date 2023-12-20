import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import "./createcategory.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal2 from "sweetalert2";
import Button from "@mui/material/Button";
import Sidebar from "../Sidebar/Sidebar";
import Loader from "../../../Components/Loader/Loader";
import { updateCoupon, getCouponDetail, setStatusResponse } from "../../../Redux/slices/utilsSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateCoupon() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [couponNumber, setCouponNumber] = useState("");
    const [discount, setDiscount] = useState(0);
    const { success, error, message } = useSelector((state) => state.utils);
    const { isLoading } = useSelector((state) => state.app);
    const { coupon } = useSelector((state) => state.utils);

    const updateProductSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(updateCoupon({ 
            couponNumber,
            discount, 
            _id: id, }));
    };

    useEffect(() => {
        
        if(coupon && coupon._id !== id){ 
            dispatch(getCouponDetail({ id: id }));
        }

        if (coupon) {
            setCouponNumber(coupon.couponNumber);
            setDiscount(coupon.discount);
        }

        if (success) {
           
            toast.success("Coupon Updated Succesfully", { position: "top-right" });
            dispatch(setStatusResponse(false));
            navigate("/admin");
        } else if (error) {
           
            toast.error("Coupon Didn't Updated", { position: "top-right" });
            dispatch(setStatusResponse(false));
        }
    }, [dispatch, success, error, coupon]);

    return (
      <Fragment>
        <div className="dashboard">
          <Sidebar />
          {isLoading ? (
            <Loader />
          ) : (
            <section id="add_product_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="add_product_wrapper">
                  <h4>Update Coupon</h4>
                  <form
                    className="add_product_form"
                    onSubmit={updateProductSubmitHandler}
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
                            value={couponNumber}
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
                            value={discount}
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
                            Update Coupon
                          </button>
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
            )}
        </div>
      </Fragment>
    );
}

export default UpdateCoupon;