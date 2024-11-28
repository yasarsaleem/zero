import React from "react";
import { Link } from "react-router-dom"
function Navbar() {
  return (
    
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor :"#FFFF"}}>
        <div class="container-fluid">
          <Link class="navbar-brand" to = "/">
            <img src="media/images/logo.svg" style={{width:"25%" ,paddingLeft: "50px"}} alt="logo"/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
            <ul class="navbar-nav mb-2 me-auto ">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to = "/signup" style={{ marginRight: "30px" }}>
                  Signup
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" to="/about" style={{ marginRight: "30px" }}>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/products" style={{ marginRight: "30px" }}>
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active"  to="/pricing" style={{ marginRight: "30px" }}>
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support" style={{ marginRight: "30px" }}>
                  Support
                </Link>
              </li>
            
            </ul>
            </form>
          </div>
        </div>
      </nav>
   
  );
}

export default Navbar;
