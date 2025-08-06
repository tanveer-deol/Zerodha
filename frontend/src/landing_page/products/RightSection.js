import React from 'react';
function RightSection({heading,paragraph,mainImage,link}) {
  return (
    <div className="container mt-5">
      <div className="row mt-5 " >
        <div className="col-1"></div>
        <div className="col-3 mt-5 p-2">
          <h1 className="fs-2 mb-4 mt-5">{heading}</h1>
          <p style={{ lineHeight: "2" }}>
            {paragraph}
          </p>
          <p>
            
            <a href="" className="" style={{ textDecoration: "none" }}>
              {link} <i class="fa-solid fa-arrow-right"></i>
            </a>
          </p>
          
        </div>
        <div className="col-2 "></div>
        <div className="col-6 ">
          <img src={mainImage} style={{ width: "80%" }} />
        </div>
        
        
      </div>
    </div>
  );
}


export default RightSection;