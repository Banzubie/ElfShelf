import { useState } from 'react'

function GiftsModal ({ setShowModal }) {

  return (
    <div>
      <div className='giftModalBackground'/>
      <div className='giftModal'>
      <button onClick={()=>(setShowModal(false))}>Close</button>
      </div>
    </div>
  )
}

export default GiftsModal;