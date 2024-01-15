import React, { useState, useEffect, useMemo } from "react";
import "./Product.scss";
import Sidebar from "../../Components/Filter/Filter";
import SearchBar from "../../Components/SearchBar/SearchBar";
// import ProductList from "../../Components/ProductList/ProductList";
import {
  getAllProducts,
  getAllCategories,
} from "../../../src/Redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import Card from "../../Components/Card/Card";
import product from "../../Assets/Images/pr.png";

export default function Product() {
  const dispatch = useDispatch();
  const { categoryname } = useParams();
  const [activeFilter, setActiveFilter] = useState("All");

  const { products } = useSelector((state) => state.products);
  let category = useSelector((state) => state.products.categories);
  const { isLoading } = useSelector((state) => state.app);

  const [productList, setProductList] = useState([]);

  // ! To Get Query Params
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();
  const productUnder = query.get("under");

  const filteredProduct = useMemo(() => {
    if (productUnder > 0) {
      return (
        products?.products &&
        products.products.length > 0 &&
        products.products.filter(
          (product) => product.productDetails[0].price <= productUnder
        )
      );
    }
  }, [productUnder, products.products]);

  useEffect(() => {
    setProductList(filteredProduct);
  }, [filteredProduct]);

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

  const handleAllProduct = () => {
    dispatch(getAllProducts());
    setActiveFilter("All");
  };

  const categoryChangeHandler = async (filterName) => {
    setActiveFilter(filterName);
    await dispatch(getAllProducts({ category: filterName }));
  };

  return (
    <div>
      <div className="image-with-text-container">
        <img src={product} alt="YourImage" className="image" />
        <div className="text">
          All <span> Products</span>
        </div>
      </div>

      <section className="contain sec-level" style={{ padding: "0px" }} >
        <div className="app">
          <section className="content-of-goal">
            <div className="sec-head">
              Shop<span> Products</span>
            </div>
            <div className="desciption">
              Get fit with precision. Explore now for the best results!
            </div>
          </section>
          {/* <Sidebar
            filters={filters}
            selectedFilters={selectedFilters}
            handleFilterChange={handleFilterChange}
          /> */}
          <div className="main-content">
            {/* <div className="top-bar">
              <div className="search-bar">
                
                 <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                 />
               
              </div>
            </div> */}
            {/* <div className="filters">
              <div className="product-count">
                {products.products
                  ? `${products.products.length} Products`
                  : ""}
              </div>
              <div className="sort-by">
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  <option value="">Sort By</option>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                </select>
              </div>
            </div> */}
            <br></br>

            <div className="container menu__container">
              <div className="product-filter">
                <div
                  style={{ padding: "10px", cursor: "pointer" }}
                  onClick={handleAllProduct}
                  className={`app__work-filter-item app__flex p-text ${
                    activeFilter === "All" ? "item-active" : ""
                  }`}
                >
                  All
                </div>
                {category
                  ?.filter((item) => item.name !== "Best Selling")
                  .map((product, index) => (
                    <div
                      style={{ padding: "10px", cursor: "pointer" }}
                      key={index}
                      onClick={() => categoryChangeHandler(product.name)}
                      className={`app__work-filter-item app__flex p-text ${
                        activeFilter === product.name ? "item-active" : ""
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
                  {products?.products && products.products.length !== 0 ? (
                    <Card
                      products={
                        productList && productList.length > 0
                          ? productList
                          : products?.products
                      }
                    />
                  ) : null}
                </div>
              )}
            </div>

            {/* {products.products && products.products.length !== 0 ? (
              <Card products={products?.products} />
            ) : null} */}
          </div>
        </div>
      </section>
    </div>
  );
}
