import React from 'react'
import ReactDOM from 'react-dom'

import Top from './components/Top.js'
import About from './components/About.js'

import DarkModeToggle from './components/Toggle.js'

ReactDOM.render(
    (

    <div>
        <DarkModeToggle />
        <Top />
        <About />
    </div>
    
    ),
    document.getElementById('root')
)