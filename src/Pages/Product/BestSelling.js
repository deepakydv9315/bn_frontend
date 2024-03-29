import React, { useEffect, useState } from "react";
import "./Combo.scss";
import {
  getAllCategories,
  getAllProducts,
} from "../../Redux/slices/productSlice.js";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BestSelling from "./Product1.tsx";

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
          Best Selling Products
        </h4>
        <div className="level-cards">
          {products && products.products && products.products.length !== 0 && (
            <BestSelling showCategory={["Best Selling"]} productList={products.products} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;


