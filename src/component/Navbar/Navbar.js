import React from "react";
import logo from "./Osdag_header.png";
class Navbar extends React.Component {
  render() {
    return (
      <div className="navebar">
        <nav className="navbar bg-light" data-bs-theme="light">
          
            <div className="container-fluid">

              <a className="navbar-brand" href="/">
                <img src={logo} alt="logo" width="80" height="40px" className="d-inline-block align-text-top" />                
              </a>
              <a className="btn btn-primary" href="/" role="button">Connection</a>
              <a className="btn btn-secondary" href="/" role="button"> Tension Member</a>
              <a className="btn btn-success" href="/" role="button"> Compression Member</a>
              <a className="btn btn-warning" href="/" role="button">Flexural Member</a>
              <a className="btn btn-info" href="/" role="button">Beam-Column</a>
              <a className="btn btn-dark" href="/" role="button">Plate Girder</a>
              <a className="btn btn-success" href="/" role="button">Truss</a>
              <a className="btn btn-primary" href="/" role="button">2D Frame</a>
              <a className="btn btn-secondary" href="/" role="button">3D Frame</a>
              <a className="btn btn-info" href="/" role="button"> Group Design</a>
              <a className="btn btn-danger" href="https://www.youtube.com/channel/UCnSZ7EjhDwNi3eCPcSKpgJg" role="button">Help</a>


            </div>
          
        </nav>
      </div>
    );
  }
}

export default Navbar;



