import React, { Component } from 'react';
import { DarkModeToggle } from './Toggle';

class Header extends Component {
  render () {
    return (
        <div>
            <DarkModeToggle />
        </div>
    )
  }
}

export default Header