import React from "react";
import { useState } from "react";
import { Card } from "@nextui-org/react";
import "../styles/Projects.css";
import info from "../info/projects.json";

const Projects = () => {
    const projects = info.projects;
    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleFlip = (index) => {
        setFlippedIndex(index === flippedIndex ? null : index);
    };

    return (
        <div id="projects" className="section-container projects-container">
            <h1 className="projects-header">Projects</h1>
            {/* <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className={`project-card project-${index + 1}`} key={index}>
                        <div className="project-card-front">
                            <p className="project-title">{project.title}</p>
                        </div>
                        <div className="project-card-back">Description</div>
                    </div>
                ))}
            </div> */}
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        className={`project-card project-${index + 1} ${flippedIndex === index ? "flipped" : ""}`}
                        key={index}
                        onClick={() => handleFlip(index)}
                    >
                        <div className="project-card-inner">
                            <div className="project-card-front">
                                <p className="project-title">{project.title}</p>
                            </div>
                            <div className="project-card-back">
                                <p>Description of {project.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
