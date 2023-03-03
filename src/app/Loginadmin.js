import React from 'react'
import '../CSS/loginAdmin.css'
import { Link } from 'react-router-dom';

export default function Loginadmin() {
  return (
    <div className='la-body'>
        <header className='la-header'>
          <Link to ="/" className="brand"><span>bahati.</span></Link>
          <ul className="navbar">
            <li><Link to ="/" >Home</Link></li>
            <li><Link to ="/About" href="about.html">About</Link></li>
            <li><Link to ="/Work" href="work.html">Work</Link></li>
            <li><Link to ="/Skills" href="skills.html">Skills</Link></li>
            <li><Link to ="/Blog" href="blog.html">Blog</Link></li>
            <li><Link to ="/Contact" href="contact.html">Contact</Link></li>
          </ul>
          <div className="main">
          <Link to ="/Signup" className="signup">Sign Up</Link>
            <div className="bx bx-menu" id="menu-icon" />
          </div>
        </header>
        <div className="la-main-container">
          <form className="la-form">
            <h2>Welcome Admin</h2>
            <label className="la-email" htmlFor="email">Email</label>
            <input type="email" id="la-form-email" spellCheck="false" autoComplete="off" onkeyup="validateMail()" />
            <span id="email-error" /> <br />
            <label className="la-password" htmlFor="password">Password</label>
            <input type="password" id="la-form-password" spellCheck="false" autoComplete="off" onkeyup="validatePassword()" />
            <span id="la-password-error" /> <br />
            <h5>Don't have an account? <Link to="/Signup">Sign Up</Link></h5> <br />
            <button className="sign" type="submit" onclick="return validateForm();">Sign in</button>
            <span id="submit-error" />
          </form>
          <id id="success">
            <div className="modal">
              <div className="icon"><i id="icon1" className="fa-regular fa-circle-check" /></div>
              <h4>Login was<br /> Succcessfully</h4>
            </div>
          </id>
          <id id="success2">
            <div className="modal">
              <div className="icon"><i id="icon" className="fa-solid fa-circle-xmark" /></div>
              <h4>Something went<br /> Wrong</h4>
            </div>
          </id>
        </div>
      </div>
  )
}
