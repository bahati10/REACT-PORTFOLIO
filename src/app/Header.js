import React from 'react'
import '../CSS/Header.css'

export default function Header() {
    return (
        <div>

            <header>
                <a href="Home.html" classname="brand"><span>bahati.</span></a>
                <ul classname="navbar">
                    <li><a href="Home.js">Home</a></li>
                    <li><a href="About.js" classname="active">About</a></li>
                    <li><a href="Work.js">Work</a></li>
                    <li><a href="Skills.js">Skills</a></li>
                    <li><a href="Blog.js">Blog</a></li>
                    <li><a href="Contact.js">Contact</a></li>
                </ul>
                <div classname="main">
                    <a href="Signup.js" classname="signup">Sign Up</a>
                    <div classname="bx bx-menu" id="menu-icon">
                    </div>
                </div></header>
        </div>
    )
}
