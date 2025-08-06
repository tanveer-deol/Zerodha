import React from "react";
function Hero() {
  return (
    <div className="container text-center mt-5 ">
      <div className="row border-bottom mb-5">
        <h1 className="mt-3">Pricing</h1>
        <p className="mt-3 mb-5 fs-5">
          Free equity investments and flat 220 traday and F&O trades
        </p>
      </div>
      <div className="row text-muted mt-5">
        <div className="col-4 p-4">
          <img src="media/images/pricing0.svg"></img>
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/intradayTrades.svg"></img>
          <h2>Intraday and F&O trades</h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/pricing0.svg"></img>
          <h2>Free direct MF</h2>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
