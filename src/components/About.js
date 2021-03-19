import React, { Component } from 'react'
import "../css/custom.css"
import dp from "../static/dp.jpeg"
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import Skills from "./Skills.js"

import Toolkit from './Toolkit.js'

// import 'react-tabs/style/react-tabs.css';


class About extends Component { 
    render() { 
        function caps(something) { 
            return something.toUpperCase()
        }
        return (
            <div className="second-container">
                <h1 className="small-text">{caps("About me")}</h1>
                <div className="picture-div">
                    <img src={dp} className="picture" alt="Agam Jolly display"/>
                </div>
                <div className="text">
                    <p className="picture-text">Agam <span>Jolly</span></p>
                </div>
                <Toolkit />
                <div className="adjustment">
                    <div className="about-heading"> 
                        {caps("education")}
                    </div>
                    <div className="about-text">
                        <p className="para-text">
                            I am a second-year college student at the <a href="https://www.github.com/agamjolly" target="_blank" rel="noopener noreferrer">University of California, Berkeley</a> where I major in Computer Science. At UC Berkeley, I am a part of the coveted <a href="https://eecs.berkeley.edu/cs-scholars/data" target="_blank" rel="noopener noreferrer">CS Scholars</a> program. {/*In case you are interested in knowing what courses I took this year, click <a href="https://eecs.berkeley.edu/cs-scholars/data" target="_blank" rel="noopener noreferrer">here</a>.*/}<br /><br />

                            Prior to starting university, I did my high-schooling at Mayor World School, where I was declared the <a href="https://en.wikipedia.org/wiki/Head_girl_and_head_boy" target="_blank" rel="noopener noreferrer">Head Boy</a> for the graduating class of 2018-19. This was the time when I went to the presitigious <a href="https://launchx.com/" target="_blank" rel="noopener noreferrer">MIT LaunchX</a> on a full-ride scholarship where I founded <a href="https://launchx.com/companies" target="_blank" rel="noopener noreferrer">Eli Sleep</a>.<br /><br />
                            
                            This summer, I am working at <a href="https://news.berkeley.edu/2020/01/30/boalt-hall-denamed/" target="_blank" rel="noopener noreferrer">UC Berkeley's <strike>Boalt</strike> School of Law</a> to create impactful distributed software used by alumni, faculty, and students at scale.
                        </p>    
                    </div>
                    
                    
                    <div className="about-heading"> 
                        {caps("skills")}
                    </div>
                    
                    <Skills />
        
                    
                    <div className="about-heading"> 
                        {caps("work experience")}
                    </div>
                    
                    Hello world

                </div>
            </div>
        )
    }
}

export default About