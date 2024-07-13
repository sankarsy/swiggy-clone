import React from 'react'
import rating from '../component/images/star.png'
import { Link } from 'react-router-dom'


function Restaurants({ restaurantsList }, { menu }) {
    console.log(restaurantsList)
    return (
        <>
            <div className='grid grid-cols-4 w-11/12 shrink-0'>
                {restaurantsList?.filter((data) => data?.cuisine[0]).map((data) => {
                    return <div className='transform transition duration-200 hover:scale-90'>
                        <Link to="/details" state={{ data: data }}><div className="max-w-sm  overflow-hidden  mt-4">
                            <img className="w-60 rounded-2xl h-40" src={data?.photo?.images?.original?.url} alt="Sunset in the mountains" />
                            <div className="px-2 py-2">
                                <div className="font-semibold text-xl text-gray-800">{data?.name?.slice(0, 10)}...</div>
                                <div className='flex items-center'>
                                    <img src={rating} className='w-5 h-5 rounded-full' />
                                    <div className="font-semibold text-lg text-gray-800 ml-1">{data?.rating}</div>
                                </div>
                                <p className="text-gray-500 text-base ">
                                    {data?.cuisine[0]?.name},{data?.cuisine[1]?.name}
                                </p>
                                <p className="text-gray-500 text-base">
                                    {data?.address_obj?.city}
                                </p>
                            </div>
                        </div>
                        </Link>
                    </div>
                })}
            </div>
        </>

    )
}

export default Restaurants
