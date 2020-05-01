import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './components/toggle'
import Menu from "./components/menu";
import Home from "./components/home";
import About from "./components/about";
import Counter from "./components/counter";
import Location from "./components/location";
import Blog from "./components/blog";
import Contact from "./components/contact";

function App() {
  return (
      <div className="container-wrap">
          <Toggle/>
          <Menu/>
          <div id="colorlib-main">
              <Home/>
              <About/>
              <Counter/>
              <Location/>
              <Blog/>
              <Contact/>
          </div>
      </div>
  );
}

export default App;
