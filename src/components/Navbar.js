import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Navbar() {

   const colorBg1=()=>{
        document.getElementById('home').style.color="#00D285";
        document.getElementById('about').style.color="";
        document.getElementById('feature').style.color="";
        document.getElementById('testimonial').style.color="";
        document.getElementById('contact').style.color="";
   }

   const colorBg2=()=>{
    document.getElementById('about').style.color="#00D285";
    document.getElementById('home').style.color="";
    document.getElementById('feature').style.color="";
    document.getElementById('testimonial').style.color="";
    document.getElementById('contact').style.color="";
    }

    const colorBg3=()=>{
    document.getElementById('feature').style.color="#00D285";
    document.getElementById('home').style.color="";
    document.getElementById('about').style.color="";
    document.getElementById('testimonial').style.color="";
    document.getElementById('contact').style.color="";
    }

    const colorBg4=()=>{
    document.getElementById('testimonial').style.color="#00D285";
    document.getElementById('home').style.color="";
    document.getElementById('about').style.color="";
    document.getElementById('feature').style.color="";
    document.getElementById('contact').style.color="";
    }

    const colorBg5=()=>{
    document.getElementById('contact').style.color="#00D285";
    document.getElementById('home').style.color="";
    document.getElementById('about').style.color="";
    document.getElementById('feature').style.color="";
    document.getElementById('testimonial').style.color="";
    }

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
                    <a className="nav-item nav-link text-decoration-none" id="home" onClick={colorBg1}>Home</a>
                    </Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                    <a className="nav-item nav-link" id="about" onClick={colorBg2}>About Us</a>
                    </Link>
                    <Link to="/features" style={{ textDecoration: 'none' }}>
                    <a  className="nav-item nav-link" id="feature" onClick={colorBg3}>Features</a>
                    </Link>
                    <Link to="/testimonials" style={{ textDecoration: 'none' }}>
                    <a className="nav-item nav-link" id="testimonial" onClick={colorBg4}>Testimonials</a>
                    </Link>
                </div>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <a className="nav-item nav-link" id="contact" onClick={colorBg5}>Contact Us</a>
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
.nav-link{
    font-size:18px;
    margin:5px;
}
@media screen and (max-width: 700px) {
    .nav-link{
        text-align:center;
        margin:0px;
    }   
}
`