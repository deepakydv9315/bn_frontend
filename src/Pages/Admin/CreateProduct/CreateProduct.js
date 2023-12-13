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
import { PhpRounded } from "@mui/icons-material";
// import { useAlert } from "react-alert";

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

    dispatch(
      createProduct({
        name: productData.name,
        description: productData.description,
        categories: productData.category,
        flavour: productData.flavour,
        images: [],
        price: productData.price,
        stok: productData.stock,
        sku: productData.sku,
        weightPrice: productData.weightPrice,
        longDescription: productData.longDescription,
        discountedPrice: productData.discountedPrice,
      })
    );
  };

  useEffect(() => {
    console.log("[Product Data] => ", productData);
  }, [productData]);
  useEffect(() => {
    console.log("[Product Details] => ", productDetails);
  }, [productDetails]);

  useEffect(() => {
    if (success) {
      Swal.fire("Success", message, "success");
      dispatch(setStatusResponse());
      navigate("/admin");
    } else if (error) {
      Swal.fire("Error", error, "error");
      dispatch(setStatusResponse());
    }
    dispatch(getCategories());
  }, [dispatch, success, error, navigate, message]);

  // ! I Think It Can Be Removed or Replace with short Logic
  const addWeightPrice = (e) => {
    const newField = {
      weight: productData.weight,
      price: productData.price,
      sku: productData.sku,
      id: new Date(),
    };
    /* const newArr = [...weightPrice, newField];
    setWeightPrice(newArr);
    setPrice("");
    setWeight("");
    setWidth("");
    setLength("");
    setSKU("");
    setHeight(""); */
  };

  // ? Function Use to Store Common Data
  const handleChange = (e, type) => {
    if (type === "productDetails") {
      setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    } else {
      setProductData({ ...productData, [e.target.name]: e.target.value });
    }
  };

  const removeWeightPrice = (id) => {
    /* const newArr = weightPrice.filter((item) => item.id !== id);
    setWeightPrice(newArr); */
  };

  const createProductImagesChange = (e) => {
    e.preventDefault();
    const files = Array.from(e.target.files);
    let images = [...productDetails.images]; // Copy existing images
    let imagePreview = [...imagesPreview]; // Copy existing previews

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          imagePreview.push(reader.result);
          images.push(file);
        }
      };

      reader.readAsDataURL(file);
    });

    console.log("Images => ", imagePreview);

    setProductDetails((old) => ({ ...old, images: images }));
    setImagesPreview(imagePreview);
  };

  return (
    <Fragment>
      <div className="dashboard">
        <Sidebar />
        <form
          className="add_product_form"
          onSubmit={createProductSubmitHandler}
        >
          <p>Create Product</p>
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
                  {categories.map((item, index) => (
                    <option key={item._id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
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
                      onChange={(e) => createProductImagesChange(e)}
                      type="file"
                      accept="image/*"
                      id="imageInput"
                    />
                    <label htmlFor="imageInput" className="cp-img-pw ">
                      {/* Choose image */}
                      {imagesPreview.length === 0 && (
                        <img
                          src={imagesPreview[0]}
                          className="img-pw"
                          alt="img"
                        />
                      )}
                    </label>
                  </div>

                  <div className="image-input">
                    <input
                      onChange={(e) => createProductImagesChange(e)}
                      type="file"
                      accept="image/*"
                    />
                    <label htmlFor="imageInput" className="cp-img-pw ">
                      {/* Choose image */}
                      {imagesPreview.length > 1 && (
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
                      onChange={(e) => createProductImagesChange(e)}
                      type="file"
                      accept="image/*"
                    />
                    <label htmlFor="imageInput" className="cp-img-pw ">
                      {/* Choose image */}
                      {imagesPreview.length > 2 && (
                        <img
                          src={imagesPreview[2]}
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
                    onClick={addWeightPrice}
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

            <div className="cp-row">
              {/* short des  */}
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
            </div>

            <div className="cp-row">
              {/* long des  */}
              <div className="cp-input-group">
                <label htmlFor="product_desc">Long Description</label>
                <textarea
                  rows={5}
                  cols={12}
                  className="cp-dec"
                  name="longDescription"
                  placeholder="Enter Long Description"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="cp-row">
              <div className="btn_right_table">
                <button type="submit" className="theme-btn-one bg-black btn_sm">
                  Add Product
                </button>
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
