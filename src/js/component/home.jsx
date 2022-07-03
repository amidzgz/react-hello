import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Navbar = () => {
  return (
    <div className="container-fluid m-0 px-0">
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid mx-5">
          <a className="navbar-brand text-secondary" href="#">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/workspace/exercise-collaborative-html-website/website/templates/portfolio.html"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export const Jumbotron = () => {
  return (
    <div className="jumbotron bg-light py-5">
      <h1 className="display-4 px-3">A Warm Welcome!</h1>
      <p className="px-3">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam labore animi a modi architecto! Odit eius similique nostrum porro hic sapiente magni asperiores veniam accusamus ratione, atque tempora odio nobis?
      </p>
      <p className="lead px-3">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
  );
};

export const Card = (props) => {
  return (
    <div className="card m-1" style={mySuperStyles}>
      <img
        src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png"
        className="card-img-top"
        alt="..."
      ></img>
      <div className="card-body text-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{props.texto}</p>
        <a href="#" className="btn btn-primary">
          Find out more!
        </a>
      </div>
    </div>
  );
};
const mySuperStyles = {
  width: "18rem",
};

Card.prototypes = {
  texto: PropTypes.string,
};

export const ContenedordeCards = () => {
  return (
    <div class="container pt-4 pb-4 px-0 d-flex flex-wrap justify-content-evenly">
      <Card texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit iure, amet, quibusdam maiores esse soluta nulla voluptates modi voluptas sed nobis doloremque repellat. Vero sint quaerat optio sequi quibusdam?" />
      <Card texto="holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa qaaaaaaaaaaaaaaaaaaaaaaa" />
      <Card texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit iure, amet, quibusdam maiores esse soluta nulla voluptates modi voluptas sed nobis doloremque repellat. Vero sint quaerat optio sequi quibusdam?" />
      <Card texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit iure, amet, quibusdam maiores esse soluta nulla voluptates modi voluptas sed nobis doloremque repellat. Vero sint quaerat optio sequi quibusdam?" />
    </div>
  );
};
export const Footerr = () => {
  return (
    <footer>
      <div class="container-fluid pt-3 pb-5 mt-5 border-top bg-dark text-white text-center">
        <p>Copyright 4Geeks Academy 2022</p>
      </div>
    </footer>
  );
};
