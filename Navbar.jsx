import React from 'react';
import { Link } from "react-router-dom";


let Navbar = () => {

    return <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     
    <div className="collapse navbar-collapse" >
      <ul className="navbar-nav ml">
        <li className="nav-item active">
        <Link className="nav-link" to="/Home"> Home </Link>
        </li>
        </ul>
        <Link className="nav-link" to="/Favourite"> Favourite </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="nav-link" to="/SignUp"> SignUp </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="nav-link" to="/Login"> Login </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <Link className="nav-link" to="/Dashboard"> Dashboard </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     </div>
    </nav>
  </React.Fragment>

}

export default Navbar;