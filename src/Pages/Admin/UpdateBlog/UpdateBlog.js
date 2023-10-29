import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getBlogDetails,
    setStatusResponse,
    updateBlog,
} from "../../../Redux/slices/blogSlice";
import Sidebar from "../Sidebar/Sidebar.js";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";

function UpdateBlog() {

const navigate = useNavigate();
const { id } = useParams();
const dispatch = useDispatch();
const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [images, setImages] = useState([]);
const { success, error, message } = useSelector((state) => state.blogs);
const { isLoading } = useSelector((state) => state.app);
const { blog } = useSelector((state) => state.blogs);

const updateBlogSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateBlog({
        title,
        content,
        blogIMG: images,
        _id: id,
    }))
};


useEffect(() => {
  if (blog && blog._id !== id) {
    dispatch(getBlogDetails({ id: id }));
  } 
  else {
    setTitle(blog.title);
    setContent(blog.content);
    setImages(blog.image.url);
  }

    if (success) {
        Swal.fire("Success", message, "success");
        dispatch(setStatusResponse(false));
        navigate("/admin");
    } else if (error) {
        Swal.fire("Error", error, "error");
        dispatch(setStatusResponse());
        navigate("/admin");
    }

}, [dispatch, success, error, blog, id, message, navigate]);

const updateBlogImagesChange = (e) => {
  const file = e.target.files[0];

  const reader = new FileReader();

  reader.onload = () => {
    if (reader.readyState === 2) {
      setImages(reader.result);
    }
  };

  reader.readAsDataURL(file);
  };

return(
    <Fragment>
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
                      <h4>Update Blog</h4>
                      <form
                        className="add_product_form"
                        onSubmit={updateBlogSubmitHandler}
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
                              onChange={updateBlogImagesChange}
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
                                Update Blog
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
    </Fragment>
)
}

export default UpdateBlog;