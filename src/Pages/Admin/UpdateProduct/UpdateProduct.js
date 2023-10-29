import React, { Fragment, useEffect, useState } from "react";
// import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductDetail,
  setStatusResponse,
  updateProduct,
} from "../../../Redux/slices/productSlice";
import Sidebar from "../Sidebar/Sidebar.js";
import Swal from "sweetalert2";
import { getCategories } from "../../../Redux/slices/categories";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import { RxCross1 } from "react-icons/rx";

function UpdateProduct() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [colour, setColour] = useState("");
  const [price, setPrice] = useState(0); 
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [stockSmall, setStockSmall] = useState("");
  const [stockMedium, setStockMedium] = useState("");
  const [stockLarge, setStockLarge] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const { success, error, message } = useSelector((state) => state.products);
  const { isLoading } = useSelector((state) => state.app);
  const { categories } = useSelector((state) => state.categories);
  const { product } = useSelector((state) => state.products);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        name,
        stockSmall,
        stockMedium,
        stockLarge,
        colour,
        description,
        // images,
        longDescription,
        category,
        subCategory,
        discountedPrice,
        price,
        _id: params.id,
      })
    );
  };

  const subCats = [
    "Kurti",
    "Lehnga",
    "Top",
  ];

  useEffect(() => {
    if (product && product._id !== params.id) {
      dispatch(getProductDetail({ id: params.id }));
      dispatch(getCategories());
    }
 
    if (product) {
      setName(product.name);
      setCategory(product.category);
      setSubCategory(product.subCategory);
      setStockSmall(product.stockSmall);
      setStockMedium(product.stockMedium);
      setStockLarge(product.stockLarge);
      setColour(product.colour);
      setPrice(product.price);
      setDiscountedPrice(product.discountedPrice);
      setImages(product.images);
      setImagesPreview(product.images);
      setDescription(product.description);
      setLongDescription(product.longDescription);
    }

    if (success) {
      Swal.fire("Success", message, "success");
      dispatch(setStatusResponse());
      navigate("/admin");
    } else if (error) {
      Swal.fire("Error", error, "error");
      dispatch(setStatusResponse());
    }
  }, [dispatch, success, error, product]);

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
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
                      <h4>Update Product</h4>
                      <form
                        className="add_product_form"
                        onSubmit={createProductSubmitHandler}
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="image-input">
                              {images?.length > 0 && (
                                <img
                                  src={images[0].url}
                                  className="image-preview"
                                  alt="img"
                                />
                              )}
                              <input
                                onChange={createProductImagesChange}
                                type="file"
                                accept="image/*"
                                id="imageInput"
                                multiple
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
                                Product Name
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                id="product_price"
                                className="form-control"
                                placeholder="Product Name"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                          </div>

                          {/* product categories  */}
                          <div className="col-lg-3">
                            <div className="fotm-group">
                              <label htmlFor="product_price">
                                Category
                                <span className="text-danger">*</span>
                              </label>
                              <select
                                className="form-control"
                                onChange={(e) => setCategory(e.target.value)}
                                value={category}
                              >
                                <option>---Select Category---</option>
                                {categories.map((item, index) => (
                                  <option key={item._id} value={item.name}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <div className="fotm-group">
                              <label htmlFor="product_price">
                                Sub-Category
                                <span className="text-danger">*</span>
                              </label>
                              <select
                                className="form-control"
                                onChange={(e) => setSubCategory(e.target.value)}
                                value={subCategory}
                              >
                                <option>---Select Sub-Category---</option>
                                {subCats.map((item) => (
                                  <option key={item} value={item}>
                                    {item}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          {/* product stock */}
                          <div className="col-lg-3">
                            <div className="fotm-group">
                              <label htmlFor="product_price">
                                Stock
                                <span className="text-danger">*</span>
                              </label>
                              <select
                                className="form-control"
                                onChange={(e) => setStockSmall(e.target.value)}
                                value={stockSmall}
                              >
                                <option>---Select Stock for Small Size---</option>
                                <option>In Stock</option>
                                <option>Out Of Stock</option>
                              </select>

                              <select
                                className="form-control"
                                onChange={(e) => setStockMedium(e.target.value)}
                                value={stockMedium}
                              >
                                <option>---Select Stock for Medium size---</option>
                                <option>In Stock</option>
                                <option>Out Of Stock</option>
                              </select>

                              <select
                                className="form-control"
                                onChange={(e) => setStockLarge(e.target.value)}
                                value={stockLarge}
                              >
                                <option>---Select Stock for Large Size---</option>
                                <option>In Stock</option>
                                <option>Out Of Stock</option>
                              </select>
                            </div>
                          </div>


                          <div className="col-lg-5">
                            <div className="fotm-group">
                              <label htmlFor="product_price">
                                Product Colour
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                id="product_price"
                                className="form-control"
                                value={colour}
                                placeholder="Ex. Red/Green/Blue/etc..."
                                required
                                onChange={(e) => setColour(e.target.value)}
                              />
                            </div>
                          </div>


                          {/* Product price  */}
                          <div className="col-lg-3">
                            <div className="fotm-group">
                              <label htmlFor="product_price">
                                Price
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="number"
                                id="product_price"
                                className="form-control"
                                value={price}
                                placeholder="Product Discounted Price"
                                onChange={(e) => setPrice(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <div className="fotm-group">
                              <label htmlFor="product_price">
                                Discounted Price
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="number"
                                id="product_price"
                                className="form-control"
                                value={discountedPrice}
                                placeholder="Product Discounted Price"
                                onChange={(e) => setDiscountedPrice(e.target.value)}
                              />
                            </div>
                          </div>

                          {/* short des  */}
                          <div className="col-lg-6">
                            <div className="fotm-group">
                              <label htmlFor="product_price">
                                Short Description
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                id="product_price"
                                className="form-control"
                                placeholder="Product Description"
                                required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
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
                                Long Description
                                <span className="text-danger">*</span>
                              </label>
                              <textarea
                                rows={5}
                                cols={12}
                                value={longDescription}
                                placeholder="Enter Long Description"
                                onChange={(e) =>
                                  setLongDescription(e.target.value)
                                }
                              />
                            </div>
                          </div>

                          <div id="createProductFormImage">
                            {imagesPreview?.map((image, index) => (
                              <img
                                key={index}
                                src={image.url}
                                alt="Product Preview"
                              />
                            ))}
                          </div>

                          <div className="col-lg-12">
                            <div className="btn_right_table">
                              <button type="submit" className="theme-btn-one bg-black btn_sm">
                                Update Product
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
  );
}

export default UpdateProduct;
