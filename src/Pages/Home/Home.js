import { Grid } from '@mui/material';
import React from 'react';
import image from '../../image/imageOne.png';
import myfile from  '../../resume/Resume of - Jannatul Nayem Tonny.pdf'
import './Home.css';

const Home = () => {
    return (
        
        <Grid container spacing={2} style={{margin:-30}}>
        <Grid item lg={6} md={6} xs={12}>
            <div className="home-text">
                <p>Hey!! I am  <br /><h1><span style={{color:'tomato'}}>JANNATUL NAYEM TONNY</span></h1>I am a Full Stack developer with projects experience building websites and <br /> web applications. I have well knowledge on JavaScript <br /> Node.js.I also have experience working with React, Bootstrap, tailwind & MongoDB.</p>
                <br />
              <button>
              <a
                  style={{ textDecoration: "none", color: "white" }}
                  href={myfile}
                  download="Resume of - Jannatul Nayem Tonny.pdf"
                >
                  Download Resume
                </a>
                  </button>
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