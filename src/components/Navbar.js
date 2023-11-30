import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.Title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
          <div className="d-flex">
            <div className="bg-primary rounded mx-1" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px' , cursor:'pointer'}}></div>
            <div className="bg-success rounded mx-1" onClick={()=>{props.toggleMode('success')}} style={{height:'30px', width:'30px' , cursor:'pointer'}}></div>
            <div className="bg-warning rounded mx-1" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', width:'30px' , cursor:'pointer'}}></div>
            <div className="bg-danger rounded mx-1" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', width:'30px' , cursor:'pointer'}}></div>
          </div>
          <div className={`form-check form-switch text-${props.Mode === 'light' ? 'dark' : 'light'}`}>
            <input
              className="mx-1 form-check-input"
              onClick={()=>{props.toggleMode('primary')}}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Dark
            </label>
          </div>
          {/* <div className={`form-check form-switch text-${props.Red === 'light' ? 'red' : 'light'}`}>
            <input
              className="mx-1 form-check-input"
              onClick={props.tMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckRed"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckRed" >
              Red
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

