import React from 'react'
import { FaLocationArrow, FaLocationDot, FaServer, FaUser } from 'react-icons/fa6'

const About = () => {
  return (
    <section id='about ' className='about container '>
      <div className="d-flex justify-content-around align-items-center about-box ">
        <div className='d-flex justify-content-around align-items-center'>
            <div><FaUser className='icon'/></div>
            <div>
                <div><h4 className='my-0'>90+</h4></div>
                <div adesc>Users</div>
            </div>
        </div>
        <div className='d-flex justify-content-around align-items-center'>
            <div><FaLocationDot className='icon'/></div>
            <div>
                <div><h4 className='my-0 '>30+</h4></div>
                <div className='ades'>Locations</div>
            </div>
        </div>
        <div className='d-flex justify-content-around align-items-center'>
            <div><FaServer className='icon'/></div>
            <div>
                <div><h4 className='my-0'>50+</h4></div>
                <div className='ades'>Servers</div>
            </div>
        </div>
        
      </div>
    </section>
  )
}

export default About
