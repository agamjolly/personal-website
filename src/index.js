import React from 'react'
import ReactDOM from 'react-dom'

import Top from './components/Top.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'

import { DarkModeToggle } from './components/Toggle.js'

ReactDOM.render(
    (

    <div>
        <DarkModeToggle />
        <Top />
        <About />
        <Projects />
        <Footer />
    </div>
    
    ),
    document.getElementById('root')
)