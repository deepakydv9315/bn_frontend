import React, { useEffect, useState } from "react";
import "./Combo.scss";
import {
  getAllCategories,
  getAllProducts,
} from "../../Redux/slices/productSlice.js";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Whey from "./Products.tsx";

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
    </div>
  );
};

export default Home;


