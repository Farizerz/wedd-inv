import React from 'react'
import './bio.css';
import BioCard from '../bioCards/BioCard.jsx';
import { couple } from '../../data.js';

const Bio = () => {
  return (
    <div className='bio'>
        {/* Header Triangle */}
        

        {/*ini bio list */}
        <div className='bio-list'>

          <div className='bio-triangleHeader'>asdasd</div>
          {couple.map((item) => (
            <BioCard 
              key={item.id} 
              img={item.img} 
              nama={item.nama}
              anak={item.anak}
              ayah={item.ayah}
              ibu={item.ibu}
              link={item.link}
              className='bio-bioCard'
            />
          ))}
          {/* Footer Triangle */}
          <div className='bio-triangleFooter'>asdasd</div>
        </div>    

    </div>
  )
}

export default Bio