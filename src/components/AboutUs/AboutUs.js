import React,{useState} from 'react'
import styled from 'styled-components';
import { teamdata } from './teamdata';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function AboutUs() {
  const[teamTab,setTeamTab]=useState("All");
  const[data,setData]=useState(teamdata);

  const handleChange = (event, newValue) => {
    setTeamTab(newValue);
    if(newValue==="All"){
      setData(teamdata);
    }
    else if(newValue==="Leadership"){
      setData(teamdata.slice(0,3));
    }
    else if(newValue==="Engineering"){
      setData(teamdata.slice(2,15));
    }
    else if(newValue==="Sales & Marketing"){
      setData(teamdata.slice(15,19));
    }
    else if(newValue==="Admin"){
      setData(teamdata.slice(19,21));
    }
    else{
      setData(teamdata.slice(21,22));
    }
  };
  return (
    <TeamWrapper>
    <div className='container mt-5'>
        <h1 className='heading'>Meet The Team</h1>
      <div className='tablist'>
      <Box sx={{ maxWidth: { sm: 480 ,lg: 1200 }, bgcolor: 'background.paper' }} mt={3} m="auto">
      <Tabs
        value={teamTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        allowScrollButtonsMobile
      >
        <Tab label="All" value="All"/>
        <Tab label="Leadership" value="Leadership"/>
        <Tab label="Engineering" value="Engineering"/>
        <Tab label="Sales & Marketing" value="Sales & Marketing"/>
        <Tab label="Admin" value="Admin"/>
        <Tab label="Design" value="Design"/>
       
      </Tabs>
    </Box>
    </div>
    </div>
   <div className='container-fluid'>
    <div className="row mt-5">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
               data.map((val,index)=>{
                  return (
                    <div className="col-lg-3 col-6 team-members">
                    <div className="card">
                      <img  key={index} src={val.img} className="card-img-top image" alt="no-image"/>
                      <div className="card-body">
                        <h6 className='name'>{val.name}</h6>
                        <h6 className="designation">{val.designation}</h6>
                      </div>
                </div>
                </div>
                  )
                })
              }
            </div>
    
    </div> 
    </div>  
    </div>
    </TeamWrapper>
  )
}

export default AboutUs;

const TeamWrapper=styled.div`
.heading{
  display:flex;
  align-items:center;
  justify-content:center;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  margin-top:7%;
}

.tablist{
  display:flex;
  margin-top:30px;
}
.card{
  display:flex;
  border: none;
  align-items:center;
  justify-content:center;
}
.image{
  width:50%;
  border-radius:50%;
}
.name{
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 16px;
text-align:center;
}
.designation{
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #787D91;
  text-align:center;
}
@media screen and (max-width: 600px){
  .tablist{
    display:initial;
  }
  .name{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align:center;
    }
    .designation{
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: #787D91;
      text-align:center;
    }
    .image{
      width:70%;
    }
}
`;