import React from 'react'
import './protocol.css'
import Masker from '../../img/Covid-Masker-300x220.png';
import Sanitizer from '../../img/Covid-WashHand-300x220.png';
import Distance from '../../img/Covid-Distancing-300x220.png';
import WashHand from '../../img/Covid-Washing-300x220.png';
import Handshake from '../../img/Covid-Handshake-300x220.png';
import Thermogun from '../../img/Covid-Thermogun-300x220.png';
import AnimateOnScroll from '../../utils/AnimateOnScroll';

const Protocol = () => {
  window.addEventListener('scroll', AnimateOnScroll);

  return (
    <div className='protocol'>
        <div className='protocol-bg'>
            <p className='protocol-title reveal'>Protokol Kesehatan</p>
            <div className='protocol-container'>
                <div className='protocol-card'>
                    <img src={Masker} className='protocol-img reveal' />
                    <p className='protocol-details reveal'>Menggunakan masker</p>
                </div>
                <div className='protocol-card'>
                    <img src={Sanitizer} className='protocol-img reveal' />
                    <p className='protocol-details reveal'>Menggunakan hand sanitizer</p>
                </div>
                <div className='protocol-card'>
                    <img src={Distance} className='protocol-img reveal' />
                    <p className='protocol-details reveal'>Menjaga jarak minimal 2 meter</p>
                </div>
                <div className='protocol-card'>
                    <img src={WashHand} className='protocol-img reveal' />
                    <p className='protocol-details reveal'>Mencuci tangan dengan sabun</p>
                </div>
                <div className='protocol-card'>
                    <img src={Handshake} className='protocol-img reveal' />
                    <p className='protocol-details reveal'>Tidak berjabat tangan</p>
                </div>
                <div className='protocol-card'>
                    <img src={Thermogun} className='protocol-img reveal' />
                    <p className='protocol-details reveal'>Pemeriksaan suhu tubuh</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Protocol