import React, { Fragment, useEffect, useState } from "react";
// import "./createcategory.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate  } from "react-router-dom";
import Swal from "sweetalert2";
import Sidebar from "../Sidebar/Sidebar.js"; 
import Loader from "../../../Components/Loader/Loader";
import {
  createBlog,
  setStatusResponse,
} from "../../../Redux/slices/blogSlice.js";

const CreateBlog = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [images, setImages] = useState([]);

    const { success, error, message } = useSelector((state) => state.blogs);
    const { isLoading } = useSelector((state) => state.app);

    const createBlogSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(
            createBlog({
              title,
              content,
              blogIMG: images,
            })
        );
    };

    useEffect(() => {
        if (success) {
          Swal.fire("Success", message, "success");
          dispatch(setStatusResponse(false));
          navigate("/admin");
        } else if (error) {
          Swal.fire("Error", error, "error");
          dispatch(setStatusResponse(true));
          navigate("/admin");
        }
      }, [success, error, message]);

      const createBlogImagesChange = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
    
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImages(reader.result);
          }
        };
    
        reader.readAsDataURL(file);
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
                  <h4>Create Blog</h4>
                  <form
                    className="add_product_form"
                    onSubmit={createBlogSubmitHandler}
                  >
                    <div className="row">
                    <div className="col-lg-12">
                          <div className="image-input">
                            {images && (
                              <img
                                src={images}
                                className="image-preview"
                                alt="img"
                              />
                            )}
                            <input
                              onChange={createBlogImagesChange}
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

                      <div className="col-lg-5">
                        <div className="fotm-group">
                          <label htmlFor="product_price">
                            Blog Title
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product_price"
                            className="form-control"
                            placeholder="Enter Blog Title"
                            value={title}
                            required
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div
                          className="fotm-group"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <label htmlFor="product_desc">
                            Blog Content
                            <span className="text-danger">*</span>
                          </label>
                          <textarea
                            rows={5}
                            cols={12}
                            value={content}
                            required
                            placeholder="Enter Blog Content"
                            onChange={(e) => setContent(e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="btn_right_table">
                          <button className="theme-btn-one bg-black btn_sm">
                            Create Blog
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
  )
}

export default CreateBlog