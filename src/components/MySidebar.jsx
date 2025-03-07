import { Button, Container, FormControl, FormGroup, Navbar, NavbarBrand } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Form } from "react-router";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";

const MySidebar = () => {
  return (
    <>
      <aside>
        <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
          <div className="container flex-column align-items-start">
            <a className="navbar-brand" href="index.html">
              <img src={logo} alt="Logo" width="131" height="40" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul>
                  <li>
                    <a className="nav-item nav-link d-flex align-items-center" href="#">
                      <HouseDoorFill />
                      &nbsp; Home
                    </a>
                  </li>
                  <li>
                    <a className="nav-item nav-link d-flex align-items-center" href="#">
                      <BookFill />
                      &nbsp; Your Library
                    </a>
                  </li>
                  <li>
                    <div className="input-group mt-3">
                      <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
                      <div className="input-group-append">
                        <button className="btn btn-outline-secondary btn-sm h-100">GO</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="nav-btn">
            <button className="btn signup-btn" type="button">
              Sign Up
            </button>
            <button className="btn login-btn" type="button">
              Login
            </button>
            <div>
              <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};
export default MySidebar;
