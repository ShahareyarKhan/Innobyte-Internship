import React from 'react'
import featuresimg from './Features-Img.svg'
import { FaCircleCheck } from 'react-icons/fa6'
const Features = () => {
  return (
    <section id="features" className="features ">
      <div className="container d-flex justify-content-between  align-items-center   hero">
        <div className='features-left'><img src={featuresimg} alt="" /></div>
        <div className="features-right">
          <h2>We Provide Many Features You Can Use</h2>

          <p className='features-para'>You can explore the features that we provide with fun and have their own each feature.</p>

          <div className='features-box'>
            <div className='d-flex align-items-center tick'>
              <div className=''><FaCircleCheck className='text-success'/></div>
              <div>Powerful online protection.</div>
            </div>
            <div className='d-flex align-items-center tick'>
              <div className=''><FaCircleCheck className='text-success'/></div>
              <div>Internet without borders.</div>
            </div>
            <div className='d-flex align-items-center tick'>
              <div className=''><FaCircleCheck className='text-success'/></div>
              <div>Supercharged VPN.</div>
            </div>
            <div className='d-flex align-items-center tick'>
              <div className=''><FaCircleCheck className='text-success'/></div>
              <div>No specific time limits.</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features
