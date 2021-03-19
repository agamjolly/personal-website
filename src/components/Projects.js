import React, { Component } from 'react'

class Projects extends Component { 
    render() { 
        function caps(something) { 
            return something.toUpperCase()
        }
        return ( 
            <div className="third-container">
                
                <h1 class="small-text">{caps("projects")}</h1>

                <div className="card-container">

                    

                </div>

                
            </div>
        )
    }
}

export default Projects