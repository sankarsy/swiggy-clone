import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import burger from "../component/images/burger.png";
import biriyani from "../component/images/biriyani.jpg";
import pizza from "../component/images/pizza.jpg";
import chinese from "../component/images/chinese.png";
import shawarma from "../component/images/shawarma.png";
import pasta from "../component/images/pasta.png";
import salad from "../component/images/salad.png";
import cake from "../component/images/cake.png";
import pancake from "../component/images/pancake.png";

const categorylist = [
  {
    name: "Burger",
    Image: burger
  },
  {
    name: "Biriyani",
    Image: biriyani
  },
  {
    name: "Pizza",
    Image: pizza
  },
  {
    name: "Shawarma",
    Image: shawarma
  },
  {
    name: "Chinese",
    Image: chinese
  },
  {
    name: "Pasta",
    Image: pasta
  },
  {
    name: "Salad",
    Image: salad
  },
  {
    name: "Cake",
    Image: cake
  },
  {
    name: "Pancake",
    Image: pancake
  }
];

const Menu = ({ setMenu }) => {


  const [slide, setSlide] = useState(0);

  const nextSlide =() => {
    setSlide(slide <= 3? slide +1: slide)
  }

  const prevSlide =() => {
    setSlide(slide >0 ? slide -1 :0);
  }

  

  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='mt-7 font-bold text-2xl'>What's on your mind? </h1>
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
      <div className='flex items-center mt-10 overflow-scroll no-swiggy-scrollbar'>
        {categorylist.map((cat, index) => {
          return (
            <div style={{transform:`translateX(-${slide * 100}%) `}}
            key={index} className='w-[150px] shrink-0 p-2 mr-6 transition-transform duration-500 ease-in-out'>
              <img src={cat.Image} alt={cat.name} className='w-36 h-32 rounded-full'/>
              <h2 className='font-semibold text-gray-500 text-xl text-center'>{cat.name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
