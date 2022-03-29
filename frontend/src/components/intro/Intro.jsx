import React from 'react';
import './intro.css';

const Intro = () => {
  return (
    <div className='intro'>
        <div className='intro-bg'>
        <img className='intro-bg-img' src="https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/257582892_5179769602037905_7958927071553477875_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=eUqIRnwBx44AX_9Gq2y&_nc_ht=scontent-sin6-2.xx&oh=00_AT9Pgg4DQtEnZRV7-eNAC7ruzD-OzX5jjeZ9Y6JQR6JhXQ&oe=6247D171" />
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