import React from 'react'
import plan1 from './Plan1.svg'
import plan2 from './Plan2.svg'
import plan3 from './Plan3.svg'
import { FaCheck } from "react-icons/fa";
const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className='container'>
        <h2 className='text-center '>Choose Your Plan</h2>
        <p className='text-center my-4'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
        <div className='d-flex justify-content-around plan-box'>
          <div className='price-box'>
            <div>
              <img src={plan1} alt="" className="mt-3" />
            </div>
            <div>
              <h5 className='my-4'>Free Plan</h5>
            </div>
            <ul>
              <div className='plan-li'>
                <div>
                  <FaCheck className="check" />
                </div>
                <div className='ml-2'>
                  Unlimited Bandwitch
                </div>
              </div>
              <div className='plan-li'>
                <div>
                  <FaCheck className="check" />
                </div>
                <div className='ml-2'>
                  Encrypted Connection
                </div>
              </div>
              <div className='plan-li'>
                <div>
                  <FaCheck className="check" />
                </div>
                <div className='ml-2'>
                  Yes Traffic Logs
                </div>
              </div>
              <div className='plan-li'>
                <div>
                  <FaCheck className="check" />
                </div>
                <div className='ml-2'>
                  Works on All Devices
                </div>
              </div>

            </ul>
            <div className='price'>
              <h3>Free</h3>
            </div>
            <div>
              <a href="#free" className="paybtn">Select</a>
            </div>
          </div>
          <div className='price-box'>
            <div>
              <img src={plan2} alt="" className="mt-3" />
            </div>
            <div>
              <h5 className='my-4'>Standard Plan</h5>
            </div>
            <ul>
              <div className='plan-li'>
                <div>
                  <FaCheck className="check" />
                </div>
                <div className='ml-2'>
                  Unlimited Bandwitch
                </div>
              </div>
              <div className='plan-li'>

                <div>
                  <FaCheck className="check" />
                </div>
                <div className='ml-2'>
                  Encrypted Connection
                </div>
              </div>
              <div className='plan-li'>
                <div>
                  <FaCheck className="check" />
                </div>
                <div className='ml-2'>
                  Yes Traffic Logs
                </div>
              </div>
              <div className='plan-li'>
                <div>
                  <FaCheck className="check" />
                </div>
                <div className='ml-2'>
                  Works on All Devices
                </div>
              </div>
              <div className='plan-li'>
                <div>
                  <FaCheck className="check" />
                </div>
                <div className='ml-2'>
                  Connect Anywhere
                </div>
              </div>
            </ul>
            <div className='price'>
              <h3>$9 / mo</h3>
            </div>
            <div>
              <a href="#free" className="paybtn">Select</a>
            </div>
          </div>
          <div className='price-box price-box3'>
            <div>
              <img src={plan3} alt="" className="mt-3" />
            </div>
            <div>
              <h5 className='my-4'>Premium Plan</h5>
            </div>
            <ul>
              <div className='plan-li'>
                <div>
                  <FaCheck className="check" />
                </div>
                <div className='ml-2'>
                  Unlimited Bandwitch
                </div>
              </div>
              <div className='plan-li'>

                <div>
                  <FaCheck className="check" />
                </div>
                <div className='ml-2'>
                  Encrypted Connection
                </div>
              </div>
              <div className='plan-li'>
                <div>
                  <FaCheck className="check" />
                </div>
                <div className='ml-2'>
                  Yes Traffic Logs
                </div>
              </div>
              <div className='plan-li'>
                <div>
                  <FaCheck className="check" />
                </div>
                <div className='ml-2'>
                  Works on All Devices
                </div>
              </div>
              <div className='plan-li'>
                <div>
                  <FaCheck className="check" />
                </div>
                <div className='ml-2'>
                  Connect Anywhere
                </div>
              </div>
              <div className='plan-li'>
                <div>
                  <FaCheck className="check" />
                </div>
                <div className='ml-2'>
                  Get New Features
                </div>
              </div>
            </ul>
            <div className='price'>
              <h3>$12 / mo</h3>
            </div>
            <div>
              <a href="#free" className="paybtn">Select</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
