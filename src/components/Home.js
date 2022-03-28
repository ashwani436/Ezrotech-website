import React from 'react'
import styledComponents from 'styled-components';
import home from '../components/assets/home.svg';
import logo from '../components/assets/logos.png';
import Trusted from './Trusted';


function Home() {
  return (
    <HomeWrapper>
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <p className='heading mt-5'>Best online Technology platform for you</p>
          <p className='subheading mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ante efficitur, feugiat mauris id, pellentesque felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ante efficitur, feugiat mauris id, pellentesque felis.</p>
          <div className='button-box d-flex'>
          <button className='btn btn-success course shadow-none'>View Course</button>
          <button className='btn btn-outline-success course mx-3 shadow-none'>Join for free</button>
          </div>
        </div>

        <div className='col-lg-6 col-md-6 col-sm-12'>
          <img src={home} className="w-100 h-100 home-image"alt="no-image" />
        </div>
      </div>

      <div className='row mt-5 mb-5'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <p className='heading mt-5'>Welcome to Ezrotech Technology</p>
          <p className='subheading mt-2'>Lorem Copy
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ante efficitur, feugiat mauris id,
 pellentesque felis. Donec rhoncus hendrerit auctor. Nullam tempor tortor ut leo vehicula vehicula. Proin non 
 congue orci, ac suscipit augue. Aliquam ut rhoncus nunc. Sed mollis quam ut ipsum dolor sit amet, consectetur 
 adipiscing elit. Nulla at ante efficitur, feugiat mauris id, pellentesque felis.Lorem ipsum dolor sit amet, consectetur 
 adipiscing elit. Nulla at ante efficitur, feugiat mauris id, pellentesque felis.</p>
          <button className='btn btn-success course shadow-none mt-5'>View Course</button>
        </div>

        <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
        <div className='col-lg-12 col-md-12 col-sm-12 d-flex'>
          <div className='box first'>
          <img src={logo} className="w-25" alt="no-logo"/>
          <p className='box-heading'>Ezrotech Technology</p>
          <p className='box-subheading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. finibus dui sed lacus ornare sodales</p>
          </div>
         
         
          <div className='box second'>
          <img src={logo} className="w-25" alt="no-logo"/>
          <p className='box-heading'>Ezrotech Technology</p> 
          <p className='box-subheading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. finibus dui sed lacus ornare sodales</p>   
          </div>
          </div>
         
       

        <div className='col-lg-12 col-md-12 col-sm-12 mt-5 d-flex'>
          <div className='box third'>
          <img src={logo} className="w-25" alt="no-logo"/>
          <p className='box-heading'>Ezrotech Technology</p>
          <p className='box-subheading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. finibus dui sed lacus ornare sodales</p>
          </div>
         
         
          <div className='box fourth'>
          <img src={logo} className="w-25" alt="no-logo"/> 
          <p className='box-heading'>Ezrotech Technology</p> 
          <p className='box-subheading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. finibus dui sed lacus ornare sodales</p> 
          </div>
          </div>
        </div>
      </div>

    </div>
    <Trusted/>
    </HomeWrapper>

  )
}

export default Home;

const HomeWrapper=styledComponents.div`
.heading{
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 62px;
}
.subheading{
  font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
}
.box{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:300px;
  height:250px;
  background-color:#EBF9F5;
}
.box-heading{
  margin-top:10px;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
}
.box-subheading{
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
text-align: center;
padding-left:20px;
padding-right:20px;
}
.second,.fourth{
  margin-left:20px;
}
@media screen and (max-width: 700px) {
  .box{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:400px;
    height:250px;
    background-color:#EBF9F5;
  }
  .box-heading{
    margin-top:5px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 27px;
    }
}
`