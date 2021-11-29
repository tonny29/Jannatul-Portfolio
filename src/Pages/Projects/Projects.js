import React from "react";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { projectInfo } from "../ProjectsItem/Projectsitem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Container,
    Grid,
  } from "@material-ui/core";
import SwiperCore, {
    Navigation,
    Scrollbar,
    A11y,
    Pagination,
    Autoplay,
  } from "swiper";
import "./Projects.css";
  SwiperCore.use([Navigation, Scrollbar, A11y, Pagination, Autoplay]);
  
  const Projects = () => {
    return (
      <section className="project-section" id="portfolio">
        <Container maxWidth="lg">
          <h2 className="text-center">My Portfolio</h2>
          <Grid container>
            {projectInfo.map((item, index) => (
              <Grid item lg={4} md={6} sm={12} xs={12} key={index}>
                <div className="project-container">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 2000 }}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                  >
                    {item.img &&
                      item.img.map((img) => (
                        <SwiperSlide>
                          <div className="text-container">
                            <img src={img} alt="img" className="reviewer-img" />
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                  <h2>{item.name}</h2>
                  <h3>{item.subtitle}</h3>
                  <Accordion
                    style={{ backgroundColor: "#2A2C39", color: "#fff" }}
                  >
                    <AccordionSummary aria-controls="panel1a-content"
                      id="panel1a-header"className="details"
                    >
                      View Details
                    </AccordionSummary>
                    <AccordionDetails>
                      <h3>Overview: </h3>
                    </AccordionDetails>
                    <AccordionDetails>
                      <p>1. {item.about1}</p>
                    </AccordionDetails>
                    <AccordionDetails>
                      <p>2. {item.about2}</p>
                    </AccordionDetails>
                    <AccordionDetails>
                      <p>3. {item.about3}</p>
                    </AccordionDetails>
        
                    <AccordionDetails className="home-text">
                      <a href={item.ClientCode} target="_blank" rel="noreferrer"><button>Client Code</button></a>
                      <a href={item.ServerCode} target="_blank" rel="noreferrer"><button>Server Code</button></a>
                      <a href={item.liveSite} target="_blank" rel="noreferrer"><button>Live Site</button></a>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    );
  };
  
  export default Projects;