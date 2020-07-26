import React from 'react';
import '../css/custom.css'
import useDarkMode from 'use-dark-mode'
import '../../node_modules/font-awesome/css/font-awesome.min.css' 
import Toggle from 'react-toggle'

const BigToggle = ({ checked, onChange }) => (
  <span className="toggle-control switcher custom">
    <i className="fa fa-sun-o right-space" /> 
    <Toggle
          defaultChecked={checked}
          icons={false}
          onChange={onChange} />
     
    <i className="fa fa-moon-o left-space" />
    
  </span>
);
// onClick = {darkmode.disable} as an attribute
const DarkModeToggle = () => {
  const darkMode = useDarkMode(true);
  return (
    <div>
        <BigToggle checked={darkMode.value} onChange={darkMode.toggle} />
        
    </div>
  );
};

export { DarkModeToggle, BigToggle }