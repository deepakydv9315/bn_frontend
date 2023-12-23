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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.success("Category Created Succesfully", { position: "top-right" });
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
          <h3 className="adminhead">Create<span> Category</span></h3>
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
    </Fragment>
  );
}

export default CreateCategory;
