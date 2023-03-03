import React from 'react'
import '../CSS/signup.css'
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
      <div>
        <header>
          <Link to="/" className="brand"><span>bahati.</span></Link>
          <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Work">Work</Link></li>
            <li><Link to="/Skills">Skills</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
          <div className="main">
            <Link to='/Signup' className="signup">Sign Up</Link>
            <div className="bx bx-menu" id="menu-icon" />
          </div>
        </header>
        <div className="main-container">
          <form className="signupform">
            <h2>Get Started</h2>
            <h5>Already have an account? <Link to="/Login">Log In</Link></h5>
            <label className="su-name" htmlFor="name">Name</label>
            <input type="name" id="su-form-name" onkeyup="validateName()" spellCheck="false" autoComplete="off" />
            <span id="name-error" /> <br />
            <label className="su-email" htmlFor="email">Email</label>
            <input type="email" id="su-form-email" spellCheck="false" onkeyup="validateMail()" autoComplete="off" />
            <span id="su-email-error" /><br />
            <label className="su-password" htmlFor="password">Password</label>
            <input type="password" id="su-form-password" spellCheck="false" onkeyup="validatePassword()" />
            <span id="su-password-error" /> <br />
            <button className="sign" type="submit">Sign Up</button>
            <span id="su-submit-error" />
          </form>
          <id id="success">
            <div className="modal">
              <div className="icon"><i id="icon1" className="fa-regular fa-circle-check" /></div>
              <h4>Account Created <br /> Successfully</h4>
            </div>
          </id>
          <id id="success2">
            <div className="modal">
              <div className="icon"><i id="icon" className="fa-solid fa-circle-xmark" /></div>
              <h4>Account Creation <br /> Failed</h4>
            </div>
          </id>
        </div>
      </div>
  )
}
