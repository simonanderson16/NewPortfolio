import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <div className="portfolio-container mx-auto">
                <Intro />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </div>
        </div>
    );
};

export default Portfolio;
