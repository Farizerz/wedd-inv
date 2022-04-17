import React, {useEffect} from 'react'
import './modalIntro.css'
import foto from '../../img/photo1.png'
const ModalIntro = () => {
    const preloader = () => {
        var button = document.getElementById('button');
        var loader = document.getElementById('modal');
        
        if(button) {
            button.addEventListener('click', () => {
                loader.style.animation ="slide-atass 1.5s ease normal forwards";
              });
        }

      }

      useEffect(() => {
          preloader();
      }, [])
    
  return (
    <div className='modalIntro' >
        <div className='modalIntro-bg' id='modal'>
            <img src={foto} className='modalIntro-img'></img>
            <div className='modalIntro-bg-overlay'></div>
            <p className='modalIntro-title'>You Are Invited!</p>
            <p className='modalIntro-subtitle'>The Wedding Celebration of</p>
            <h1 className='modalIntro-name'>Ajeng & Denny</h1>
            <button onClick={preloader()} id='button' className='modalIntro-btn'>❤ Open Invitation</button>
        </div>
        
    </div>
  )
}

export default ModalIntro