import React from 'react'
import './location.css'
import photoshoot from '../../img/greyscale.JPG'
import { FaMapMarkerAlt as LocationBtn } from 'react-icons/fa' 

const link = "https://goo.gl/maps/TZTRB8UPUf4DTioi9";

const Location = () => {
  return (
    <div className='location'>
      <div className='location-bg'>
        <div className='location-wrapper'>
          <div className='location-photo'>
            <img className='location-img' src={photoshoot} />
          </div>

          <div className='location-details'>
            <div className='location-akad'>
              <p className='location-title'>Akad Nikah</p>
              <p className='location-subtitle'>Sabtu, 6 November 2021</p>
              <p className='location-subtitle'>09.00 s/d 10.00 WIB</p>
              <p className='location-address'>Gedung Convention Center Universitas Panca Bhakti (UPB)</p>
              <p className='location-subtitle'>Jalan Kom Yos Sudarso, Pontianak,<br />
                                               Kalimantan Barat
              </p>
              <div className='location-emptyspace'>

              </div>
            </div>
              
            <div className='location-resepsi'>
              <p className='location-title'>Resepsi</p>
              <p className='location-subtitle'>Sabtu, 6 November 2021</p>
              <p className='location-subtitle'>Sesi I: 13.30 s/d 15.30 WIB<br />
                                               Sesi II: 15.30 s/d 17.30 WIB
              </p>
              <p className='location-address'>Gedung Convention Center Universitas Panca Bhakti (UPB)</p>
              <p className='location-town'>Jalan Kom Yos Sudarso, Pontianak,<br />
                                               Kalimantan Barat
              </p>
              <form action={link} target='_blank'>
                  <button type='submit' className='location-button'>
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