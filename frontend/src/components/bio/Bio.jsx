import React from 'react'
import './bio.css';
import BioCard from '../bioCards/BioCard.jsx';
import { couple } from '../../data.js';

const Bio = () => {
  return (
    <div className='bio'>
        {/* Header Triangle */}
        <div className='bio-triangleHeader'></div>

        {/*ini bio list */}
        <div className='bio-list'>
          {couple.map((item) => (
            <BioCard 
              key={item.id} 
              img={item.img} 
              nama={item.nama}
              anak={item.anak}
              ayah={item.ayah}
              ibu={item.ibu}
              link={item.link}
            />
          ))}
        </div>    

        {/* Footer Triangle */}
        <div className='bio-triangleFooter'></div>
    </div>
  )
}

export default Bio