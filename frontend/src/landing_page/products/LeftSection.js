import React from "react";
function LeftSection({heading,paragraph,mainImage,linka,linkb}) {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-1"></div>
        <div className="col-7 mt-5 p-2">
          <img src={mainImage} style={{ width: "70%" }} />
        </div>
        <div className="col-3 mt-5 p-2">
          <h1 className="fs-2 mb-4 mt-5">{heading}</h1>
          <p style={{ lineHeight: "2" }}>
            {paragraph}
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              {linka?<span>{linka} <i class="fa-solid fa-arrow-right"></i></span>:""}
            </a>
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              {linkb?<span>{linkb} <i class="fa-solid fa-arrow-right"></i></span>:""}
            </a>
          </p>
          <p>
            <img src="media/images/googlePlayBadge.svg"/>
            <img className="mx-3" src="media/images/appstoreBadge.svg"/>
          </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default LeftSection;
