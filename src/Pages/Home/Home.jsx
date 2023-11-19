import React, { useEffect, useState } from "react";
import "./Home.scss";
import Goals from "../../Components/Goals/Goals";
import Levels from "../../Components/Levels/Levels";
import whyCP from "../../Assets/Images/why-clean-protein.png";
import Budget from "../../Components/Budget/Budget";
import Carousel from "../../Components/ImageSlider/Carousel";
import Card from "../../Components/Card/Card";
import bg from "../../Assets/Images/temp.jpg";
import ReadBlogs from "../../Components/Blogs/ReadBlogs";
import {
  getAllCategories,
  getAllProducts,
} from "../../Redux/slices/productSlice";
import { useParams } from "react-router-dom";
import MinLoader from "../../Components/Loader/MinLoader.js";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dummyCategories = [
    { name: "Burly Whey" },
    { name: "Burly Creatine" },
  ];

  const { categoryname } = useParams();

  const [activeFilter, setActiveFilter] = useState("All");

  const dispatch = useDispatch();
  const { products, categories, carts } = useSelector(
    (state) => state.products
  );

  const { isLoading } = useSelector((state) => state.app);

  const isInCart = (productId) => {
    console.log(typeof productId);
    return carts?.some((item) => item._id === productId);
  };

  useEffect(() => {
    if (categoryname) {
      setActiveFilter(categoryname);
      dispatch(getAllProducts({ product: categoryname }));
    } else {
      dispatch(getAllProducts());
    }
    dispatch(getAllCategories());
  }, [dispatch, categoryname]);

  const categoryChangeHandler = (filterName) => {
    setActiveFilter(filterName);
    dispatch(getAllProducts({product: filterName }));
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
            Just <span>Launched</span>
          </div>
          <div className="container menu__container">
            <div className="app__work-filter">
              <div
                onClick={handleAllProduct}
                className={`app__work-filter-item app__flex p-text ${activeFilter === "All" ? "item-active" : ""
                  }`}
              >
                All
              </div>
              {dummyCategories.map((product, index) => (
                <div
                  key={index}
                  onClick={() => categoryChangeHandler(product.name)}
                  className={`app__work-filter-item app__flex p-text ${activeFilter === product.name ? "item-active" : ""
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
            Shop by <span>Goal</span>
          </div>
          <div className="desciption">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laudantium, expedita.
          </div>
          <div className="goals-section">
            <Goals />
          </div>
        </section>

      </div>

      {/* whey protein sec  */}

      <section className="know-more">
        <h3>
          Know more about our <span>Product</span>
        </h3>
        <div className="know-more-card">
          <div className="know-more-bg">
            <div className="know-more-container">
              <h3>PROTEIN</h3>
              <p>
                Help build muscle and support recovery* with delicious,
                high-quality protein powders and shakes. Gold Standard is
                available as a powder and isolate formulas.
              </p>
              <p>
                Post-workout muscle recovery from the world’s number 1. sports
                nutrition brand
              </p>
              <p>*When taken over time with regular resistance training</p>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </section>

      <div className="home-3">
        <section className="shop-by-level">
          <div className="level-title">
            <h3>
              Shop by <span>Level</span>
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
            Fitness <span>Bracket</span>
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

      <section className="blog">
        <div className="blog-page">
          <h3>
            Read <span>Blogs</span>
          </h3>
          <ReadBlogs />
        </div>
      </section>

      {/* <div className="info-grid">
          <InfoGrid />
        </div> */}
    </div>
  );
};

export default Home;