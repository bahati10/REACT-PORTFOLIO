import React from 'react'
import '../CSS/style.css';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div>
    <div>
        <header className='homeheader'>
          <a href="Home.js" className="brand"><span>bahati.</span></a>
          <ul className="navbar">
            <li><Link to='/' className="active">Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Work'>Work</Link></li>
            <li><Link to='/Skills'>Skills</Link></li>
            <li><Link to='/Blog' >Blog</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
          </ul>
          <div className="tocont">
         <Link to='/Contact' className="tocontact">Let's Talk</Link>
            <div className="bx home-menu" id="home-menu-icon" />
          </div>
        </header>
        <div className='homemain'>
          <div className="content">
            <img src="/IMG/tiny.png" className="img" alt="Bahati Yves" />
            <div className="bio-title">
              <p className='home-bio'>
                Hello, 👋🏾 <br />
                I'm <span className="name">Bahati yves,</span><br />
                Software Developer <br />
                <span className="address"><cite>Kigali, Rwanda</cite></span><br />
                <button className="resume"><a href="IMG/Resume.pdf" target="_blank">RESUME</a></button>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
