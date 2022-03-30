import React from 'react'
import styledComponents from 'styled-components'
import logo from '../../components/assets/logos.png';
import { servicedata } from './servicedata';

function Services() {
  return (
    <ServiceWrapper>
    <div className='container'>
    <h2 className='d-flex align-items-center justify-content-center'>Our Services</h2>
    <div className='row'>
       {servicedata.map((data,index)=>{
         return(
          <div className='col-lg-4 col-md-4 col-sm-12 card'>
          <img src={logo} className="logos mt-3" alt="no-logo"/>
          <p key={index} className='service-heading'>{data.heading}</p>
          <p className='service-subheading'>{data.subheading}</p>
          <p className='service-text'>{data.text}</p>
          <a className='text-decoration-none learn'>{data.linktext}</a>
          </div>
         )


       })}
      


    
    </div>
    </div>
    </ServiceWrapper>
  )
}

export default Services

const ServiceWrapper=styledComponents.div`
.card{
  width:400px;
  margin:20px; 
}
.logos{
  width:60px;
}
.service-heading{
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 38px;
color: #4F4F4F;
}
.service-subheading{
font-weight: 400;
font-size: 12px;
line-height: 19px;
margin-top:-15px;
}
.learn{
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
color: #00D285;
margin-bottom:20px;
}
.learn:hover{
  cursor:pointer;
}
@media screen and (max-width: 600px) {
  .card{
    width:350px;
    margin-top:10px; 
    margin-left:auto;
    margin-right:auto;
  }
}
`;