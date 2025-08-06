import React from "react";
function Hero() {
  return (
    <div className="container text-center text-muted mb-5 border-bottom">
      <div className="row mt-5 p-5">
        <h1 className="fs-2 p-1">Zerodha Products</h1>
        <h2 className="fs-5 p-1 fw-light">Sleek, modern, and intuitive trading platforms</h2>
        <p className="fs-6 p-1 mb-5" >Check out our <a href="" style={{textDecoration:"none"}}>investment offerings<i class="fa-solid fa-arrow-right"></i></a></p>
      </div>
    </div>
  );
}

export default Hero;
