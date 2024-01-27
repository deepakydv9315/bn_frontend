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
   
      <section className="bn-sec sec-level ">
        <h4 className="sec-head">
          T-<span>Shirts </span>
        </h4>
      
        <div className="level-cards">
          {products && products.products && products.products.length !== 0 && (
            <Burly showCategory={["T-Shirts"]} productList={products.products} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;


