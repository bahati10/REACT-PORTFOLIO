import React from 'react'
import '../CSS/blog.css'
import { Link } from 'react-router-dom';


export default function Blog() {
  return (
    <div>
      <header>
        <Link to="/" className="brand"><span>bahati.</span></Link>
        <ul className="navbar">
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Work">Work</Link></li>
          <li><Link to="/Skills">Skills</Link></li>
          <li><Link to="/Blog" className="active">Blog</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <div className="blogmain">
          <Link to='/Signup' className="signup"><i className="fa-solid fa-user" /> Sign Up</Link>
          <div className="bx bx-menu" id="menu-icon" />
        </div>
      </header>
      <section className="blog">
        <div className="blog-head">
        </div>
        <div className="blog-container">
          <div className="box middle">
            <div className="blog-img">
              <img src="/IMG/code.webp" alt="" className='blogimg' width={310} height={240} />
            </div>
            <div className="blog-content">
              <h5>Web Responsiveness </h5>
              <span>Joe Doe - 06 Jan 2023</span>
              <Link to="/Single" className="content-details">
                Learn about Website responsive Design and gain skills to start making your own projects as a professional developer.
              </Link>
              <Link className="read" to="/single">Read more</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
