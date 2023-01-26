import { useState } from 'react'

function GiftsModal ({ setShowModal }) {

  return (
    <div className='giftModal'>
      <button onClick={()=>(setShowModal(false))}>Close</button>
    </div>
  )
}

export default GiftsModal;