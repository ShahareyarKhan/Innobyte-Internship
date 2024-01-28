import React from 'react'
import heroimg from './Hero-Img.svg'
import About from './About'
import Features from './Features'
import Pricing from './Pricing'
import Testimonials from './Testimonials'
import Help from './Help'
import Footer from './Footer'
const Hero = () => {
  return (
    <section className='' id='hero'>
      <div className="container d-flex justify-content-around align-items-center hero  ">
        <div className="hero-left">
          <h1 className="">Want anything to be <br />easy with <span className=''>LaslesVPN.</span></h1>
          <p className='parabtn'>Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> <br /> discover interesting features from us.</p>
          <a href="/get-started" className='get-started'>Get Started</a>
        </div>
        <div className='hero-right'><img src={heroimg} alt="" /></div>
      </div>
      <About />
      <Features />
      <Pricing />
      <Testimonials />
      <Help />
      <Footer/>
    </section>
  )
}

export default Hero
