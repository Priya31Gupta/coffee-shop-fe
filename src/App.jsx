import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import NavbarComponent from './components/Navbar/Navbar.component';
import HomeComponent from './components/Home/Home.component';
import AboutUs from "./components/About-us/AboutUs.component";

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
          {/* <Route path="/product/:id">
            <Dashboard />
          </Route> */}
        </Switch>  
      </Router>
      
    </div>
  );
}

export default App;
