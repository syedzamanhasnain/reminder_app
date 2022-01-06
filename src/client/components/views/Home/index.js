import React from "react";
import "./style.scss";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <h1 className="">Remember Everything</h1>
          <h1>With Us</h1>
          <button
            className="get_start_btn btn btn-outline-primary"
            type="button"
          >
            Get Started
          </button>
        </div>
        <div className="col-6">
          <img
            src="/images/welcome2.png"
            className="img-fluid"
            role="img"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
