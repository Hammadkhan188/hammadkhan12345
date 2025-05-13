import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div> <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
      <a className="navbar-brand" href="index.html">Plataforma.</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu"></span> Menu
      </button>

      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          {/* <li className="nav-item"><Link to="/speakers" className="nav-link">Speakers</Link></li> */}
          <li className="nav-item"><Link to="/schedule" className="nav-link">Schedule</Link></li>
          <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
          {/* <li className="nav-item cta mr-md-2"><a href="#" className="nav-link">Buy ticket</a></li> */}

        </ul>
      </div>
    </div>
  </nav></div>
  )
}
