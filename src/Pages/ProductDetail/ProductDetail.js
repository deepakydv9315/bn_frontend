import React, { Fragment, useState, useEffect } from "react";
import "./ProductDetail.scss";
import image1 from "../../Assets/Images/main.png";
import { BsArrowDown } from "react-icons/bs";
import m1 from "../../Assets/Images/main1.png";
import m2 from "../../Assets/Images/main2.png";
import chart from "../../Assets/Images/chart.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../Redux/slices/productSlice";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Loader from "../../Components/Loader/Loader";
import Swal from "sweetalert2";
import { setCartOpen } from "../../Redux/slices/appConfigSlice";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id;

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.app);
  const { product, productDefaultPrice } = useSelector((state) => {
    return state.products;
  });
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  // const images = product?.images;
  const [images, setImages] = useState([]);
  const [isAddedOnCart, setIsAddedOnCart] = useState(false);

  // State to manage selected color, size, and quantity
  const [selectedFlavour, setSelectedFlavour] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleFlavourChange = (flavour) => {
    setSelectedFlavour(flavour);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleSelectPrice = (info) => {
    const itemPrice = product?.weightPrice?.find(
      (price) => price.id === info.id
    );
    setPrice(itemPrice?.price);
    setWeight(itemPrice?.weight);
  };

  // ! To Get Product Details By Id
  useEffect(() => {
    dispatch(getProductDetail({ id }));
    console.log("Product Id  : ", id);
  }, [dispatch, id]);

  // ! For Default Price - Maximum Price
  useEffect(() => {
    if (productDefaultPrice.length > 0) {
      setWeight(productDefaultPrice[0].weight);
      setPrice(productDefaultPrice[0].price);
    }
  }, [productDefaultPrice]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const addToCart = () => {
    console.log("Price : ", price, typeof price);
    if (typeof price === "string" && parseInt(price) > 0) {
      dispatch({
        type: "ProductSlice/addToCart",
        payload: { id: product._id, price, weight, quantity },
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

  const products = [
    {
      flavour: "Flavoured",
    },
    {
      flavour: "UnFlavoured",
    },
  ];

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="product-details-container contain">
          <div className="left-section">
            <div className="main-product-image">
              <img
                src={product && product.images && product?.images[0]?.url}
                alt="Main Product"
              />
              {product &&
                product?.images &&
                product?.images.length > 1 &&
                product.images.map((image, index) => (
                  <div key={index} className="additional-image">
                    <img
                      src={product.image}
                      alt={`AdditionalImage ${index + 1}`}
                    />
                  </div>
                ))}

              {/* <img src={chart} alt="Main Product" className='chart' /> */}
            </div>
          </div>
          <div className="right-section">
            <div className="product-info">
              <div className="name">{product?.category}</div>
              <p className="head">{product?.name}</p>
              <div className="price">
                <span className="mrp">
                  {" "}
                  ₹
                  {product &&
                    product?.weightPrice &&
                    Math.max(
                      ...product?.weightPrice?.map((item) =>
                        parseInt(item.price)
                      )
                    )}
                </span>
                <span className="discounted-price">
                  ₹{product?.discountedPrice}(15%OFF)
                </span>
              </div>

              <div
                className="size-options"
                style={{ display: "flex", flexWrap: "wrap", gap: "10px 10px" }}
              >
                <div className="flavour">Flavour</div>
                {products.map((product, index) => (
                  <button
                    key={index}
                    className={`size-button ${
                      product.flavour === selectedFlavour ? "selected" : ""
                    }`}
                    onClick={() => handleFlavourChange(product.flavour)}
                  >
                    {product.flavour}
                  </button>
                ))}
              </div>
              <div
                className="size-options"
                style={{ display: "flex", flexWrap: "wrap", gap: "10px 10px" }}
              >
                <div className="flavour">Weight</div>
                {product?.weightPrice &&
                  product?.weightPrice?.map((weight, index) => (
                    <button
                      key={index}
                      className={`size-button ${
                        weight === setWeight ? "selected" : ""
                      }`}
                      onClick={() => handleSelectPrice(weight)}
                    >
                      {weight.weight}
                    </button>
                  ))}
              </div>
              <div className="quantity">
                <div className="quant">
                  <button
                    onClick={() =>
                      handleQuantityChange(Math.max(1, quantity - 1))
                    }
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => handleQuantityChange(quantity + 1)}>
                    +
                  </button>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                {/* <FontAwesomeIcon icon={faHeart} className="wishlist-icon" /> */}
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
                  className="cart-button"
                  onClick={() => {
                    Navigate("/checkout");
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
            <div className="product-description-reviews">
              <h3>Description</h3>
              <p>{product?.description}</p>
            </div>
            <div className={`manufacturing-details ${isOpen ? "open" : ""}`}>
              <div className="arrow">
                <h3 onClick={toggleAccordion}>Manufacturing Details</h3>
                <BsArrowDown
                  onClick={toggleAccordion}
                  style={{ fontSize: "20px", marginTop: "5px" }}
                />
              </div>
              <p>{product?.description}</p>
            </div>
            <div className={`manufacturing-details ${isOpen ? "open" : ""}`}>
              <div className="arrow">
                <h3 onClick={toggleAccordion}>Manufacturing Details</h3>
                <BsArrowDown
                  onClick={toggleAccordion}
                  style={{ fontSize: "20px", marginTop: "5px" }}
                />
              </div>
              <p>{product?.manufacturingDetails}</p>
            </div>
            <div className={`manufacturing-details ${isOpen ? "open" : ""}`}>
              <div className="arrow">
                <h3 onClick={toggleAccordion}>Manufacturing Details</h3>
                <BsArrowDown
                  onClick={toggleAccordion}
                  style={{ fontSize: "20px", marginTop: "5px" }}
                />
              </div>
              <p>{product?.manufacturingDetails}</p>
            </div>
            <div className={`manufacturing-details ${isOpen ? "open" : ""}`}>
              <div className="arrow">
                <h3 onClick={toggleAccordion}>Manufacturing Details</h3>
                <BsArrowDown
                  onClick={toggleAccordion}
                  style={{ fontSize: "20px", marginTop: "5px" }}
                />
              </div>
              <p>{product?.manufacturingDetails}</p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProductDetails;
