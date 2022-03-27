import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Navbar() {
  return (
    <NavbarWrapper>
    <nav className="navbar navbar-expand-lg navbar-light bg-gray">
        <div className="container">
        <Link to="/" style={{ textDecoration: 'none' }}>
            <a className="navbar-brand logo">Brand Logo</a>
        </Link>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto">
                <div className="navbar-nav">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                    <a className="nav-item nav-link text-decoration-none">Home</a>
                    </Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                    <a className="nav-item nav-link">AboutUs</a>
                    </Link>
                    <Link to="/features" style={{ textDecoration: 'none' }}>
                    <a  className="nav-item nav-link">Features</a>
                    </Link>
                    <Link to="/testimonials" style={{ textDecoration: 'none' }}>
                    <a className="nav-item nav-link">Testimonials</a>
                    </Link>
                </div>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <a className="nav-item nav-link">Contact Us</a>
                </Link>
                </div>
            </div>
        </div>
    </nav>
    </NavbarWrapper>
  )
}

export default Navbar

const NavbarWrapper=styled.div`

`