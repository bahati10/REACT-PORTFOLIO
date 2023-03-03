import React from 'react'
import '../CSS/work.css'
import { Link } from 'react-router-dom';

export default function Work() {
  return (
    <div>
        <header>
          <Link to="/" className="brand"><span>bahati.</span></Link>
          <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Work" className="active">Work</Link></li>
            <li><Link to="/Skills">Skills</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
          <div className="main">
            <Link to="/Signup" className="signup">Sign Up</Link>
            <div className="bx bx-menu" id="menu-icon" />
          </div>
        </header>
        <main className="all">
          <h2 className="title">.Work 🛠️</h2> <br />
          <div className="block right"><img src="/IMG//time.jpg" alt="" width={270} height={200} /></div>
          <p className="one">
            <span>Stop watch</span> <br />
            It helps to make a stopwatch <br /> so you can do your things on <br /> time ⌛.<br /> <br />
            <Link to="https://bahati10.github.io/Timer-repo/" target="_blank"><button>Visit</button></Link>
          </p>
          <div className="clear" />
          <div className="block left"><img src="/IMG/quote.jpg" alt="" width={270} height={200} /></div>
          <p className="two">
            <span>Quote Generator</span> <br />
            In case of the impostor syndrome, <br /> try this it will really help you refresh <br /> 😊. <br /> <br />
            <Link to="https://bahati10.github.io/Quote-Generator/" target="_blank"><button>Visit</button></Link>
          </p>
        </main>
      </div>
  )
}
