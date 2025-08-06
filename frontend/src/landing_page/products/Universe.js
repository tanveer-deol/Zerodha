import React from "react";
function Universe() {
  return (
    <div className="container text-center mt-5 text-muted">
      <div className="add mb-5">
        <p className=" fs-5">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
      </div>
      <div className="row mt-5">
        <h1 className="mt-5 fs-3">The Zerodha Universe</h1>
        <p className="mt-3 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3">
          <img src="media/images/smallcaseLogo.png" className="mb-3" style={{width:"190px"}} />
          <p className="text-small">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 ">
            <img src="media/images/streakLogo.png" className="mb-3" style={{width:"190px"}} />
            <p className="text-small">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3">
            <img src="media/images/sensibullLogo.svg"className="mb-3" style={{width:"190px"}} />
            <p className="text-small">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" className="mb-3" style={{width:"190px"}} />
          <p className="text-small">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img src="media/images/goldenpiLogo.png" className="mb-3" style={{width:"190px"}}/>
            <p className="text-small">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img src="media/images/dittoLogo.png"className="mb-3" style={{width:"190px"}} />
            <p className="text-small">Insurance</p>
        </div>
                    <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Signup now</button>

      </div>
    </div>
  );
}

export default Universe;
