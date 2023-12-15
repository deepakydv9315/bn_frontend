import React, { useEffect, useState } from "react";
import "./Home.scss";
import Goals from "../../Components/Goals/Goals";
import Levels from "../../Components/Levels/Levels";
import whyCP from "../../Assets/Images/why-clean-protein.png";
import Budget from "../../Components/Budget/Budget";
import Carousel from "../../Components/ImageSlider/Carousel";
import Card from "../../Components/Card/Card";
import bg from "../../Assets/Images/temp.png";
// import ReadBlogs from "../../Components/Blogs/ReadBlogs";
import {
  getAllCategories,
  getAllProducts,
} from "../../Redux/slices/productSlice";
import { useParams } from "react-router-dom";
// import MinLoader from "../../Components/Loader/MinLoader.js";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { categoryname } = useParams();
  let category = useSelector((state) => state.products.categories);
  const [activeFilter, setActiveFilter] = useState("All");

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const { isLoading } = useSelector((state) => state.app);

  // const isInCart = (productId) => {
  //   console.log(typeof productId);
  //   return carts?.some((item) => item._id === productId);
  // };

  useEffect(() => {
    if (categoryname) {
      setActiveFilter(categoryname);
      if (categoryname === "All") {
        dispatch(getAllProducts());
      } else {
        dispatch(getAllProducts({ product: categoryname }));
      }
    } else {
      dispatch(getAllProducts());
    }
    dispatch(getAllCategories());
  }, [dispatch, categoryname]);

  const categoryChangeHandler = (filterName) => {
    setActiveFilter(filterName);
    dispatch(getAllProducts({ product: filterName }));
  };

  const handleAllProduct = () => {
    dispatch(getAllProducts());
    setActiveFilter("All");
  };

  return (
    <div className="home-page">
      <div className="home-2">
        <img src={bg} alt="" />
        <section className="content-of-category">
          <div className="title">
            Just<span>Launched</span>
          </div>
          <div className="container menu__container">
            <div className="app__work-filter">
              <div
                onClick={handleAllProduct}
                className={`app__work-filter-item app__flex p-text ${
                  activeFilter === "All" ? "item-active" : ""
                }`}
              >
                All
              </div>
              {category.map((product, index) => (
                <div
                  key={index}
                  onClick={() => categoryChangeHandler(product.name)}
                  className={`app__work-filter-item app__flex p-text ${
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
                Please Wait products are loading!!!
              </div>
            ) : (
              <div className="spr-wrapper">
                {products.products && products.products.length !== 0 ? (
                  <Card products={products?.products} />
                ) : null}
              </div>
            )}
          </div>
        </section>

        <section className="content-of-goal">
          <div className="title">
            Shop by<span>Goal</span>
          </div>
          <div className="desciption">
            Get fit with precision. Explore now for the best results!
          </div>
          <div className="goals-section">
            <Goals />
          </div>
        </section>
      </div>

      {/* whey protein sec  */}

      <section className="know-more">
        <h3>
          Know more about our<span>Product</span>
        </h3>
        <br></br>
        <div className="know-more-card">
          <div className="know-more-bg">
            <div className="know-more-container">
              <h3>BURLY WHEY PROTEIN</h3>
              <p>
                Burly Nutrition Whey Protein aids in recovery and boosts protein intake efficiently.
              </p>
              <p>
                It offers high-quality protein at an affordable price, truly
                valuable for your fitness journey.
              </p>
              <p>
                * Its main advantage lies in its quick absorption within the
                body, making it an easily digestible protein option.
              </p>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </section>

      <div className="home-3">
        <section className="shop-by-level">
          <div className="level-title">
            <h3>
              Shop by<span>Level</span>
            </h3>
          </div>
          <div className="level-description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos, veritatis.
            </p>
          </div>
          <div className="level-cards">
            <Levels />
          </div>
        </section>
      </div>

      <section className="why-page">
        <div className="whyCP-img">
          <img src={whyCP} alt="Why clean protein?" />
        </div>
        <div className="why-container">
          {/* <h3>The promise of nothing artificial</h3> */}
          <p>
            When taken over time with regular resistance with regular resistance
            tram over time with regular resistant taken over time with.
          </p>
          <button>Shop Now</button>
        </div>
      </section>

      <div className="home-4">
        <section className="fitness-bracket">
          <h3>
            Fitness<span>Bracket</span>
          </h3>
          <p>
            Products according to your budget and dedication in fitness journey.
          </p>
          <Budget />

          <div className="get-combos">
            <h3>
              Get <span>Combos</span>
            </h3>
            <p>
              A great deal has value for money, supplements and thus health.
            </p>
          </div>
        </section>
      </div>

      <section className="img-slider">
        <Carousel />
      </section>
      <br></br>

      {/* <section className="blog">
        <div className="blog-page">
          <h3>
            Read<span>Blogs</span>
          </h3>
          <ReadBlogs />
        </div>
      </section> */}

      {/* <div className="info-grid">
          <InfoGrid />
        </div> */}
    </div>
  );
};

export default Home;
