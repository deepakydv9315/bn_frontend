import React, { useEffect, useState } from "react";

import Card from "../../Components/Card/Card";
export default function OurMerch({ showCategory, productList }) {
  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState(showCategory);
  const [activeFilter, setActiveFilter] = useState(showCategory[0]);

  console.log("Categories >>> ", categories);
  console.log("Active Filter >>> ", activeFilter);
  console.log("Products List >>> ", productList);

  // ?  Filter Products Based on Category
  useEffect(() => {
    const filteredProducts = productList.filter(
      (product) => product.sellingCategory === activeFilter
    );
    setProducts(filteredProducts);
  }, [activeFilter, productList]);

  // ?  Change Category Handler
  const categoryChangeHandler = (categoryName) => {
    setActiveFilter(categoryName); // ! To Set Active Category Name
    // To Fetch All Product Related Matched Category
    const filteredProducts = productList.filter(
      (product) => product.sellingCategory === categoryName
    );
    setProducts(filteredProducts);
  };

  return (
    <>
      <section className="bn-sec home-product">
        <div className="sec-head">
          Our <span>Merch</span>
        </div>
        <div className="home-pr-wrapper">
          <div className="product-filter">
            {categories &&
              categories.length !== 0 &&
              categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => categoryChangeHandler(category)}
                  className={` pr-filter-item  ${
                    activeFilter === category ? "item-active" : ""
                  }`}
                >
                  {category}
                </div>
              ))}
          </div>

          <div className="spr-wrapper">
            {products && products.length !== 0 ? (
              <Card products={products} />
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
