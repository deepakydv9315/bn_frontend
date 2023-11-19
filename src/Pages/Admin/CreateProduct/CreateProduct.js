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
  const [name, setName] = useState("");
  const [flavour, setFlavour] = useState("");
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stockSmall, setStockSmall] = useState(0);
  const [images, setImages] = useState([]);
  const [weightPrice, setWeightPrice] = useState([]);
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
          stockSmall,
          description,
          images,
          weightPrice: weightPrice,
          longDescription,
          category,
          flavour,
          discountedPrice,
          price,
        })
      );
    }
    else {
      alert.error("Weight & Price Can't Be Empty !!")
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
      id: new Date(),
    };
    const newArr = [...weightPrice, newField];
    setWeightPrice(newArr);
    setPrice("");
    setWeight("");
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
        ><p className="sec-head sec-head-ul title1">Create Product</p >
          <div className="row">
            <div className="col-lg-12">
              <div className="image-input">
                {images.length > 0 && (
                  <img
                    src={images[0]}
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
            {/* product name  */}
            <div className="col-lg-5">
              <div className="fotm-group">
                <label>
                  Product Name
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="product_price"
                  className="form-control"
                  placeholder="Product Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            {/* product categories  */}
            <div className="col-lg-3">
              <div className="fotm-group">
                <label >
                  Category
                  <span className="text-danger">*</span>
                </label>
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
            </div>

            <div className="col-lg-3">
              <div className="fotm-group">
                <label >
                  Flavour
                  <span className="text-danger">*</span>
                </label>
                <select
                  className="form-control"
                  onChange={(e) => setFlavour(e.target.value)}
                >
                  <option>---Select Flavour---</option>
                  <option>Flavoured</option>
                  <option>Coffee</option>
                  <option>Chocolate Caramel</option>
                  <option>Unflavoured</option>
                  <option>Blueberry Muffin</option>
                </select>
              </div>
            </div>


            {/* product stock */}
            <div className="col-lg-3" >
              <div className="fotm-group">
                <label>
                  Stock
                  <span className="text-danger">*</span>
                </label>
                <select
                  className="form-control" style={{ marginBottom: "10px" }}
                  onChange={(e) => setStockSmall(e.target.value)}
                >
                  <option >---Select Stock---</option>
                  <option>In Stock</option>
                  <option>Out Of Stock</option>
                </select>
              </div>
            </div>

            <br></br>
            {/* Product weight  */}
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
                  placeholder="Product Discounted Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>

            {/* add price and weight btn  */}
            <div className="col-lg-3 add_price-btn ">
              <div className="form-group">
                <button style={{ marginLeft: "220%", width: "100px" }}
                  className="theme-btn-one btn_sm"
                  onClick={addWeightPrice}
                >
                  Add Weight
                </button>
              </div>
            </div>

            <div className="col-lg-12 add_price-screen" style={{ marginLeft: "30%", marginTop: "15px" }}>
              {weightPrice?.map((item, index) => (
                <span key={index}>
                  {item.price}₹ - {item.weight}
                  <RxCross1
                    onClick={() => removeWeightPrice(item.id)}
                  />
                </span>
              ))}
            </div>

            {/* Product price  */}
            {/* <div className="col-lg-3">
              <div className="fotm-group">
                <label>
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
            </div> */}

            {/* short des  */}
            <div className="col-lg-6">
              <div className="fotm-group">
                <label>
                  Short Description
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="product_price"
                  className="form-control"
                  placeholder="Product Description"
                  required
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
                  placeholder="Enter Long Description"
                  onChange={(e) =>
                    setLongDescription(e.target.value)
                  }
                />
              </div>
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Product Preview"
                />
              ))}
            </div>
            <br></br>
            <div className="col-lg-12">
              <div className="btn_right_table">
                <button type="submit" className="theme-btn-one bg-black btn_sm">
                  Add Product
                </button>
              </div>
            </div>
          </div >
        </form >
      </div >
    </Fragment >
  );
}

export default NewProduct;