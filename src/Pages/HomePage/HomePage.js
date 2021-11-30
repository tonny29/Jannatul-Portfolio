import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../ContactMe/Contact';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <br />
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;