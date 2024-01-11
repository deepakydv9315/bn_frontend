import React, { useEffect, useState } from "react";

import Card from "../../Components/Card/Card";
export default function OurMerch({ products, category }) {
  const [productes, setProducts] = useState([]);

  const [categories, setCategories] = useState([
    { name: "All" },
    { name: "Tshirt" },
    { name: "Shekhar" },
    { name: "Gym Bag" },
  ]);
  const [activeFilter, setActiveFilter] = useState("All");

  // To Log And Update State
  useEffect(() => {
    console.log(products);
    console.log(category);
    setProducts(products);
    setCategories(category);
  }, [products, category]);

  // To Show And Filter Products By Category
  const handleMerchProduct = () => {
    setActiveFilter("All");
    setProducts(products);
  };

  // ?  Change Category Handler
  const categoryChangeHandler = (categoryName) => {
    setActiveFilter(categoryName); // ! To Set Active Category Name
    // To Fetch All Product Related Matched Category
    const filteredProducts = products.filter(
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
            <div
              onClick={handleMerchProduct}
              className={` pr-filter-item ${
                activeFilter === "All" ? "item-active" : ""
              }`}
            >
              All
            </div>
            {categories &&
              categories.length !== 0 &&
              categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => categoryChangeHandler(category.name)}
                  className={` pr-filter-item  ${
                    activeFilter === category.name ? "item-active" : ""
                  }`}
                >
                  {category.name}
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
