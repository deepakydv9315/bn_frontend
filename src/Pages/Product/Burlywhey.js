import React, { useEffect, useState } from "react";
import "./Combo.scss";
import {
  getAllCategories,
  getAllProducts,
} from "../../Redux/slices/productSlice.js";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Whey from "./Product1.tsx";
import { Link } from "react-router-dom";

const Home = (product) => {
  const { categoryname } = useParams();

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    if (categoryname) {
      setActiveFilter(categoryname);
      dispatch(getAllProducts({ category: categoryname }));
    } else {
      dispatch(getAllProducts());
    }

    dispatch(getAllCategories());
  }, [dispatch, categoryname]);

  return (
    <div className="home-page">
      <section className="bn-sec sec-level p-page ">
        <h4 className="sec-head">
          Burly Whey Protein
        </h4>
        <div className="level-cards">
          {products && products.products && products.products.length !== 0 && (
            <Whey showCategory={["Burly Whey"]} productList={products.products} />
          )}
        </div>
      </section>

      {/* know our protein */}
      <section className="bn-sec know-sec sec-level">
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
    </div>
  );
};

export default Home;


