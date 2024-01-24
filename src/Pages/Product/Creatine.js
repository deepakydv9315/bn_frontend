import React, { useEffect, useState } from "react";
import "./Combo.scss";
import bg from "../../Assets/Images/cat.png";
import {
  getAllCategories,
  getAllProducts,
} from "../../Redux/slices/productSlice.js";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Burly from "./Products.tsx";

const Home = (product) => {
  const { categoryname } = useParams();
  let category = useSelector((state) => state.products.categories);
  const [activeFilter, setActiveFilter] = useState("All");

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
      {/* <div className="image-with-text-container">
        <img src={bg} alt="YourImage" className="image" />
        <div className="text" style={{ marginBottom: "-40px" }}>
          Home / Products / <span> Burly Whey</span>
        </div>
      </div> */}

      {/* combos */}
      <section className="bn-sec sec-level ">
        <h4 className="sec-head">
          Creatine <span></span>
        </h4>
        <p className="sec-para">
          A great deal has value for money, supplements and thus health.
        </p>
        <div className="level-cards">
          {products && products.products && products.products.length !== 0 && (
            <Burly showCategory={["Creatine"]} productList={products.products} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;


