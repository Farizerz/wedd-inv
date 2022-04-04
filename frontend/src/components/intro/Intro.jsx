import React from 'react';
import './intro.css';
import DnnyAjng from '../../img/dnny&ajng.jpg';

const Intro = () => {
  return (
    <div className='intro'>
        <div className='intro-bg'>
        <img className='intro-bg-img' src={DnnyAjng} />
            <div className='intro-bg-overlay'></div>
        </div>
        <div className='intro-title'>
            <p className='intro-title-subject'>We Are Getting Married</p>
            <h1 className='intro-title-name'>Ajeng & Denny</h1>
            <p className='intro-title-date'>November 06, 2021</p>
        </div>
    </div>
  )
}

export default Intro