import React, { useState, useEffect } from "react";
import "./Product.scss";
import Sidebar from "../../Components/Filter/Filter";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ProductList from "../../Components/ProductList/ProductList";

import { getAllProducts } from "../../../src/Redux/slices/productSlice";
import { useDispatch } from "react-redux";

export default function Product() {
  const dispatch = useDispatch();
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

  const [products, setProducts] = React.useState([
    {
      id: 1,
      name: "Product 1",
      title: "Description for Product 1",
      price: "199",
      image: require("../../Assets/Images/main1.png"),
    },
    {
      id: 2,
      name: "Product 2",
      title: "Description for Product 2",
      price: "299",
      image: require("../../Assets/Images/main2.png"),
    },
    {
      id: 3,
      name: "Product 3",
      title: "Description for Product 3",
      price: "399",
      image: require("../../Assets/Images/main1.png"),
    },
    {
      id: 4,
      name: "Product 4",
      title: "Description for Product 4",
      price: "499",
      image: require("../../Assets/Images/main2.png"),
    },
    {
      id: 5,
      name: "Product 5",
      title: "Description for Product 5",
      price: "599",
      image: require("../../Assets/Images/main1.png"),
    },
    {
      id: 6,
      name: "Product 6",
      title: "Description for Product 6",
      price: "699",
      image: require("../../Assets/Images/main2.png"),
    },
    // Add more products as needed
  ]);

  /* useEffect(() => {
    if (categoryname) {
      setActiveFilter(categoryname);
      dispatch(getAllProducts({ category: categoryname }));
    } else {
      dispatch(getAllProducts());
    }

    dispatch(getAllCategories());
  }, [dispatch, categoryname]); */

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

  const filteredProducts = products.filter((product) => {
    // Apply filters and search query here
    return (
      (selectedFilters.length === 0 ||
        selectedFilters.includes(product.size)) &&
      (searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

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
                {filteredProducts.length} Products
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
            <ProductList products={filteredProducts} />
          </div>
        </div>
      </section>
    </div>
  );
}
