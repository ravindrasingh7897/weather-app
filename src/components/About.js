import React, { Component } from 'react';
import './css/about.css';
import profileImage from './IMG_4678-min.JPG';


export class about extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about">
          <img src={profileImage} alt="Profile" />
          <div className="textabout">
            <h5 className="nav-link">About me</h5>
            <p className="nav-link">As a web developer, I am passionate about creating intuitive and visually striking digital experiences. With a keen eye for detail and a drive for innovation, I excel in translating ideas into functional and appealing web applications. My dedication to staying updated on emerging technologies ensures that I deliver cutting-edge solutions that meet and exceed client expectations. I thrive in collaborative environments, where I can leverage my technical skills to contribute to the success of projects.</p>
            
          </div>
        </div>
      </div>
    );
  }
}


export default about

