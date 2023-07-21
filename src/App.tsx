import React from 'react';
import './App.css';
import NavbarComponent from './components/Navbar/Navbar.component';
import HomeComponent from './components/Home/Home.component';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HomeComponent />
    </div>
  );
}

export default App;
