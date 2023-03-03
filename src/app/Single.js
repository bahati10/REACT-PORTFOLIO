import React from 'react'
import '../CSS/uxd.css'
import { Link } from 'react-router-dom';

export default function Single() {
  return (
    <div>
    <div>
      <header>
        <Link to="/" classname="brand"><span>bahati.</span></Link>
        <ul classname="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="Work">Work</Link></li>
          <li><Link to="Skills">Skills</Link></li>
          <li><Link to="Blog" classname="active">Blog</Link></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <div classname="main">
          <Link to="/Blog" classname="signup"><i classname="fa-solid fa-user"> Log out</i></Link><i classname="fa-solid fa-user">
            <div classname="bx bx-menu" id="menu-icon">
            </div>
          </i></div></header><i classname="fa-solid fa-user">
        <main classname="container">
          <div className="box one">
            <div className="content">
              <h5>UI/UX Design<span /></h5> <br />
              <p>UI (User Interface) design refers to the visual elements of a digital product, such as layout, color
                scheme, and typography. The goal of UI design is to create a user-friendly and aesthetically
                pleasing experience for the user.
              </p> <br />
              <p>
                UX (User Experience) design, on the other hand, refers to the overall feel of the product and how
                easy it is for the user to accomplish their goals. UX designers focus on usability, accessibility,
                and the overall flow of the product.
              </p> <br /> <br />
              <p id="sub">
                Free UI/UX design Courses
              </p> <br /> <br />
              <p>
                1. "UI Design for Beginners" on Udemy is a beginner-friendly course that covers the basics of UI
                design, including layout, color theory, and typography. <br /> <br />
                2. "Intro to User Experience (UX) Design" on Coursera is a short course that introduces the basics
                of UX design and covers topics such as usability, user research, and design principles. <br /> <br />
                3. "Design 101" on LinkedIn Learning is a comprehensive course that covers the foundations of
                design, including UI and UX design. <br /> <br />
                4. "Design Fundamentals" on Skillshare is a beginner-level course that covers the basics of design,
                including color theory, typography, and layout. <br /> <br />
              </p>
              <p>
                In addition to these resources, there are many online courses and tutorials available to help
                beginners learn UI/UX design.
                It's also helpful to follow UX-related blogs and social media accounts to stay up-to-date with the
                latest industry trends and techniques.
              </p>
            </div>
          </div>
          <div className="box two">
            <div className="image">
              <img src="/IMG/ilnur-kalimullin-kP1AxmCyEXM-unsplash.jpg" alt="UI/UX Design" width={400} height={330} title="UI/UX Design" />
            </div>
          </div>
          <div className="box three">
            <button className="like"><i className="fa-solid fa-heart" /> Like</button>
            <a href="#main-container" id="comment"><button className="comment"><i className="fa-solid fa-message" />
                Comment</button></a>
          </div> <br />
          <div className="comment-container">
          </div>
          <div className="main-container" id="main-container">
            <form className="form" autoComplete="on" spellCheck="false">
              <h2>Add Comment</h2>
              <label className="message" htmlFor="text">Comment</label>
              <textarea name="message" id="form-comment" maxLength={30} cols={30} rows={5} onkeyup="validateComment()" defaultValue={""} /> <br />
              <span id="comment-error" /> <br /> <br />
              <button className="send" type="submit" onclick="return validateForm()">post</button>
              <span id="submit-error" />
            </form>
            <id id="success">
              <div className="modal">
                <div className="icon"><i id="icon1" className="fa-regular fa-circle-check" /></div>
                <h4>Comment Added<br /> Successfully</h4>
              </div>
            </id>
          </div>
        </main>
      </i></div><i classname="fa-solid fa-user">
    </i></div>
  )
}
