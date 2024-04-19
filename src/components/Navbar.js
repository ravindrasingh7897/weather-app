import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./css/navbar.css"
import cloudimage from "./images/cloud.png"


export class NavBar extends Component {
  render() {
    return (
      <div className='header'>
        <div className="container">
          <div className="logo">
            <img src={cloudimage} alt="todo" />
            <li className="navbar-brand text-dark">Weather-Wave</li>
          </div>
          <nav>
            <ul>
              
              <li className="nav-item"><Link className="nav-link text-dark" to="/home">Cities</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/weather">Weather</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/about">About</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default NavBar
