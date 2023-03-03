import React from 'react'
import '../CSS/skills.css'
import { Link } from 'react-router-dom';

export default function Skills() {
  return (
    <div>
        <header>
          <Link to="/" className="brand"><span>bahati.</span></Link>
          <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Work">Work</Link></li>
            <li><Link to="/Skills" className="active">Skills</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
          <div className="main">
            <Link to="/Signup" className="signup">Sign Up</Link>
            <div className="bx bx-menu" id="menu-icon" />
          </div>
        </header>
        <div className="skillscontainer">
          <img src="/IMG/skills.webp" className='skillsimg' alt="" id="image" />
          <p className="sod">
            <span className="heading">Software development,</span> <br />
            UI/UX Design | Javascript | HTML | CSS | Responsive Web Design |
            REACT | DOM | Terminal | VS code | Github | Adobe simulators |
            Basic communication skills
          </p>  <br />
          <p className="net">
            <span className="heading">Computer Networking,</span><br />
            IP Phones configuration | Server installation and configuration |
            Network Designing | Software/Hardware maintenance | Basic
            electronics/Electricity | Caeser Cipher cryptography 
          </p>
        </div>
      </div>
  )
}
