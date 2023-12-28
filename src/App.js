import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import About from "./Pages/About/About.jsx";
import Products from "./Pages/Product/Product.js";
import "./style.scss";
import Blog from "./Pages/Blog/Blog.js";
// blogs 
import Blog1 from "./Pages/Blog/blog1.js"
import Blog2 from "./Pages/Blog/blog2.js"
import Blog3 from "./Pages/Blog/blog3.js"
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
import BlogDetail from "./Pages/Blog/BlogDetail.js";
import Checkout from "./Pages/Checkout/Ship.js";
import Recipes from "./Pages/Recipes/Recipes";
import Report from "./Pages/Authenticate/Report";
import ForgetPasswordPage from "./Pages/ForgetPassword/ForgetPasswordPage";
import FAQ from "./Pages/FAQ/Faq.js";
import RefundPolicy from "./Pages/RefundReturnPolicy/Refund.js";
import Shipping from "./Pages/Shipping/Shipping.js";
import PrivacyPolicy from "./Pages/Privacy/Privacy.js";
import TermsCondition from "./Pages/Terms/Terms.js";
import User from "./Pages/User/Dashboard.js";
import Password from "./Pages/User/Password.js";
import MyOrder from "./Pages/User/MyOrders.js";
import Address from "./Pages/User/AddressBook.js";
import Ship from "./Pages/Checkout/Ship.js";
import Invoice from "./Pages/Checkout/Invoice.js";
import RequireUser from "./utils/RequireUser.js";
import ComingSoon from "./Pages/ComingSoon/ComingSoon";
import ScrollToTop from "./utils/ScrollToTop";
import { getUserDetail } from "./Redux/slices/user";
import { useDispatch } from "react-redux";
import React from "react";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserDetail());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<RequireUser type={"admin"} />}>
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
        </Route>
      </Routes>
      <Routes>
        <Route element={<RequireUser type="user" />}>
          <Route path="/user" element={<User />} />
          <Route path="/user/password" element={<Password />} />
          <Route path="/user/orders" element={<MyOrder />} />
          <Route path="/user/address" element={<Address />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<><ScrollToTop /> <Home /></>} />
        <Route path="/orderSuccess/:orderID" element={<Invoice />} />
        <Route
          path="/coming"
          element={
            <>
              <ScrollToTop />
              <ComingSoon />
            </>
          }
        />
        <Route path="/ship" element={<Ship />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<><ScrollToTop /><Contact /></>} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/about" element={<><ScrollToTop /><About /></>} />
        <Route path="/blogdetail" element={<>
          <ScrollToTop /><BlogDetail /></>} />
        <Route path="/terms" element={<><ScrollToTop /><TermsCondition /></>} />
        <Route
          path="/products"
          element={
            <>
              <ScrollToTop /> <Products />
            </>
          }
        />
        <Route
          path="/productdetails/:id"
          element={
            <>
              <ScrollToTop />
              <ProductDetail />
            </>
          }
        />
        <Route path="/blog" element={<>
          <ScrollToTop /><Blog /></>} />
        <Route path="/recipes" element={<><ScrollToTop /><Recipes /></>} />
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/report" element={<Report />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/privacy" element={<><ScrollToTop /><PrivacyPolicy /></>} />
        <Route path="/shipping" element={<><ScrollToTop /><Shipping /></>} />
        <Route path="/forgot" element={<ForgetPasswordPage />} />
        <Route path="/refund" element={<><ScrollToTop /><RefundPolicy /></>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
