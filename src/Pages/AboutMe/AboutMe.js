import { Grid } from '@mui/material';
import image from '../../image/skills.png'
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="bg-color">
        <h1><span style={{color:'tomato'}}>ABOUT ME</span></h1>
        <br />
        <Grid container spacing={2} style={{margin:-20}}>
        <Grid item lg={6} md={6} xs={12}>
        <div className="img-styleTwo">
            <h3>My Skills</h3>
            <hr />
           <img src={image} alt="" />
        </div>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
            <div className="about-text">
            <p>You are reading about Jannatul Nayem Tonny. I am Bs.c in 3rd year student. Department of Computer Science & Engineering(CSE) from World University of Bangladesh.I would like to introduce myself as a junior web developer.</p>
                <br /> 
               <button>HIRE ME</button>
            </div>   
        </Grid>
      </Grid>
    </div>
    );
};

export default AboutMe;