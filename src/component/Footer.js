import React from 'react'
import logo from "../component/images/logo.png"


function Footer() {
  return (
    <div className='pt-3 bg-black flex pt-10 pb-20 mt-5 justify-center '>
      <div className='pt-3 flex-col'>
        <div className='flex items-center '>
          <img src={logo} className='w-10 h-10 mt-3 '/>
          <h1 className='pt-3 font-extrabold text-xl text-white  '>Swiggy</h1>
        </div>
        <h1 className='pt-3 text-neutral-400 '>© 2024 Bundl <br /> Technologies Pvt. Ltd</h1>
      </div>
      <div className='pt-3 flex-col ms-20'>
        <h1 className='pt-3 font-extrabold text-xl text-white  '>Company</h1>
        <h1 className='pt-3 text-neutral-400 '>About</h1>
        <h1 className='pt-3 text-neutral-400 '>Careers</h1>
        <h1 className='pt-3 text-neutral-400 '>Team</h1>
        <h1 className='pt-3 text-neutral-400 '>Swiggy Instamart</h1>
        <h1 className='pt-3 text-neutral-400 '>Swiggy Genie</h1>
      </div>
      <div className='pt-3 flex-col  ms-20'>
        <h1 className='pt-3 font-extrabold text-xl text-white  '>Contact us</h1>
        <h1 className='pt-3 text-neutral-400 '>Help & Support</h1>
        <h1 className='pt-3 text-neutral-400 '>Ride with us</h1>
        <h1 className='pt-3 font-extrabold text-xl text-white  mt-10'>Legal</h1>
        <h1 className='pt-3 text-neutral-400 '>Terms & Conditions</h1>
        <h1 className='pt-3 text-neutral-400 '>Cookie Policy</h1>
        <h1 className='pt-3 text-neutral-400 '>Privacy Policy</h1>
        <h1 className='pt-3 text-neutral-400 '>Investor Relations</h1>
      </div>
      <div className='pt-3 flex-col  ms-20'>
        <h1 className='pt-3 font-extrabold text-xl text-white '>We deliver to:</h1>
        <h1 className='pt-3 text-neutral-400'>Bangalore</h1>
        <h1 className='pt-3 text-neutral-400 '>Gurgaon</h1>
        <h1 className='pt-3 text-neutral-400 '>Hyderabad</h1>
        <h1 className='pt-3 text-neutral-400 '>Delhi</h1>
        <h1 className='pt-3 text-neutral-400 '>Mumbai</h1>
        <h1 className='pt-3 text-neutral-400 '>Pune</h1>
      </div>

    </div>
  )
}

export default Footer
