import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ReactTooltip from 'react-tooltip'

class Skills extends Component { 
    render() { 
        function caps(something) { 
            return something.toUpperCase()
        }
        return ( 
            <div className="about-text">
                        <p className="para-text skills-text">
                        I am well-versed in making full-stack and <a href="https://web.dev/progressive-web-apps/" target="_blank" rel="noopener noreferrer">progressive web applications</a> using modern technological stacks. I often place heavy emphasis on making interactive and minimal user interfaces.<br /><br />

                        

                        </p>
                    </div>
        )
    }
}

export default Skills