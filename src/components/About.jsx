import React from "react";
import { useEffect, useState } from "react";
import "../styles/About.css";
import info from "../info/about.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const About = () => {
    const [carouselWidth, setCarouselWidth] = useState(window.innerWidth * 0.85);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setCarouselWidth(window.innerWidth * 0.85);
        });
    }, []);

    return (
        <div id="about" className="section-container about-container">
            <h1 className="about-header">About</h1>
            <div className="about-content">
                <div className="more-about-me">
                    <h2 className="about-subheader">More About Me</h2>
                    <div className="more-about-me-content">
                        {info.about.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
                <div className="skills">
                    <h2 className="about-subheader">Skills</h2>
                    <div className="skills-grid">
                        {info.skills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <img src={skill.url} alt={skill.name} />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Carousel
                showThumbs={false}
                showArrows
                showStatus={false}
                centerMode
                centerSlidePercentage={40}
                infiniteLoop
                autoPlay={true}
                interval={3000}
                width={carouselWidth}
            >
                {info.about.images.map((image, index) => (
                    <img key={index} className="carousel-image" src={`../../public/images/${image.file}`} />
                ))}
            </Carousel>
        </div>
    );
};

export default About;
