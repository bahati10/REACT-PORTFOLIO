import React from 'react'
import '../CSS/myabout.css'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='aboutbody'>
        <header className='aboutheader'>
          <Link to='/' href="Home.html" className="brand"><span>bahati.</span></Link>
          <ul className="navbar">
            <li><Link to='/' href="Home.js">Home</Link></li>
            <li><Link to='/About'href="About.js" className="active">About</Link></li>
            <li><Link to='/Work' href="Work.js">Work</Link></li>
            <li><Link to='/Skills' href="Skills.js">Skills</Link></li>
            <li><Link to='/Blog' href="Blog.js">Blog</Link></li>
            <li><Link to='/Contact' href="Contact.js">Contact</Link></li>
          </ul>
          <div className="main">
            <Link to='/Signup' href="Signup.js" className="signup">Sign Up</Link>
            <div className="bx bx-menu" id="menu-icon" />
          </div>
        </header>
        <div className="container">
          <div className="image">
            <img className='aboutimg' src="/IMG/profile.png" alt="" />
          </div>
          <h2 className="abouttitle">About</h2>
          <p className="aboutbio">
            <span className="heading">I'm Bahati, </span>
            A dedicated software developer looking to collaborate
            with others and gain professional skills and experience.
            Usually looking forward to build my profession in UI/UX
            design and a Networking enthusiast.<br /> <br /> <br />
            <button id="btn"><a href="/IMG/Resume.pdf" target="_blank">RESUME</a></button>
          </p>
        </div>
      </div>
  )
}
