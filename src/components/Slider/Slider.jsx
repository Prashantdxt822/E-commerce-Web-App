import React, { useState } from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss"

const Slider = () => {

    const [currentSlide,setCurrentSlide]=useState(0);

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ];

      const prevSlide=()=>{
        setCurrentSlide(currentSlide===0?2:(prev)=>(prev-1)%3);
      }
      const nextSlide=()=>{
        setCurrentSlide((prev)=>(prev+1)%3);
      }

  return (
    <div className='slider'>
        <div className='container' style={{transform:`translateX(-${currentSlide*100}vw)`}}>
            <img src={data[0]} alt="af"/>
            <img src={data[1]} alt="df"/>
            <img src={data[2]} alt="ff"/>
        </div>
        <div className='icons'>
            <div className='icon' onClick={prevSlide}>
                <WestOutlinedIcon/>
            </div>
            <div className='icon' onClick={nextSlide}>
                <EastOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider