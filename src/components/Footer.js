import React from 'react'
import styledComponents from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
    <div className='footer-section'>
        <div className='text-container'>
            <p className='logo d-flex align-items-center justify-content-center mt-5'>YOUR LOGO</p>
            <div className='footer-links'>
                <div className='box1'>
                 <p className='link'>Home</p> 
                 <p className='link'>About Us</p> 
                 <p className='link'>Features</p>   
                </div>

                <div className='box2'>
                <p className='link'>Gallery</p> 
                <p className='link'>Testimonials</p> 
                <p className='link'>Contact Us</p> 
                </div>
            </div>
        </div>
    </div>
    </FooterWrapper>
  )
}

export default Footer;

const FooterWrapper=styledComponents.div`
.footer-section{
height:300px;
width:100%;
background-color:#00D285;
}
.text-container{
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
}
.footer-links{
    display:flex;
    margin-left:400px;
    margin-right:400px;
}
.box1,.box2{
display:flex;
}
.link{
    margin-left:40px;
    color:white;
}
.link:hover{
    cursor:pointer;
}
.logo{
    color:white;
}
@media screen and (max-width: 600px) {

    .footer-links{
        display:flex;
        margin-left:auto;
        margin-right:auto;
        flex-direction:column;
    }
    .box1,.box2{
        display:flex;
        align-items:center;
        justify-content:center;
        }  
}
`;