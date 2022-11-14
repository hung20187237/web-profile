import React from "react";
import "./topbar.css";

export default function Topbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >

        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between py-4 py-lg-0"
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto py-0">
            <a href="#i" className="nav-item nav-link active">
              Home
            </a>
            <a href="#a" className="nav-item nav-link">
              About
            </a>
            <a href="#s" className="nav-item nav-link">
              Skills
            </a>
          </div>
          <a
            href="index.html"
            className="navbar-brand  py-3 px-4 mx-3 d-none d-lg-block"
          >
            <h1 className="text-primary fw-bold m-0">Mr.Hung</h1>
          </a>
          <div className="navbar-nav me-auto py-0">
          <a href="#pr" className="nav-item nav-link">
              Product
            </a>
            <a href="#con" className="nav-item nav-link">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
