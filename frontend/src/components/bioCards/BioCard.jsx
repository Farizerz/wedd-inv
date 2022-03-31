import React from 'react'
import './bioCard.css';
import PP from '../../img/PP1-254.png';

const BioCard = () => {
  return (
    <div className='bioCard'>
        
        <div className='bioCard-container'>
            

            <div className='bioCard-contents'>
                <img className='bioCard-img' src={PP} />
                <p className='bioCard-name'>Denny Ammari Ramadhan Nasution, S.E</p>
            </div>
            
            
        </div>

        <div className='bioCard-container2'>
            <div className='bioCard-leftAcc'></div>
            <div className='bioCard-rightAcc'></div>
        </div>

        {/* left Accessories */}
        
    </div>
  )
}

export default BioCard