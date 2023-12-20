import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal2 from "sweetalert2";
import "./Coupon.scss";
import Sidebar from "../Sidebar/Sidebar";
import { createCoupon, setStatusResponse } from "../../../Redux/slices/utilsSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateCoupon() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [couponNumber, setCouponNumber] = useState("");
  const [discount, setDiscount] = useState(0);
  const [applyrate, setApplyRate] = useState(0);
  const { success, error } = useSelector((state) => state.utils);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(createCoupon({ couponNumber: couponNumber, discount: discount, applyRate: applyrate }));
  };

  useEffect(() => {
    if (success) {
      toast.success("Coupon Created Succesfully", { position: "top-right" });
      dispatch(setStatusResponse(false));
      navigate("/admin");
    } else if (error) {
      toast.error("Coupon Didn't Created Succesfully", { position: "top-right" });
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
                  <h3 className="adminhead">Add<span>Coupon</span></h3>
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
                        <div className="fotm-group">
                          <label htmlFor="product_price">
                            Minimum Apply Rate <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            id="product_price"
                            className="form-control"
                            placeholder="Apply Rate In Ruppees"
                            required
                            onChange={(e) => setApplyRate(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <br></br><br></br>
                        <div className="btn_right_table">
                          <button
                            className="theme-btn-one bg-black btn_sm"
                            type="submit"
                          >
                            Add Coupon
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
      </div>
    </Fragment>
  );
}

export default CreateCoupon;
