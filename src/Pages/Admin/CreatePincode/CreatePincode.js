import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import "./createcategory.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import swal2 from "sweetalert2";
import Button from "@mui/material/Button";
import Sidebar from "../Sidebar/Sidebar.js"; 
import {
  createPincode,
  setStatusResponse,
} from "../../../Redux/slices/utilsSlice";

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
      swal2.fire({
        title: "Pincode Created Succesfully",
        icon: "success",
      });
      setStatusResponse(false);
    } else if (error) {
      swal2.fire({
        title: "Pincode Didn't Created Succesfully",
        icon: "success",
        text: error,
      });
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
                  <h4>Add Pincode</h4>
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
