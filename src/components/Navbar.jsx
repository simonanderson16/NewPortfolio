import React, { useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, ButtonGroup } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import "../styles/Navbar.css";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = ["About", "Experience", "Projects", "Contact"];

    const scrollToSection = (id, event) => {
        event.preventDefault();
        const element = document.getElementById(id);
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const offsetTop = element.offsetTop - navbarHeight;
        if (isMenuOpen) {
            setIsMenuOpen(false);
            setTimeout(() => {
                window.scrollTo({ top: offsetTop, behavior: "smooth" });
            }, 100);
        } else {
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
    };

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="navbar"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", display: "flex", justifyContent: "between", position: "fixed", top: "0" }}
        >
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="md:hidden text-black" />
                <div className="navbar-logo" onClick={(e) => scrollToSection("intro", e)}>
                    {/* <img src={logo} alt="Logo" className="w-8 h-8 mr-2" /> */}
                    <p className="font-bold text-inherit hover:text-indigo-400">Simon Anderson</p>
                </div>
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-4" justify="center">
                <a href="#about" className="nav-link hover:text-indigo-400" onClick={(e) => scrollToSection("about", e)}>
                    About
                </a>
                <a href="#experience" className="nav-link hover:text-indigo-400" onClick={(e) => scrollToSection("experience", e)}>
                    Experience
                </a>
                <a href="#projects" className="nav-link hover:text-indigo-400" onClick={(e) => scrollToSection("projects", e)}>
                    Projects
                </a>
                <a href="#contact" className="nav-link hover:text-indigo-400" onClick={(e) => scrollToSection("contact", e)}>
                    Contact
                </a>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden md:flex">
                    <a href="https://www.linkedin.com/in/simonanderson16/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="mr-4 icon linkedin-button" />
                    </a>
                    <a href="https://github.com/simonanderson16" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="mr-4 icon github-button" />
                    </a>
                    <a href="mailto:uhx8bu@virginia.edu">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-4 icon email-button" />
                    </a>
                    <a href="https://drive.google.com/file/d/1-pJ8UezWWVbYxoHH5pUD5EcQ-bt3POwr/view?usp=sharing" target="_blank">
                        <BsFileEarmarkPersonFill className="icon resume-button" />
                    </a>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full hover:cursor-pointer text-black hover:text-indigo-400"
                            onClick={(e) => scrollToSection(item.toLowerCase(), e)}
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <hr className="w-full my-2 border-t border-gray-300" />
                <NavbarMenuItem>
                    <Link
                        className="w-full hover:cursor-pointer text-black linkedin-button"
                        href="https://www.linkedin.com/in/simonanderson16/"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="navbar-menu-icon" /> LinkedIn
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="w-full hover:cursor-pointer text-black github-button" href="https://github.com/simonanderson16" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="navbar-menu-icon" /> GitHub
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="w-full hover:cursor-pointer text-black email-button" href="mailto:uhx8bu@virginia.edu">
                        <FontAwesomeIcon icon={faEnvelope} className="navbar-menu-icon" /> Email
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        className="w-full hover:cursor-pointer text-black resume-button"
                        href="https://drive.google.com/file/d/1R5gTjsDa1EnyuCxDBRv3Jh3ZYqKCcySk/view?usp=sharing"
                        target="_blank"
                    >
                        <BsFileEarmarkPersonFill className="navbar-menu-icon" /> Resume
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
