import './quotes.css'
import React from 'react'
import Bunga from '../../img/flower-bouquet.png'
import GambarSatu from '../../img/1.png';
import GambarDua from '../../img/2.png';
import Heart from '../../img/heart.png';
import AnimateOnScroll from '../../utils/AnimateOnScroll';

const Quotes = () => {
  
  window.addEventListener('scroll', AnimateOnScroll);

  return (
    <div className='quotes'>

      {/* Ini untuk background komponen quotes */}
        <div className='quotes-bg'>

          {/* Ini untuk karangan bunga, surah dan ayat */}
          <div className='quotes-wrapper'>
              <img src={Bunga} className='quotes-flower reveal' />          
              <p className='quotes-prayer reveal'>“And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.”</p>
              <p className='quotes-verse reveal'>( QS. Ar- Rum 21 )</p>
          </div>

          {/* Ini untuk gambar pertama */}
          <div className='quotes-satu reveal'>
            <img src={GambarSatu} className='quotes-gambarSatu' />
          </div>

          {/* Ini untuk poem pertama */}
          <div className='quotes-poemSatu'>
            <p className='quotes-poemTitle reveal'>We Found Love</p>
            <p className='quotes-poemDots'>● ● ●<span> ● ● ● ● ● ●</span></p>
            <p className='quotes-poem reveal'>“You don’t love someone for their looks, or their clothes or their fancy car, but because they sing a song only you can hear.”</p>
          </div>

          {/* Ini untuk heart animation */} 
          <div className='quotes-heart'>
            <img className='quotes-heartImg' src={Heart} />  
          </div>

          {/* Ini untuk poem kedua */}
          <div className='quotes-poemDua'>
            <p className='quotes-poemTitle reveal'>One Love</p>
            <p className='quotes-poemDots'>● ● ●<span> ● ● ● ● ● ●</span></p>
            <p className='quotes-poem reveal'>“Happy marriages begin when we marry the ones we love, and they blossom when we love the ones we marry.”</p>
          </div>

          {/* Ini untuk gambar kedua */}
          <div className='quotes-dua reveal'>
            <img src={GambarDua} className='quotes-gambarDua' />
          </div>                             
        </div>
    </div>
  )
}

export default Quotes;