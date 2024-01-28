import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Goals from "../../Components/Goals/Goals";
import Levels from "../../Components/Levels/Levels";
import whyCP from "../../Assets/Images/why-clean-protein.png";
import Budget from "../../Components/Budget/Budget";
import Carousel from "../../Components/ImageSlider/Carousel";
import Card from "../../Components/Card/Card";
import ReadBlogs from "../../Components/Blogs/ReadBlogs";
import bg from "../../Assets/Images/bn_banner_1.png";
import bg1 from "../../Assets/Images/bn_banner_2.png";
import bg2 from "../../Assets/Images/bn-banner03.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "font-awesome/css/font-awesome.min.css";
import {
  getAllCategories,
  getAllProducts,
} from "../../Redux/slices/productSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ArrowButton from "../../Components/Arrowbutton/ArrowButton";
import OurMerch from "./ourMerch.tsx";
import Combo from "./Combo.js";
import InfoGrid from "../../Components/InfoGrid/InfoGrid";

const Home = () => {
  const { categoryname } = useParams();
  let category = useSelector((state) => state.products.categories);
  const [activeFilter, setActiveFilter] = useState("All");

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { isLoading } = useSelector((state) => state.app);

  const CustomPrevArrow = (props) => (
    <div className="custom-prev-arrow" onClick={props.onClick}>
      <i className="fa fa-arrow-circle-left" style={{ fontSize: "24px" }}></i>
    </div>
  );

  const CustomNextArrow = (props) => (
    <div className="custom-next-arrow" onClick={props.onClick}>
      <i className="fa fa-arrow-circle-right" style={{ fontSize: "24px" }}></i>
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <ArrowButton type="next" />,
    prevArrow: <ArrowButton type="prev" />,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  useEffect(() => {
    if (categoryname) {
      setActiveFilter(categoryname);
      dispatch(getAllProducts({ category: categoryname }));
    } else {
      dispatch(getAllProducts());
    }

    dispatch(getAllCategories());
  }, [dispatch, categoryname]);

  const categoryChangeHandler = async (filterName) => {
    setActiveFilter(filterName);
    let productCat = await dispatch(getAllProducts({ category: filterName }));
    console.log("Product Cat ] + ", productCat);
  };

  const handleAllProduct = () => {
    dispatch(getAllProducts());
    setActiveFilter("All");
  };

  return (
    <div className="home-page">
      <div className="hero-sec">
        <Slider {...sliderSettings}>
          <div>
            <img src={bg} alt="" />
          </div>
          <div>
            <img src={bg1} alt="" />
          </div>
          <div>
            <img src={bg2} alt="" />
          </div>
        </Slider>
      </div>

      {/* products */}
      <section className="bn-sec home-product sec-level">
        <div className="sec-head">
          Our <span>Products</span>
        </div>
        <div className="home-pr-wrapper">
          <div className="product-filter">
            {/*<div
              onClick={handleAllProduct}
              className={`pr-filter-item ${
                activeFilter === "All" ? "item-active" : ""
              }`}
            >
              All
            </div> */}
            {category
              .filter(
                (item) =>
                  item.name !== "Gym Bags" &&
                  item.name !== "Shaker" &&
                  item.name !== "T-Shirts" &&
                  item.name !== "Combo" 
              )
              .map((product, index) => (
                <div
                  key={index}
                  onClick={() => categoryChangeHandler(product.name)}
                  className={` pr-filter-item  ${
                    activeFilter === product.name ? "item-active" : ""
                  }`}
                >
                  {product.name}
                </div>
              ))}
          </div>

          {isLoading ? (
            <div
              style={{
                width: "30vw",
                display: "flex",
                marginTop: "10px",
                fontSize: "20px",
                fontStyle: "italic",
                fontWeight: "600",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Loading..
            </div>
          ) : (
            <div className="spr-wrapper">
              {products.products && products.products.length !== 0 ? (
                <Card
                  products={products?.products.filter((product) =>
                    product.productCategory.includes(activeFilter)
                  )}
                />
              ) : null}
            </div>
          )}
        </div>
      </section>

      {/* know our protein */}
      <section className="bn-sec know-sec">
        <h4 className="sec-head">
          Why <span>Burly Whey</span>
        </h4>

        <div className="know-wrapper">
          <div className="know-more-text">
            <h3>BURLY WHEY</h3>
            <p>
              Burly Nutrition Whey Protein aids in recovery and boosts protein
              intake efficiently. It offers high-quality protein at an
              affordable price, truly valuable for your fitness journey.Its main
              advantage lies in its quick absorption within the body, making it
              an easily digestible protein option.
            </p>
            <p>When taken over time with regular resistance training</p>
            <Link className="bn-btn" to="/products">
              Shop Now
            </Link>
          </div>
          <div className="know-more-img">
            {/* <img src={knowBurly} alt="Whey burly"/> */}
          </div>
        </div>
      </section>

      <Combo />

      {/* merch */}
      <section className="bn-sec content-of-goal">
        <div className="goals-section">
          {products && products.products && products.products.length !== 0 && (
            <OurMerch
              showCategory={["Gym Bags", "Shaker", "T-Shirts"]}
              productList={products.products}
            />
          )}
        </div>
      </section>

      {/* why hustle for muscle  */}
      <section className="why-page">
        <div className="whyCP-img">
          <img src={whyCP} alt="Why clean protein?" />
        </div>
        <div className="why-container">
          {/* <h3>The promise of nothing artificial</h3> */}
          <p>
            No matter how tired, lazy, or discouraged you are, KEEP GOING. We
            know it's tough, but at least you're closer to your goal now.
          </p>
          <Link className="why-btn" to="/products">
            Shop Now
          </Link>
        </div>
      </section>

      {/* goals */}
      <section className="bn-sec content-of-goal">
        <h4 className="sec-head">
          Shop by <span>Goal</span>
        </h4>
        <div className="sec-para">
          Get fit with precision. Explore now for the best results!
        </div>
        <div className="goals-section">
          <Goals />
        </div>
      </section>

      {/* fitness bracket  */}
      <section className="bn-sec fitness-bracket">
        <h4 className="sec-head">
          Fitness <span>Bracket</span>
        </h4>
        <p className="sec-para">
          Products according to your budget and dedication in fitness journey.
        </p>
        <Budget />
      </section>

      {/* combos sec  */}

      {/* <section className="sec-combo">
        <div className="sec-combo-heading bn-sec">
          <h4 className="sec-head">
            Shop by <span>Level</span>
          </h4>
          <p className="sec-para">
            Get fit with precision. Explore now for the best results!
          </p>
        </div>
        <div className="img-slider">
          <Carousel />
        </div>
      </section> */}

      <section className="blog bn-sec sec-blog">
        <h4 className="sec-head">
          Our <span>Blogs</span>
        </h4>
        <p className="sec-para">Time to grab some information</p>
        <ReadBlogs />
        <br></br>
        <Link to="/blog">
          <button className="btn">All Blogs</button>
        </Link>
      </section>

      <div className="info-grid">
        <InfoGrid />
      </div>

      {/* WhatsApp icon */}
      {/* <div className="whatsapp-icon">
        <a
          href={`https://wa.me/${9540378443}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={waIcon}
            alt="whatsapp icon"
          />
        </a>
      </div> */}
    </div>
  );
};

export default Home;
