import { Grid } from '@mui/material';
import React from 'react';
import image from '../../image/imageOne.png';
import './Home.css';

const Home = () => {
    return (
        
        <Grid container spacing={2} style={{margin:-30}}>
        <Grid item lg={6} md={6} xs={12}>
            <div className="home-text">
                <p>Hey!! I am  <br /><h1><span style={{color:'tomato'}}>JANNATUL NAYEM TONNY</span></h1>I am a Full Stack developer with projects experience building websites and <br />  web applications. I have well knowledge on JavaScript Node.js.I also have experience working with React, Bootstrap, tailwind & MongoDB.</p>
                <br />
                <a href="https://drive.google.com/file/d/1YUM-Qy2MfweWw9nEq0eKVXr9paEYy3V2/view?usp=sharing" target="_blank"><button>See My Resume</button></a>
            </div>
            
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
            <div className="img-style">
                <img src={image} alt="" />
            </div>
        </Grid>
      </Grid>
      
    );
};

export default Home;