import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../ContactMe/Contact';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <br />
            <AboutMe></AboutMe>
            <br />
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;