import React, { Fragment, useEffect, useState } from "react";
import "./CreateProduct.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  createProduct,
  setStatusResponse,
} from "../../../Redux/slices/productSlice";
import Sidebar from "../Sidebar/Sidebar.js";
import Swal from "sweetalert2";
import { getCategories } from "../../../Redux/slices/categories";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useAlert } from "react-alert";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function NewProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // ? Need To Work Here
  
  const [productDetails, setProductDetails] = useState({
    sku: "",
    weight: 0,
    stock: "",
    images: [],
    mrPrice: 0,
    price: 0,
  });

  const [imagesPreview, setImagesPreview] = useState([]);

  const [productData, setProductData] = useState({
    name: "",
    productCategory: "",
    sellingCategory: "",
    productFlavour: "",
    productDetails: [],
    description: "",
    longDescription: "",
  });

  const { success, error, message } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  // ? Need to Work Here
  const createProductSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createProduct(productData));

    setProductData({
      name: "",
      productCategory: "",
      sellingCategory: "",
      productFlavour: "",
      productDetails: [],
      description: "",
      longDescription: "",
    });

    setProductDetails({
      sku: "",
      weight: 0,
      stock: "",
      images: [],
      mrPrice: 0,
      price: 0,
    });

    setImagesPreview([]);

    // ! Need To Work Here
    console.log(success);

    if (success) {
      toast.success("Product Added Successfully", { position: "top-right" });
      dispatch(setStatusResponse());
      navigate("/admin/products");
    } else if (error) {
      toast.error("Error Occured", { position: "top-right" });
      dispatch(setStatusResponse());
    }
  };

  // useEffect(() => {
  //   console.log("[Product Data] => ", productData);
  // }, [productData]);
  // useEffect(() => {
  //   console.log("[Product Details] => ", productDetails);
  // }, [productDetails]);
  // useEffect(() => {
  //   console.log("[Images Privew] => ", imagesPreview, imagesPreview.length);
  // }, [imagesPreview]);

  useEffect(() => {
    if (success) {
      toast.success("Success", { position: "top-right" });
      dispatch(setStatusResponse());
      navigate("/admin");
    } else if (error) {
      toast.error("Error Occured", { position: "top-right" });
      dispatch(setStatusResponse());
    }
    dispatch(getCategories());
  }, [dispatch, success, error, navigate, message]);

  // ! I Think It Can Be Removed or Replace with short Logic
  const addWeightPrice = (e) => {
    let prodcutDetail = [...productData.productDetails]; // Create a copy of the existing product details
    prodcutDetail.push(productDetails); // Add the new product detail
    setProductData({ ...productData, productDetails: prodcutDetail }); // Update the product data

    setProductDetails({
      sku: "",
      weight: 0,
      stock: "",
      images: [],
      mrPrice: 0,
      price: 0,
    });
    setImagesPreview([]);
  };

  // ? Function Use to Store Common Data
  const handleChange = (e, type) => {
    if (type === "productDetails") {
      setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    } else {
      setProductData({ ...productData, [e.target.name]: e.target.value });
    }
  };

  const removeWeightPrice = (sku) => {
    const newArr = productData.productDetails.filter(
      (item) => item.sku !== sku
    );
    setProductData({ ...productData, productDetails: newArr });
  };

  const createProductImagesChange = (e, index) => {
    console.log("index", index);
    if (index < 0 || index > 4) {
      console.log("Invalid index. Index must be between 0 and 3.");
      return;
    }

    const file = e.target.files[0];

    let imagePreview = JSON.parse(JSON.stringify(imagesPreview));

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        imagePreview[index] = reader.result;
        setProductDetails((preState) => ({
          ...preState,
          images: imagePreview,
        }));
        setImagesPreview(imagePreview);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <Fragment>
      <div className="dashboard">
        <Sidebar />
        <form
          className="add_product_form"
          onSubmit={(e) => createProductSubmitHandler(e)}
        >
          <h3 className="adminhead">
            Create<span> Product</span>
          </h3>
          <div className="row cp-wrapper">
            <div className="cp-row">
              {/* product name  */}
              <div className="cp-input-group">
                <label>Product Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Product Name"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* product categories  */}
              <div className="cp-input-group">
                <label>Product Category</label>
                <select
                  className="form-control"
                  name="productCategory"
                  onChange={handleChange}
                >
                  <option>--Select Category--</option>
                  {categories.map((item, index) => (
                    <option key={item._id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* product Selling categories  */}
              <div className="cp-input-group">
                <label>Selling Category</label>
                <select
                  className="form-control"
                  name="sellingCategory"
                  onChange={handleChange}
                >
                  <option>---Select Category---</option>

                  <option value="bestSelling">Best Selling</option>
                  <option value="newLaunch">New Launch</option>
                </select>
              </div>

              {/* product flavour  */}
              <div className="cp-input-group">
                <label>Product Flavour</label>
                <select
                  className="form-control"
                  name="productFlavour"
                  value={productData.flavour}
                  onChange={handleChange}
                >
                  <option value={"Select Flavour"}>---Select Flavour---</option>
                  <option value={"Coffee"}>Coffee</option>
                  <option value={"Chocolate Caramel"}>Chocolate Caramel</option>
                  <option value={"Unflavoured"}>Unflavoured</option>
                  <option value={"Blueberry Muffin"}>Blueberry Muffin</option>
                  <option value={"Red"}>Red</option>
                  <option value={"Black"}>Black</option>
                  <option value={"Blue"}>Blue</option>
                  <option value={"Orange"}>Orange</option>
                  <option value={"White"}>White</option>
                  <option value={"Yellow"}>Yellow</option>
                </select>
              </div>
            </div>

            {
              // ! Need To Work Here
            }
            <div className="cp-row-div">
              <div className="cp-row">
                {/* product sku  */}
                <div className="cp-input-group">
                  <label htmlFor="product_price">Product SKU</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product SKU"
                    name="sku"
                    value={productDetails.sku}
                    onChange={(e) => handleChange(e, "productDetails")}
                  />
                </div>

                {/* product_weight */}
                <div className="cp-input-group">
                  <label htmlFor="product_weight">Weight</label>
                  <input
                    type="text"
                    className="form-control"
                    value={productDetails.weight}
                    name="weight"
                    placeholder="Product weight"
                    onChange={(e) => handleChange(e, "productDetails")}
                  />
                </div>
                {/* Product stock  */}
                <div className="cp-input-group">
                  <label>Stock</label>
                  <select
                    className="form-control"
                    name="stock"
                    onChange={(e) => handleChange(e, "productDetails")}
                  >
                    <option value="">---Select Stock---</option>
                    <option value="In Stock">In Stock</option>
                    <option value="Out Of Stock">Out Of Stock</option>
                  </select>
                </div>
              </div>

              <div className="cp-row">
                {/* Product image  */}
                <div className="cp-img-wrapper">
                  <div className="image-input">
                    <input
                      onChange={(e) => createProductImagesChange(e, 0)}
                      type="file"
                      accept="image/*"
                      id="imageInputOne"
                      name="imageOne"
                    />
                    <label htmlFor="imageInputOne" className="cp-img-pw ">
                      {/* Choose image */}
                      {imagesPreview.length > 0 && (
                        <img
                          src={
                            imagesPreview.length > 0
                              ? imagesPreview[0]
                              : imagesPreview
                          }
                          className="img-pw"
                          alt="img"
                        />
                      )}
                    </label>
                  </div>

                  <div className="image-input">
                    <input
                      onChange={(e) => createProductImagesChange(e, 1)}
                      type="file"
                      accept="image/*"
                      id="imageInputTwo"
                      name="imageTwo"
                    />
                    <label htmlFor="imageInputTwo" className="cp-img-pw ">
                      {/* Choose image */}
                      {imagesPreview.length > 0 && (
                        <img
                          src={imagesPreview[1]}
                          className="img-pw"
                          alt="img"
                        />
                      )}
                    </label>
                  </div>

                  <div className="image-input">
                    <input
                      onChange={(e) => createProductImagesChange(e, 2)}
                      type="file"
                      accept="image/*"
                      id="imageInputThree"
                      name="imageThree"
                    />
                    <label htmlFor="imageInputThree" className="cp-img-pw ">
                      {/* Choose image */}
                      {imagesPreview.length > 1 && (
                        <img
                          src={imagesPreview[2]}
                          className="img-pw"
                          alt="img"
                        />
                      )}
                    </label>
                  </div>

                  <div className="image-input">
                    <input
                      onChange={(e) => createProductImagesChange(e, 3)}
                      type="file"
                      accept="image/*"
                      id="imageInputFour"
                      name="imageFour"
                    />
                    <label htmlFor="imageInputFour" className="cp-img-pw ">
                      {/* Choose image */}
                      {imagesPreview.length > 1 && (
                        <img
                          src={imagesPreview[3]}
                          className="img-pw"
                          alt="img"
                        />
                      )}
                    </label>
                  </div>
                </div>
              </div>

              <div className="cp-row">
                {/* MRP Product price  */}
                <div className="cp-input-group">
                  <label htmlFor="product_price">MRP Price</label>
                  <input
                    type="number"
                    name="mrPrice"
                    className="form-control"
                    value={productDetails.mrPrice}
                    placeholder="Product Discounted Price"
                    onChange={(e) => handleChange(e, "productDetails")}
                  />
                </div>

                {/* Selling Product price  */}
                <div className="cp-input-group">
                  <label htmlFor="product_price">Price</label>
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    value={productDetails.price}
                    placeholder="Product Discounted Price"
                    onChange={(e) => handleChange(e, "productDetails")}
                  />
                </div>

                {/* add price and weight btn  */}
                <div className="cp-input-group">
                  <button
                    className="theme-btn-one btn_sm"
                    type="button"
                    onClick={(e) => addWeightPrice(e)}
                  >
                    Add Weight
                  </button>
                </div>
              </div>
            </div>

            {
              // ? productData Short Will Show Here
            }
            <div
              className="col-lg-12 add_price-screen"
              style={{ marginLeft: "20%", marginTop: "15px" }}
            >
              {productData.productDetails?.map((item, index) => (
                <span key={index}>
                  {item.price}₹ - {item.weight} - {item.length} - {item.width} -{" "}
                  {item.height} - {item.sku}
                  <RxCross1 onClick={() => removeWeightPrice(item.id)} />
                </span>
              ))}
            </div>

            <div className="cp-row" style={{ alignItems: "flex-start" }}>
              <div className="cp-input-group">
                <label>Short Description</label>
                <input
                  type="text"
                  id="product_price"
                  className="form-control cp-dec"
                  placeholder="Product Description"
                  name="description"
                  required
                  onChange={handleChange}
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "1pc" }}
              >
                <label htmlFor="product_desc">Long Description</label>
                <ReactQuill
                  value={productData.longDescription}
                  onChange={(e) => {
                    setProductData({ ...productData, longDescription: e });
                  }}
                />
              </div>
              {/* <div className="cp-input-group">
                <textarea
                  rows={5}
                  cols={12}
                  className="cp-dec"
                  name="longDescription"
                  placeholder="Enter Long Description"
                  onChange={handleChange}
                />
              </div> */}
            </div>

            <div className="cp-row">
              <div className="btn_right_table">
                <button type="submit" className="theme-btn-one bg-black btn_sm">
                  Add Product
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
            {/* <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Product Preview"
                />
              ))}
            </div> */}
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default NewProduct;
