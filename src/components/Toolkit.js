import React, { Component } from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

class Toolkit extends Component { 
    render() { 

        return (
                <div className="toolkit">
                    <a className="no" href="https://www.github.com/agamjolly" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a>
                    <a className="no" href="https://www.linkedin.com/in/agamjolly" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a>
                    <a className="no" href="mailto:me@agamjolly.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope" /></a>
                    <a className="no" href="https://www.twitter.com/agamjolly" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a>
                    <a className="no" href="https://wa.link/atm99i" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp" /></a>
                </div>
        )
    }
}

export default Toolkit