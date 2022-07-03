//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Navbar, Jumbotron, ContenedordeCards,Footerr } from "./component/home.jsx";

//render your react application
ReactDOM.render(
  
  <div>
    <Navbar />
    <div className="container">
    <Jumbotron />
    <ContenedordeCards/>
    </div>
    <Footerr/>    
  </div>,
  document.querySelector("#app")
);
