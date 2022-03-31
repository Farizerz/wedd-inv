import React from 'react'
import './bio.css';
import BioCard from '../bioCards/BioCard.jsx';

const Bio = () => {
  return (
    <div className='bio'>
        {/* Header Triangle */}
        <div className='bio-triangleHeader'></div>

        {/*ini bio list */}
        <div className='bio-list'>
          <BioCard />
          <BioCard />
        </div>    

        {/* Footer Triangle */}
        <div className='bio-triangleFooter'></div>
    </div>
  )
}

export default Bio