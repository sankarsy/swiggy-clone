import React from 'react'
import dish from '../component/images/dish.jpg'



function SignUp({ setSignUp }) {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-end p-4 text-center sm:items-center sm:p-0">
                    <div className="p-10 relative transform overflow-hidden  bg-white text-left h-screen shadow-xl transition-all sm:w-4/12 sm:max-w-lg">
                        <h1 className='text-2xl cursor-pointer' onClick={() => setSignUp(false)}>x</h1>
                        <div className='flex'>
                            <div>
                                <h1 className='font-semibold text-3xl mt-3'>Sing up</h1>
                                <h1 className='mt-3'>or <span className='text-orange-500 text-sm'>Login to your account</span></h1>
                                <hr className='w-8 bg-black h-px mt-3 border-0' />
                            </div>
                            <img src={dish} alt="dish" className='w-24 h-24 rounded-full ml-20' />
                        </div>

                        <input className='p-6 border border-gray-300 mt-7 w-80' placeholder='phone number' />
                        <input className='p-6 border border-gray-300  w-80' placeholder='Name' />
                        <input className='p-6 border border-gray-300 w-80' placeholder='Email' />
                        <button className='bg-orange-500 p-5 text-white font-semibold text-xs w-80 mt-10'>CONTINUE</button>
                        <h1 className='text-xs mt-3'>By creating an account , I accept the Terms & conditions & Privacy Policy</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignUp
