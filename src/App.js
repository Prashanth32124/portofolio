import React from 'react';
import Nav from './Nav';
import About from './About';
import './App.css';
import Skills from './Skills';
import Profile from './Profile';
import Certifications from './Certifications';
import Projects from './Projects';
function App() {
    return (
        <div>
            <Nav />
            <Profile/>
            <About />  
            <Skills/>
            <Certifications/>
            <Projects/>
        </div>
    );
}

export default App;
