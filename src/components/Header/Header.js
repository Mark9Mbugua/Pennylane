import React, { useState, useEffect } from 'react';
import MainNavbar from './MainNavbar';

const Header = () => {
    const [displayMobileNavbar, setDisplayMobileNavbar] = useState(false);
    
    useEffect(() => {
        window.addEventListener('resize', checkAndAutoHideMobileNavbar);
        return () => {
            window.removeEventListener('resize', checkAndAutoHideMobileNavbar);   
        }
    }, []);

    const checkAndAutoHideMobileNavbar = () => {
        const screenWidth = window.innerWidth
        if (displayMobileNavbar && screenWidth > 768) {
            setDisplayMobileNavbar(false);
        }
    }

    return (
        <div>
            <MainNavbar 
                displayMobileNavbar={displayMobileNavbar}
                setDisplayMobileNavbar={setDisplayMobileNavbar}
            />
        </div>
    );
}

export default Header
