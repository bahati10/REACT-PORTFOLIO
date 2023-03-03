import React from 'react'
import '../CSS/contact.css'
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className='cont-body'>
        <header className='cont-header'>
          <Link to="/" className="brand"><span>bahati.</span></Link>
          <ul className="navbar">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Work'>Work</Link></li>
            <li><Link to='/Skills'>Skills</Link></li>
            <li><Link to='/Blog'>Blog</Link></li>
            <li><Link to='/Contact'className="active">Contact</Link></li>
          </ul>
          <div className="main">
          <Link to='/Signup' className="signup">Sign Up</Link>
            <div className="bx bx-menu" id="cont-menu-icon" />
          </div>
        </header>
        <div className="cont-main-container">
          <form autoComplete="on" className='cont-form' spellCheck="false">
            <div className="links">
            <Link to='https://github.com/bahati10' target="_blank"><img className="one" src="/IMG/square-github.svg" alt="" /></Link>
            <Link to='https://twitter.com/Bahati____' target="_blank"><img className="two" src="/IMG/square-twitter.svg" alt="" /></Link>
            <Link to='mailto:bahatiyves10@gmail.com' target="_blank"><img className="three" src="/IMG/envelope-solid.svg" alt="" /></Link>
            <Link to='https://www.linkedin.com/in/bahati-yves-439aab1a2/' target="_blank"><img className="four" src="/IMG/linkedin.svg" alt="" /></Link>
            </div>
            <label className="cont-name" htmlFor="name">Names</label>
            <input type="name" id="cont-form-name" autoComplete="off" onkeyup="validateName()" />
            <span id="cont-name-error" className="one1" />
            <label className="cont-email" htmlFor="email">Email</label>
            <input type="email" id="cont-form-email" autoComplete="off" onkeyup="validateMail()" />
            <span id="cont-email-error" className="two2" />
            <label className="cont-message" htmlFor="text">Message</label>
            <textarea name="cont-message" id="cont-form-message" cols={30} rows={8} autoComplete="off" onkeyup="validateMessage()" defaultValue={""} />
            <span id="cont-message-error" className="three3" />
            <button className="cont-send" type="submit">Send</button>
            <span id="cont-submit-error" />
          </form>
          <id id="success">
            <div className="modal">
              <div className="icon"><i id="icon1" className="fa-regular fa-circle-check" /></div>
              <h4>Message Sent<br /> Successfully</h4>
            </div>
          </id>
        </div>
      </div>
  )
}
