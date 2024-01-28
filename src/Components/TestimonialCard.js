import React from 'react'
import { AiFillStar } from 'react-icons/ai';

function TestimonialCard(props) {
  return (
    <section id='testimonials' className='mycard'>
      <div className='userDetails '>
        <div className='userName_Image d-flex align-items-center gap-3'>
          <div>
            <img src={props.user} className='userimg' alt='user'/>
          </div>
          <div className='userName d-flex flex-column'>
            <div>
              <h4 className='my-1'>{props.userName}</h4>
            </div>
            <div className='testp'>
              {props.userLocation}
            </div>
          </div>
        </div>

        <div className='review d-flex gap-2 align-items-center'>
          <div className=''>
            4.5
          </div>
          <div className='reviewStar'>
            <AiFillStar />
          </div>
        </div>
      </div>
      <div className='userComments my-4'>
        <p>{props.userComments}</p>
      </div>
    </section>
  )
}

export default TestimonialCard