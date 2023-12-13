import React, { Fragment, useEffect, useState } from "react";
import "./Createcategory.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import swal2 from "sweetalert2";
import Sidebar from "../Sidebar/Sidebar.js";
import Loader from "../../../Components/Loader/Loader.js";
import {
  createNewCategory,
  setStatusResponse,
} from "../../../Redux/slices/categories";

function CreateCategory() {
  const navigate = useNavigate();
  const { success } = useSelector((state) => state.categories);
  const { isLoading } = useSelector((state) => state.app);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useDispatch();

  const createProductImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (success) {
      swal2.fire({
        title: "Category Created Succesfully",
        icon: "success",
      });
      dispatch(setStatusResponse(false));
      navigate("/admin");
    }
  }, [success]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      createNewCategory({
        name,
        categoryIMG: img,
      })
    );
  };

  return (
    <Fragment>
      <div className="dashboard">
        <Sidebar />
        <form
          className="add_product_form"
          onSubmit={handleSubmitForm}
        >
          <p className="sec-head sec-head-ul title1">Create Category</p>
          <div className="row">
            <div className="col-lg-12">
              <div className="image-input">
                <input
                  onChange={createProductImage}
                  type="file"
                  accept="image/*"
                  id="imageInput"
                />
                <label
                  htmlFor="imageInput"
                  className="image-button"
                >
                  <i className="fa fa-image"></i>Choose image
                </label>
                {img && (
                  <img
                    src={img}
                    className="image-preview"
                    alt="img"
                  />
                )}
              </div>
            </div>
            <div className="fot-group">
              <label htmlFor="product_name">
                Category Name
                <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="product_name"
                className="form-control"
                placeholder="Category Title here"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="col-lg-12">
              <div className="btn_right_table">
                <button
                  className="theme-btn-one bg-black btn_sm"
                  type="submit"
                >
                  Add Category
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default CreateCategory;
