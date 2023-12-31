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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateProduct() {
  const params = useParams();
  const navigate = useNavigate();
  // const alert = useAlert();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [flavour, setFlavour] = useState("");
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stockSmall, setStockSmall] = useState(0);
  const [images, setImages] = useState([]);
  const [sku, setSKU] = useState("");
  const [weightPrice, setWeightPrice] = useState([]);
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
        description,
        images,
        length,
        width,
        height,
        sku,
        weightPrice: weightPrice,
        longDescription,
        category,
        flavour,
        discountedPrice,
        price,
        _id: params.id,
      })
    );
  };

  useEffect(() => {
    if (product && product._id !== params.id) {
      dispatch(getProductDetail({ id: params.id }));
      dispatch(getCategories());
    }

    if (product) {
      setName(product.name);
      setCategory(product.category);
      setStockSmall(product.stockSmall);
      setPrice(product.price);
      setDiscountedPrice(product.discountedPrice);
      setImages(product.images);
      setImagesPreview(product.images);
      setDescription(product.description);
      setLongDescription(product.longDescription);
    }

    if (success) {
      toast.success("Success", { position: "top-right" });
      dispatch(setStatusResponse());
      navigate("/admin");
    } else if (error) {
      toast.error("Error", { position: "top-right" });
      dispatch(setStatusResponse());
    }
  }, [dispatch, success, error, product]);

  const addWeightPrice = (e) => {
    e.preventDefault();
    const newField = {
      weight: weight,
      price: price,
      width: width,
      length: length,
      sku: sku,
      height: height,
      id: new Date(),
    };
    const newArr = [...weightPrice, newField];
    setWeightPrice(newArr);
    setPrice("");
    setWeight("");
    setWidth("");
    setLength("");
    setSKU("");
    setHeight("");
  };

  const removeWeightPrice = (id) => {
    const newArr = weightPrice.filter((item) => item.id !== id);
    setWeightPrice(newArr);
  };

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
                    <h4>Update<span> Product</span></h4>
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
                            <label>
                              Flavour
                              <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-control"
                              onChange={(e) => setFlavour(e.target.value)}
                            >
                              <option>---Select Flavour---</option>
                              <option>Coffee</option>
                              <option>Chocolate Caramel</option>
                              <option>Unflavoured</option>
                              <option>Blueberry Muffin</option>
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
                              <option>---Select Stock---</option>
                              <option>In Stock</option>
                              <option>Out Of Stock</option>
                            </select>
                          </div>
                        </div>

                        {/* ---------  */}
                        <div className="col-lg-3">
                          <div className="fotm-group">
                            <label htmlFor="product_price">
                              Weight
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="product_price"
                              className="form-control"
                              value={weight}
                              placeholder="Product weight"
                              onChange={(e) => setWeight(e.target.value)}
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
                              placeholder="Product Price"
                              onChange={(e) => setPrice(e.target.value)}
                            />
                          </div>
                        </div>

                        {/* Product Height */}
                        <div className="col-lg-3">
                          <div className="fotm-group">
                            <label htmlFor="product_price">
                              Product Height
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="product_price"
                              className="form-control"
                              placeholder="Product Height"
                              value={height}
                              onChange={(e) => setHeight(e.target.value)}
                            />
                          </div>
                        </div>

                        {/* Product Length */}
                        <div className="col-lg-3">
                          <div className="fotm-group">
                            <label htmlFor="product_price">
                              Product Length
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="product_price"
                              className="form-control"
                              placeholder="Product Length"
                              value={length}
                              onChange={(e) => setLength(e.target.value)}
                            />
                          </div>
                        </div>

                        {/* Product Width */}
                        <div className="col-lg-3">
                          <div className="fotm-group">
                            <label htmlFor="product_price">
                              Product Width
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="product_price"
                              className="form-control"
                              placeholder="Product Width"
                              value={width}
                              onChange={(e) => setWidth(e.target.value)}
                            />
                          </div>
                        </div>

                        {/* Product SKU */}
                        <div className="col-lg-3">
                          <div className="fotm-group">
                            <label htmlFor="product_price">
                              Product SKU
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="product_price"
                              className="form-control"
                              placeholder="Product SKU"
                              value={sku}
                              onChange={(e) => setSKU(e.target.value)}
                            />
                          </div>
                        </div>

                        {/* add price and weight btn  */}
                        <div className="col-lg-3 add_price-btn ">
                          <div className="form-group">
                            <button style={{ marginLeft: "10%", width: "100px", marginTop: "30px" }}
                              className="theme-btn-one btn_sm"
                              onClick={addWeightPrice}
                            >Add Weight
                            </button>
                          </div>
                        </div>

                        <div className="col-lg-12 add_price-screen" style={{ marginLeft: "20%", marginTop: "15px" }}>
                          {weightPrice?.map((item, index) => (
                            <span key={index}>
                              {item.price}₹ - {item.weight} - {item.length} -{" "}
                              {item.width} - {item.height} - {item.sku}
                              <RxCross1
                                onClick={() => removeWeightPrice(item.id)}
                              />
                            </span>
                          ))}
                        </div>

                        {/* <div className="col-lg-3">
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
                              onChange={(e) =>
                                setDiscountedPrice(e.target.value)
                              }
                            />
                          </div>
                        </div> */}

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
                            <button
                              type="submit"
                              className="theme-btn-one bg-black btn_sm"
                            >
                              Update Product
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
        )}
      </div>
    </Fragment>
  );
}

export default UpdateProduct;
