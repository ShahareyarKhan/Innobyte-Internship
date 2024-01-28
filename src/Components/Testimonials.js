import React, { useState } from 'react'
import TestimonialCard from './TestimonialCard'
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import global from './Global.svg';
import user1 from './user1.png'
import user2 from './user2.png'
import user3 from './user3.png'
import netflix from './Netflix.svg'
import discord from './Discord.svg'
import amazon from './Amazon.svg'
import reddit from './Reditt.svg'
import spotify from './Spotify.svg'

function Testimonials() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const btnpressprev = () => {
        let box = document.querySelector(".product-container");
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width / 1;
        if (scrollPosition > 0) {
            setScrollPosition(scrollPosition - 1);
        }
    };

    const btnpressnext = () => {
        let box = document.querySelector(".product-container");
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width / 1;
        console.log(width);
        if (scrollPosition <2) {
            setScrollPosition(scrollPosition + 1);
        }
    };

    return (
        <section className='TestimonialsContainer container' id='testimonials'>
            <div>
                <h2 className='text-center'>Huge Global Network <br /> of Fast VPN</h2>
                <p className='testp text-center my-3' >See LaslesVPN everywhere to make it easier for you when you move locations.</p>

                <div className='globalimg '>
                    <img src={global} alt="" />
                </div>

                <div className='sponser-box'>
                    <div><img className='svg-img' src={netflix} alt="" /></div>
                    <div><img className='svg-img' src={reddit} alt="" /></div>
                    <div>
                        <img className='svg-img' src={amazon} alt="" />
                    </div>
                    <div><img className='svg-img' src={discord} alt="" /></div>
                    <div><img className='svg-img' src={spotify} alt="" /></div>
                </div>
            </div>
            <div className='TestimonialsHeading'>
                <h2 className='text-center'>Trusted by Thousands of <br />Happy Customer</h2>
            </div>

            <div className='TestimonialSubHeading text-center my-3'>
                <p className='testp'>These are the stories of our customers who have joined us with great <br /> pleasure when using this crazy feature.</p>
            </div>

            <div className="product-carousel">
                <div className="product-container">
                    <TestimonialCard
                        user={user1}
                        userComments={`“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.`}
                        userName={`Viezh Robert`}
                        userLocation={`Warsaw, Poland`} />
                    <TestimonialCard
                        user={user2}
                        userComments={`“I like it because I like to travel far and still can connect with high speed.”`}
                        userName={`Yessica Christy`}
                        userLocation={`Shanxi, China`} />
                    <TestimonialCard
                        user={user3}
                        userComments={`“This is very unusual for my business that currently requires a virtual private network that has high security.”`}
                        userName={`Kim Young Jou`}
                        userLocation={`Seoul, South Korea`} />
                </div>

            </div>
            <div className="d-flex justify-content-between">
                <div className="d-flex gap-3 align-items-center mx-5">
                    <div className={`${scrollPosition === 0 ? 'active' : ""} dot`}></div>
                    <div className={`${scrollPosition === 1 ? 'active' : ""} dot`}></div>
                    <div className={`${scrollPosition === 2 ? 'active' : ""} dot`}></div>
                </div>

                <div className="d-flex gap-3 align-items-center">
                    <div className="next" >
                        <GrFormPreviousLink className="icon2" onClick={btnpressprev} />
                    </div>
                    <div className="next next1"  >
                        <GrFormNextLink className="icon3" onClick={btnpressnext} />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Testimonials