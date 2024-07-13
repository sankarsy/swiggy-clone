import React, { useState } from 'react'
import logo from "../component/images/logo.png"
import lens from "../component/images/lens.png"
import profile from "../component/images/profile.png"
import arrow from "../component/images/arrow.png"
import cart from "../component/images/cart.png"
import percentage from "../component/images/percentage.svg"
import office from "../component/images/suitcase.png"
// import Login from '../component/images/Login'
import { Link, useNavigate } from 'react-router-dom'
import out from "../component/images/logout.png"
import { signOut } from 'firebase/auth'
import { auth } from '../component/firebase/Setup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login'




const Navbar = ({ restaurantsList }) => {

  const navigate = useNavigate()
  const [loginModal, setLoginModal] = useState(false)

  const logout = async () => {
    try {
      await signOut(auth)
      auth?.currentUser == null && toast.success("LoggedOut successfully")
      auth?.currentUser == null &&
        setTimeout(() => {
          navigate("/main")
        }, 2000)
    } catch (err) {
      console.error(err)
      const error = err
      toast.error(error)
    }
  }

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className='flex items-center p-3 shadow-lg h-20 '>
        <Link to="/main">
          <img src={logo} className='w-14 h-14' />
        </Link>
        <h1 className='font-bold text-sm underline ml-5'>Other</h1>
        {restaurantsList ? <h1 className='text-sm ml-3'>{restaurantsList[0]?.address_obj?.city}</h1> : <h1 className='text-sm ml-3'></h1>}
        <img src={arrow} className='w-7 h-7' />

        <div className='pl-40 flex items-center'>


          <Link to="/search" state={{ data: restaurantsList }}>
            <div className='flex items-center cursor-pointer'>
              <img src={lens} className='w-4 h-4 ml-96' />
              <h1 className='ml-3'>Search</h1>
            </div>
          </Link>

          <div className='flex items-center cursor-pointer'>
            <img src={percentage} className='w-7 h-7 ml-10' />
            <h1 className='ml-3'>Offers</h1>
          </div>

          <img src={profile} className='w-7 h-7 ml-16 cursor-pointer' />
          <div className='flex items-center cursor-pointer' onClick={() => setLoginModal(true)}>
            <h1 className='ml-3'>Sign In</h1>

            <div onClick={logout} className='flex items-center cursor-pointer'>
              <img src={out} className='w-5 h-5 ml-16' />
              <h1 className='ml-3'>Logout</h1>
            </div>
            <div className='flex items-center cursor-pointer'>
              <img src={cart} className='w-7 h-7 ml-10' />
              <h1 className='ml-3'>Cart</h1>
            </div>
          </div>
        </div>
        {/* {loginModal && <Login setLoginModal={setLoginModal}/>} */}
        {/* <Login/> */}
      </div>
    </>

  )
}

export default Navbar