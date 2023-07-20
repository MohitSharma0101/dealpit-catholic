import { useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import ProductsPage from './Pages/Products';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import AboutUsPage from './Pages/AboutUs';
import ProductPage from './Pages/Product';

function App() {
  useEffect(() => {
    document.title = 'Dealpit Catholic';
  }, []);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:category" element={<ProductPage />} />
        <Route path="about" element={<AboutUsPage />} />
      </Routes>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
