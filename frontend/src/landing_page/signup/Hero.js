import React from "react";
import Sign from "./Sign";
function Hero() {
  return (
    <>
      <div className="container text-muted">
        <div className="row  mt-5">
          <h1 className="mt-5 fs-2 text-center">
            Open a free demat and trading account online
          </h1>
          <p className="fs-5 mt-3 mb-5 text-center">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>
          <div className="col-1 mt-5"></div>
          <div className="col-5 mt-5">
            <img src="/media/images/account.svg" style={{ width: "95%" }} />
          </div>
          <div className="col-5 mt-5 text-left ">
            <Sign/>
          </div>
          <div className="col-1 mt-5"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
