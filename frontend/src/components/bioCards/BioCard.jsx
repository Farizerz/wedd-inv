import React from 'react'
import './bioCard.css';
import PP from '../../img/PP1-254.png';
import { FaInstagram as Instagram } from 'react-icons/fa'

const BioCard = () => {
  return (
    <div className='bioCard'>
        
        <div className='bioCard-container'>
            {/* isi container */}
            <div className='bioCard-contents'>
                <img className='bioCard-img' src={PP} />
                <p className='bioCard-name'>Denny Ammari Ramadhan Nasution, S.E</p>
                <p className='bioCard-childOf'>Putra Pertama dari</p>
                <p className='bioCard-parents'>Bpk. Ade Parlaungan Nasution, S.E., M.Si., Ph.D. <br /> & Ibu Eva Dewi Melinda Nasution, A.Md. Keb (Almh)</p>
                <form action='https://www.instagram.com/dennyammary/' target='_blank'>
                  <button type='submit'>
                    <Instagram />
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