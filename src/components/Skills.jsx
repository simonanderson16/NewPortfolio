import React from "react";
import "../styles/Skills.css";
import info from "../skills.json";
import { Card, CardHeader, CardBody, Image, Chip } from "@nextui-org/react";

const Skills = () => {
    return (
        <div id="skills" className="section-container skills-container">
            <h1 className="skills-header">Skills</h1>
            <div className="skills-grid">
                {info.skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="card-header">
                            <h4 className="font-bold text-large">{skill.name}</h4>
                        </div>
                        <div className="card-body">
                            <img alt="Card background" className="skill-image" src={skill.url} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
