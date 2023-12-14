import React, { Fragment, useEffect, useState } from "react";
import "./HeaderOffer.scss"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal2 from "sweetalert2";
import Sidebar from "../Sidebar/Sidebar.js";
import Loader from "../../../Components/Loader/Loader";
import { createAndUpdateHeader } from "../../../Redux/slices/utilsSlice";

function HeaderOffer() {
  const navigate = useNavigate();
  const { success } = useSelector((state) => state.categories);
  const { isLoading } = useSelector((state) => state.app);
  const [Headline, setHeadline] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      swal2.fire({
        title: "Category Created Succesfully",
        icon: "success",
      });
      navigate("/admin");
    }
  }, [success]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      createAndUpdateHeader({
        Headline: Headline,
      })
    );
  };

  return (
    <Fragment>
      <div className="dashboard">
        <Sidebar />
        {isLoading ? (
          <Loader />
        ) : (
          <form className="add_product_form" onSubmit={handleSubmitForm}>
            <div>
              <h3 className="adminhead">Add<span>Header</span> Offer</h3>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <br />  <br />
                <div className="form-group">
                  <label for="product_name">Header Offer <span className="text-danger">*</span></label>
                  <textarea
                    className="form-control"
                    placeholder="Offer here"
                    required
                    onChange={(e) => setHeadline(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="btn_right_table">
                  <button className="theme-btn-one bg-black btn-sm" type="submit">Create Offer</button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </Fragment>
  );
}

export default HeaderOffer;
