import React, { useState } from 'react';
import Navebar from './Navbar';
import burger from "../component/images/burger.png"
import biriyani from "../component/images/biriyani.jpg"
import pizza from "../component/images/pizza.jpg"
import chinese from "../component/images/chinese.png"
import shawarma from "../component/images/shawarma.png"
import pasta from "../component/images/pasta.png"
import salad from "../component/images/salad.png"
import cake from "../component/images/cake.png"
import pancake from "../component/images/pancake.png"
import { useLocation } from 'react-router-dom';

function Search() {
    const location = useLocation();
    const [searchItems, setSearchItems] = useState("");
    const [menu, setMenu] = useState("");

    console.log(location);

    return (
        <div>
            <Navebar />
            <div className='ml-48 mt-10'>
                <input
                    onChange={(e) => setSearchItems(e.target.value)}
                    placeholder='Search for restaurants'
                    className='outline-none border border-gray-300 p-3 w-10/12 rounded-sm font-medium'
                />
                {searchItems && (
                    <div className='p-3'>
                        {location?.state?.data?.filter((data) => data.name.includes(searchItems)).map((item) => (
                            <div className='flex items-center mt-6' key={item.id}>
                                <img src={item?.photo?.images?.original?.url} className='w-16 h-16 rounded-sm' alt="restaurant" />
                                <div className='ml-3'>
                                    <h1>{item?.name.slice(0, 5)}...</h1>
                                    <h1>{item?.category?.name}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <h1 className='font-extrabold mt-12 text-gray-700 ml-4 text-xl'>Popular Cuisines</h1>
                <div className='w-6/12 flex items-center mt-10 overflow-scroll no-swiggy-scrollbar'>
                    <div className='ml-7 cursor-pointer shrink-0' onClick={() => setMenu("American")}>
                        <img src={pancake} className='w-12 h-12 rounded-full' alt="American" />
                        <h1 className='font-medium text-black text-xs '>American</h1>
                    </div>
                    <div className='ml-7 cursor-pointer shrink-0' onClick={() => setMenu("European")}>
                        <img src={burger} className='w-12 h-12 rounded-full' alt="European" />
                        <h1 className='font-medium text-black text-xs '>European</h1>
                    </div>
                    <div className='ml-7 cursor-pointer shrink-0' onClick={() => setMenu("Asian")}>
                        <img src={biriyani} className='w-12 h-12 rounded-full' alt="Asian" />
                        <h1 className='font-medium text-black text-xs '>Asian</h1>
                    </div>
                    <div className='ml-7 cursor-pointer shrink-0' onClick={() => setMenu("Italian")}>
                        <img src={cake} className='w-12 h-12 rounded-full' alt="Italian" />
                        <h1 className='font-medium text-black text-xs '>Italian</h1>
                    </div>
                    <div className='ml-7 cursor-pointer shrink-0' onClick={() => setMenu("Vegetarian")}>
                        <img src={salad} className='w-12 h-12 rounded-full' alt="Vegetarian" />
                        <h1 className='font-medium text-black text-xs '>Vegetarian</h1>
                    </div>
                    <div className='ml-7 cursor-pointer shrink-0' onClick={() => setMenu("Indonesian")}>
                        <img src={pasta} className='w-12 h-12 rounded-full' alt="Indonesian" />
                        <h1 className='font-medium text-black text-xs '>Indonesian</h1>
                    </div>
                    <div className='ml-7 cursor-pointer shrink-0' onClick={() => setMenu("International")}>
                        <img src={shawarma} className='w-12 h-12 rounded-full' alt="International" />
                        <h1 className='font-medium text-black text-xs '>International</h1>
                    </div>
                    <div className='ml-7 cursor-pointer shrink-0' onClick={() => setMenu("Pizza")}>
                        <img src={pizza} className='w-12 h-12 rounded-full' alt="Pizza" />
                        <h1 className='font-medium text-black text-xs '>Pizza</h1>
                    </div>
                    <div className='ml-7 cursor-pointer shrink-0' onClick={() => setMenu("Chinese")}>
                        <img src={chinese} className='w-12 h-12 rounded-full' alt="Chinese" />
                        <h1 className='font-medium text-black text-xs'>Chinese</h1>
                    </div>
                </div>
                {menu && (
                    <div className='p-3'>
                        {location?.state?.data?.filter((data) =>
                            data?.cuisine?.some(cuisineItem => cuisineItem?.name.includes(menu))
                        ).map((item) => (
                            <div className='flex items-center mt-6' key={item.id}>
                                <img src={item?.photo?.images?.original?.url} className='w-16 h-16 rounded-sm' alt="restaurant" />
                                <div className='ml-3'>
                                    <h1>{item?.name.slice(0, 5)}...</h1>
                                    <h1>{item?.category?.name}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
