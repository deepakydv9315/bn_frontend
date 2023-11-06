import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
// import Login from "./Pages/Login/Login.jsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import About from "./Pages/About/About.jsx";
import Products from "./Pages/Product/Product.js";
import "./style.scss";
import Blog from "./Pages/Blog/Blog.js";
import Contact from "./Pages/Contact/Contact";
import Authenticate from "./Pages/Authenticate/Authenticate.js";
import ErrorPage from "./Pages/Error/ErrorPage.js";
import Admin from "./Pages/Admin/Dashboard/Dashboard.js";
import ProductList from "./Pages/Admin/ProductList/ProductList.js";
import CreateProduct from "./Pages/Admin/CreateProduct/CreateProduct.js";
import CreateCategory from "./Pages/Admin/CreateCategory/CreateCategory.js";
import Categories from "./Pages/Admin/Categories/Categories.js";
import UpdateCategory from "./Pages/Admin/UpdateCategory/UpdateCategory.js";
import UpdateProduct from "./Pages/Admin/UpdateProduct/UpdateProduct.js";
import UserList from "./Pages/Admin/UserList/UserList.js";
import Pincodes from "./Pages/Admin/Pincodes/Pincodes.js";
import CreatePincode from "./Pages/Admin/CreatePincode/CreatePincode.js";
import HeaderOffer from "./Pages/Admin/HeaderOffer/HeaderOffer.js";
import CouponList from "./Pages/Admin/CouponList/CouponList.js";
import CreateCoupon from "./Pages/Admin/CreateCoupon/CreateCoupon.js";
import Orders from "./Pages/Admin/Orders/Orders.js";
import Blogs from "./Pages/Admin/Blog/Blog.js";
import UpdateBlog from "./Pages/Admin/UpdateBlog/UpdateBlog.js";
import UpdateCoupon from "./Pages/Admin/UpdateCoupon/UpdateCoupon.js";
import UpdatePincode from "./Pages/Admin/UpdatePincode/UpdatePincode.js";
import CreateBlog from "./Pages/Admin/CreateBlog/CreateBlog.js";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Checkout from "./Pages/Checkout/CheckoutPage";
import Recipes from "./Pages/Recipes/Recipes";
import Report from "./Pages/Authenticate/Report";
import ForgetPasswordPage from "./Pages/ForgetPassword/ForgetPasswordPage";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/report" element={<Report />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/forgot" element={<ForgetPasswordPage />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/product/create" element={<CreateProduct />} />
        <Route path="/admin/product/:id" element={<UpdateProduct />} />

        <Route path="/admin/categories/create" element={<CreateCategory />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/category/:id" element={<UpdateCategory />} />

        <Route path="/admin/users" element={<UserList />} />
        
        <Route path="/admin/pincodes" element={<Pincodes />} />
        <Route path="/admin/pincodes/create" element={<CreatePincode />} />
        <Route path="/admin/pincodes/:id" element={<UpdatePincode />} />

        <Route path="/admin/header" element={<HeaderOffer />} />

        <Route path="/admin/coupons" element={<CouponList />} />
        <Route path="/admin/coupon/create" element={<CreateCoupon />} />
        <Route path="/admin/coupon/:id" element={<UpdateCoupon />} />

        <Route path="/admin/orders" element={<Orders />} />

        <Route path="/admin/blog/create" element={<CreateBlog />} />
        <Route path="/admin/blogs" element={<Blogs />} />
        <Route path="/admin/blog/:id" element={<UpdateBlog />} />
      </Routes>
      <Footer />
      {/* </ Router> */}
    </div>
  );
}

export default App;
