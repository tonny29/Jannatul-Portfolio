import { Grid } from '@mui/material';
import image from '../../image/imageTwo.png'
import './AboutMe.css';

const AboutMe = () => {
    return (
        <>
        <h1><span style={{color:'tomato'}}>ABOUT ME</span></h1>
        <Grid container spacing={2} style={{margin:-20}}>
        <Grid item lg={6} md={6} xs={12}>
        <div className="img-style">
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
    </>
    );
};

export default AboutMe;