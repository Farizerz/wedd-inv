import './quotes.css'
import React from 'react'
import Bunga from '../../img/flower-bouquet.png'
import GambarSatu from '../../img/1.png';

const Quotes = () => {
  return (
    <div className='quotes'>
        <div className='quotes-bg'>
          <img src={Bunga} className='quotes-flower' />
          <div className='quotes-wrapper'>
              <p className='quotes-prayer'>“And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.”</p>
              <p className='quotes-verse'>( QS. Ar- Rum 21 )</p>           
          </div>
          <div className='quotes-satu'>
            <img src={GambarSatu} className='quotes-gambarSatu' />
          </div>
        </div>
    </div>
  )
}

export default Quotes;