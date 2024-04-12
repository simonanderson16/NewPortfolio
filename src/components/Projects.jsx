import React from "react";
import { Card } from "@nextui-org/react";
import "../styles/Projects.css";

const Projects = () => {
    return (
        <div id="projects" className="section-container">
            <h1>Projects</h1>
            <div className="projects-grid">
                <div className="project-card">
                    <Card>Project 1</Card>
                </div>
                <div className="project-card">
                    <Card>Project 2</Card>
                </div>
                <div className="project-card">
                    <Card>Project 3</Card>
                </div>
                <div className="project-card">
                    <Card>Project 4</Card>
                </div>
                <div className="project-card">
                    <Card>Project 5</Card>
                </div>
                <div className="project-card">
                    <Card>Project 6</Card>
                </div>
            </div>
        </div>
    );
};

export default Projects;
