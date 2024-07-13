import React, { useState } from 'react'
import swiggy from '../component/images/swiggy.png'
import food from '../component/images/food.jpg'
import Login from './Login'
import SignUp from './SignUp'
import { auth } from './firebase/Setup'
import { Link } from 'react-router-dom'


function Welcome() {
    const [login , setLogin] =useState(false)
    const [signUp, setSignUp] = useState(false)
    return (
        <div className='flex'>
            <div className='h-screen w-9/12 p-10'>
                <div className='flex items-center'>
                   {auth?.currentUser?.phoneNumber? <Link to="/main"><img src={swiggy} alt="swiggy" className='w-48  h-21' /></Link>
                   : <img src={swiggy} alt="swiggy" className='w-48  h-21' />}
                    <h1 className='font-semibold ml-60 cursor-pointer' onClick={() => setLogin(true)}>Login</h1>
                   <button className='w-28 bg-black text-white font-bold p-3 ml-7 'onClick={() => setSignUp(true)}>Sign up</button>
                </div>
                <h1 className='font-bold text-4xl text-gray-800 mt-20'>Cooking gone wrong?</h1>
                <h1 className='mt-3 text-zinc-600 text-2xl'>Order food from favourite restaurants near you.</h1>
                <input className='border border-black p-4 mt-12 w-8/12' placeholder='Enter your delivery location ' />
                <button className='bg-orange-500 text-white font-bold p-4 w-36'>FIND FOOD</button>
                <h1 className='text-zinc-400 text-sm mt-8'>POPULER CITIES IN INDEIA</h1>
                <h1 className='font-bold text-zinc-700 mt-4'>Ahmedabad Bangakore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai Pune & more.</h1>
            </div>
            <img src={food} alt="food" className='h-screen w-5/12' />
            {login && <Login setLogin={setLogin}/>}
            {signUp && <SignUp setSignUp={setSignUp}/>}
        </div>
    )
}

export default Welcome