import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

export default function NavMenu() {
    const themeButtonRef = useRef(null);
    const darkTheme = 'dark-theme';
    const selectedTheme = localStorage.getItem('selected-theme');

    useEffect(() => {
        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
        
        if (selectedTheme) {
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
        }

        const themeButton = themeButtonRef.current;
        const handleThemeToggle = () => {
            document.body.classList.toggle(darkTheme);
            localStorage.setItem('selected-theme', getCurrentTheme());
        };

        themeButton.addEventListener('click', handleThemeToggle);

        // Clean up the event listener on component unmount
        return () => {
            themeButton.removeEventListener('click', handleThemeToggle);
        };
    }, [selectedTheme, darkTheme]);

    return (
        <div className="nav-container">
            <div className="nav-wrapper">
                <h1>PELlY</h1>

                <nav>
                    <NavLink className="navlink" to="/"><p>Home</p></NavLink>
                    <NavLink className="navlink" to="/about"><p>About</p></NavLink>
                    <NavLink className="navlink" to="/skills"><p>Skills</p></NavLink>
                    <NavLink className="navlink" to="/service"><p>Services</p></NavLink>
                    <NavLink className="navlink" to="/portfolio"><p>Portfolio</p></NavLink>
                    <NavLink className="navlink" to="/contact"><p>Contact Me</p></NavLink>
                </nav>

                <FontAwesomeIcon id='theme-button' className='navICon' style={{ fontSize: '20px' }} icon={faMoon} ref={themeButtonRef} />
            </div>
        </div>
    );
}
