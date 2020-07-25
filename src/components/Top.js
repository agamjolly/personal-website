import React, { Component } from 'react'
import '../css/custom.css'

class Top extends Component { 
    render() { 
        return (        
            <div className="container">
                <div className="header">
                    <h1 className="heading">Hi there! <span className="wave" role="img" aria-label="Hand wave emoji">👋</span></h1>
                    <h1 className="intro">I am <strong className="very-strong">Agam</strong>, a full-stack developer based in the San Francisco Bay Area.</h1>
                    <h2 className="resume">Looking for my <a href="https://www.agamjolly.com/agam_jolly_resume.pdf" target="_blank" rel="noopener noreferrer">resume?</a></h2>
                </div>
            </div>
        )
    }
}

export default Top