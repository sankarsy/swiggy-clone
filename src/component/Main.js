import React, { useEffect, useState } from 'react'
import Navebar from './Navbar'
import Menu from './Menu'
import Restaurants from './Restaurants';
import Footer from './Footer';
import TopRated from './TopRated';
import Offers from './Offers';


function Main() {

  const [restaurantsList, setRestaurantsList] = useState([])
  const [menu, setMenu] = useState("")

  const getRestaurants = async () => {
    const url = 'https://restaurants222.p.rapidapi.com/search';
    const options = {
      method: 'POST',
      headers: {
        // 'x-rapidapi-key': 'a8ddf609fdmsh91c645890e6b697p1026a4jsn171bb6b5a088',
        // 'x-rapidapi-host': 'restaurants222.p.rapidapi.com',
        // 'x-rapidapi-key': '5ce3b86e4fmsh0e4684be2f238d2p175dd7jsn5b6ac03f36a5',
        // 'x-rapidapi-host': 'restaurants222.p.rapidapi.com',
        // 'x-rapidapi-key': 'ef40fc42d1msh7bf72a2ae2f3526p18e46ejsn5d6a3895a6e1',
        // 'x-rapidapi-host': 'restaurants222.p.rapidapi.com',
        'x-rapidapi-key': 'e0fec98bb4mshb5236e0d9b3dbdfp130ee0jsna7dc9b531d90',
        'x-rapidapi-host': 'restaurants222.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        location_id: '297704',
        language: 'en_US',
        currency: 'USD',
        offset: '0'
      })
    };

    try {
      const response = await fetch(url, options);

      // Log status to see if it's not 200
      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
      }

      const list = await response.json();
      setRestaurantsList(list.results.data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);


  return (
    <div className='items-center'>
      <Navebar restaurantsList={restaurantsList} />
      <div className='ml w-9/12 ms-48'>
        <h1 className='mt-7 font-bold text-2xl'>Best offers for you </h1>
        <Offers />
        <Menu setMenu={setMenu} />
        <hr className='mt-20' />

        <TopRated restaurantsList={restaurantsList} />
      </div>
      <div className='ms-48'>
        <h1 className='mt-7 font-bold text-2xl'>Restaurants with online food delivery in Chennai</h1>
        <Restaurants menu={menu} restaurantsList={restaurantsList} />
      </div>
      <Footer />

    </div>
  )
}

export default Main
