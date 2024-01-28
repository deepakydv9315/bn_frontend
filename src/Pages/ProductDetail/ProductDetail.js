import React, { Fragment, useState, useEffect } from "react";
import "./ProductDetail.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../Redux/slices/productSlice";
import Loader from "../../Components/Loader/Loader";
import Swal from "sweetalert2";
import { setCartOpen } from "../../Redux/slices/appConfigSlice";
import ReactImageMagnify from "react-image-magnify";
import VegIcon from "../../Assets/Images/veg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ProductDetails = (isShow = true) => {
  const params = useParams();
  const id = params.id;

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.app);
  const { carts, product, productDefaultPrice } = useSelector(
    (state) => state.products
  );
  // const { carts } = useSelector((state) => state);
  const [isAddedOnCart, setIsAddedOnCart] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState({});
  const [quantity, setQuantity] = useState(1);

  // ! To Get Product Details By Id
  useEffect(() => {
    dispatch(getProductDetail({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    let item = carts?.find(
      (item) =>
        item._id === id && item.productDefaultPrice.sku === selectedVariant.sku
    );
    item && setQuantity(item.productDefaultPrice.quantity);
  }, [carts, id, selectedVariant.sku]);

  useEffect(() => {
    setSelectedVariant(productDefaultPrice);
  }, [productDefaultPrice]);

  const [isOpen, setIsOpen] = useState(false);

  const addToCart = async () => {
    if (
      typeof selectedVariant.price === "string" &&
      parseInt(selectedVariant.price) > 0
    ) {
      dispatch({
        type: "ProductSlice/addToCart",
        payload: {
          productId: product._id,
          sku: selectedVariant.sku,
          price: selectedVariant.price,
          weight: selectedVariant.weight,
          quantity,
        },
      });
      setIsAddedOnCart(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a Weight And Flavour",
      });
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < 3) {
      setQuantity(quantity + 1);
      return null;
    }
    toast.error("You can only add atmost 3 quantity", { position: "top-right" });
  };

  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (
      selectedVariant &&
      selectedVariant.images &&
      selectedVariant.images.length > 0
    ) {
      setMainImage(selectedVariant.images[0]?.url);
    }
  }, [selectedVariant]);

  const handleAdditionalImageClick = (image) => {
    setMainImage(image.url);
  };

  const addedToCart = async () => {
    if (
      typeof selectedVariant.price === "string" &&
      parseInt(selectedVariant.price) > 0
    ) {
      dispatch({
        type: "ProductSlice/addToCart",
        payload: {
          productId: product._id,
          sku: selectedVariant.sku,
          price: selectedVariant.price,
          weight: selectedVariant.weight,
          quantity,
        },
      });
      setIsAddedOnCart(true);
    }
    Navigate("/checkout");
  };

  const smallImageStyle = {
    alt: "Main Product",
    src: mainImage,
    width: 450,
    height: 400,
  };

  const isSmallScreen = window.innerWidth <= 468; // Adjust the screen width as needed
  if (isSmallScreen) {
    smallImageStyle.width = 280; // Set the width for small screens
    smallImageStyle.height = 300; // Set the height for small screens
  }

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="product-details-container bn-sec">
          <div className="pr-detail-top">
            <div className="left-section">
              <div className="main-product-image">
                <ReactImageMagnify
                  smallImage={smallImageStyle}
                  largeImage={{
                    src: mainImage,
                    width: 1400,
                    height: 1500,
                  }}
                  enlargedImagePosition="right"
                />
                {product.productCategory === "Burly Whey" ||
                  product.productCategory === "Creatine" ? (
                  <img src={VegIcon} alt="Veg Icon" className="veg-icon" />
                ) : null}
                <div className="add-img-wrapper">
                  {selectedVariant &&
                    selectedVariant.images &&
                    selectedVariant.images.length > 0 &&
                    selectedVariant.images.map((image, index) => (
                      <div
                        key={index}
                        className="additional-image"
                        onClick={() => handleAdditionalImageClick(image)}
                      >
                        <img
                          src={image.url}
                          alt={`AdditionalImage ${index + 1}`}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="right-section">
              <div className="product-info">
                <p className="name">{product?.productCategory}</p>
                <p className="head">{product?.name}</p>
                <div className="product-description-reviews">
                  <p>{product?.description}</p>
                </div>
                <div className="price">
                  <span className="mrp" style={{ display: "flex" }}>
                    MRP: ₹{selectedVariant.mrPrice}
                  </span>
                  {/* &nbsp; &nbsp; */}
                  <span className="discounted-price">
                    Price: ₹{selectedVariant.price}&nbsp;
                    {/* <div style={{ fontSize: "10px" }}>
                      ({(
                        ((product.productDetails[0].mrPrice -
                          product.productDetails[0].price) /
                          product.productDetails[0].mrPrice) *
                        100
                      ).toFixed(0)}
                      % OFF)
                    </div> */}
                  </span>
                </div>
                <p className="name" style={{ marginTop: "-20px" }}>
                  Excluding all Taxes
                </p>
                <br></br>
                {product.productCategory === "T-Shirts" ||
                  product.productCategory === "Gym Bags" ||
                  product.productCategory === "Sipper" ? (
                  <div className="size-options">
                    <div className="flavour">Color</div>
                    <div className="btn-wrapper">
                      <button
                        className={`size-button ${product.productFlavour ? "selected" : ""
                          }`}
                      >
                        {product.productFlavour}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="size-options">
                    <div className="flavour">Flavour</div>
                    <div className="btn-wrapper">
                      <button
                        className={`size-button ${product.productFlavour ? "selected" : ""
                          }`}
                      >
                        {product.productFlavour}
                      </button>
                    </div>
                  </div>
                )}

                {product.productCategory === "T-Shirts" ||
                  product.productCategory === "Gym Bags" ? (
                  <div className="size-options">
                    <div className="flavour">Size</div>
                    <div className="btn-wrapper">
                      {product?.productDetails &&
                        product?.productDetails?.map((data, index) => (
                          <button
                            key={index}
                            className={`size-button ${data.weight === selectedVariant.weight
                              ? "selected"
                              : ""
                              }`}
                            onClick={() => setSelectedVariant(data)}
                          >
                            {data.weight}
                          </button>
                        ))}
                    </div>
                  </div>
                ) : product.productCategory === "Sipper" ? (
                  <div className="size-options">
                    <div className="flavour">Capacity</div>
                    <div className="btn-wrapper">
                      {product?.productDetails &&
                        product?.productDetails?.map((data, index) => (
                          <button
                            key={index}
                            className={`size-button ${data.capacity === selectedVariant.capacity
                              ? "selected"
                              : ""
                              }`}
                            onClick={() => setSelectedVariant(data)}
                          >
                            {data.weight}
                          </button>
                        ))}
                    </div>
                  </div>
                ) : (
                  <div className="size-options">
                    <div className="flavour">Weight</div>
                    <div className="btn-wrapper">
                      {product?.productDetails &&
                        product?.productDetails?.map((data, index) => (
                          <button
                            key={index}
                            className={`size-button ${data.weight === selectedVariant.weight
                              ? "selected"
                              : ""
                              }`}
                            onClick={() => setSelectedVariant(data)}
                          >
                            {data.weight}
                          </button>
                        ))}
                    </div>
                  </div>
                )}

                <div className="quantity">
                  <div className="quant">
                    <button onClick={handleDecrease}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrease}>+</button>
                    <ToastContainer
                      position="top-right"
                      autoClose={1000}
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

                <div className="b">
                  {!isAddedOnCart ? (
                    <button
                      onClick={() => addToCart()}
                      className="wishlist-button"
                    >
                      Add To Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch(setCartOpen(true))}
                      className="wishlist-button"
                    >
                      Go To Cart
                    </button>
                  )}
                  <br></br>
                  <button
                    className="wishlist-button"
                    onClick={() => {
                      addedToCart();
                    }}
                  >
                    Buy Now
                  </button>
                </div>

                {/* <section className="delivery-section">
                <div className="delivery-container">
                  <h2 className="delivery-heading">
                    <FontAwesomeIcon icon={faTruck} /> Deliver to
                  </h2>
                  <p className="delivery-subheading">Enter pincode to check delivery date:</p>
                  <div className="delivery-input-container">
                    <input
                      type="text"
                      className="delivery-input"
                      placeholder="Enter your pincode"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                    />
                    <button className="check-button" onClick={handleCheckButtonClick}>
                      Check
                    </button>
                  </div>
                </div>
              </section> */}

                {/* <section className="icon-section">
                <div className="icon-container">
                  <div className="icon-item">
                    <FontAwesomeIcon icon={faCoffee} className="icon" />
                    <p className="description">Enjoy a cup of coffee</p>
                  </div>
                  <div className="icon-item">
                    <FontAwesomeIcon icon={faCode} className="icon" />
                    <p className="description">Write some code</p>
                  </div>
                  <div className="icon-item">
                    <FontAwesomeIcon icon={faCogs} className="icon" />
                    <p className="description">Configure settings</p>
                  </div>
                </div>
              </section> */}
              </div>
            </div>
          </div>
          <div className="pr-detail-btm">
            <h4 className="head">About {product?.name}</h4>
            <p dangerouslySetInnerHTML={{ __html: product?.longDescription }} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProductDetails;
