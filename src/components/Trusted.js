import React from 'react'
import styledComponents from 'styled-components'

function Trusted() {
  return (
    <TrustedWrapper>
    <div className="trusted mb-5 mt-5">
       <div className='content-box'>
       <p className='count'>Trusted By 10,000+ Orgaization</p>
       <p className='subtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ante efficitur, feugiat mauris id, pellentesque felis. Donec rhoncus hendrerit auctor. Nullam tempor tortor ut leo vehicula vehicula. Proin non congue orci, ac suscipit augue</p>
       <button className='btn btn-dark course shadow-none mt-5'>View Course</button>
       </div>
    </div>
    </TrustedWrapper>
  )
}

export default Trusted

const TrustedWrapper=styledComponents.div`
.trusted{
    width:100%;
    height:500px;
    background-color:#00D285;
}
.content-box{
    margin-left:300px;
    margin-right:300px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}
.count{
font-style: normal;
font-weight: 700;
font-size: 48px;
color: #FFFFFF;
margin-top:80px;
}
.subtext{
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
text-align: center;

color: #FFFFFF;
}

@media screen and (max-width: 700px) {
    .content-box{
        margin-left:30px;
        margin-right:30px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    } 
    .trusted{
        width:100%;
        height:700px;
        background-color:#00D285;
    }
}

`