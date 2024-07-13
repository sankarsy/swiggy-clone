import React from 'react'
import food from '../component/images/food.jpg'
import rating from '../component/images/star.png'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from 'react';



function TopRated({ restaurantsList }) {
    
    const [slide, setSlide] = useState(0);

    const nextSlide =() => {
      setSlide(slide +1)
    }
  
    const prevSlide =() => {
      setSlide(slide >0 ? slide -1 :0);
    }

    return (
        <>
            <div className='flex items-center justify-between'>
                <h1 className='mt-7 font-bold text-2xl'>Top restaurant chains in Chennai</h1>
                <div className='flex'>
                    <div className='px-2 mt-7 w-[30px] h-[30px] justify-center rounded-full flex items-center 
          mx-2 bg-[#e2e2e7] cursor-pointer'
                        onClick={prevSlide}
                    >
                        <FaArrowLeft />
                    </div>
                    <div className='px-2 mt-7 w-[30px] h-[30px] justify-center rounded-full flex items-center 
          mx-2 bg-[#e2e2e7] cursor-pointer'
                        onClick={nextSlide}
                    >
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='flex overflow-scroll no-swiggy-scrollbar'>
                {restaurantsList?.map((data) => {
                    return <>
                        <div className="max-w-sm rounded mt-6 me-6 cursor-pointer transform transition duration-200 hover:scale-90 shrink-0" style={{transform:`translateX(-${slide * 100}%) `}}>
                            <img className="w-72 h-44 rounded-2xl " src={data?.photo?.images?.original?.url} alt="Sunset in the mountains" />
                            <div className="py-2">
                                <div className="font-semibold text-xl mb-2 text-gray-800 w-72">{data?.name?.slice(0, 10)}...</div>
                                <div className='flex items-center'>
                                    <img src={rating} className='w-5 h-5 rounded-full' />
                                    <div className="font-semibold text-lg mb-2 text-gray-800 ml-1 mt-2">{data?.rating}</div>
                                </div>
                                <p className="text-gray-500  text-base">
                                    {data?.cuisine?.[0]?.name},{data?.cuisine?.[1].name}
                                </p>
                                <p className="text-gray-500  text-base">
                                    {data?.address_obj?.city}
                                </p>
                            </div>
                        </div>
                    </>
                })}
            </div>
        </>
    )
}

export default TopRated
