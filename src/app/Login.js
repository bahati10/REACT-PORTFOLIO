import React from 'react'
import '../CSS/login.css'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
      <div>
        <header className='li-header'>
          <Link to='/' href="/index.html" className="brand"><span>bahati.</span></Link>
          <ul className="navbar">
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/About' >About</Link></li>
            <li><Link to='/Work' >Work</Link></li>
            <li><Link to='/Skills' >Skills</Link></li>
            <li><Link to='/Blog' >Blog</Link></li>
            <li><Link to='/Contact' >Contact</Link></li>
          </ul>
          <div className="main">
            <Link to ='/Signup' className="signup">Sign Up</Link>
            <div className="bx bx-menu" id="menu-icon" />
          </div>
        </header>
        <div className="main-container">
          <form className="li-form">
            <h2 className='li-title'>Welcome Again</h2>
            <label className="li-email" htmlFor="email">Email</label>
            <input type="email" id="li-form-email" spellCheck="false" autoComplete="off" onkeyup="validateMail()" />
            <span id="li-email-error" /> <br />
            <label className="li-password" htmlFor="password">Password</label>
            <input type="password" id="li-form-password" spellCheck="false" autoComplete="off" onkeyup="validatePassword()" />
            <span id="li-password-error" /> <br />
            <h5>New ? <Link to ="/Signup">Sign Up</Link> 0r <Link to="/Loginadmin">Login As Admin</Link></h5> <br />
            <button className="sign" type="submit" onclick="return validateForm();">Sign in</button> <br />
            <span id="submit-error" />
          </form>
          <id id="success">
            <div className="modal">
              <div className="icon"><i id="icon1" className="fa-regular fa-circle-check" /></div>
              <h4>Login was<br /> Successful</h4>
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
