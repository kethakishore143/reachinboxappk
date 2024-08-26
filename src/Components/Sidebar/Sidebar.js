import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { MdPersonSearch } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { BiLogoTelegram } from "react-icons/bi";
import { IoListSharp } from "react-icons/io5";
import { TiChartBar } from "react-icons/ti";
import ".//Sidebar.css"




function Sidebar() {
    return (
        <nav className='sidebar-container'>
            <BiLogoGmail className='gmail_icon' />
            <div className='menu-items'>
                <AiOutlineHome className='icons' />
                <MdPersonSearch className='icons' />
                <CgMail className='icons' />
                <BiLogoTelegram className='icons' />
                <IoListSharp className='icons' />
                <TiChartBar className='icons' />
            </div>
            <div className='profile_name'>
                AS
            </div>

        </nav>
    )
}

export default Sidebar;