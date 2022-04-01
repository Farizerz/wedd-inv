import React from 'react'
import './bioCard.css';
import PP from '../../img/PP1-254.png';
import { FaInstagram as Instagram } from 'react-icons/fa'

const BioCard = ({id, img, nama, anak, ayah, ibu, link}) => {
  return (
    <div className='bioCard'>
        
        <div className='bioCard-container'>
            {/* isi container */}
            <div className='bioCard-contents'>
                <img className='bioCard-img' src={img} />
                <p className='bioCard-name'>{nama}</p>
                <p className='bioCard-childOf'>{anak}</p>
                <p className='bioCard-parents'>{ayah}</p>
                <p className='bioCard-parents'>{ibu}</p>
                <form action={link} target='_blank'>
                  <button type='submit' className='bioCard-button'>
                    <Instagram className='bioCard-icon' />
                  </button>
                </form>
            </div>
        </div>

        {/* Accessories */}
        <div className='bioCard-container2'>
            <div className='bioCard-leftAcc'></div>
            <div className='bioCard-rightAcc'></div>
        </div>

        
        
    </div>
  )
}

export default BioCard