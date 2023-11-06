import React, { useState, useEffect } from "react";
import "./Product.scss";
import Sidebar from "../../Components/Filter/Filter";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ProductList from "../../Components/ProductList/ProductList";
import {
  getAllProducts,
  getAllCategories,
} from "../../../src/Redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Product() {
  const dispatch = useDispatch();
  const { categoryname } = useParams();
  const [filter, setActiveFilter] = useState("All");
  const filters = [
    {
      category: "Category",
      options: ["Mass gainer", "Protein"],
    },
    {
      category: "Price",
      options: ["Low to High", "High to Low"],
    },
    {
      category: "Flavour",
      options: ["Chocolate", "Vanilla", "Unflavoured"],
    },
  ];

  const { products, categories, carts } = useSelector(
    (state) => state.products
  );

  console.log(
    "product page : ",
    products && products.products && products.products
  );

  // ! Code is Used To Fetch And Store Products
  useEffect(() => {
    if (categoryname) {
      setActiveFilter(categoryname);
      dispatch(getAllProducts({ category: categoryname }));
    } else {
      dispatch(getAllProducts());
    }

    dispatch(getAllCategories());
  }, [dispatch, categoryname]);


  // ! Below Code is for Filter
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (category, option) => {
    const updatedFilters = selectedFilters.includes(option)
      ? selectedFilters.filter((filter) => filter !== option)
      : [...selectedFilters, option];
    setSelectedFilters(updatedFilters);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const filteredProducts = Array.isArray(products)
    ? products.filter((product) => {
        // Apply filters and search query here
        return (
          (selectedFilters.length === 0 ||
            selectedFilters.includes(product.size)) &&
          (searchQuery === "" ||
            product.name.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      })
    : [];

  return (
    <div>
      <section className="contain">
        <div className="title1 product">Products</div>
        <div className="app">
          {/* <Sidebar
            filters={filters}
            selectedFilters={selectedFilters}
            handleFilterChange={handleFilterChange}
          /> */}
          <div className="main-content">
            <div className="top-bar">
              <div className="search-bar">
                {/*
                 <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                 />
                */}
              </div>
            </div>
            <div className="filters">
              <div className="product-count">
                {products.products
                  ? `${products.products.length} Products`
                  : ""}
              </div>
              {/* <div className="sort-by">
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  <option value="">Sort By</option>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                </select>
              </div> */}
            </div>
            {products.products && products.products.length !== 0 ? (
              <ProductList products={products?.products} />
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
