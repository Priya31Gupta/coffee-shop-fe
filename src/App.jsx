import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import NavbarComponent from './components/Navbar/Navbar.component';
import HomeComponent from './components/Home/Home.component';
import AboutUs from "./components/About-us/AboutUs.component";
import ProductDetail from './components/ProductDetail/ProductDetail'
import ProductList from "./components/ProductsList/ProductList";
import CartComponent from "./components/Cart/Cart";

function App() {
  
  
  return (
    <div className="App">
      <NavbarComponent />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route exact path="/products/:id">
           <ProductDetail />
          </Route> 
          <Route exact path="/cart">
           <CartComponent />
          </Route> 
        </Switch>  
      </Router>
      
    </div>
  );
}

export default App;
