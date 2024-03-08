import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleProductsFetchRequest } from "./features/Redux/Reducers/productSlice";
import "./App.css";
import { handleGetCategories } from "./features/Redux/Reducers/categorySlice";
import DetailProduct from "./pages/detailProduct/DetailProduct";
import Cart from "./pages/cart";
import { handleLoginRequest } from "./features/Redux/Reducers/loginSlice";
import { handleGetReview } from "./features/Redux/Reducers/reviewSlice";
import { handleGetPucharse } from "./features/Redux/Reducers/pucharseSlice";
import Pucharse from "./pages/purcharse";
import Checkout from "./pages/checkout";
import OrderComplete from "./pages/orderComplete";
import { RootState } from "./features/Redux/Store/store";
import { handleGetDataLocalStorage } from "./features/Redux/Reducers/cartSlice";
import CategoryProduct from "./pages/categoryProduct/CategoryProduct";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollOnTop";
import HeaderTab from "./components/Header/HeaderTab";
import Footer from "./components/footer/Footer";

function App() {
  const dispatch = useDispatch();
  if (!localStorage.getItem("listProductCart")) {
    localStorage.setItem("listProductCart", JSON.stringify([]));
  }
  const storageCart = JSON.parse(localStorage.getItem("listProductCart") || "");

  const cart = useSelector(
    (state: RootState) => state.reducer.cartSlice.listProductCart
  );
  useEffect(() => {
    dispatch(handleProductsFetchRequest());
    dispatch(handleGetCategories());
    dispatch(handleLoginRequest());
    dispatch(handleGetReview());
    dispatch(handleGetPucharse());
    dispatch(handleGetDataLocalStorage(storageCart === "" ? [] : storageCart));
  }, []);
  return (
    <div>
      <div className="headerTab">
        <HeaderTab />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pucharse" element={<Pucharse />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/orderComplete" element={<OrderComplete />} />
        <Route path="/category/:categoryName" element={<CategoryProduct />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
