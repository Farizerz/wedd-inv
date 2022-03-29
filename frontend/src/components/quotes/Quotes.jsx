import './quotes.css'
import React from 'react'
import Bunga from '../../img/flower-bouquet.png'

const Quotes = () => {
  return (
    <div className='quotes'>
        <div className='quotes-bg'></div>
        <div className='quotes-wrapper'>
            <img src={Bunga} className='quotes-flower' />
        </div>
    </div>
  )
}

export default Quotes;