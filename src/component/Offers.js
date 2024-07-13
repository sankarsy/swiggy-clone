import React from 'react'
import offer2 from '../component/images/offer1.png'
import offer1 from '../component/images/offer2.jpg'

function Offers() {
  return (
    <div className='flex items-center mt-5 cursor-pointer'>
      <img src={offer1} className='w-6/12 h-60 rounded-3xl'/>
      <img src={offer2} className='w-6/12 h-60 rounded-3xl ml-5'/>
    </div>
  )
}

export default Offers
