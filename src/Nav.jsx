import React from 'react';
import './Nav.css';

function Nav() {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            console.error("About section not found");
        }
    };

    const scrollToSkill = () => {
        const skillSection = document.getElementById("skills"); 
        if (skillSection) {
            skillSection.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            console.error("Skills section not found");
        }
    };

    const scrollTocert = () => {
        const skillSection = document.getElementById("cert"); 
        if (skillSection) {
            skillSection.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            console.error("Skills section not found");
        }
    };

    const scrollToeducation = () => {
        const skillSection = document.getElementById("education"); 
        if (skillSection) {
            skillSection.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            console.error("Skills section not found");
        }
    };
    return (
        <nav>
            <button onClick={scrollToAbout}>About</button>
            <button onClick={scrollToSkill}>Skills</button>
            <button onClick={scrollTocert}>Certifications</button>
            <button onClick={scrollToeducation}>Education</button>
        </nav>
    );
}

export default Nav;
