import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import "./createcategory.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal2 from "sweetalert2";
import Button from "@mui/material/Button";
import Sidebar from "../Sidebar/Sidebar.js";
import Loader from "../../../Components/Loader/Loader";
import {
  createNewCategory,
  getCategoryDetails,
  setStatusResponse,
} from "../../../Redux/slices/categories";

function UpdateCategory() {
  const params = useParams();
  const navigate = useNavigate();
  const { success, category } = useSelector((state) => state.categories);
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
    if (category && category._id !== params.id) {
      dispatch(getCategoryDetails({ id: params.id }));
    } else {
      setName(category.name);
      setImg(category.image.url);
    }

    if (success) {
      swal2.fire({
        title: "Category Updated Succesfully",
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
        {isLoading ? (
          <Loader />
        ) : (
          <section id="add_product_area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="add_product_wrapper">
                    <h4>Add Category</h4>
                    <form
                      className="add_product_form"
                      onSubmit={handleSubmitForm}
                    >
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="image-input">
                            {img && (
                              <img
                                src={img}
                                className="image-preview"
                                alt="img"
                              />
                            )}
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
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="fotm-group">
                            <label htmlFor="product_name">
                              Category Name
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="product_name"
                              className="form-control"
                              placeholder="Category Title here"
                              value={name}
                              required
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="btn_right_table">
                            <button
                              className="theme-btn-one bg-black btn_sm"
                              type="submit"
                            >
                              Update Category
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
        )}
      </div>
    </Fragment>
  );
}

export default UpdateCategory;
