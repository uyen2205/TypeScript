import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Notfound from "./pages/Notfound";
import LoginPage from "./pages/Login/LoginPage";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <Header />
      <Banner />
      <main className="main container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
