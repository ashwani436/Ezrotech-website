import React from 'react'
import styledComponents from 'styled-components';
import home from '../components/assets/home.svg'


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
          <img src={home} className="w-100 h-100 home-image"/>
        </div>
      </div>
    </div>
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
`