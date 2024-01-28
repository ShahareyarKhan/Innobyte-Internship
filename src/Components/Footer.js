import React from 'react'
import logo from './Logo.svg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'
const Footer = () => {
    return (
        <section id="footer" className='pb-2' >
            <div className="container footer">
                <div className='footer-box1 d-flex flex-column gap-0'>
                    <div className=''>
                        <img src={logo} alt="logo" className='logo' />
                    </div>
                    <div className='footer-para'>
                        LaslesVPN is a private virtual network that <br /> has unique features and has high security.
                    </div>
                    <div className='d-flex gap-4 my-3'>
                        <div>
                            <FaFacebook className='icon'/>
                        </div>
                        <div>
                            <FaTwitter className='icon'/>
                        </div>
                        <div>
                            <FaInstagram className='icon'/>
                        </div>
                    </div>
                    <div className='footer-para'>
                        ©2020LaslesVPN
                    </div>
                </div>

                <div className='footer-box2 d-flex flex-column gap-2 footer-para '>
                    <div><h6 className='text-black'>Product</h6></div>
                    <div>Download</div>
                    <div>Pricing</div>
                    <div>Locations</div>
                    <div>Server</div>
                    <div>Countries</div>
                    <div>Blog</div>
                </div>
                <div className='footer-box2 d-flex flex-column gap-2 footer-para '>
                    <div><h6 className='text-black'>Engage</h6></div>
                    <div>LaslesVPN ?</div>
                    <div>FAQ</div>
                    <div>Tutorials</div>
                    <div>About Us</div>
                    <div>Privacy Policy</div>
                    <div>Terms of Service</div>
                </div>
                <div className='footer-box2 d-flex flex-column gap-2 footer-para '>
                    <div><h6 className='text-black'>Earn Money</h6></div>
                    <div>Affiliate</div>
                    <div>Become Partner</div>
                   
                </div>
                
            </div>
        </section>
    )
}

export default Footer
