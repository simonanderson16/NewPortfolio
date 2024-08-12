import React from "react";
import { useState } from "react";
import { Chip, Tooltip } from "@nextui-org/react";
import "../styles/Projects.css";
import info from "../info/projects.json";
import { FaGithub } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import { SiDevpost } from "react-icons/si";

const Projects = () => {
    const projects = info.projects;
    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleFlip = (index) => {
        setFlippedIndex(index === flippedIndex ? null : index);
    };

    return (
        <div id="projects" className="section-container projects-container">
            <h1 className="projects-header">Projects</h1>
            <Chip variant="flat" className="projects-chip">
                Click on each project to learn more
            </Chip>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        className={`project-card project-${index + 1} ${flippedIndex === index ? "flipped" : ""}`}
                        key={index}
                        onClick={() => handleFlip(index)}
                    >
                        <div className="project-card-inner">
                            <div className="project-card-front">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <p className="project-title">{project.title}</p>
                            </div>
                            <div className="project-card-back">
                                <div className="card-back-content">
                                    <p>{project.description}</p>
                                    <div className="project-links">
                                        {project.links.map((link, index) => (
                                            <Tooltip key={index} content={link.name} showArrow color="secondary" size="sm" closeDelay={0}>
                                                <a href={link.url} target="_blank" rel="noreferrer" className="project-link">
                                                    {link.name === "GitHub" ? (
                                                        <FaGithub className="project-icon" />
                                                    ) : link.name === "Visit"  || link.name === "Play" || link.name === "Admin" ? (
                                                        <IoOpenOutline className="project-icon" />
                                                    ) : (
                                                        <SiDevpost className="project-icon" />
                                                    )}
                                                </a>
                                            </Tooltip>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
