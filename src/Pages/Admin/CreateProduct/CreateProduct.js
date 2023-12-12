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
// import Loader from "../../../Components/Loader/Loader.js";
import { RxCross1 } from "react-icons/rx";
// import { useAlert } from "react-alert";

function NewProduct() {
  const navigate = useNavigate();
  // const alert = useAlert();
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    name: "",
    productCategory: "",
    sellingCategory: "",
    productFlavour: "",
    price: 0,
    weight: 0,
    sku: "",
    discountedPrice: 0,
    description: "",
    longDescription: "",
    stock: 0,
    images: [],
    weightPrice: [],
  });
  
  const [imagesPreview, setImagesPreview] = useState([]);
  const { success, error, message } = useSelector((state) => state.products);
  // const { isLoading } = useSelector((state) => state.app);
  const { categories } = useSelector((state) => state.categories);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();
    if (weightPrice.length > 0) {
      dispatch(
        createProduct({
          name,
          stock,
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
        })
      );
    } else {
      alert.error("Weight & Price Can't Be Empty !!");
    }
  };

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

  const addWeightPrice = (e) => {
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
                  id="product_price"
                  className="form-control"
                  placeholder="Product Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* product categories  */}
              <div className="cp-input-group">
                <label>Product Category</label>
                <select
                  className="form-control"
                  onChange={(e) => setCategory(e.target.value)}
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
                  onChange={(e) => setCategory(e.target.value)}
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
            <div className="cp-row-div">
              <div className="cp-row">
                {/* product sku  */}
                <div className="cp-input-group">
                  <label htmlFor="product_price">Product SKU</label>
                  <input
                    type="text"
                    id="product_price"
                    className="form-control"
                    placeholder="Product SKU"
                    value={sku}
                    onChange={(e) => setSKU(e.target.value)}
                  />
                </div>

                {/* product_weight */}
                <div className="cp-input-group">
                  <label htmlFor="product_weight">Weight</label>
                  <input
                    type="text"
                    id="product_weight"
                    className="form-control"
                    value={weight}
                    placeholder="Product weight"
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                {/* Product stock  */}
                <div className="cp-input-group">
                  <label>Stock</label>
                  <select
                    className="form-control"
                    onChange={(e) => setStock(e.target.value)}
                  >
                    <option>---Select Stock---</option>
                    <option>In Stock</option>
                    <option>Out Of Stock</option>
                  </select>
                </div>
              </div>

              <div className="cp-row">
                {/* Product image  */}
                <div className="cp-img-wrapper">
                  <div className="image-input">
                    <input
                      onChange={createProductImagesChange}
                      type="file"
                      accept="image/*"
                      id="imageInput"
                      multiple
                    />
                    <label htmlFor="imageInput" className="cp-img-pw ">
                      {/* Choose image */}

                      {images.length > 0 && (
                        <img src={images[0]} className="img-pw" alt="img" />
                      )}
                    </label>
                  </div>
                  <div className="image-input">
                    <input
                      onChange={createProductImagesChange}
                      type="file"
                      accept="image/*"
                      id="imageInput"
                      multiple
                    />
                    <label htmlFor="imageInput" className="cp-img-pw ">
                      {/* Choose image */}

                      {images.length > 0 && (
                        <img src={images[0]} className="img-pw" alt="img" />
                      )}
                    </label>
                  </div>
                  <div className="image-input">
                    <input
                      onChange={createProductImagesChange}
                      type="file"
                      accept="image/*"
                      id="imageInput"
                      multiple
                    />
                    <label htmlFor="imageInput" className="cp-img-pw ">
                      {/* Choose image */}

                      {images.length > 0 && (
                        <img src={images[0]} className="img-pw" alt="img" />
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
                    id="product_price"
                    className="form-control"
                    value={price}
                    placeholder="Product Discounted Price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                {/* Selling Product price  */}
                <div className="cp-input-group">
                  <label htmlFor="product_price">Price</label>
                  <input
                    type="number"
                    id="product_price"
                    className="form-control"
                    value={discountedPrice}
                    placeholder="Product Discounted Price"
                    onChange={(e) => setDiscountedPrice(e.target.value)}
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

            <div
              className="col-lg-12 add_price-screen"
              style={{ marginLeft: "20%", marginTop: "15px" }}
            >
              {weightPrice?.map((item, index) => (
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
                  required
                  onChange={(e) => setDescription(e.target.value)}
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
                  placeholder="Enter Long Description"
                  onChange={(e) => setLongDescription(e.target.value)}
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
