import React from "react";
import { useState } from "react";
import data from "../info/experience.json";
import "../styles/Experience.css";
import { Accordion, AccordionItem, Avatar, Chip } from "@nextui-org/react";

const Experience = () => {
    const experience = data.experience;

    return (
        <div id="experience" className="section-container experience-container">
            <h1 className="experience-header">Experience</h1>
            <Chip variant="flat">
                Click on each experience to learn more
            </Chip>
            <div className="experience-accordion">
                <Accordion>
                    {experience.map((exp, index) => (
                        <AccordionItem
                            key={index}
                            aria-label={exp.company}
                            startContent={<Avatar isBordered color="secondary" radius="full" src={exp.logo} style={{ width: "6rem", height: "6rem" }} />}
                            subtitle={exp.dates}
                            title={
                                <>
                                    <strong>
                                        <h2>{exp.company}</h2>
                                    </strong>
                                    <p>{exp.title}</p>
                                </>
                            }
                        >
                            <ul>
                                {exp.bullets.map((bullet, index) => (
                                    <li key={index}>{bullet}</li>
                                ))}
                            </ul>
                            <div className="tags">
                                {exp.tags &&
                                    exp.tags.map((tag, index) => (
                                        <Chip color="secondary" variant="flat" key={index} className="tag">
                                            {tag}
                                        </Chip>
                                    ))}
                            </div>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            {/* <div className="experience-buttons">
                {experience.map((exp, index) => (
                    <Button key={index} color="primary" onClick={() => setActiveIndex(index)}>
                        {exp.company}
                    </Button>
                ))}
                <div>
                    <h2>{experience[activeIndex].title}</h2>
                    <p>{experience[activeIndex].dates}</p>
                    <p>{experience[activeIndex].description}</p>
                    <ul>
                        {experience[activeIndex].bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            </div> */}
        </div>
    );
};

export default Experience;
