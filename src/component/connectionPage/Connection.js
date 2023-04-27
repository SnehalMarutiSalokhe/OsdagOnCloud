
import ShearConnection from "../../component/slides/ShearConnection";
// import MomentConnection from "../../component/slides/MomentConnection";
// import TrussConnection from "../../component/slides/TrussConnection";


import "./connection.css";
import React from "react";

export default function Connection() {
  return (
    <div className="connectionPageContainer">
     
     <div className="connectionPageHeader">
     CONNECTION
     </div>
     
     {/* <a href="/" className="btn btn-secondary" role="button" data-bs-toggle="button">Shear connection</a>
    <a href="/" className="btn btn-secondary active" role="button" data-bs-toggle="button" aria-pressed="true">Moment connection</a> */}
    {/* <a href="/" className="btn btn-secondary active" role="button" data-bs-toggle="button" aria-pressed="true"> Truss connection</a> */}
      <ShearConnection/>
      {/* <MomentConnection/> */}

      {/* <TrussConnection/>  */}
    </div>
  )
}
