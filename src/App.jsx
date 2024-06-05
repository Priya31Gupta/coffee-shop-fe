import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import NavbarComponent from './components/Navbar/Navbar.component';
import HomeComponent from './components/Home/Home.component';
import AboutUs from "./components/About-us/AboutUs.component";
import ProductDetail from './components/ProductDetail/ProductDetail'
import ProductList from "./components/ProductsList/ProductList";
import CartComponent from "./components/Cart/Cart";
import { CartProvider } from './reduxComponent/cartContext';
import SignInComponent from "./components/Signin/Signin.component";
import SignUpComponent from "./components/Signin/SignUp.component";
function App() {
  
  
  return (
    <div className="App">
      <CartProvider>
      <NavbarComponent />
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/signin" element={<SignInComponent />} />
          <Route path="/signup" element={<SignUpComponent />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartComponent />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>  
      </Router>
      </CartProvider>
      
    </div>
  );
}

export default App;
