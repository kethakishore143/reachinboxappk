import React from 'react';

import { BiLogoGmail } from "react-icons/bi";

import ".//Header.css"


function Header() {
    return (
        <div>
            <nav className='nav-container'>
                <span className='richinbox-container'><BiLogoGmail className='gmail_icon' />

                    REACHINBOX
                </span>
            </nav>
        </div>
    )
}

export default Header