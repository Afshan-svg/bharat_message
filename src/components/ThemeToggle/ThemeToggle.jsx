import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './themetoggle.css';

function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.className = isDarkMode ? 'light-mode' : 'dark-mode';
    };

    return (
        <div className="theme-toggle">
            <button onClick={toggleTheme} className="toggle-btn">
                {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
        </div>
    );
}

export default ThemeToggle;
