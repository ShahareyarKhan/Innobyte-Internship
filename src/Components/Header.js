import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import Logo from './Logo.svg'
const Header = () => {
    const [sideBar, setSideBar] = useState(false);
    return (
        <div>
            <div className='header-full'>
                <div>
                    <img src={Logo} alt="" />
                </div>

                <div className="header-items header-items1">
                    <div>
                        <a className="a" href="#about">About</a>
                    </div>

                    <div>
                        <a className="a" href="#features">Features</a>
                    </div>
                    <div>
                        <a className="a" href="#pricing">Pricing</a>
                    </div>

                    <div>
                        <a className="a" href="#testimonials">Testimonials</a>

                    </div>
                    <div>
                        <a className="a" href="#help">Help</a>
                    </div>
                </div>

                <div className="header-items">
                    <div>Sign In</div>
                    <div className='signup'>Sign Up</div>
                </div>
                {sideBar === false ? (<div onClick={() => {
                    setSideBar(true);
                }} className='barbox'>
                    <FaBars className='bar' />
                </div>) : (
                    <div onClick={() => { setSideBar(false) }} className='barbox'>
                        <IoClose className='bar' />
                    </div>)}

            </div>

            {<div className={`header-sidebar ${sideBar === true ? "sideOpen" : "sideClose"}`}>
                <div className='mHead'>
                    <div className='sidebar-items'>
                        <a className="a" href="#about">About</a>
                    </div>

                    <div className='sidebar-items'>
                        <a className="a" href="#features" >Features</a>
                    </div>
                    <div className='sidebar-items'>
                        <a className="a" href="#pricing" >Pricing</a>
                    </div>

                    <div className='sidebar-items'>
                        <a className="a" href="#testimonials">Testimonials</a>
                    </div>
                    <div className='sidebar-items'>
                        <a className="a" href="#help">help</a>
                    </div>
                    <br />
                    <div className='line' />
                </div>
            </div>}
        </div>
    )
}

export default Header
