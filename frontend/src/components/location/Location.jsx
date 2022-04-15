import React from 'react'
import './location.css'
import photoshoot from '../../img/greyscale.JPG'
import { FaMapMarkerAlt as LocationBtn } from 'react-icons/fa' 
import AnimateOnScroll from '../../utils/AnimateOnScroll';

const link = "https://goo.gl/maps/TZTRB8UPUf4DTioi9";

const Location = () => {

  window.addEventListener('scroll', AnimateOnScroll);

  return (
    <div className='location'>
      <div className='location-bg'>
        <div className='location-wrapper'>
          <div className='location-photo reveal'>
            <img className='location-img' src={photoshoot} />
          </div>

          <div className='location-details'>
            <div className='location-akad'>
              <p className='location-title reveal'>Akad Nikah</p>
              <p className='location-subtitle reveal'>Sabtu, 28 Mei 2022</p>
              <p className='location-subtitle reveal'>09.00 s/d 10.00 WIB</p>
              <p className='location-address reveal'>Gedung Convention Center Universitas Panca Bhakti (UPB)</p>
              <p className='location-subtitle reveal'>Jalan Kom Yos Sudarso, Pontianak,<br />
                                               Kalimantan Barat
              </p>
              <div className='location-emptyspace'>

              </div>
            </div>
              
            <div className='location-resepsi'>
              <p className='location-title reveal'>Resepsi</p>
              <p className='location-subtitle reveal'>Sabtu, 28 Mei 2022</p>
              <p className='location-subtitle reveal'>Sesi I: 13.30 s/d 15.30 WIB<br />
                                               Sesi II: 15.30 s/d 17.30 WIB
              </p>
              <p className='location-address reveal'>Gedung Convention Center Universitas Panca Bhakti (UPB)</p>
              <p className='location-subtitle reveal'>Jalan Kom Yos Sudarso, Pontianak,<br />
                                               Kalimantan Barat
              </p>
              <form action={link} target='_blank'>
                  <button type='submit' className='location-button reveal'>
                    <LocationBtn className='location-icon' />
                    View Location
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location;