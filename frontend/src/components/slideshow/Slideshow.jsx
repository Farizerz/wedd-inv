import React from 'react'
import './slideshow.css'
import imgSatu from '../../img/slideshow1.png';
import imgDua from '../../img/slideshow2.png';
import imgTiga from '../../img/slideshow3.png';

const Slideshow = () => {
  return (
    <div className='slideshow'>
        <div className='slideshow-container'>
            <img src={imgSatu} className='slideshow-img' id='img1' />
            <img src={imgDua} className='slideshow-img' id='img2' />
            <img src={imgTiga} className='slideshow-img' id='img3' />
        </div>
        
    </div>
  )
}

export default Slideshow