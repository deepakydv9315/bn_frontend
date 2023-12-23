import React, { Fragment, useEffect, useState } from "react";
// import "./createcategory.css";
import { useSelector, useDispatch } from "react-redux";
import swal2 from "sweetalert2";
import Sidebar from "../Sidebar/Sidebar.js";
import {
  createPincode,
  setStatusResponse,
} from "../../../Redux/slices/utilsSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreatePincode() {
  const dispatch = useDispatch();
  const [pinCode, setPincode] = useState("");

  const { success, error } = useSelector((state) => state.utils);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(createPincode({ pincode: pinCode }));
  };

  useEffect(() => {
    if (success) {
      toast.success("Pincode Created Succesfully", { position: "top-right" });
      setStatusResponse(false);
    } else if (error) {
      toast.error("Pincode Didn't Created Succesfully", { position: "top-right" });
      setStatusResponse(false);
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
                  <h3 className="adminhead">Add<span> Pincode</span></h3 >
                  <form
                    className="add_product_form"
                    onSubmit={handleSubmitForm}
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="fotm-group">
                          <label htmlFor="product_price">
                            Pincode <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product_price"
                            className="form-control"
                            placeholder="Pincode"
                            required
                            onChange={(e) => setPincode(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="btn_right_table">
                          <button
                            className="theme-btn-one bg-black btn_sm"
                            type="submit"
                          >
                            Add Pincode
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

export default CreatePincode;
